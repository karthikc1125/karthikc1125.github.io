import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const colors = ["#FF6B6B", "#4D96FF", "#6BCB77", "#FFD93D", "#9B59B6", "#F94C66", "#00D7FF"];

const ClickSpark = () => {
  const [sparks, setSparks] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const newSparks = [];
      const numSparks = 8;
      const id = Date.now();
      
      for (let i = 0; i < numSparks; i++) {
        const angle = (i / numSparks) * Math.PI * 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        newSparks.push({ id: `${id}-${i}`, x: e.clientX, y: e.clientY, angle, color });
      }
      
      setSparks((prev) => [...prev, ...newSparks]);

      // Remove these sparks after animation
      setTimeout(() => {
        setSparks((prev) => prev.filter(spark => !spark.id.startsWith(id.toString())));
      }, 1000);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    sparks.forEach((spark) => {
      const element = document.getElementById(`spark-${spark.id}`);
      if (element && !element.dataset.animated) {
        element.dataset.animated = 'true';
        const distance = 40 + Math.random() * 40;
        gsap.to(element, {
          x: spark.x + Math.cos(spark.angle) * distance,
          y: spark.y + Math.sin(spark.angle) * distance,
          opacity: 0,
          scale: 0,
          rotation: Math.random() * 180,
          duration: 0.6 + Math.random() * 0.4,
          ease: "power2.out",
        });
      }
    });
  }, [sparks]);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 9999 }}>
      {sparks.map((spark) => (
        <svg
          key={spark.id}
          id={`spark-${spark.id}`}
          style={{
            position: 'absolute',
            left: 0, // start from 0 because container is top/left 0, and we use absolute positioning based on spark.x/y
            top: 0,
            transform: `translate(${spark.x}px, ${spark.y}px)`,
            width: '20px',
            height: '20px',
            pointerEvents: 'none',
          }}
          viewBox="0 0 24 24"
          fill={spark.color}
        >
          <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
        </svg>
      ))}
    </div>
  );
};

export default ClickSpark;
