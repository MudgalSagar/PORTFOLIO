import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <p>
            Hi, I'm <strong>Sagar Mudgal</strong>, a passionate Web Developer
            with a focus on building interactive and user-friendly web
            applications.
          </p>
          <p>
            I specialize in **MERN Stack** (MongoDB, Express.js, React, Node.js)
            and love crafting elegant UI/UX designs with CSS.
          </p>
          <p>
            Currently, I'm working on improving my problem-solving skills and
            exploring new technologies to enhance my development workflow.
          </p>
          <p>
            When I'm not coding, I enjoy **exploring new tech, gaming, and event
            management**.
          </p>
          <button className="cta-button">Download Resume</button>
        </div>

        <div className="about-image">
          <img src="/your-photo.jpg" alt="Sagar Mudgal" />
        </div>
      </div>
    </div>
  );
};

export default About;
