import React from 'react';

function Header() {
  const portraitSrc = `${process.env.PUBLIC_URL}/SiD.jpeg`;

  return (
    <section className="hero-section" id="home">
      {/* LEFT — Big title */}
      <div>
        <p className="hero-eyebrow">AI &amp; DATA SCIENCE</p>
        <h1 className="hero-title">
          Sidharth<br />
          T V<br />
          <span className="hero-title-shimmer">AI &amp; ML</span><br />
          Engineer
        </h1>
        <p className="hero-copy">
          Building intelligent solutions with Python, Machine Learning,
          and Cloud Architecture.
        </p>
        <div className="hero-cta-row">
          <a className="btn" href="#projects">View Projects</a>
          <a className="btn-ghost" href="#contact">Contact Me</a>
        </div>
      </div>

      {/* RIGHT — Profile card */}
      <div className="hero-card">
        <div className="hero-avatar">
          <img src={portraitSrc} alt="Sidharth T V" />
        </div>

        <p className="hero-highlights-label">Quick Highlights</p>
        <ul className="hero-highlights-list">
          <li>AI and data analysis focus</li>
          <li>Cloud architecture and full-stack builds</li>
          <li>Open to roles in AI/ML engineering</li>
        </ul>

        <div className="hero-stats">
          <div className="stat-box">
            <div className="stat-value">5+</div>
            <div className="stat-label">Projects</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">AI/ML</div>
            <div className="stat-label">Specialization</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">GenAI</div>
            <div className="stat-label">Focus Area</div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Header;
