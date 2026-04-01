import React from 'react'
import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <div className="professional-roles">
        <span className="role-badge">Intern @ Nano Stream Technologies</span>
        
        <span className="role-badge">Software Development Engineer</span>
        <span className="role-badge">AI & Cloud Enthusiast</span>
        <span className="role-badge">Web & Full Stack Specialist</span>
      </div>
      <p>
        I'm a passionate Full Stack Developer with expertise in building modern web applications and AI/ML solutions. 
        With a strong foundation in both frontend and backend technologies, I create responsive, 
        user-friendly solutions that solve real-world problems. I'm committed to continuous learning 
        and staying updated with the latest industry trends and best practices.
      </p>
      
    </section>
  )
}

export default About
