import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiGooglecloud } from 'react-icons/si'
import './Hero.css'
import TextType from './TextType'

function Hero() {
  const roles = [
    "Web Development",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Gen AI Enthusiast"
  ];

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-image-side">
          <div className="profile-wrapper">
            <img src="/profile.jpg" alt="Karthik C - Full Stack Developer" className="profile-pic" />
          </div>
        </div>
        <div className="hero-text-side">
          <h1>Karthik C</h1>
          <div className="role-container">
            <div className="hero-tagline">
              <TextType 
                texts={roles}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor
                cursorCharacter="_"
                deletingSpeed={50}
                variableSpeedEnabled={false}
                variableSpeedMin={60}
                variableSpeedMax={120}
                cursorBlinkDuration={0.5}
              />
            </div>
          </div>
          <div className="hero-buttons">
            <a href="#contact" className="cta-button">Get In Touch</a>
            <a href="/Karthik_C_Resume.pdf" download="Karthik_C_Resume.pdf" className="cta-button tertiary-btn">Download Resume</a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/karthikc1125" target="_blank" rel="noopener noreferrer" className="hero-social-icon"><FaGithub size={20} /></a>
            <a href="https://linkedin.com/in/karthik-c-58b524237/" target="_blank" rel="noopener noreferrer" className="hero-social-icon"><FaLinkedin size={20} /></a>
            <a href="mailto:karthikc1125@gmail.com" className="hero-social-icon"><FaEnvelope size={20} /></a>
            <a href="https://www.skills.google/public_profiles/896aebbf-6879-4991-8520-baf41523e4df" target="_blank" rel="noopener noreferrer" className="hero-social-icon"><SiGooglecloud size={20} /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
