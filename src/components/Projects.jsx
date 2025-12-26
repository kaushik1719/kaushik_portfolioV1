import React, { useState } from 'react';
import './Styles/Projects.css';

// Check your folder for these exact names:
import DoctorImg from '../assets/images/doctor.jpg';
import MovieImg from '../assets/images/movie.jpg';
import AnomalyImg from '../assets/images/anomaly.jpg';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Doctor Appointment Management System",
      duration: "February 2025 - April 2025",
      image: DoctorImg,
      skills: ["MongoDB", "Express.js", "React", "Node.js"],
      details: [
        "Built a full-stack doctor appointment system using the MERN stack.",
        "Enabled patient registration, doctor profiles, and appointment booking with secure JWT authentication.",
        "Designed responsive UI and implemented role-based dashboards for admin, doctors, and patients."
      ]
    },
    {
      id: 2,
      title: "Movie Review Web App",
      duration: "September 2024 - October 2024",
      image: MovieImg,
      skills: ["React.js", "CSS Transitions", "UI/UX"],
      details: [
        "Built a Movie Review Web App using React JS with a focus on clean, responsive UI.",
        "Designed static movie flashcards with elevated hover effects to enhance visual appeal.",
        "Implemented modular and reusable components for scalability."
      ]
    },
    {
      id: 3,
      title: "Unsupervised Anomaly Detection",
      duration: "August 2025 - October 2025",
      image: AnomalyImg,
      skills: ["Python", "ResNet-50", "Machine Learning"],
      details: [
        "Implemented an unsupervised system using PatchCore with ResNet-50 for industrial inspection.",
        "Utilized feature extraction and memory bank subsampling on the MVTec Carpet dataset.",
        "Analyzed confusion matrices and F1-scores to reach up to 91% model accuracy."
      ]
    }
  ];

  const handleOpen = (project) => {
    setActiveProject(project);
    document.body.style.overflow = 'hidden'; // Stop background scroll
  };

  const handleClose = () => {
    setActiveProject(null);
    document.body.style.overflow = 'auto'; // Re-enable scroll
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h1 className="section-title">Projects</h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card" onClick={() => handleOpen(project)}>
              <div className="project-preview">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  <span>View Details</span>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-skills-list">
                  {project.skills.map((skill, i) => (
                    <span key={i} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP MODAL */}
      {activeProject && (
        <div className="modal-backdrop" onClick={handleClose}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleClose}>&times;</button>
            <h2 className="modal-project-title">{activeProject.title}</h2>
            <p className="modal-project-date">{activeProject.duration}</p>
            <div className="modal-divider"></div>
            <ul className="modal-points">
              {activeProject.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="modal-footer">
              {activeProject.skills.map((s, i) => <span key={i} className="footer-tag">#{s}</span>)}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;