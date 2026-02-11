import React from 'react';
import './Styles/Education.css';
// Import your assets
import UTULogo from '../assets/utu.png'; 
import AshadeepLogo from '../assets/ashadeep.png';
import GajeraLogo from '../assets/gajera.png';

const Education = () => {
  const educationData = [
    {
      year: "August 2022 - Present",
      degree: "B.Tech, Information Technology",
      institution: "Uka Tarsadia University",
      description: "GPA: 8.60/10 (Till Sem 6)",
      logo: UTULogo // Link the imported image here
    },
    {
      year: "June 2020 - March 2022",
      degree: "HSC (Higher Secondary Certificate)",
      institution: "Ashadeep IIT",
      description: "Percentage: 54%",
      logo: AshadeepLogo
    },
    {
      year: "June 2019 - March 2020",
      degree: "SSC (Secondary School Certificate)",
      institution: "Gajera Vidhyabhavan",
      description: "Percentage: 72%",
      logo: GajeraLogo
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <h1 className="section-title">Education</h1>
        
        <div className="education-cards">
          {educationData.map((item, index) => (
            <div className="edu-card" key={index}>
              <div className="card-glass-effect"></div>
              
              {/* Circular Logo Container */}
              <div className="edu-logo-container">
                <img src={item.logo} alt={item.institution} className="edu-logo-img" />
              </div>

              <div className="card-content">
                <span className="edu-year">{item.year}</span>
                <h3 className="edu-degree">{item.degree}</h3>
                <h4 className="edu-institution">{item.institution}</h4>
                <p className="edu-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;