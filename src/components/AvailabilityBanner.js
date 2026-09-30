import React from 'react';

function AvailabilityBanner() {
  return (
    <aside className="availability-banner" aria-label="Career availability">
      <div className="availability-status">
        <span aria-hidden="true" />
        AVAILABLE FOR OPPORTUNITIES
      </div>
      <div className="availability-copy">
        <h2>Available for AI/ML and Python roles</h2>
        <p>
          B.Tech AI &amp; Data Science graduate with practical experience building
          computer-vision pipelines, local LLM applications, explainable ML systems,
          FastAPI services and MLOps workflows.
        </p>
      </div>
      <a className="availability-link" href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>
    </aside>
  );
}

export default AvailabilityBanner;
