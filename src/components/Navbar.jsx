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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      // Scroll progress
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
      // Active section detection
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
        <div className="container nav-inner">
          <a href="#" className="nav-logo">
            <span className="logo-symbol">&lt;/&gt;</span>
          </a>

          <ul className="nav-links">
            {navLinks.map((link, i) => (
              <li key={link.label}>
                <a href={link.href} className={activeSection === link.href.slice(1) ? 'active' : ''}>
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
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-overlay ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(false)}></div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <span className="mono" style={{ color: 'var(--text-dim)', fontSize: '0.75rem' }}>// navigation</span>
        </div>
        {navLinks.map((link, i) => (
          <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className={activeSection === link.href.slice(1) ? 'active' : ''}>
            <span className="nav-num mono">0{i + 1}.</span> {link.label}
          </a>
        ))}
        <div className="mobile-socials">
          <a href="https://github.com/ashwinder-bot" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/ashwindersingh-dev/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
