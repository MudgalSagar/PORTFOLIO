import React from "react";
import "../styles/Projects.css";

const projects = [
  {
    title: "MERN Authentication",
    description:
      "A login and registration system using MongoDB, Express, React, and Node.js.",
    githubLink: "https://github.com/MudgalSagar/MERN-auth-app",
  },
  {
    title: "Tic Tac Toe AI",
    description: "A Tic Tac Toe game with a basic AI opponent using React.",
    githubLink: "https://github.com/MudgalSagar/Tic-Tac-Toe-Game",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my skills and projects.",
    githubLink: "https://github.com/MudgalSagar",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="github-button">View on GitHub</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
