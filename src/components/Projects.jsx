import React, { useState, useEffect, useRef } from 'react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'DrowsiGuard AI',
    subtitle: 'Driver Fatigue Detection',
    description: 'Real-time driver drowsiness detection using a unique Tri-Channel Architecture — CNN + Mouth Aspect Ratio + 3D Head Pose estimation. Overcomes standard eye-tracking limitations with multi-modal sensor fusion.',
    tech: ['Python', 'PyTorch', 'OpenCV', 'dlib', 'CNN'],
    github: 'https://github.com/ashwinder-bot/sunglasses-driver-drowsiness',
    accent: '#00ffd5',
    categories: ['ai'],
    featured: true,
    size: 'large',
  },
  {
    title: 'Tender Copilot',
    subtitle: 'AI-Powered Tender Analysis',
    description: 'RAG-based tender analysis platform using OpenAI embeddings and ChromaDB for semantic search across 100+ tender documents. FastAPI backend with full observability stack.',
    tech: ['FastAPI', 'OpenAI', 'ChromaDB', 'Docker', 'Prometheus'],
    github: 'https://github.com/ashwinder-bot/tender-copilot',
    accent: '#8b5cf6',
    categories: ['ai', 'backend'],
    featured: true,
    size: 'medium',
  },
  {
    title: 'MindWell',
    subtitle: 'Mental Health Platform',
    description: 'Full-stack mental health platform with 3 role-based dashboards. Integrated Supabase auth and shipped an NLP-based AI stress detection engine with personalized suggestions.',
    tech: ['Next.js', 'TypeScript', 'FastAPI', 'Supabase', 'PostgreSQL'],
    github: 'https://github.com/ashwinder-bot/mental-health-system',
    accent: '#3b82f6',
    categories: ['fullstack', 'ai'],
    featured: true,
    size: 'medium',
  },
  {
    title: 'Stock Market Dashboard',
    subtitle: 'Real-time Financial Analytics',
    description: 'Real-time stock analysis dashboard consuming yfinance API, exposing live OHLCV data and technical indicators for 500+ tickers. Containerized with Docker, deployed with 99%+ uptime.',
    tech: ['React.js', 'FastAPI', 'yfinance', 'Docker', 'Vercel'],
    github: 'https://github.com/ashwinder-bot/stock-market-dashboard',
    accent: '#f97316',
    categories: ['fullstack', 'backend'],
    featured: true,
    size: 'large',
  },
  {
    title: 'Payment Fraud Detection',
    subtitle: 'ML Security System',
    description: 'Trained Random Forest and XGBoost classifiers on 6M+ transactions with SMOTE, achieving 96%+ ROC-AUC. End-to-end ML pipeline with feature engineering.',
    tech: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas'],
    github: 'https://github.com/ashwinder-bot/ONLINE-PAYMENT-FRAUD-DETECTION',
    accent: '#ec4899',
    categories: ['ai'],
  },
  {
    title: 'Jurisly',
    subtitle: 'Legal Consultation Platform',
    description: 'Comprehensive platform to make legal advice accessible and reliable. Built with TypeScript and modern web technologies.',
    tech: ['TypeScript', 'React', 'Node.js'],
    github: 'https://github.com/ashwinder-bot/JURISLY-THE-LEGAL-CONSULTATION',
    accent: '#10b981',
    categories: ['fullstack'],
  },
  {
    title: 'AI Voice Detection',
    subtitle: 'Voice Analysis System',
    description: 'AI-powered voice analysis and detection system using machine learning for real-time audio processing and classification.',
    tech: ['Python', 'ML', 'Audio Processing'],
    github: 'https://github.com/ashwinder-bot/ai-voice-detection',
    accent: '#a855f7',
    categories: ['ai'],
  },
  {
    title: 'Event Management',
    subtitle: 'Bennett University',
    description: 'Comprehensive event management system with real-time tracking, registration, and interactive club management dashboard.',
    tech: ['JavaScript', 'HTML/CSS'],
    github: 'https://github.com/ashwinder-bot/EVENT-MANAGMENT',
    accent: '#ef4444',
    categories: ['fullstack'],
  },
];

const filters = [
  { label: 'All', value: 'all' },
  { label: 'AI / ML', value: 'ai' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'Backend', value: 'backend' },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef(null);

  // Re-observe reveal elements when filter changes so new cards animate in
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    const els = sectionRef.current.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    els.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [activeFilter]);

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.categories.includes(activeFilter));

  // Only show featured/other split in "All" view
  const isAllView = activeFilter === 'all';
  const featured = isAllView ? filtered.filter(p => p.featured) : [];
  const others = isAllView ? filtered.filter(p => !p.featured) : filtered;

  return (
    <section id="projects" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <p className="section-label">Projects</p>
          <h2 className="section-title">What I've Built</h2>
          <p className="section-desc">
            Production-grade systems spanning AI/ML, backend engineering, and full-stack development.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="project-filters reveal" style={{ transitionDelay: '0.1s' }}>
          {filters.map(f => (
            <button
              key={f.value}
              className={`filter-chip ${activeFilter === f.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
              <span className="filter-count">
                {f.value === 'all'
                  ? projects.length
                  : projects.filter(p => p.categories.includes(f.value)).length}
              </span>
            </button>
          ))}
        </div>

        {/* Featured Bento Grid (only in All view) */}
        {featured.length > 0 && (
          <div className="bento-grid">
            {featured.map((project, index) => (
              <div
                key={project.title}
                className={`bento-card glass-card reveal ${project.size === 'large' ? 'bento-large' : 'bento-medium'}`}
                style={{ transitionDelay: `${index * 0.1}s`, '--project-accent': project.accent }}
              >
                <div className="bento-glow"></div>
                <div className="bento-content">
                  <div className="bento-top">
                    <span className="bento-label mono" style={{ color: project.accent }}>Featured</span>
                    <a href={project.github} target="_blank" rel="noreferrer" className="bento-github-link" aria-label="GitHub"><FaGithub /></a>
                  </div>
                  <h3 className="bento-title">{project.title}</h3>
                  <p className="bento-subtitle">{project.subtitle}</p>
                  <p className="bento-desc">{project.description}</p>
                  <div className="bento-tech">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="badge">{t}</span>
                    ))}
                  </div>
                  <a href={project.github} target="_blank" rel="noreferrer" className="bento-link mono">
                    <FaGithub /> View Code
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 12l8-8M4 4h8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                </div>
                <div className="bento-accent-line" style={{ background: project.accent }}></div>
              </div>
            ))}
          </div>
        )}

        {/* Other / Filtered Projects Grid */}
        {others.length > 0 && (
          <>
            {isAllView && <h3 className="other-heading reveal">Other Noteworthy Projects</h3>}
            <div className="other-grid">
              {others.map((project, index) => (
                <div
                  key={project.title}
                  className="other-card glass-card reveal"
                  style={{ transitionDelay: `${index * 0.08}s`, '--project-accent': project.accent }}
                >
                  <div className="other-top">
                    <div className="other-folder" style={{ color: project.accent }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <a href={project.github} target="_blank" rel="noreferrer" className="other-link" aria-label="GitHub"><FaGithub /></a>
                  </div>
                  <h4>{project.title}</h4>
                  <p className="other-subtitle">{project.subtitle}</p>
                  <p className="other-desc">{project.description}</p>
                  <div className="other-tech mono">{project.tech.join(' · ')}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
