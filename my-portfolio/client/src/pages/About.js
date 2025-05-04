import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-inner">
        <div className="about-text-section">
          <p>
            Hi, I'm <strong>Sagar Mudgal</strong>, a passionate Web Developer
            with a focus on building interactive and user-friendly web
            applications.
          </p>
          <p>
            I specialize in <strong>MERN Stack</strong> (MongoDB, Express.js,
            React, Node.js) and love crafting elegant UI/UX designs with CSS.
          </p>
          <p>
            Currently, I'm working on improving my problem-solving skills and
            exploring new technologies to enhance my development workflow.
          </p>
          <p>
            When I'm not coding, I enjoy{" "}
            <strong>exploring new tech, gaming, and event management</strong>.
          </p>
          <button className="about-button">Download Resume</button>
        </div>

        <div className="about-image-section">
          <img src="/Sagarmudgal.jpeg" alt="Sagar Mudgal" />
        </div>
      </div>
    </div>
  );
};

export default About;
