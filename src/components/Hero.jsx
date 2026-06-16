import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown, FaDownload } from 'react-icons/fa';
import { SiPython, SiFastapi, SiReact, SiDocker, SiPytorch, SiPostgresql } from 'react-icons/si';
import './Hero.css';

const roles = [
  'AI Backend Engineer',
  'Full Stack Developer',
  'ML Pipeline Architect',
  'Computer Vision Engineer',
];

const floatingIcons = [
  { Icon: SiPython, delay: 0, x: '82%', y: '15%' },
  { Icon: SiFastapi, delay: 1, x: '88%', y: '55%' },
  { Icon: SiReact, delay: 2, x: '75%', y: '78%' },
  { Icon: SiDocker, delay: 3, x: '92%', y: '35%' },
  { Icon: SiPytorch, delay: 4, x: '70%', y: '42%' },
  { Icon: SiPostgresql, delay: 5, x: '85%', y: '72%' },
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
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 35 : 70;
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
      {/* Ambient glow orbs */}
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>
      <div className="hero-orb hero-orb-3"></div>

      <div className="container hero-grid">
        {/* Left — Main Content */}
        <div className="hero-text">
          <div className="hero-status reveal">
            <span className="status-pulse"></span>
            <span className="status-label">Open to Opportunities</span>
          </div>

          <h1 className="hero-name reveal" style={{ transitionDelay: '0.1s' }}>
            <span className="hero-greeting">Hi, I'm</span>
            <span className="hero-firstname">Ashwinder</span>
            <span className="hero-lastname gradient-text">Singh</span>
          </h1>

          <div className="hero-role mono reveal" style={{ transitionDelay: '0.2s' }}>
            <span className="role-prefix">{'> '}</span>
            <span className="role-text">{displayText}</span>
            <span className={`cursor-blink ${blink ? 'on' : ''}`}>▊</span>
          </div>

          <p className="hero-desc reveal" style={{ transitionDelay: '0.3s' }}>
            I engineer <span className="highlight">AI backends</span>, build{' '}
            <span className="highlight">full-stack platforms</span>, and ship{' '}
            <span className="highlight">ML pipelines</span> to production. Currently
            at <span className="highlight">Cognecto</span> and pursuing B.Tech CSE at{' '}
            <span className="highlight">Bennett University</span>.
          </p>

          <div className="hero-metrics reveal" style={{ transitionDelay: '0.4s' }}>
            <div className="metric">
              <span className="metric-value">16+</span>
              <span className="metric-label">Repos</span>
            </div>
            <div className="metric-sep"></div>
            <div className="metric">
              <span className="metric-value">3+</span>
              <span className="metric-label">Internships</span>
            </div>
            <div className="metric-sep"></div>
            <div className="metric">
              <span className="metric-value">8.46</span>
              <span className="metric-label">CGPA</span>
            </div>
          </div>

          <div className="hero-actions reveal" style={{ transitionDelay: '0.5s' }}>
            <a href="#projects" className="btn btn-primary">
              View Projects
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
          </div>

          <div className="hero-socials reveal" style={{ transitionDelay: '0.6s' }}>
            <a href="https://github.com/ashwinder-bot" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/ashwindersingh-dev/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="mailto:singhashwinder19@gmail.com" aria-label="Email"><FaEnvelope /></a>
          </div>
        </div>

        {/* Right — Code Terminal */}
        <div className="hero-terminal-wrapper reveal-right">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="tdot tdot-red"></span>
                <span className="tdot tdot-yellow"></span>
                <span className="tdot tdot-green"></span>
              </div>
              <span className="terminal-title mono">ashwinder.py</span>
              <div className="terminal-actions">
                <span className="terminal-tab active mono">main.py</span>
              </div>
            </div>
            <pre className="terminal-body mono">
<span className="t-kw">class</span> <span className="t-cls">AshwinderSingh</span>:{'\n'}
{'  '}<span className="t-kw">def</span> <span className="t-fn">__init__</span>(<span className="t-self">self</span>):{'\n'}
{'    '}<span className="t-self">self</span>.name = <span className="t-str">"Ashwinder Singh"</span>{'\n'}
{'    '}<span className="t-self">self</span>.role = <span className="t-str">"AI/Backend Engineer"</span>{'\n'}
{'    '}<span className="t-self">self</span>.location = <span className="t-str">"India 🇮🇳"</span>{'\n'}
{'    '}<span className="t-self">self</span>.stack = [{'\n'}
{'      '}<span className="t-str">"Python"</span>, <span className="t-str">"FastAPI"</span>,{'\n'}
{'      '}<span className="t-str">"React"</span>, <span className="t-str">"Node.js"</span>,{'\n'}
{'      '}<span className="t-str">"Docker"</span>, <span className="t-str">"PostgreSQL"</span>{'\n'}
{'    '}]{'\n'}
{'\n'}
{'  '}<span className="t-kw">def</span> <span className="t-fn">get_focus</span>(<span className="t-self">self</span>):{'\n'}
{'    '}<span className="t-kw">return</span> [{'\n'}
{'      '}<span className="t-str">"RAG Pipelines"</span>,{'\n'}
{'      '}<span className="t-str">"Computer Vision"</span>,{'\n'}
{'      '}<span className="t-str">"Scalable Backends"</span>{'\n'}
{'    '}]{'\n'}
{'\n'}
<span className="t-cmt"># --- init ---</span>{'\n'}
me = <span className="t-cls">AshwinderSingh</span>(){'\n'}
<span className="t-fn">print</span>(me.get_focus())
            </pre>
          </div>

          {/* Floating tech icons */}
          {floatingIcons.map(({ Icon, delay, x, y }, idx) => (
            <div
              key={idx}
              className="floating-icon"
              style={{
                left: x,
                top: y,
                animationDelay: `${delay * 0.5}s`,
              }}
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>

      <a href="#about" className="scroll-indicator" aria-label="Scroll down">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text mono">scroll</span>
      </a>
    </section>
  );
};

export default Hero;
