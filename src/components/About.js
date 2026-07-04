import React from 'react';

const CERTS = [
  { name: 'The Joy of Computing using Python', source: 'NPTEL' },
  { name: 'Big Data Computing', source: 'NPTEL' },
  { name: 'Introduction to Internet of Things', source: 'NPTEL' },
  { name: 'AWS Certified Generative AI Developer', source: 'LinkedIn Learning' },
  { name: 'Microsoft Azure AI Engineer Associate (AI-102)', source: 'LinkedIn Learning' },
  { name: 'Python for Data Science & ML — Parts 1 & 2', source: 'LinkedIn Learning' },
  { name: 'Python Data Structures: Linked Lists', source: 'LinkedIn Learning' },
  { name: 'Advanced Android App Development (Java)', source: 'Course Certification' },
  { name: 'Amazon Generative AI', source: 'Amazon / AWS' },
];

function About() {
  return (
    <section id="about">
      <p className="section-eyebrow">ABOUT ME</p>
      <div className="section-title-row">
        <h2 className="section-title">About <span>Me</span></h2>
      </div>
      <div className="section-divider" />

      <div className="about-bento">

        {/* ─── Col 1: Profile tile ─── */}
        <div className="bento-tile about-profile-tile">
          <p className="bento-tile-label">PROFILE</p>
          <h3 className="about-name">Sidharth T V</h3>
          <span className="about-role-tag">AI &amp; DS Engineer</span>
          <p className="about-bio">
            AI/DS engineer building ML pipelines, data products, and cloud-native apps that ship
            fast. Focused on applied ML, explainability, and GenAI-driven solutions.
          </p>
          <hr className="about-profile-divider" />
          <div className="about-link-pills">
            <a className="about-link-pill" href="https://github.com/Sidsidhuz" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="about-link-pill" href="https://www.linkedin.com/in/sidharth-tv-91b6b3298" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        {/* ─── Col 2 Top: Technical Focus ─── */}
        <div className="bento-tile about-focus-tile">
          <p className="bento-tile-label">Technical Focus</p>
          <p className="focus-body">
            Focused on AI/ML, analytics, and production-ready full-stack builds with a
            cloud-first mindset.
          </p>
          <div className="project-tags">
            <span className="project-tag">Python &amp; AI/ML</span>
            <span className="project-tag">Data Analysis (SQL/EDA)</span>
            <span className="project-tag">Web Dev (HTML/CSS/JS)</span>
            <span className="project-tag">Cloud Architecture</span>
            <span className="project-tag">FastAPI &amp; Docker</span>
            <span className="project-tag">GenAI &amp; RAG</span>
          </div>
        </div>

        {/* ─── Col 3 Top: Location ─── */}
        <div className="bento-tile about-location-tile">
          <div className="location-pin">📍</div>
          <div className="location-city">Kannur</div>
          <div className="location-sub">Kerala, India</div>
          <div className="location-tz">GMT+5:30</div>
        </div>

        {/* ─── Col 2 Bottom: Certifications ─── */}
        <div className="bento-tile about-certs-tile">
          <p className="bento-tile-label">Certifications</p>
          <ul className="cert-list">
            {CERTS.map(c => (
              <li className="cert-item" key={c.name}>
                <span className="cert-dot" />
                <span>
                  {c.name}
                  <span className="cert-source">{c.source}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ─── Col 3 Bottom: Education ─── */}
        <div className="bento-tile about-edu-tile">
          <p className="bento-tile-label">Education</p>

          <div className="edu-item">
            <div className="edu-title">B.Tech in AI &amp; Data Science</div>
            <div className="edu-school">
              St. Thomas College of Engineering &amp; Technology, Chengannur
            </div>
            <span className="edu-badge">2021 – 2025</span>
          </div>

          <div className="edu-item">
            <div className="edu-title">Advanced Data Science with AI</div>
            <div className="edu-school">Gofree Lab Technologies, Kochi</div>
            <span className="edu-badge">May – Dec 2025</span>
          </div>

          <hr className="about-profile-divider" style={{ margin: '12px 0' }} />

          <p className="bento-tile-label" style={{ marginBottom: 8 }}>Experience</p>
          <div className="edu-item">
            <div className="edu-title" style={{ fontSize: '0.88rem' }}>Data Science Intern</div>
            <div className="edu-school">Expertzlab Technologies — Dec 2025–Present</div>
          </div>
          <div className="edu-item">
            <div className="edu-title" style={{ fontSize: '0.88rem' }}>AI Intern</div>
            <div className="edu-school">Secneural, Qatar — Jun–Jul 2024</div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
