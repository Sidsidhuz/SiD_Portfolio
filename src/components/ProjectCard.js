import React from 'react';

function ProjectCard({ title, description, techStack, architecture, features, liveDemoUrl, repoUrl }) {
  return (
    <article className="project-card glass card-3d">
      <div className="section-header" style={{ alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <div className="glass" style={{ width: '48px', height: '48px', borderRadius: '12px', display: 'grid', placeItems: 'center' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-olive)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <h3 className="section-title" style={{ fontSize: '1.8rem', margin: 0 }}>{title}</h3>
          </div>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>{description}</p>
        </div>
        
        <div className="project-links" style={{ alignSelf: 'flex-start' }}>
          <a className="button-secondary" href={repoUrl} target="_blank" rel="noreferrer" style={{ padding: '10px 16px' }}>
            GitHub
          </a>
          {liveDemoUrl && liveDemoUrl !== '#' && (
            <a className="button" href={liveDemoUrl} target="_blank" rel="noreferrer" style={{ padding: '10px 16px' }}>
              Demo
            </a>
          )}
        </div>
      </div>

      <div className="tag-list" style={{ marginTop: '0', marginBottom: '24px' }}>
        {techStack.map((item) => (
          <span className="tag" key={item}>
            {item}
          </span>
        ))}
      </div>

      <div className="grid-2">
        <div className="glass" style={{ padding: '24px', borderRadius: '16px' }}>
          <p className="meta-label">Architecture</p>
          <ol className="project-list" style={{ paddingLeft: '0' }}>
            {architecture.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>

        <div className="glass" style={{ padding: '24px', borderRadius: '16px' }}>
          <p className="meta-label">Key Features</p>
          <ul className="project-list" style={{ paddingLeft: '0' }}>
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;