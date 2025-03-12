import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Hi, I am Sagar Mudgal</h1>
        <h2>A passionate Web Developer</h2>
        <p>I build interactive websites using React, Node.js, and more.</p>
        <Link to="/projects" className="cta-button">
          View my work
        </Link>
      </section>

      <section className="about">
        <div className="about-container">
          <div className="about-image">
            <img src="your-profile-image.jpg" alt="Sagar Mudgal" />
          </div>
          <div className="about-content">
            <h2>About Me:</h2>
            <p>
              I'm a passionate Web Developer specializing in building dynamic,
              interactive websites using **React, Node.js, and MongoDB**. I love
              problem-solving, designing scalable applications, and constantly
              learning new technologies.
            </p>
            <div className="about-highlights">
              <div className="highlight-card">👨‍💻 Full-Stack Developer</div>
              <div className="highlight-card">🚀 MERN Stack Enthusiast</div>
              <div className="highlight-card">🎨 UI/UX Focused</div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills">
        <section className="skills">
          <h2>Skills:</h2>
          <div className="skills-container">
            <div className="skill-card">React.js</div>
            <div className="skill-card">Node.js</div>
            <div className="skill-card">Express.js</div>
            <div className="skill-card">MongoDB</div>
            <div className="skill-card">JavaScript</div>
            <div className="skill-card">HTML & CSS</div>
            <div className="skill-card">Git & GitHub</div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
