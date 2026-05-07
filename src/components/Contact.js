import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <div className="section-header">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Let’s connect</h2>
        </div>
        <p className="section-description">
          Open to AI/ML Engineer, Data Science, and Software Developer roles, including
          relocation opportunities.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <p className="contact-label">Name</p>
          <p>Sidharth T V</p>
          <p className="contact-label">Email</p>
          <p>
            <a className="text-link" href="mailto:sidharthchandran567@gmail.com">
              sidharthchandran567@gmail.com
            </a>
          </p>
          <p className="contact-label">Phone</p>
          <p>
            <a className="text-link" href="tel:+917907051993">
              +91 7907051993
            </a>
          </p>
          <p className="contact-label">GitHub</p>
          <p>
            <a
              className="text-link"
              href="https://github.com/Sidsidhuz"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Sidsidhuz
            </a>
          </p>
          <p className="contact-label">LinkedIn</p>
          <p>
            <a className="text-link" href="https://www.linkedin.com/in/sidharth-tv-91b6b3298" target="_blank" rel="noreferrer">
              LinkedIn profile
            </a>
          </p>
          <p className="contact-label">Location</p>
          <p>Kannur, Kerala, India</p>
        </div>

        <div className="contact-card">
          <p className="contact-label">What I’m looking for</p>
          <p>
            Roles where I can work on ML model development, cloud deployment, GenAI systems,
            backend APIs, and production pipelines.
          </p>
          <p className="contact-label">Availability</p>
          <p>Available for full-time roles and open to relocation.</p>
          <div className="button-row">
            <a className="button" href="mailto:sidharthchandran567@gmail.com">
              Email Me
            </a>
            <a className="button-secondary" href="https://github.com/Sidsidhuz" target="_blank" rel="noreferrer">
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
