import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home.jsx';
import Background from './components/Background';
import Education from './components/Education';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';



/**
 * Reusable Section component for consistent layout across the SPA
 */
const Section = ({ id, title }) => (
  <section id={id}>
    <div className="section-content">
      <h1 className="section-title">{title}</h1>
      <p className="section-subtitle">
        Professional portfolio section for {title}.
      </p>
    </div>
  </section>
);

function App() {
  return (
    <div className="app-container">
      {/* Fixed background layer */}
      <Background />
      
      {/* Persistent Navigation */}
      <Navbar />
      
      <main>
        {/* Main Landing Section */}
        <Home />

        {/* Content Sections mapped to Navbar IDs */}
        <Education/>

        <Skills />
        <Certificates />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;