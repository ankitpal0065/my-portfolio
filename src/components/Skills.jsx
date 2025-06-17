import React from 'react';

const Skills = () => {
  return (
    <section className="skills-section" style={{ padding: '2rem' }}>
      <h2>Skills</h2>

      <div style={{ marginTop: '1rem' }}>
        <h3>🛠️ Technical Skills</h3>
        <ul style={{ listStyleType: 'square', marginLeft: '2rem' }}>
          <li><strong>Programming Languages:</strong> C, C++, Java, Python, JavaScript</li>
          <li><strong>Web Technologies:</strong> HTML, CSS, React.js</li>
          <li><strong>Databases & Query Languages:</strong> MySQL, SQL, DBMS</li>
          <li><strong>Machine Learning:</strong> Data Preprocessing, Model Training, Model Validation</li>
          <li><strong>Development Platforms:</strong> Visual Studio Code, IntelliJ IDEA, Code::Blocks</li>
          <li><strong>Operating Systems:</strong> Windows 10/11, Linux</li>
        </ul>
      </div>

      <div style={{ marginTop: '1.5rem' }}>
        <h3>💡 Soft Skills</h3>
        <ul style={{ listStyleType: 'square', marginLeft: '2rem' }}>
          <li>Problem Solving</li>
          <li>Time Management</li>
          <li>Team Collaboration</li>
          <li>Fast Learner</li>
          <li>Communication Skills</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
