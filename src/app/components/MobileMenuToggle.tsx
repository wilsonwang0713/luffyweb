'use client';

import { useState, useEffect } from 'react';

export default function MobileMenuToggle() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const nav = document.querySelector('nav');
    if (nav) {
      if (isMenuOpen) {
        nav.classList.add('active');
      } else {
        nav.classList.remove('active');
      }
    }
  }, [isMenuOpen]);

  return (
    <button 
      className="mobile-menu-toggle" 
      onClick={toggleMenu}
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
    >
      {isMenuOpen ? '✕' : '☰'}
    </button>
  );
} 