import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTerminal } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-status-bar mono">
          <div className="status-item">
            <span className="status-dot green"></span>
            <span>SYSTEM: ONLINE</span>
          </div>
          <div className="status-divider-vertical"></div>
          <div className="status-item">
            <FaTerminal className="status-icon" />
            <span>ENV: PRODUCTION</span>
          </div>
          <div className="status-divider-vertical"></div>
          <div className="status-item">
            <span>BRANCH:</span>
            <span className="text-accent">main</span>
          </div>
          <div className="status-divider-vertical"></div>
          <div className="status-item hide-mobile">
            <span>TIME:</span>
            <span>{time}</span>
          </div>
        </div>
        <div className="footer-right">
          <a href="https://github.com/ashwinder-bot" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/ashwindersingh-dev/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
