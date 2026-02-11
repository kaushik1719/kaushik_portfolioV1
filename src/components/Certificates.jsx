import React from 'react';
import './Styles/Certificates.css';

// 1. Import PDFs (These will be the links people download/view)
import SkyscannerPDF from "../assets/images/Front-End Software Engineering Job Simulation.pdf";
import AIPDF from "../assets/images/AI for Beginners.pdf";
import CanvaPDF from "../assets/images/Graphics Designing with Canva.pdf";

// 2. Import PREVIEW IMAGES (Ensure these PNGs are in your assets/images folder)
// If your filenames are different, rename these imports to match your files exactly.
import SkyscannerImg from "../assets/images/Skyscanner.png";
import AICertImg from "../assets/images/AI_Beginners.png"; 
import CanvaCertImg from "../assets/images/Canva_Design.png";

const Certificates = () => {
  const certificateData = [
    {
      title: "Front-End Software Engineering Job Simulation",
      issuer: "Skyscanner (via Forage)",
      date: "Dec 2025",
      image: SkyscannerImg,
      url: SkyscannerPDF // Points to your local PDF
    },
    {
      title: "AI for Beginners",
      issuer: "HP Foundation (HP LIFE)",
      date: "Dec 2025",
      image: AICertImg,
      url: AIPDF // Points to your local PDF
    },
    {
      title: "Graphics Designing with Canva",
      issuer: "Udemy",
      date: "Feb 2024",
      image: CanvaCertImg,
      url: CanvaPDF // Points to your local PDF
    }
  ];

  return (
    <section id="certificates" className="cert-section">
      <div className="cert-container">
        <h1 className="section-title">Certificates</h1>
        <div className="cert-grid">
          {certificateData.map((cert, index) => (
            <a 
              href={cert.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cert-card" 
              key={index}
            >
              <div className="cert-image-wrapper">
                <img src={cert.image} alt={cert.title} className="cert-img" />
                <div className="cert-overlay">
                  <span>View Full PDF</span>
                </div>
              </div>
              <div className="cert-info">
                <span className="cert-date">{cert.date}</span>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;