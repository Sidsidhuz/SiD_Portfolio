import React from 'react';

function About() {
  return (
    <section id="about">
      <div className="section-header">
        <div>
          <p className="eyebrow">About Me</p>
          <h2 className="section-title">A practical engineer with cloud-native and GenAI focus</h2>
        </div>
      </div>

      <div className="about-card">
        <p>
          I am a Computer Science graduate specializing in AI/ML, cloud-native solutions, and
          GenAI. My work sits at the point where model development meets product engineering:
          building systems that are testable, versioned, observable, and ready to deploy.
        </p>
        <p>
          I have worked on image classification, training pipelines, APIs, serverless inference,
          and RAG-based LLM applications. I aim to present technical work clearly and
          professionally, with enough detail to show depth without overwhelming the reader.
        </p>
      </div>

      <div className="grid-2" style={{ marginTop: '20px' }}>
        <div className="card">
          <p className="meta-label">Education</p>
          <ul className="about-list">
            <li>B.Tech in Computer Science and Engineering (AI & ML), St. Thomas College of Engineering, Chengannur, 2021 - 2025.</li>
            <li>Advanced Data Science with AI, Gofree Lab Technologies, Kochi, May 2025 - Dec 2025.</li>
          </ul>
        </div>

        <div className="card">
          <p className="meta-label">Experience</p>
          <ul className="about-list">
            <li>Data Science Intern, Expertzlab Technologies, Palarivattom, Dec 2025 - Present.</li>
            <li>AI Intern, Secneural, Qatar, Jun 2024 - Jul 2024.</li>
            <li>Intern, Srishti Robotics, Ernakulam, May 2023 - Jun 2023.</li>
          </ul>
        </div>
      </div>

      <div className="grid-2" style={{ marginTop: '20px' }}>
        <div className="card">
          <p className="meta-label">Certifications</p>
          <ul className="about-list">
            <li>The Joy of Computing using Python - NPTEL</li>
            <li>Big Data Computing - NPTEL</li>
            <li>Ethical Hacking - Udemy</li>
          </ul>
        </div>

        <div className="card">
          <p className="meta-label">Leadership & Activities</p>
          <ul className="about-list">
            <li>Technical Lead, IEDC (2024 - 2025)</li>
            <li>Member, Google Developer Community and IEEE</li>
            <li>Interest in problem-solving, system design, and practical product delivery</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
