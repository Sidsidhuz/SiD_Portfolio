import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  const project = {
    title: 'Plant Disease Detection using MLOps',
    description:
      'An end-to-end machine learning system for banana leaf disease classification. The project combines image preprocessing, augmentation, a custom CNN in PyTorch, experiment tracking, version control, FastAPI serving, Docker containerization, CI/CD, and deployment on Render.',
    techStack: ['Python', 'PyTorch', 'DVC', 'MLflow', 'FastAPI', 'Docker', 'GitHub Actions', 'Render'],
    architecture: [
      'Data collection and preprocessing of banana leaf images for training and validation.',
      'Image augmentation and normalization to improve robustness and reduce overfitting.',
      'Object-oriented PyTorch training pipeline for reusable experimentation.',
      'DVC for dataset and model versioning, with MLflow for run tracking and comparison.',
      'FastAPI REST endpoint for serving predictions through a public API.',
      'Dockerized application deployed to Render using a GitHub Actions pipeline.',
    ],
    features: [
      'Custom CNN model built in PyTorch for plant disease classification.',
      'Training pipeline structured with OOP for maintainability and reuse.',
      'Experiment tracking with MLflow for reproducible model comparisons.',
      'Data and model versioning with DVC to support traceable releases.',
      'REST API built using FastAPI for inference and integration.',
      'Containerized deployment with Docker and automated delivery through GitHub Actions.',
    ],
    liveDemoUrl: 'https://cnn-mlops.onrender.com:10000/',
    repoUrl: 'https://github.com/Sidsidhuz/CNN_MLOps.git',
  };

  const additionalProjects = [
    {
      title: 'sagemaker_model_deplyment',
      tech: 'Python, AWS SageMaker',
      summary:
        'AWS-based model deployment work focused on production inference and cloud delivery.',
      repo: 'https://github.com/Sidsidhuz/sagemaker_model_deplyment',
    },
    {
      title: 'sahayi',
      tech: 'FastAPI, SQLite, Payments',
      summary:
        'A service marketplace concept with geolocation-based matching and payment integration.',
      repo: 'https://github.com/Sidsidhuz/sahayi',
    },
    {
      title: 'Ai_Tutor_Mascot',
      tech: 'Python, LLMs, RAG',
      summary:
        'A voice-assisted tutoring project that explores conversational AI and retrieval-based learning.',
      repo: 'https://github.com/Sidsidhuz/Ai_Tutor_Mascot',
    },
    {
      title: 'Agro_Link_',
      tech: 'JavaScript, Web App',
      summary:
        'A farmer-to-consumer platform built around agricultural commerce and direct selling.',
      repo: 'https://github.com/Sidsidhuz/Agro_Link_',
    },
    {
      title: 'Chatbot',
      tech: 'Python, Automation',
      summary:
        'A Python chatbot project focused on conversational interaction and utility-style automation.',
      repo: 'https://github.com/Sidsidhuz/Chatbot',
    },
    {
      title: 'BLUbit',
      tech: 'Java, Application Development',
      summary:
        'A Java-based project demonstrating application logic and software development fundamentals.',
      repo: 'https://github.com/Sidsidhuz/BLUbit',
    },
    {
      title: 'PythonBasicsBeginner',
      tech: 'Python, Learning',
      summary:
        'A beginner-focused Python repository used to document foundational programming practice.',
      repo: 'https://github.com/Sidsidhuz/PythonBasicsBeginner',
    },
    {
      title: 'Daily_Notes',
      tech: 'Java, Notes / Practice',
      summary:
        'A Java repository used for daily practice notes and incremental learning work.',
      repo: 'https://github.com/Sidsidhuz/Daily_Notes',
    },
    {
      title: 'Sidsidhuz',
      tech: 'GitHub Profile Config',
      summary:
        'Your GitHub profile repository containing configuration and profile presentation files.',
      repo: 'https://github.com/Sidsidhuz/Sidsidhuz',
    },
  ];

  return (
    <section id="projects">
      <div className="section-header">
        <div>
          <p className="eyebrow">Project Showcase</p>
          <h2 className="section-title">Featured MLOps project</h2>
        </div>
        <p className="section-description">
          The portfolio centers on one production-style machine learning system so the project
          story stays clear, technical, and credible.
        </p>
      </div>

      <ProjectCard {...project} />

      <div style={{ marginTop: '20px' }}>
        <div className="section-header">
          <div>
            <p className="eyebrow">More Projects</p>
            <h3 className="section-title">Additional work from the same problem-solving mindset</h3>
          </div>
        </div>

        <div className="grid-2">
          {additionalProjects.map((item) => (
            <article className="card" key={item.title}>
              <p className="meta-label">{item.title}</p>
              <p>{item.summary}</p>
              <p className="meta-label" style={{ marginTop: '18px' }}>
                Tech Stack
              </p>
              <p>{item.tech}</p>
              <div className="button-row" style={{ marginTop: '16px' }}>
                <a className="button-secondary" href={item.repo} target="_blank" rel="noreferrer">
                  Open Repo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
