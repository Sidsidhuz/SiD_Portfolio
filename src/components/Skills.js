import React from 'react';

function Skills() {
  const skillGroups = [
    {
      title: 'Languages',
      items: ['Python', 'Java', 'C', 'SQL'],
    },
    {
      title: 'AI / ML',
      items: ['Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'Scikit-Learn', 'OpenCV'],
    },
    {
      title: 'Data & Backend',
      items: ['Pandas', 'NumPy', 'Matplotlib', 'EDA', 'FastAPI', 'Django'],
    },
    {
      title: 'Cloud & DevOps',
      items: ['AWS', 'SageMaker', 'Lambda', 'API Gateway', 'S3', 'Docker', 'CI/CD', 'Linux'],
    },
    {
      title: 'GenAI & LLMs',
      items: ['RAG', 'Ollama', 'LangChain', 'ChromaDB', 'SHAP', 'MLflow'],
    },
    {
      title: 'Tools & Platforms',
      items: ['Git', 'GitHub', 'DVC', 'Streamlit', 'SQLite', 'SQLAlchemy', 'Pytest'],
    },
  ];

  return (
    <section id="skills">
      <p className="section-eyebrow">CAPABILITIES</p>
      <div className="section-title-row">
        <h2 className="section-title">Technical <span>Skills</span></h2>
      </div>
      <div className="section-divider" />
      <p className="section-desc">
        Applied ML, deep learning, cloud-native inference, and the tooling needed to move a
        project from notebook to production.
      </p>

      <div className="skills-grid">
        {skillGroups.map(group => (
          <div className="skill-group-card" key={group.title}>
            <p className="skill-group-label">{group.title}</p>
            <div className="skill-pills">
              {group.items.map(item => (
                <span className="skill-pill" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
