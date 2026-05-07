import React from 'react';

function Header() {
  return (
    <section className="hero-panel" id="home">
      <div className="hero-layout">
        <div>
          <p className="eyebrow">AI/ML Engineer - Data Science Enthusiast</p>
          <h1 className="hero-title">
            Sidharth T V
          </h1>
          <p className="hero-copy">
            Computer Science graduate specializing in AI/ML, cloud-native deployment, and
            GenAI-driven solutions. I build practical machine learning systems that move from
            experimentation to production with clear architecture, measurable results, and clean
            delivery.
          </p>
          <div className="button-row">
            <a className="button" href="#projects">
              View Featured Project
            </a>
            <a className="button-secondary" href="#contact">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-side">
          <div className="hero-photo-card">
            <img className="hero-photo" src="/SiD.jpeg" alt="Sidharth T V portrait" />
          </div>

          <div className="hero-meta">
            <div className="meta-tile">
              <p className="meta-label">Summary</p>
              <p className="meta-value">
                AI/ML Engineer focused on scalable cloud-native solutions, RAG-based LLM
                applications, and production-ready ML pipelines.
              </p>
            </div>
            <div className="meta-tile">
              <p className="meta-label">Current Focus</p>
              <p className="meta-value">
                AWS SageMaker, Lambda, API Gateway, PyTorch, FastAPI, Docker, and CI/CD.
              </p>
            </div>
            <div className="meta-tile">
              <p className="meta-label">Location</p>
              <p className="meta-value">
                Kannur, Kerala, India
                <br />
                Open to relocation
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="tag-list" style={{ marginTop: '22px' }}>
        <span className="tag">Cloud-native ML</span>
        <span className="tag">GenAI</span>
        <span className="tag">MLOps</span>
        <span className="tag">RAG</span>
        <span className="tag">Deployment</span>
      </div>
    </section>
  );
}

export default Header;
