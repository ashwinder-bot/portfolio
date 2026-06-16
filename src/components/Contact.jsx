import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-wrapper">
          {/* CTA Header */}
          <div className="contact-header reveal">
            <p className="section-label" style={{ justifyContent: 'center' }}>Contact</p>
            <h2 className="contact-title">
              Got a Vision?<br />
              <span className="gradient-text">Let's Engineer It.</span>
            </h2>
            <p className="contact-desc">
              Whether it's an AI-powered product, a scalable backend, or a full-stack platform
              — I'm always open to collaborating on ideas worth building.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="contact-grid reveal" style={{ transitionDelay: '0.15s' }}>
            <a href="mailto:singhashwinder19@gmail.com" className="contact-card glass-card" id="contact-email">
              <div className="contact-card-icon"><FaEnvelope /></div>
              <h4>Email</h4>
              <p className="mono">singhashwinder19@gmail.com</p>
            </a>
            <a href="https://www.linkedin.com/in/ashwindersingh-dev/" target="_blank" rel="noreferrer" className="contact-card glass-card" id="contact-linkedin">
              <div className="contact-card-icon" style={{ color: '#3b82f6' }}><FaLinkedin /></div>
              <h4>LinkedIn</h4>
              <p className="mono">ashwindersingh-dev</p>
            </a>
            <a href="https://github.com/ashwinder-bot" target="_blank" rel="noreferrer" className="contact-card glass-card" id="contact-github">
              <div className="contact-card-icon" style={{ color: '#e8e6f0' }}><FaGithub /></div>
              <h4>GitHub</h4>
              <p className="mono">ashwinder-bot</p>
            </a>
            <a href="tel:+918290735220" className="contact-card glass-card" id="contact-phone">
              <div className="contact-card-icon" style={{ color: '#10b981' }}><FaPhone /></div>
              <h4>Phone</h4>
              <p className="mono">+91 8290735220</p>
            </a>
          </div>

          {/* Location */}
          <div className="contact-location reveal" style={{ transitionDelay: '0.25s' }}>
            <FaMapMarkerAlt />
            <span>Bennett University, Greater Noida, UP, India</span>
          </div>

          {/* CTA Button */}
          <div className="contact-cta reveal" style={{ transitionDelay: '0.3s' }}>
            <a href="mailto:singhashwinder19@gmail.com" className="btn btn-primary">
              <FaEnvelope />
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
