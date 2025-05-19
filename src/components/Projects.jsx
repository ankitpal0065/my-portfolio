import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'FULL-STACK E-COMMERCE ',
      description: 'Developed a fully functional e-commerce application with features like user authentication, product browsing, shopping cart and admin product management. Functionality:sign up,Log in ,Authentication, browse product, add product to the cart. '
    },
    {
      name: 'TO-DO LIST',
      description: 'created a simple and interactive TO-DO List application for task management ,enabling users to organize and prioritized daily activities ,(add, update and delete tasks dynamically)mark task as completed and pending. '
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
