import React, { useState, useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiGooglecloud } from 'react-icons/si'
import './Contact.css'
import ScrollFloat from './ScrollFloat'
import { gsap } from 'gsap'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitStatus, setSubmitStatus] = useState('idle')
  const formRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".form-group", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 85%",
        }
      });
    }, formRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus('submitting')
    
    const submissionData = new FormData()
    submissionData.append("access_key", "8db86a25-37b6-4e49-855a-ac2316215f29")
    submissionData.append("name", formData.name)
    submissionData.append("email", formData.email)
    submissionData.append("message", formData.message)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData
      })

      const data = await response.json()
      
      if (data.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    }
  }

  return (
    <section className="contact" id="contact" ref={formRef}>
      <h2><ScrollFloat>Get in Touch</ScrollFloat></h2>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="name">Your Name</label>
            <div className="input-highlight"></div>
          </div>

          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="email">Your Email</label>
            <div className="input-highlight"></div>
          </div>

          <div className="form-group">
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder=" "
            ></textarea>
            <label htmlFor="message">Your Message</label>
            <div className="input-highlight"></div>
          </div>
          
          <button type="submit" className="submit-btn" disabled={submitStatus === 'submitting'}>
            <span>{submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}</span>
            <div className="btn-glow"></div>
          </button>

          {submitStatus === 'success' && (
            <div className="status-message success">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="status-message error">
              Oops! Something went wrong. Please try again or email me directly.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
