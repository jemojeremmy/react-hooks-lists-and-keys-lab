// ProjectList.js
import React from 'react';

function ProjectList({ projects }) {
  // Check if projects prop is defined and is an array before mapping over it
  const projectItems = projects && Array.isArray(projects)
    ? projects.map(project => (
        <div key={project.id}>
          <h3>{project.name}</h3>
          <p>{project.about}</p>
          <p>Technologies: {project.technologies.join(', ')}</p>
        </div>
      ))
    : null;

  return (
    <div>
      <h2>Projects</h2>
      {projectItems}
    </div>
  );
}

export default ProjectList;
