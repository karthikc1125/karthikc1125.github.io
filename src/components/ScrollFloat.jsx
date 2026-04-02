import React, { useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({ 
  children, 
  scrollStart = "top 80%", 
  scrollEnd = "bottom 20%",
  stagger = 0.05,
  fromY = 50,
  fromOpacity = 0,
  className = ""
}) => {
  const containerRef = useRef(null);
  
  // Split the children text into characters if it's a string
  const splitContent = useMemo(() => {
    if (typeof children !== 'string') return children;
    return children.split('').map((char, index) => (
      <span 
        key={index} 
        className="scroll-float-char" 
        style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
      >
        {char}
      </span>
    ));
  }, [children]);

  useGSAP(() => {
    const chars = containerRef.current.querySelectorAll('.scroll-float-char');
    
    if (chars.length > 0) {
      gsap.from(chars, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: scrollStart,
          end: scrollEnd,
          scrub: 1,
        },
        y: fromY,
        opacity: fromOpacity,
        stagger: stagger,
        ease: "power2.out",
      });
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={`scroll-float-container ${className}`}>
      {splitContent}
    </div>
  );
};

export default ScrollFloat;
