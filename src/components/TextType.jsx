import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const TextType = ({
  text = [],
  texts = [], // Support both prop names
  typingSpeed = 75,
  deletingSpeed = 50,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = '|',
  variableSpeedEnabled = false,
  variableSpeedMin = 60,
  variableSpeedMax = 120,
  cursorBlinkDuration = 0.5
}) => {
  const allTexts = texts.length > 0 ? texts : (Array.isArray(text) ? text : [text]);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;

    const currentText = allTexts[index];
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayText(currentText.substring(0, displayText.length + 1));
        
        if (displayText.length + 1 === currentText.length) {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, pauseDuration);
        }
      } else {
        // Deleting
        setDisplayText(currentText.substring(0, displayText.length - 1));
        
        if (displayText.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % allTexts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, isPaused, allTexts, typingSpeed, deletingSpeed, pauseDuration]);

  // Cursor Blinking with GSAP
  const cursorRef = useRef(null);
  useGSAP(() => {
    if (showCursor && cursorRef.current) {
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: cursorBlinkDuration,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }
  }, [showCursor, cursorBlinkDuration]);

  return (
    <span ref={textRef} style={{ display: 'inline-block' }}>
      {displayText}
      {showCursor && (
        <span ref={cursorRef} className="cursor" style={{ marginLeft: '2px', fontWeight: 'bold' }}>
          {cursorCharacter}
        </span>
      )}
    </span>
  );
};

export default TextType;
