import React, { useRef, useEffect, useState } from 'react'
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPython, FaJava, FaGithub, FaAws, FaGitAlt, FaDocker, FaBrain, FaDatabase, FaRocket, FaChevronLeft, FaChevronRight
} from 'react-icons/fa'
import { 
  SiMongodb, SiExpress, SiTensorflow, SiGooglecloud, SiMysql, SiSpringboot, SiHuggingface, SiMermaid
} from 'react-icons/si'
import './Skills.css'

function Skills() {
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        if (scrollLeft >= maxScroll - 5) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          const cardWidth = carouselRef.current.querySelector('.skill-category').offsetWidth + 30; // 30 is gap
          carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    }, 3000); // Slowed to 3s auto-move
    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector('.skill-category').offsetWidth + 30;
      carouselRef.current.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
    }
  }

  const skillsCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: <FaJs /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> }
      ]
    },
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <FaRocket /> },
        { name: "Mermaid.js", icon: <SiMermaid /> }
      ]
    },
    {
      category: "Backend & APIs",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "SpringBoot", icon: <SiSpringboot /> }
      ]
    },
    {
      category: "AI/ML & Gen AI",
      skills: [
        { name: "Machine Learning", icon: <FaBrain /> },
        { name: "HuggingFace", icon: <SiHuggingface /> },
        { name: "Ollama", icon: <FaBrain /> },
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "Deep Learning", icon: <FaBrain /> }
      ]
    },
    {
      category: "Databases & Storage",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <FaDatabase /> }
      ]
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "GitHub", icon: <FaGithub /> },
        { name: "AWS", icon: <FaAws /> },
        { name: "GCP", icon: <SiGooglecloud /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Git", icon: <FaGitAlt /> }
      ]
    }
  ]

  return (
    <section className="skills" id="skills">
      <h2>Technical Skills</h2>
      <div className="carousel-container">
        <button className="carousel-btn left" onClick={() => scroll(-1)}><FaChevronLeft /></button>
        <div 
          className="skills-carousel" 
          ref={carouselRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {skillsCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skill-items">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-item">
                    <span className="skill-icon">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-btn right" onClick={() => scroll(1)}><FaChevronRight /></button>
      </div>
    </section>
  )
}

export default Skills
