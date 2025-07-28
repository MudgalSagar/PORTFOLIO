import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div>
      <section className="contact-section">
        <div className="contact-container">
          <h2>Contact Me</h2>
          <p>Let's collaborate! Feel free to reach out.</p>

          <form
            action="https://formsubmit.co/sagarmiscs@gmail.com"
            method="POST"
            className="contact-form"
          >
            {/* Required FormSubmit fields */}
            <input
              type="hidden"
              name="_subject"
              value="New Portfolio Message"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            {/* Your form fields */}
            <input type="text" name="name" placeholder="Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>

            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>

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
