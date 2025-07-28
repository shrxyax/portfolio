import React from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import profileImage from "../assets/profile.png";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Optional Avatar */}
      <img
        src={profileImage} // Add your image in public/ or update the path
        alt="Shreya Chakraborty"
        className="contact-avatar"
      />

      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle">
        Feel free to reach out via email, phone, or any of the links below.
      </p>
      <br></br>

      <div className="contact-cards">
        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <h3>Phone</h3>
          <p>+91 8617426445</p>
        </div>

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p>
            <a href="mailto:shreya.chakraborty311203@gmail.com">
              shreya.chakraborty311203@gmail.com
            </a>
          </p>
        </div>

        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <h3>LinkedIn</h3>
          <p>
            <a href="https://linkedin.com/in/shrxyax" target="_blank" rel="noreferrer">
              linkedin.com/in/shrxyax
            </a>
          </p>
        </div>

        <div className="contact-card">
          <FaGithub className="contact-icon" />
          <h3>GitHub</h3>
          <p>
            <a href="https://github.com/shrxyax" target="_blank" rel="noreferrer">
              github.com/shrxyax
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
