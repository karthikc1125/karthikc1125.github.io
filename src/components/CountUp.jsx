import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const CountUp = ({ 
  to, 
  from = 0, 
  duration = 2.5, 
  decimals = 0, 
  prefix = "", 
  suffix = "",
  className = ""
}) => {
  const nodeRef = useRef(null);

  useGSAP(() => {
    const node = nodeRef.current;
    if (!node) return;

    const counter = { val: from };

    gsap.to(counter, {
      val: to,
      duration: duration,
      ease: "power3.out",
      scrollTrigger: {
        trigger: node,
        start: "top 95%",
      },
      onUpdate: () => {
        // Format with commas and requested decimals
        const formatted = Number(counter.val)
          .toFixed(decimals)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        node.textContent = prefix + formatted + suffix;
      }
    });
  }, { dependencies: [to, from, duration, decimals, prefix, suffix] });

  return <span className={`count-up ${className}`} ref={nodeRef}>{prefix + from + suffix}</span>;
};

export default CountUp;
