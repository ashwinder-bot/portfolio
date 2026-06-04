import React from 'react';
import { FaGraduationCap, FaCode, FaServer, FaBrain } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-label">About</p>
          <h2 className="section-title">Who I Am</h2>
        </div>

        <div className="about-layout">
          <div className="about-text reveal">
            <p>
              I'm a software engineer who lives at the intersection of <span className="highlight">backend systems</span> and <span className="highlight">artificial intelligence</span>. I don't just write code — I architect solutions that handle real-world scale.
            </p>
            <p>
              From shipping RAG pipelines processing 100+ tender documents at Cognecto, to building real-time carpooling backends serving drivers and passengers — I've consistently delivered production-grade systems across multiple startups and internships.
            </p>
            <p>
              My toolkit spans the full stack: Python/FastAPI on the backend, React/Next.js on the frontend, Docker for containerization, and Prometheus/Grafana for keeping it all observable. I'm currently pursuing my B.Tech in Computer Science at Bennett University with an 8.46 CGPA.
            </p>
          </div>

          <div className="about-cards">
            <div className="about-card glass-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="about-card-icon"><FaServer /></div>
              <h4>Backend & APIs</h4>
              <p className="mono">FastAPI · Node.js · Express · REST · Microservices</p>
            </div>
            <div className="about-card glass-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="about-card-icon"><FaBrain /></div>
              <h4>AI & ML</h4>
              <p className="mono">RAG · OpenAI · ChromaDB · XGBoost · PyTorch</p>
            </div>
            <div className="about-card glass-card reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="about-card-icon"><FaCode /></div>
              <h4>Full Stack</h4>
              <p className="mono">React · Next.js · TypeScript · PostgreSQL · MongoDB</p>
            </div>
            <div className="about-card glass-card reveal" style={{ transitionDelay: '0.4s' }}>
              <div className="about-card-icon"><FaGraduationCap /></div>
              <h4>Education</h4>
              <p className="mono">Bennett University · B.Tech CSE · CGPA 8.46</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
