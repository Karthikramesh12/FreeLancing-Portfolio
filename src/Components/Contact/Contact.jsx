import { FaEnvelope, FaGithub, FaWhatsapp } from "react-icons/fa";
import ContactForm from "./Contact-form";
import './Contact.css';

const contactLinks = [
  { id: 1, icon: <FaEnvelope />, link: "mailto:venkateshrayudu.tech@gmail.com" },
  { id: 2, icon: <FaGithub />, link: "https://github.com/Venkatesh124rayudu" },
  { id: 3, icon: <FaWhatsapp />, link: "https://wa.me/9380799398" }, // Replace with your number
];

const Contact = () => {
  return (
    <div className="contact">
    <div className="container  flex flex-col items-center justify-center text-center p-8 bg-gray-900 text-white">
      <h2 className="fw-bold main-heading text-center py-4">Get in Touch</h2>
      <p className="px-md-5 text-muted subtext">
        I'm eager to join a collaborative team where I can contribute my skills and learn from others. 
        If you have an exciting project, let's discuss how I can be a valuable asset. 
        I'm actively seeking a new opportunity to apply my skills and continue growing!
      </p>
      <ContactForm />
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
