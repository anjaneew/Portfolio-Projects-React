import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import './Footer.module.css';

const Footer = () => {
  return (
    <div className="flex-box">
      <p>© 2025 ~ Anjanee S. Wijewardana ~ All rights reserved.</p>
      <span className="flex-items">
        <a href="mailto:anjaneew@gmail.com">
          <FaEnvelope />
        </a> 
        </span>
      <span className="flex-items">
        <a href="https://github.com/anjaneew"> <FaGithub /></a>
      </span>
      <span className="flex-items">
        <a href="https://www.linkedin.com/in/anjaneew/"><FaLinkedin /></a>
      </span>
    </div>
  );
};

export default Footer;