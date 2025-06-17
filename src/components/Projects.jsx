import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'Diabetes Prediction Web App ',
      description: 'Developed a Flask-based web application that predicts the likelihood of diabetes using a trained machine learning model. The app collects user health metrics through an interactive form and displays the prediction result with suggestions.\nIntegrated a .pkl model for real-time inference.\nApplied data preprocessing techniques and model validation. '
    },
    {
      name: 'My-Portfolio Website',
      description: 'Built and deployed a responsive personal portfolio to showcase projects, skills, and contact information.\n Implemented React Router for smooth navigation between project pages.\n Integrated project cards and certificate carousel for dynamic content display.\nHosted on GitHub Pages for easy access. '
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;
