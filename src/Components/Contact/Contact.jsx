import { FaEnvelope, FaGithub, FaWhatsapp } from "react-icons/fa";
import ContactForm from "./Contact-form";
import './Contact.css';
import '../Hero/Hero.css'
const contactLinks = [
  { id: 1, icon: <FaEnvelope />, link: "mailto:venkateshrayudu.tech@gmail.com" },
  { id: 2, icon: <FaGithub />, link: "https://github.com/Venkatesh124rayudu" },
  { id: 3, icon: <FaWhatsapp />, link: "https://wa.me/9380799398" }, // Replace with your number
];

const Contact = () => {
  return (
    <div className="contact">
    <div className="card shadow-lg Cv-card-contact p-md-5">
    <div className="p-md-5">
    <div className="row">
      <div className="col-12 col-md-6 p-5 flex-card">
      <h2 className="fw-normal main-heading mt-5 mb-4 margin-contact text-start card-heading display-6 higlighted">Get in Touch</h2>
      <p className="fs-6 text-light subtext text-center margin-contact line-height">
        {`I'm eager to join a collaborative team where I can contribute my skills and learn from others. 
        If you have an exciting project, let's discuss how I can be a valuable asset!`}
      </p>
      <p className="fs-6 text-light subtext text-center margin-contact mt-5">
        {`info@mysite.com
Tel: 1-800-000-0000`}
      </p>
      </div>

      <div className="col-sm-12 col-md-6">
      <ContactForm />
      </div>
      </div>
    </div>
      <div className="flex space-x-4 my-4 bg-gray-800 p-4 rounded-lg">
        {contactLinks.map((contact) => (
          <a
            key={contact.id}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3 icon"
          >
            {contact.icon}
          </a>
        ))}
      </div>
    </div>
      </div>
  );
};

export default Contact;
