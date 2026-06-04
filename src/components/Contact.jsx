import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-wrapper reveal">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem' }}>
            <p className="section-label" style={{ justifyContent: 'center' }}>Contact</p>
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          <div className="contact-grid">
            <a href="mailto:singhashwinder19@gmail.com" className="contact-card glass-card">
              <FaEnvelope className="contact-icon" />
              <h4>Email</h4>
              <p className="mono">singhashwinder19@gmail.com</p>
            </a>
            <a href="https://www.linkedin.com/in/ashwindersingh-dev/" target="_blank" rel="noreferrer" className="contact-card glass-card">
              <FaLinkedin className="contact-icon" />
              <h4>LinkedIn</h4>
              <p className="mono">ashwindersingh-dev</p>
            </a>
            <a href="https://github.com/ashwinder-bot" target="_blank" rel="noreferrer" className="contact-card glass-card">
              <FaGithub className="contact-icon" />
              <h4>GitHub</h4>
              <p className="mono">ashwinder-bot</p>
            </a>
            <a href="tel:+918290735220" className="contact-card glass-card">
              <FaPhone className="contact-icon" />
              <h4>Phone</h4>
              <p className="mono">+91 8290735220</p>
            </a>
          </div>

          <div className="contact-location reveal" style={{ transitionDelay: '0.3s' }}>
            <FaMapMarkerAlt />
            <span>Bennett University, Greater Noida, UP, India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
