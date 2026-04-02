import React from 'react'
import './Hero.css'
import TextType from './TextType'

function Hero() {
  const roles = [
    "Web Development",
    "Full Stack Developer",
    "Gen AI Enthusiast",
    "Frontend & Backend Developer"
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
        </div>
      </div>
    </section>
  )
}

export default Hero
