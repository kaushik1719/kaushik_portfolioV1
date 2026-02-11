import React, { useState, useEffect } from 'react';
import './Styles/Navbar.css';
// Import your resume from the assets folder
import ResumeFile from '../assets/Kaushik_Resume.pdf'; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`nav-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">KK<span>.</span></div>
        
        <ul className={`nav-links ${mobileMenu ? 'open' : ''}`}>
          {menuItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} onClick={() => setMobileMenu(false)}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* New Resume Button Group */}
        <div className="nav-right">
          <a 
            href={ResumeFile} 
            download="Kaushik_Kanani_Resume.pdf" 
            className="resume-btn"
          >
            Resume
          </a>

          {/* Mobile Toggle Button */}
          <div className="hamburger" onClick={() => setMobileMenu(!mobileMenu)}>
            <div className={mobileMenu ? 'bar anim' : 'bar'}></div>
            <div className={mobileMenu ? 'bar anim' : 'bar'}></div>
            <div className={mobileMenu ? 'bar anim' : 'bar'}></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;