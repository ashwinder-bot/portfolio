import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import './Hero.css';

const roles = [
  'AI Backend Engineer',
  'Full Stack Developer',
  'ML Pipeline Architect',
  'System Designer',
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setBlink(prev => !prev), 530);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const role = roles[currentRole];
    let timeout;
    
    if (!isDeleting && displayText === role) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timeout = setTimeout(() => {
        setDisplayText(prev => 
          isDeleting ? prev.slice(0, -1) : role.slice(0, prev.length + 1)
        );
      }, speed);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-ambient"></div>
      <div className="container hero-grid">
        {/* Left side - Text */}
        <div className="hero-text">
          <div className="hero-tag mono reveal">
            <span className="tag-dot"></span>
            available for opportunities
          </div>

          <h1 className="hero-name reveal" style={{ transitionDelay: '0.1s' }}>
            Ashwinder<br />
            <span className="gradient-text">Singh</span>
          </h1>

          <div className="hero-role mono reveal" style={{ transitionDelay: '0.2s' }}>
            {'> '}{displayText}
            <span className={`cursor-blink ${blink ? 'on' : ''}`}>|</span>
          </div>

          <p className="hero-desc reveal" style={{ transitionDelay: '0.3s' }}>
            Software engineer building AI backends, full-stack platforms, and ML pipelines.
            Currently shipping production systems at <span className="highlight">Cognecto</span> and 
            pursuing B.Tech CSE at <span className="highlight">Bennett University</span>.
          </p>

          <div className="hero-stats mono reveal" style={{ transitionDelay: '0.4s' }}>
            <div className="stat">
              <span className="stat-num">17</span>
              <span className="stat-label">repos</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-num">3+</span>
              <span className="stat-label">internships</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-num">8.46</span>
              <span className="stat-label">CGPA</span>
            </div>
          </div>

          <div className="hero-actions reveal" style={{ transitionDelay: '0.5s' }}>
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
          </div>

          <div className="hero-socials reveal" style={{ transitionDelay: '0.6s' }}>
            <a href="https://github.com/ashwinder-bot" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/ashwindersingh-dev/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="mailto:singhashwinder19@gmail.com"><FaEnvelope /></a>
          </div>
        </div>

        {/* Right side - Code Window */}
        <div className="hero-code-wrapper reveal-right">
          <div className="code-window">
            <div className="code-titlebar">
              <div className="code-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="code-filename mono">ashwinder.py</span>
            </div>
            <pre className="code-body mono">
<span className="kw">class</span> <span className="cls">AshwinderSingh</span>:{'\n'}
{'  '}<span className="kw">def</span> <span className="fn">__init__</span>(<span className="self">self</span>):{'\n'}
{'    '}<span className="self">self</span>.name = <span className="str">"Ashwinder Singh"</span>{'\n'}
{'    '}<span className="self">self</span>.role = <span className="str">"Backend Dev & AI/ML Eng"</span>{'\n'}
{'    '}<span className="self">self</span>.location = <span className="str">"India 🇮🇳"</span>{'\n'}
{'    '}<span className="self">self</span>.stack = [{'\n'}
{'      '}<span className="str">"Python"</span>, <span className="str">"FastAPI"</span>,{'\n'}
{'      '}<span className="str">"React"</span>, <span className="str">"Node.js"</span>,{'\n'}
{'      '}<span className="str">"Docker"</span>, <span className="str">"PostgreSQL"</span>{'\n'}
{'    '}]{'\n'}
{'\n'}
{'  '}<span className="kw">def</span> <span className="fn">say_hi</span>(<span className="self">self</span>):{'\n'}
{'    '}<span className="kw">return</span> <span className="str">"Let's build together 🚀"</span>{'\n'}
{'\n'}
<span className="cmt"># --- init ---</span>{'\n'}
me = <span className="cls">AshwinderSingh</span>(){'\n'}
me.<span className="fn">say_hi</span>()
            </pre>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-down" aria-label="Scroll down">
        <FaChevronDown />
      </a>
    </section>
  );
};

export default Hero;
