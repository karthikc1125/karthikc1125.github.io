import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Header.css'

function Header() {
  const pikaRef = useRef(null)
  const navContainerRef = useRef(null)
  const linksRef = useRef([])

  useEffect(() => {
    const pika = pikaRef.current
    const links = linksRef.current
    
    if (!pika) return

    // GSAP animation for Pikachu's movement
    const tl = gsap.timeline({ repeat: -1 })
    
    tl.to(pika, {
      x: () => window.innerWidth + 100,
      duration: 12,
      ease: "none",
      onUpdate: function() {
        const pikaRect = pika.getBoundingClientRect()
        const pikaCenter = pikaRect.left + (pikaRect.width / 2)
        
        links.forEach((link, idx) => {
          if (!link) return
          const linkRect = link.getBoundingClientRect()
          
          if (pikaCenter >= linkRect.left && pikaCenter <= linkRect.right) {
            link.classList.add('glow-active')
          } else {
            link.classList.remove('glow-active')
          }
        })
      }
    })
    .set(pika, { scaleX: -1 })
    .to(pika, {
      x: -100,
      duration: 12,
      ease: "none",
      onUpdate: function() {
        const pikaRect = pika.getBoundingClientRect()
        const pikaCenter = pikaRect.left + (pikaRect.width / 2)
        
        links.forEach(link => {
          if (!link) return
          const linkRect = link.getBoundingClientRect()
          if (pikaCenter >= linkRect.left && pikaCenter <= linkRect.right) {
            link.classList.add('glow-active')
          } else {
            link.classList.remove('glow-active')
          }
        })
      }
    })
    .set(pika, { scaleX: 1 })

    return () => {
      tl.kill()
    }
  }, [])

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="header">
      <div className="pikachu-run" ref={pikaRef} style={{ x: -100 }}>
        <img src="/Running-Pikachu-GIF.webp" alt="Pikachu Running" />
      </div>
      <nav className="navbar" ref={navContainerRef}>
        <ul className="nav-links">
          {navItems.map((item, index) => (
            <li key={item.label}>
              <a 
                href={item.href} 
                ref={el => linksRef.current[index] = el}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
