import React, { useRef, useState, useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Projects.css'
import ScrollFloat from './ScrollFloat'

function Projects() {
  const projects = [
    {
      id: 1,
      title: "MERN Stack College Employee Management System",
      description: "A comprehensive full-stack application for managing college employee records, built with React, Express, Node.js, and MongoDB. Features include employee dashboard, attendance tracking, and role-based access control.",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT Auth"],
      link: "https://github.com/karthikc1125/Mern-Stack-College-Employee-Management-System"
    },
    {
      id: 2,
      title: "Phishing Detection using AI/ML",
      description: "An intelligent phishing detection system leveraging machine learning algorithms to identify and classify phishing emails and malicious links. Implements deep learning models for high-accuracy threat detection.",
      tech: ["Python", "TensorFlow", "Machine Learning", "Deep Learning"],
      link: "https://github.com/karthikc1125/phishing-detection-using-ai-ml"
    },
    {
      id: 3,
      title: "Code to Flowchart Generator",
      description: "A developer tool that converts source code into visual flowcharts, helping understand code logic and flow. Supports multiple programming languages and exports flowcharts in various formats.",
      tech: ["Python", "JavaScript", "AST Parsing", "Visualization"],
      link: "https://github.com/karthikc1125/code-to-flowchart-generator"
    },
    {
      id: 4,
      title: "AWS Architecture Failure Detection System",
      description: "An advanced system for detecting and predicting failures in AWS architectures using monitoring and analytics. Provides real-time alerts and recommendations for system optimization.",
      tech: ["AWS", "Python", "Cloud Architecture", "Monitoring"],
      link: "http://github.com/karthikc1125/aws-architecture-failure-detection-system"
    },
    {
      id: 5,
      title: "Global Shock Propagation Engine",
      description: "A complex simulation engine modeling how economic and systemic shocks propagate through global networks. Uses graph algorithms and network analysis for real-time propagation tracking.",
      tech: ["Algorithm Design", "Graph Theory", "Python", "Network Analysis"],
      link: "https://github.com/karthikc1125/GlobalShockPropagationEngine"
    }
  ]

  const carouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let intervalId;
    if (!isHovered) {
      intervalId = setInterval(() => {
        if (carouselRef.current && carouselRef.current.querySelector('.project-card')) {
          const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
          const cardWidth = carouselRef.current.querySelector('.project-card').offsetWidth + 30; // 30 is the CSS gap
          
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
          }
        }
      }, 1000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isHovered]);

  const scrollLeft = () => {
    if (carouselRef.current && carouselRef.current.querySelector('.project-card')) {
      const cardWidth = carouselRef.current.querySelector('.project-card').offsetWidth + 30;
      carouselRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current && carouselRef.current.querySelector('.project-card')) {
      const cardWidth = carouselRef.current.querySelector('.project-card').offsetWidth + 30;
      carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <section className="projects" id="projects">
      <h2><ScrollFloat>Featured Projects</ScrollFloat></h2>
      <div 
        className="carousel-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <button className="carousel-btn prev-btn" onClick={scrollLeft} aria-label="Previous projects">
          <FaChevronLeft />
        </button>
        <div className="projects-carousel" ref={carouselRef}>
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                  title="View on GitHub"
                >
                  <FaGithub size={24} />
                </a>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-button"
              >
                View on GitHub <FaExternalLinkAlt size={14} />
              </a>
            </div>
          ))}
        </div>
        <button className="carousel-btn next-btn" onClick={scrollRight} aria-label="Next projects">
          <FaChevronRight />
        </button>
      </div>
    </section>
  )
}

export default Projects
