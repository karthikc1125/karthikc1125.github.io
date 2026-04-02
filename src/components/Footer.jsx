import React, { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaUsers } from 'react-icons/fa'
import { SiGooglecloud } from 'react-icons/si'
import CountUp from './CountUp'
import './Footer.css'

function Footer() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Fetch real-time count starting from 0 using a free JSON counter API
    const fetchRealCount = async () => {
      try {
        const response = await fetch('https://api.counterapi.dev/v1/karthikc1125/portfolio/up');
        const data = await response.json();
        if (data && data.count) {
          setVisitorCount(data.count);
        }
      } catch (error) {
        console.error("Error fetching live visitor count:", error);
      }
    };

    fetchRealCount();
  }, []);

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
        
        <div className="visitor-count-container">
          <FaUsers className="visitor-icon" />
          <span>Profile Visitors:</span>
          {visitorCount > 0 && (
            <CountUp 
              to={visitorCount} 
              duration={3} 
              className="count-up-text"
            />
          )}
        </div>

        <button className="scroll-to-top" onClick={scrollToTop} title="Back to top">
          <FaArrowUp size={16} />
        </button>
      </div>
    </footer>
  )
}

export default Footer
