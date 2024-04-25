// About.js
import React from 'react';

function About({ github }) {
  // Ensure github prop is defined before accessing its properties
  const githubUrl = github ? github.url : '';

  return (
    <div>
      <h2>About</h2>
      <p>GitHub URL: <a href={githubUrl}>{githubUrl}</a></p>
    </div>
  );
}

export default About;
