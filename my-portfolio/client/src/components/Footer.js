import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">Sagar Mudgal</h2>
        <ul className="footer-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div className="social-icons">
          <a href="https://github.com/MudgalSagar" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sagar-mudgal-217202300/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:mudgalsagar42@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
      <p className="footer-copy">© 2025 Sagar Mudgal | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
