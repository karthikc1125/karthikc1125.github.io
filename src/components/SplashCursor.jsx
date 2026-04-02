import React, { useEffect, useRef } from 'react';

const SplashCursor = ({ splashColor = '#00D7FF', size = 50, particleCount = 12 }) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    let particles = [];
    let mouse = { x: -1000, y: -1000 };
    let isMoving = false;
    let timeout;
    
    // Resize handler
    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    
    // Mouse move handler
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      isMoving = true;
      clearTimeout(timeout);
      
      // Spawn particles
      for(let i = 0; i < 2; i++) {
        particles.push(new Particle(mouse.x, mouse.y));
      }
      
      timeout = setTimeout(() => {
        isMoving = false;
      }, 100);
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    class Particle {
      constructor(x, y) {
        this.x = x + (Math.random() - 0.5) * 10;
        this.y = y + (Math.random() - 0.5) * 10;
        this.size = Math.random() * size * 0.3 + 5;
        this.speedX = (Math.random() - 0.5) * 3;
        this.speedY = (Math.random() - 0.5) * 3;
        this.life = 1; // 100% life
        
        // Pick a random vibrant color for splash if dynamic is needed
        const colors = ["#FF6B6B", "#4D96FF", "#6BCB77", "#FFD93D", "#9B59B6", "#F94C66", "#00D7FF"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.size *= 0.95; // shrink
        this.life -= 0.02; // fade out
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = Math.max(0, this.life);
        ctx.fill();
      }
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        if (particles[i].size <= 0.5 || particles[i].life <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [size]);
  
  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9998
      }}
    />
  );
};

export default SplashCursor;
