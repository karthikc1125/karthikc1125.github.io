import React, { useState, useEffect } from 'react'
import './Hero.css'
import profileImg from '../assets/profile.jpg'
import resumePdf from '../../Karthik_C_Resume (1).pdf'

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    "Web Development",
    "Full Stack Developer",
    "Gen AI Enthusiast",
    "Frontend & Backend Developer"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-image-side">
          <div className="profile-wrapper">
            <img src={profileImg} alt="Karthik C - Full Stack Developer" className="profile-pic" />
          </div>
        </div>
        <div className="hero-text-side">
          <h1>Karthik C</h1>
          <div className="role-container">
            <p className="hero-tagline" key={roleIndex}>{roles[roleIndex]}</p>
          </div>
          <div className="hero-buttons">
            <a href="#contact" className="cta-button">Get In Touch</a>
            <a href={resumePdf} download="Karthik_C_Resume.pdf" className="cta-button tertiary-btn">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
