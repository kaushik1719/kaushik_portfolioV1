import React from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa'; // Ensure react-icons is installed
import './Styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h1 className="section-title">Get In Touch</h1>

        {/* About Me Box */}
        <div className="about-box-container">
          <div className="about-card">
            <span className="quote-icon quote-left">“</span>
            <p className="about-text">
              I'm <strong>Kaushik Kanani</strong>, a B.Tech IT student and 
              <strong> Front-End Web Developer</strong> trainee at DecodeX Infotech. 
              I specialize in crafting responsive UIs with <strong>React.js, HTML, CSS, JavaScript, 
              TypeScript, and the MERN stack</strong>. Passionate about clean code, 
              scalable components, and ML anomaly detection—my team secured 
              <strong> 2nd place in the Sciclone 2024</strong> coding event. 
              Ready to build impactful solutions!
            </p>
            <span className="quote-icon quote-right">”</span>
          </div>
        </div>

        {/* Updated Social Footer */}
        <div className="contact-footer">
          <div className="social-links">
            <a 
              href="mailto:kaushikkanani1720@example.com" 
              className="social-icon email"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a 
              href="https://www.linkedin.com/in/kaushik-kanani/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon linkedin"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a 
              href="https://github.com/kaushik1719" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon github"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;