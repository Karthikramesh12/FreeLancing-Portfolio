import { useState, useEffect, useRef } from "react";
import './Contact-form.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    access_key: "9bf6b278-7577-415f-af11-be3581d4fcca", // Web3Forms Access Key
  });

  const [status, setStatus] = useState("");
  const formRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the form card is visible
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async () => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "", access_key: "9bf6b278-7577-415f-af11-be3581d4fcca" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("Error occurred. Please check your network connection.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
  };

  return (
    <div className="container mt-4">
      <div className="row d-flex justify-content-center">
        <div ref={formRef} className={`form-card col-md-6 p-4 shadow-lg ${visible ? "fade-in-up" : ""}`}>
          <form className="form-floating" onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control form-control-style"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control form-control-style"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control floatingInputValue"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows="6"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-outline-primary Cv-button">
              Send Message
            </button>
            {status && <p className="mt-3 text-center">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
