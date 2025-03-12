import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(result.error || "Something went wrong!");
      }
    } catch (error) {
      setStatus("Error sending message.");
      console.error(error);
    }
  };

  return (
    <div>
      <section className="contact-section">
        <div className="contact-container">
          <h2>Contact Me</h2>
          <p>
            Let's collaborate! Feel free to reach out to hire or just to say hi.
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
          {status && <p className="status-message">{status}</p>} {}
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/sagar-mudgal-217202300/"
              target="_blank"
              rel="noopener noreferrer"
            >
              🐱 LinkedIn
            </a>
            <a
              href="https://github.com/MudgalSagar"
              target="_blank"
              rel="noopener noreferrer"
            >
              💼 GitHub
            </a>
            <a href="mailto:mudgalsagar42@gmail.com">📧 Email</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
