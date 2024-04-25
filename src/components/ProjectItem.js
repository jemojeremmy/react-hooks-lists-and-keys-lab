// ProjectItem.js
import React from 'react';

function ProjectItem({ project }) {
  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      {/* Display other project details */}
    </div>
  );
}

export default ProjectItem;
