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
      title: 'Cloud & Tools',
      items: ['AWS', 'SageMaker', 'Lambda', 'API Gateway', 'SNS', 'S3', 'Docker', 'CI/CD', 'Linux'],
    },
  ];

  return (
    <section id="skills">
      <div className="section-header">
        <div>
          <p className="eyebrow">Skills</p>
          <h2 className="section-title">Technical strengths across ML, cloud, and delivery</h2>
        </div>
        <p className="section-description">
          The stack below reflects your resume: applied ML, deep learning, cloud-native inference,
          and the tooling needed to move a project from notebook to deployment.
        </p>
      </div>

      <div className="grid-2">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <p className="meta-label">{group.title}</p>
            <div className="tag-list">
              {group.items.map((item) => (
                <span className="skill-pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
