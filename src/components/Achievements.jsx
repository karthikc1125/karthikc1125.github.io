import React, { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      category: 'Hackathon',
      title: 'CIT Tumkur Hackathon',
      description: 'Developed an ML-based phishing detection solution during a 24-hour hackathon.',
      details: '2025 - Participant'
    },
    {
      category: 'Competition',
      title: 'Prompt Wars - 3rd Place',
      description: 'Secured 3rd place in the Prompt Wars Competition.',
      details: '2025 - 3rd Place Winner'
    },
    {
      category: 'Competition',
      title: 'TCS Tech Bytes',
      description: 'Participated in the TCS Tech Bytes Quiz competition.',
      details: '2025 - Participant'
    },
    {
      category: 'Open Source',
      title: 'Open Source Contributor',
      description: 'Actively contributed to Winter Code Social & Open Source Connect.',
      details: 'Open Source Contributor'
    },
    {
      category: 'Certification',
      title: 'Young Python Professional',
      description: 'Infosys Springboard Certification.',
      details: 'Infosys'
    },
    {
      category: 'Simulation',
      title: 'Software Engineering Simulation',
      description: 'Accenture Software Engineering Simulation on Forage.',
      details: 'Forage - Accenture'
    },
    {
      category: 'Certification',
      title: 'Young Professional',
      description: 'TCS iON Career Edge Certification.',
      details: 'TCS iON'
    },
    {
      category: 'Simulation',
      title: 'GenAI Data Analytics Simulation',
      description: 'Tata GenAI Data Analytics Simulation on Forage.',
      details: 'Forage - Tata'
    }
  ];

  const carouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let intervalId;
    if (!isHovered) {
      intervalId = setInterval(() => {
        if (carouselRef.current && carouselRef.current.querySelector('.achievement-card')) {
          const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
          const cardWidth = carouselRef.current.querySelector('.achievement-card').offsetWidth + 30; // 30 is the CSS gap
          
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
    if (carouselRef.current && carouselRef.current.querySelector('.achievement-card')) {
      const cardWidth = carouselRef.current.querySelector('.achievement-card').offsetWidth + 30;
      carouselRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current && carouselRef.current.querySelector('.achievement-card')) {
      const cardWidth = carouselRef.current.querySelector('.achievement-card').offsetWidth + 30;
      carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <section id="achievements" className="achievements">
      <h2>Achievements & Honors</h2>
      <div 
        className="carousel-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <button className="carousel-btn prev-btn" onClick={scrollLeft} aria-label="Previous achievements">
          <FaChevronLeft />
        </button>
        <div className="achievements-carousel" ref={carouselRef}>
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-category">
                {achievement.category}
              </div>
              <h3>{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
              <p className="achievement-details">{achievement.details}</p>
            </div>
          ))}
        </div>
        <button className="carousel-btn next-btn" onClick={scrollRight} aria-label="Next achievements">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Achievements;
