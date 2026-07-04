import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <p className="section-eyebrow">GET IN TOUCH</p>
      <div className="section-title-row">
        <h2 className="section-title">Let's <span>connect</span></h2>
      </div>
      <div className="section-divider" />
      <p className="section-desc">
        Open to AI/ML Engineer, Data Science, and Software Developer roles — including
        relocation opportunities.
      </p>

      <div className="contact-grid">
        <div className="contact-card">
          <div className="contact-row">
            <p className="contact-label">Name</p>
            <p className="contact-value">Sidharth T V</p>
          </div>
          <div className="contact-row">
            <p className="contact-label">Email</p>
            <p className="contact-value">
              <a href="mailto:sidharthchandran567@gmail.com" style={{ color: 'var(--accent)' }}>
                sidharthchandran567@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-row">
            <p className="contact-label">Phone</p>
            <p className="contact-value">
              <a href="tel:+917907051993" style={{ color: 'var(--accent)' }}>
                +91 7907051993
              </a>
            </p>
          </div>
          <div className="contact-row">
            <p className="contact-label">GitHub</p>
            <p className="contact-value">
              <a href="https://github.com/Sidsidhuz" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>
                github.com/Sidsidhuz
              </a>
            </p>
          </div>
          <div className="contact-row">
            <p className="contact-label">LinkedIn</p>
            <p className="contact-value">
              <a href="https://www.linkedin.com/in/sidharth-tv-91b6b3298" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>
                linkedin.com/in/sidharth-tv
              </a>
            </p>
          </div>
          <div>
            <p className="contact-label">Location</p>
            <p className="contact-value">Kannur, Kerala, India — Open to relocation</p>
          </div>
        </div>

        <div className="contact-card">
          <div>
            <p className="contact-label">What I'm looking for</p>
            <p className="contact-value" style={{ marginTop: 8 }}>
              Roles where I can work on ML model development, cloud deployment, GenAI systems,
              backend APIs, and production pipelines. I enjoy building things that work at scale
              and can be maintained by a team.
            </p>
          </div>
          <div>
            <p className="contact-label">Availability</p>
            <p className="contact-value" style={{ marginTop: 8 }}>
              Available for full-time roles and open to relocation.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
            <a className="btn" href="mailto:sidharthchandran567@gmail.com">Email Me</a>
            <a className="btn-ghost" href="https://github.com/Sidsidhuz" target="_blank" rel="noreferrer">View GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
