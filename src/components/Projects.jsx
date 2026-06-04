import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'MindWell',
    subtitle: 'Mental Health Platform',
    description: 'Full-stack mental health platform with 3 role-based dashboards (Counselor/Admin/Student). Integrated Supabase and shipped an NLP-based AI stress detection engine surfacing personalized counselor suggestions.',
    tech: ['Next.js', 'TypeScript', 'FastAPI', 'Supabase', 'PostgreSQL'],
    github: 'https://github.com/ashwinder-bot/mindwell',
    accent: '#00ffd5',
    featured: true,
  },
  {
    title: 'Stock Market Dashboard',
    subtitle: 'Real-time Financial Analytics',
    description: 'Real-time stock analysis dashboard consuming yfinance API, exposing live OHLCV data and technical indicators for 500+ tickers. Containerized with Docker and deployed on Render/Vercel with 99%+ uptime.',
    tech: ['React.js', 'FastAPI', 'yfinance', 'Docker', 'Vercel'],
    github: 'https://github.com/ashwinder-bot/stock-market-dashboard',
    accent: '#0088ff',
    featured: true,
  },
  {
    title: 'Payment Fraud Detection',
    subtitle: 'ML Security System',
    description: 'Trained Random Forest and XGBoost classifiers on 6M+ transactions with SMOTE for class imbalance, achieving 96%+ ROC-AUC. End-to-end ML pipeline with feature engineering and evaluation.',
    tech: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'Matplotlib'],
    github: 'https://github.com/ashwinder-bot/ONLINE-PAYMENT-FRAUD-DETECTION',
    accent: '#7b61ff',
    featured: true,
  },
  {
    title: 'Event Management System',
    subtitle: 'Bennett University',
    description: 'Comprehensive event management system with real-time event tracking and registration, interactive club management dashboard, and a beautiful responsive UI.',
    tech: ['JavaScript', 'HTML/CSS'],
    github: 'https://github.com/ashwinder-bot/EVENT-MANAGMENT',
    accent: '#ff3d8e',
  },
  {
    title: 'Mental Health System',
    subtitle: 'Admin Dashboard',
    description: 'Digital Mental Health Admin Dashboard using FastAPI and Supabase. Handles admin management, user profiles, and secure data access for the mental health platform.',
    tech: ['TypeScript', 'FastAPI', 'Supabase'],
    github: 'https://github.com/ashwinder-bot/mental-health-system',
    accent: '#ff7b00',
  },
  {
    title: 'Grocery Management',
    subtitle: 'Desktop Application',
    description: 'Desktop-based Grocery Management System built using Python (Tkinter) and SQL for database management, designed to help businesses manage inventory efficiently.',
    tech: ['Python', 'Tkinter', 'SQL'],
    github: 'https://github.com/ashwinder-bot/GROCERY-MANAGMENT-SYSTEM',
    accent: '#00ff88',
  },
];

const Projects = () => {
  const featured = projects.filter(p => p.featured);
  const other = projects.filter(p => !p.featured);

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-label">Projects</p>
          <h2 className="section-title">What I've Built</h2>
          <p className="section-desc">A selection of projects that demonstrate my ability to ship production-grade systems.</p>
        </div>

        {/* Featured Projects */}
        <div className="featured-projects">
          {featured.map((project, index) => (
            <div key={index} className={`featured-card glass-card reveal ${index % 2 === 1 ? 'reverse' : ''}`} style={{ transitionDelay: `${index * 0.15}s` }}>
              <div className="featured-accent" style={{ background: project.accent }}></div>
              <div className="featured-content">
                <p className="featured-label mono" style={{ color: project.accent }}>Featured Project</p>
                <h3 className="featured-title">{project.title}</h3>
                <p className="featured-subtitle">{project.subtitle}</p>
                <p className="featured-desc">{project.description}</p>
                <div className="featured-tech">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="badge">{t}</span>
                  ))}
                </div>
                <div className="featured-links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link"><FaGithub /> Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="other-heading reveal">Other Noteworthy Projects</h3>
        <div className="other-projects">
          {other.map((project, index) => (
            <div key={index} className="other-card glass-card reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="other-top">
                <div className="other-icon" style={{ color: project.accent }}>📁</div>
                <a href={project.github} target="_blank" rel="noreferrer" className="other-link"><FaGithub /></a>
              </div>
              <h4>{project.title}</h4>
              <p className="other-subtitle">{project.subtitle}</p>
              <p className="other-desc">{project.description}</p>
              <div className="other-tech mono">
                {project.tech.join(' · ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
