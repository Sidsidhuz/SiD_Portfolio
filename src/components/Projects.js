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

const ICONS = [FolderIcon, ChartIcon, BotIcon];

function Projects() {
  const featuredProjects = [
    {
      title: 'Plant Disease Detection — MLOps',
      description: 'An end-to-end machine learning system for banana leaf disease classification combining image preprocessing, a custom CNN in PyTorch, experiment tracking, FastAPI serving, Docker, and CI/CD deployment.',
      tags: ['Python', 'PyTorch', 'DVC', 'MLflow', 'FastAPI', 'Docker', 'GitHub Actions'],
      architecture: [
        'Data collection and preprocessing of banana leaf images.',
        'Object-oriented PyTorch training pipeline with augmentation.',
        'DVC for dataset versioning, MLflow for experiment tracking.',
        'FastAPI REST endpoint for serving predictions via public API.',
        'Dockerized deployment to Render via GitHub Actions CI/CD.',
      ],
      features: [
        'Custom CNN model for plant disease classification.',
        'Reproducible experiments with MLflow comparisons.',
        'Automated delivery through containerized CI/CD pipeline.',
        'Live REST API for inference and integration.',
      ],
      repoUrl: 'https://github.com/Sidsidhuz/CNN_MLOps.git',
      demoUrl: 'https://cnn-mlops.onrender.com:10000/',
    },
    {
      title: 'AutoInsight — Local AutoML & Explainable AI',
      description: 'A no-code, fully local machine learning platform that automatically profiles, cleans, trains multiple ML models, explains predictions using SHAP, and generates downloadable PDF/Excel reports — zero cloud dependencies.',
      tags: ['Python', 'FastAPI', 'Streamlit', 'scikit-learn', 'XGBoost', 'SHAP', 'SQLite'],
      architecture: [
        'Streamlit frontend communicating via REST with FastAPI backend.',
        'SQLite for local state management and metadata storage.',
        'AutoML with RandomizedSearchCV across 5+ algorithms.',
        'SHAP integration for global and per-prediction explanations.',
        'ReportLab (PDF) and OpenPyXL (Excel) for report generation.',
      ],
      features: [
        'Auto Profiling, Smart Cleaning, and interactive EDA charts.',
        'Side-by-side model leaderboard ranked by F1-Score or R².',
        'SHAP waterfall charts explaining individual predictions.',
        'Batch predictions and downloadable executive summaries.',
      ],
      repoUrl: 'https://github.com/Sidsidhuz/Enterprise-Data-Intelligence-Platform.git',
      demoUrl: null,
    },
    {
      title: 'Bot2423 — Local RAG Assistant',
      description: 'A fully local AI assistant with a web chat interface, persistent memory via RAG and ChromaDB vector search, and on-device voice output. Complete data privacy with zero external API dependencies.',
      tags: ['Python', 'FastAPI', 'Ollama', 'ChromaDB', 'Kokoro-ONNX', 'HTML/JS'],
      architecture: [
        'FastAPI backend handling requests and serving static assets.',
        'Ollama integration running the gemma3:latest model locally.',
        'ChromaDB vector database for storing personalized facts.',
        'Kokoro ONNX engine for fast, local text-to-speech generation.',
        'Vanilla JS frontend for seamless chat and audio playback.',
      ],
      features: [
        'Web-based chat communicating with a local LLM.',
        'Fact ingestion tool for personalized memory via RAG.',
        'Context-aware responses using vector retrieval.',
        'In-browser voice playback of assistant responses.',
      ],
      repoUrl: 'https://github.com/Sidsidhuz/RAG.git',
      demoUrl: null,
    },
  ];

  const additionalProjects = [
    { title: 'sagemaker_model_deployment', summary: 'AWS-based model deployment focused on production inference and cloud delivery.', tech: 'Python, AWS SageMaker', repo: 'https://github.com/Sidsidhuz/sagemaker_model_deplyment' },
    { title: 'sahayi', summary: 'A service marketplace concept with geolocation-based matching and payment integration.', tech: 'FastAPI, SQLite, Payments', repo: 'https://github.com/Sidsidhuz/sahayi' },
    { title: 'Ai_Tutor_Mascot', summary: 'A voice-assisted tutoring project exploring conversational AI and retrieval-based learning.', tech: 'Python, LLMs, RAG', repo: 'https://github.com/Sidsidhuz/Ai_Tutor_Mascot' },
    { title: 'Agro_Link', summary: 'A farmer-to-consumer platform built around agricultural commerce and direct selling.', tech: 'JavaScript, Web App', repo: 'https://github.com/Sidsidhuz/Agro_Link_' },
    { title: 'Chatbot', summary: 'A Python chatbot focused on conversational interaction and utility-style automation.', tech: 'Python, Automation', repo: 'https://github.com/Sidsidhuz/Chatbot' },
    { title: 'BLUbit', summary: 'A Java-based project demonstrating application logic and software development fundamentals.', tech: 'Java, Application Dev', repo: 'https://github.com/Sidsidhuz/BLUbit' },
    { title: 'Neural Voice XTTS', summary: 'Experimental neural text-to-speech and voice cloning exploration project.', tech: 'Python, XTTS, Audio', repo: '#' },
    { title: 'Fantasy Cric Prediction', summary: 'A machine learning project for predicting fantasy cricket team outcomes.', tech: 'Python, ML, Sports Data', repo: '#' },
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

              <div className="project-card-body">
                <div className="project-detail-block">
                  <p className="project-detail-label">Architecture</p>
                  <ul className="project-detail-list">
                    {proj.architecture.map(a => <li key={a}>{a}</li>)}
                  </ul>
                </div>
                <div className="project-detail-block">
                  <p className="project-detail-label">Key Features</p>
                  <ul className="project-detail-list">
                    {proj.features.map(f => <li key={f}>{f}</li>)}
                  </ul>
                </div>
              </div>

              <div className="project-card-actions">
                <a className="btn-ghost" href={proj.repoUrl} target="_blank" rel="noreferrer">GitHub</a>
                {proj.demoUrl && (
                  <a className="btn" href={proj.demoUrl} target="_blank" rel="noreferrer">Live Demo</a>
                )}
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
