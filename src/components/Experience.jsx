import React, { useState } from 'react';
import './Experience.css';

const experiences = [
  {
    id: 'cognecto',
    role: 'AI Backend Intern',
    company: 'Cognecto',
    period: 'Feb 2026 – Present',
    type: 'Remote',
    color: '#00ffd5',
    details: [
      'Architected an AI-powered tender analysis system with FastAPI; implemented a RAG pipeline using OpenAI embeddings and ChromaDB, enabling semantic search across 100+ tender documents.',
      'Engineered backend services for PDF ingestion, text chunking, vector storage, and intelligent query processing, cutting manual tender screening effort by an estimated 70%.',
      'Configured a full observability stack — Prometheus (metrics scraping), Grafana (dashboards & alerting), Loki (log aggregation), Promtail (log shipping) — covering 5+ live API endpoints.',
      'Launched a Vision Stack Platform for multimodal document analysis, extracting structured data from scanned tender PDFs with average query response time under 2 seconds.',
    ],
    tech: ['FastAPI', 'Python', 'OpenAI', 'ChromaDB', 'Prometheus', 'Grafana', 'Docker'],
  },
  {
    id: 'swastik',
    role: 'Full Stack Developer Intern',
    company: 'Swastik IT Solutions',
    period: 'Oct 2025 – Dec 2025',
    type: 'Remote',
    color: '#0088ff',
    details: [
      'Delivered 8+ RESTful APIs with Node.js/Express.js for Next.js clients; implemented middleware layers for auth, input validation, and centralized error handling.',
      'Modeled and optimized MongoDB schemas for persistent data storage, improving query performance across 3+ high-frequency endpoints.',
    ],
    tech: ['Node.js', 'Express.js', 'Next.js', 'MongoDB'],
  },
  {
    id: 'raahi',
    role: 'Backend Developer',
    company: 'Raahi — Carpooling App',
    period: 'Jul 2025 – Aug 2025',
    type: 'Remote',
    color: '#7b61ff',
    details: [
      'Secured authentication system using Firebase Auth and JWT with role-based access control via Node.js/Express.js, supporting 2 user roles (driver/passenger).',
      'Integrated Google Maps API for real-time route calculation and ride matching, reducing average route lookup latency to under 300ms.',
    ],
    tech: ['Node.js', 'Express.js', 'Firebase', 'Google Maps API', 'JWT'],
  },
];

const Experience = () => {
  const [activeExp, setActiveExp] = useState('cognecto');

  const active = experiences.find(e => e.id === activeExp);

  return (
    <section id="experience">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I've Worked</h2>
        </div>

        <div className="exp-layout reveal" style={{ transitionDelay: '0.2s' }}>
          {/* Tab Selector */}
          <div className="exp-tabs">
            {experiences.map(exp => (
              <button
                key={exp.id}
                className={`exp-tab ${activeExp === exp.id ? 'active' : ''}`}
                onClick={() => setActiveExp(exp.id)}
                style={{ '--tab-color': exp.color }}
              >
                <span className="tab-indicator" style={{ background: exp.color }}></span>
                {exp.company.split(' — ')[0]}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="exp-content glass-card" key={active.id}>
            <div className="exp-header">
              <h3>{active.role} <span style={{ color: active.color }}>@ {active.company}</span></h3>
              <p className="exp-period mono">{active.period} · {active.type}</p>
            </div>
            <ul className="exp-details">
              {active.details.map((detail, idx) => (
                <li key={idx}>
                  <span className="bullet" style={{ color: active.color }}>▹</span>
                  {detail}
                </li>
              ))}
            </ul>
            <div className="exp-tech">
              {active.tech.map((t, idx) => (
                <span key={idx} className="badge">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
