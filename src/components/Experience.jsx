import React from 'react';
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
    color: '#3b82f6',
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
    color: '#8b5cf6',
    details: [
      'Secured authentication system using Firebase Auth and JWT with role-based access control via Node.js/Express.js, supporting 2 user roles (driver/passenger).',
      'Integrated Google Maps API for real-time route calculation and ride matching, reducing average route lookup latency to under 300ms.',
    ],
    tech: ['Node.js', 'Express.js', 'Firebase', 'Google Maps API', 'JWT'],
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I've Worked</h2>
        </div>

        <div className="timeline">
          <div className="timeline-line"></div>
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className="timeline-item reveal"
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              {/* Timeline node */}
              <div className="timeline-node" style={{ '--node-color': exp.color }}>
                <div className="timeline-dot"></div>
              </div>

              {/* Content */}
              <div className="timeline-content glass-card">
                <div className="timeline-badge mono" style={{ color: exp.color }}>
                  {exp.period} · {exp.type}
                </div>
                <h3 className="timeline-role">
                  {exp.role}{' '}
                  <span className="timeline-company" style={{ color: exp.color }}>
                    @ {exp.company}
                  </span>
                </h3>
                <ul className="timeline-details">
                  {exp.details.map((detail, i) => (
                    <li key={i}>
                      <span className="timeline-bullet" style={{ color: exp.color }}>▹</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="timeline-tech">
                  {exp.tech.map((t, i) => (
                    <span key={i} className="badge">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
