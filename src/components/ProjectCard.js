import React from 'react';

function ProjectCard({ title, description, techStack, architecture, features, liveDemoUrl, repoUrl }) {
  return (
    <article className="project-card section-card">
      <div className="section-header">
        <div>
          <p className="eyebrow">Featured Project</p>
          <h3 className="section-title">{title}</h3>
        </div>
        <div className="project-links">
          <a className="button-secondary" href={repoUrl} target="_blank" rel="noreferrer">
            GitHub Repository
          </a>
          <a className="button" href={liveDemoUrl} target="_blank" rel="noreferrer">
            Live Demo / API
          </a>
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <p className="meta-label">Description</p>
          <p>{description}</p>
          <p className="meta-label" style={{ marginTop: '24px' }}>
            Tech Stack
          </p>
          <div className="tag-list">
            {techStack.map((item) => (
              <span className="tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="card">
          <p className="meta-label">Architecture</p>
          <ol className="project-list">
            {architecture.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="card">
        <p className="meta-label">Key Features</p>
        <ul className="project-list">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ProjectCard;