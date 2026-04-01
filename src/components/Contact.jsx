import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiGooglecloud } from 'react-icons/si'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create mailto link
    const mailtoLink = `mailto:karthikc1125@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`
    window.location.href = mailtoLink
  }

  return (
    <section className="contact" id="contact">
      <h2>Get in Touch</h2>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
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
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>Feel free to reach out to me through any of these channels:</p>
          
          <div className="contact-links">
            <a 
              href="https://github.com/karthikc1125" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaGithub size={24} />
              <span>GitHub</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/karthik-c-58b524237/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaLinkedin size={24} />
              <span>LinkedIn</span>
            </a>
            
            <a 
              href="mailto:karthikc1125@gmail.com"
              className="contact-link"
            >
              <FaEnvelope size={24} />
              <span>Email</span>
            </a>
            
            <a 
              href="https://www.skills.google/public_profiles/896aebbf-6879-4991-8520-baf41523e4df" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              <SiGooglecloud size={24} />
              <span>GCP Skills</span>
            </a>
          </div>

          <div className="contact-email">
            <p>Email me directly:</p>
            <a href="mailto:karthikc1125@gmail.com" className="email-link">
              karthikc1125@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
