import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#" className="nav-logo">
          <span className="logo-bracket">{`{`}</span>
          <span className="logo-name gradient-text">AS</span>
          <span className="logo-bracket">{`}`}</span>
        </a>

        <ul className="nav-links">
          {navLinks.map((link, i) => (
            <li key={link.label}>
              <a href={link.href}>
                <span className="nav-num mono">0{i + 1}.</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a href="https://github.com/ashwinder-bot" target="_blank" rel="noreferrer" className="nav-icon" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/ashwindersingh-dev/" target="_blank" rel="noreferrer" className="nav-icon" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>

        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {navLinks.map((link, i) => (
          <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)}>
            <span className="nav-num mono">0{i + 1}.</span> {link.label}
          </a>
        ))}
        <div className="mobile-socials">
          <a href="https://github.com/ashwinder-bot" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/ashwindersingh-dev/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
