import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa'
import { SiGooglecloud } from 'react-icons/si'
import './Footer.css'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Karthik C</h3>
          <p>Full Stack Developer | Gen AI Enthusiast | Web Developer</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Connect With Me</h4>
          <div className="social-links">
            <a 
              href="https://github.com/karthikc1125" 
              target="_blank" 
              rel="noopener noreferrer"
              title="GitHub"
              className="social-icon"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/karthik-c-58b524237/" 
              target="_blank" 
              rel="noopener noreferrer"
              title="LinkedIn"
              className="social-icon"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="mailto:karthikc1125@gmail.com"
              title="Email"
              className="social-icon"
            >
              <FaEnvelope size={20} />
            </a>
            <a 
              href="https://www.skills.google/public_profiles/896aebbf-6879-4991-8520-baf41523e4df" 
              target="_blank" 
              rel="noopener noreferrer"
              title="GCP Skills Profile"
              className="social-icon"
            >
              <SiGooglecloud size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Karthik C. All rights reserved.</p>
        <button className="scroll-to-top" onClick={scrollToTop} title="Back to top">
          <FaArrowUp size={16} />
        </button>
      </div>
    </footer>
  )
}

export default Footer
