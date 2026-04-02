import React, { useEffect, useRef } from 'react';

const LightningLine = ({ color = "#5DADE2", width = 2 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const drawLightning = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const x = canvas.width / 2;
      const height = canvas.height;
      
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.lineCap = 'round';
      ctx.shadowBlur = 15;
      ctx.shadowColor = color;

      let curY = 0;
      let curX = x;
      ctx.moveTo(curX, curY);

      while (curY < height) {
        curY += Math.random() * 20 + 5;
        curX = x + (Math.random() - 0.5) * 12; // Jitter
        ctx.lineTo(curX, curY);
      }
      
      ctx.stroke();

      // Add extra faint "glow" branches
      if (Math.random() > 0.7) {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
        ctx.lineWidth = 1;
        ctx.moveTo(x, Math.random() * height);
        ctx.lineTo(x + (Math.random() - 0.5) * 30, Math.random() * height);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(drawLightning);
    };

    drawLightning();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, width]);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        pointerEvents: 'none',
        zIndex: 0
      }} 
    />
  );
};

export default LightningLine;
