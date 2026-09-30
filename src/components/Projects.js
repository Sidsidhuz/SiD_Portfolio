import React from 'react';

/* SVG Icons */
const FolderIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const ChartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const BotIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <circle cx="12" cy="5" r="2" />
    <line x1="12" y1="7" x2="12" y2="11" />
    <line x1="8" y1="15" x2="8" y2="17" />
    <line x1="16" y1="15" x2="16" y2="17" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const ICONS = [FolderIcon, ChartIcon, BotIcon, FolderIcon];

function Projects() {
  const featuredProjects = [
    {
      title: 'Plant Disease Detection — MLOps',
      description: 'A reproducible computer-vision system that takes a crop image from training data to a deployable disease prediction API.',
      tags: ['Python', 'PyTorch', 'DVC', 'MLflow', 'FastAPI', 'Docker', 'GitHub Actions'],
      problem: 'Crop-disease experiments often remain isolated notebooks, making results difficult to reproduce, compare, and deploy.',
      contribution: 'I built the modular training pipeline, integrated DVC and MLflow, exposed inference through FastAPI, and containerized delivery.',
      architecture: ['Leaf dataset', 'DVC pipeline', 'EfficientNet-B0', 'MLflow', 'FastAPI', 'Docker'],
      decisions: 'Transfer learning reduces training cost; DVC and MLflow preserve reproducibility; FastAPI and Docker make inference portable.',
      challenge: 'Keeping datasets, model artifacts, experiment results, and the deployed inference contract synchronized.',
      repoUrl: 'https://github.com/Sidsidhuz/CNN_MLOps',
    },
    {
      title: 'AutoInsight — Local AutoML & Explainable AI',
      description: 'A private, no-code AutoML workspace that turns raw tabular data into understandable models and downloadable reports.',
      tags: ['Python', 'FastAPI', 'Streamlit', 'scikit-learn', 'XGBoost', 'SHAP', 'SQLite'],
      problem: 'Non-technical users need a guided ML workflow without uploading sensitive business data or stitching together separate tools.',
      contribution: 'I connected profiling, cleaning, multi-model training, ranking, SHAP explanations, predictions, and reporting into one workflow.',
      architecture: ['CSV / Excel', 'Validation', 'Smart cleaning', 'AutoML', 'SHAP', 'Reports'],
      decisions: 'A local-first design protects data; scikit-learn enables consistent pipelines; SHAP makes model decisions interpretable.',
      challenge: 'Supporting varied schemas and both classification and regression while keeping preprocessing consistent and leakage-safe.',
      repoUrl: 'https://github.com/Sidsidhuz/Enterprise-Data-Intelligence-Platform',
    },
    {
      title: 'Bot2423 — Local RAG Assistant',
      description: 'A private local assistant that combines conversational AI, retrievable memory, and on-device voice output.',
      tags: ['Python', 'FastAPI', 'Ollama', 'ChromaDB', 'Kokoro-ONNX', 'HTML/JS'],
      problem: 'Cloud assistants trade privacy for convenience and often lack durable, user-controlled personal memory.',
      contribution: 'I built the FastAPI service, Ollama integration, ChromaDB memory retrieval, local TTS pipeline, and browser chat experience.',
      architecture: ['Browser', 'FastAPI', 'ChromaDB retrieval', 'Ollama', 'Kokoro TTS', 'Audio reply'],
      decisions: 'Ollama keeps inference local, vector retrieval grounds responses in stored facts, and ONNX enables efficient offline speech.',
      challenge: 'Coordinating retrieval, generation, memory updates, and audio playback while keeping the entire path local and responsive.',
      repoUrl: 'https://github.com/Sidsidhuz/Local_Vector_RAG',
    },
    {
      title: 'AgroLink — Digital Farm Community',
      description: 'A responsive agricultural platform combining community knowledge, seasonal planning, local weather, alerts, diaries, messaging, and crop diagnosis.',
      tags: ['Python', 'FastAPI', 'SQLAlchemy', 'AsyncIO', 'Computer Vision', 'Weather API'],
      problem: 'Farmers need community knowledge, seasonal decisions, and crop-health support without switching between disconnected services.',
      contribution: 'I designed the product experience and async backend, separated routes from services and repositories, and integrated planning, weather, community, and diagnosis flows.',
      architecture: ['Web client', 'FastAPI API', 'Service layer', 'Async SQLAlchemy', 'Weather + ML', 'Alerts'],
      decisions: 'Async FastAPI supports concurrent I/O, service boundaries keep business logic maintainable, and location-aware features make advice locally relevant.',
      challenge: 'Combining social, planning, geospatial, weather, and ML features while preserving identity consistency and a calm mobile interface.',
      repoUrl: 'https://github.com/Sidsidhuz/Agro_Link_',
    },
  ];

  const additionalProjects = [
    { title: 'sagemaker_model_deployment', summary: 'AWS-based model deployment focused on production inference and cloud delivery.', tech: 'Python, AWS SageMaker', repo: 'https://github.com/Sidsidhuz/sagemaker_model_deplyment' },
    { title: 'sahayi', summary: 'A service marketplace concept with geolocation-based matching and payment integration.', tech: 'FastAPI, SQLite, Payments', repo: 'https://github.com/Sidsidhuz/sahayi' },
    { title: 'Ai_Tutor_Mascot', summary: 'A voice-assisted tutoring project exploring conversational AI and retrieval-based learning.', tech: 'Python, LLMs, RAG', repo: 'https://github.com/Sidsidhuz/Ai_Tutor_Mascot' },
    { title: 'Chatbot', summary: 'A Python chatbot focused on conversational interaction and utility-style automation.', tech: 'Python, Automation', repo: 'https://github.com/Sidsidhuz/Chatbot' },
    { title: 'BLUbit', summary: 'A Java-based project demonstrating application logic and software development fundamentals.', tech: 'Java, Application Dev', repo: 'https://github.com/Sidsidhuz/BLUbit' },
  ];

  return (
    <section className="projects-section" id="projects">
      {/* Ambient orbs behind projects */}
      <div className="projects-orb-left" />
      <div className="projects-orb-right" />

      {/* Header */}
      <div className="projects-header">
        <p className="section-eyebrow">SELECTED WORK</p>
        <div className="section-title-row">
          <h2 className="section-title">Featured <span>Projects</span></h2>
        </div>
        <div className="section-divider" />
        <p className="section-desc">
          A curated selection of AI, data, and full-stack builds with real-world impact.
        </p>
      </div>

      {/* Featured project cards */}
      <div className="featured-projects-list">
        {featuredProjects.map((proj, i) => {
          const Icon = ICONS[i] || FolderIcon;
          return (
            <article className="project-card-featured" key={proj.title}>
              <div className="project-card-top">
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div className="project-icon-box"><Icon /></div>
                  <h3 className="project-card-name">{proj.title}</h3>
                </div>
                <a className="project-external-link" href={proj.repoUrl} target="_blank" rel="noreferrer" title="GitHub">
                  <ExternalIcon />
                </a>
              </div>

              <p className="project-card-desc">{proj.description}</p>

              <div className="project-tags">
                {proj.tags.map(t => <span className="project-tag" key={t}>{t}</span>)}
              </div>

              <div className="project-case-grid">
                <div className="project-case-block">
                  <p className="project-detail-label"><span>01</span> Problem</p>
                  <p>{proj.problem}</p>
                </div>
                <div className="project-case-block">
                  <p className="project-detail-label"><span>02</span> My contribution</p>
                  <p>{proj.contribution}</p>
                </div>
                <div className="project-case-block">
                  <p className="project-detail-label"><span>03</span> Technology choices</p>
                  <p>{proj.decisions}</p>
                </div>
                <div className="project-case-block">
                  <p className="project-detail-label"><span>04</span> Hardest challenge</p>
                  <p>{proj.challenge}</p>
                </div>
              </div>

              <div className="project-architecture">
                <div className="project-architecture-title"><span>System flow</span><small>Architecture at a glance</small></div>
                <div className="project-architecture-flow">
                  {proj.architecture.map((step, index) => (
                    <React.Fragment key={step}>
                      <span className="architecture-node">{step}</span>
                      {index < proj.architecture.length - 1 && <span className="architecture-arrow" aria-hidden="true">→</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="project-card-actions">
                <a className="btn-ghost" href={proj.repoUrl} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </article>
          );
        })}
      </div>

      {/* Additional projects grid */}
      <div className="projects-grid-heading">
        <p className="section-eyebrow">MORE WORK</p>
        <h3 className="section-title" style={{ fontSize: '1.8rem' }}>Additional <span>Projects</span></h3>
        <div className="section-divider" />
      </div>

      <div className="small-projects-grid">
        {additionalProjects.map(p => (
          <article className="project-card-small" key={p.title}>
            <div className="project-card-small-top">
              <div className="project-icon-box" style={{ width: 40, height: 40 }}><FolderIcon /></div>
              <a className="project-external-link" href={p.repo} target="_blank" rel="noreferrer"><ExternalIcon /></a>
            </div>
            <h4 className="small-project-name">{p.title}</h4>
            <p className="small-project-desc">{p.summary}</p>
            <div className="project-tags">
              {p.tech.split(', ').map(t => <span className="project-tag" key={t}>{t}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
