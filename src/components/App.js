// App.js
import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import ProjectList from './ProjectList';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <ProjectList />
    </div>
  );
}

export default App;
