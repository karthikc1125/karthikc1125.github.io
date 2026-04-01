import React from 'react'
import './Education.css'

function Education() {
  const education = [
    {
      year: "Jan 2026 - Present",
      degree: "Web Development Intern",
      institution: "Nano Stream Technologies",
      details: "Developing responsive UI components with Tailwind CSS and integrating with Node.js REST APIs."
    },
    {
      year: "2022 - Present",
      degree: "B.E. in Computer Science",
      institution: "GECM Hassan, Karnataka",
      details: "CGPA: 8.8"
    },
    {
      year: "2020 - 2022",
      degree: "Pre-University (PCMB)",
      institution: "SAPUC CR Patna, Hassan",
      details: "Percentage: 84%"
    },
    {
      year: "2020",
      degree: "SSLC",
      institution: "GHS Pete CR Patna, Hassan",
      details: "Percentage: 87%"
    }
  ]

  return (
    <section className="education" id="education">
      <h2>Education Journey</h2>
      <div className="education-timeline">
        {education.map((item, index) => (
          <div key={index} className="education-item">
            <div className="timeline-marker">
              <div className="timeline-dot"></div>
            </div>
            <div className="education-content">
              <span className="education-year">{item.year}</span>
              <h3>{item.degree}</h3>
              <p className="institution">{item.institution}</p>
              <p className="details">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
