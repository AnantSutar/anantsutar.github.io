import React, { useState } from 'react';
import './Mywork.css';

const Mywork = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    { 
      title: 'Movie Booking Application', 
      description: 'Developed a responsive React front-end with seamless API integration using Axios, implemented a robust back-end with Node, Express, and Sequelize, and contributed to engineering analysis and thorough technical documentation.',
      github: 'https://github.com/username/movie-booking',
      technologies: ['React', 'Node.js', 'MysqL']
    },
    { 
      title: 'Chain Reaction Game', 
      description: 'Developed an interactive chain reaction game in Python with full SDLC engagement, utilizing databases, networking, and threading, applied data analytics for user insights, and ensured thorough documentation and team communication.',
      github: 'https://github.com/username/portfolio',
      technologies: ['Python', 'Tkinter','Mysql']
    },
    { 
      title: 'Machine Learning Model: Classifying Images of Road Traffic Signs', 
      description: 'Collaboratively developed traffic sign recognition models using MLP and CNN in Python, conducted EDA to improve generalization, and ensured robust performance through independent testing and benchmarking.',
      github: 'https://github.com/username/portfolio',
      technologies: ['Python', 'Scikit-Learn','Tensorflow','Pandas']
    },
    { 
      title: 'Machine Learning Model: Classifying Images of Road Traffic Signs', 
      description: 'Collaboratively developed traffic sign recognition models using MLP and CNN in Python, conducted EDA to improve generalization, and ensured robust performance through independent testing and benchmarking.',
      github: 'https://github.com/username/portfolio',
      technologies: ['Python', 'Scikit-Learn','Tensorflow','Pandas']
    },
    // Add more projects here...
  ];

  const researchPapers = [
    { 
      title: 'EEG Data Classification', 
      description: 'Computational analysis of deep learning models for EEG data classification.',
      github: 'https://github.com/username/eeg-classification',
      technologies: ['Python', 'TensorFlow']
    },
    { 
      title: 'Pneumonia Detection from X-rays', 
      description: 'Deep learning models for lung disease diagnosis using X-ray images.',
      github: 'https://github.com/username/pneumonia-detection',
      technologies: ['Python', 'CNN']
    },
    // Add more research papers/projects here...
  ];

  return (
    <div className="mywork-container">
      
      <div className="tabs">
        <button 
          className={activeTab === 'projects' ? 'active' : ''} 
          onClick={() => setActiveTab('projects')}
        >
          Projects
        </button>
        <button 
          className={activeTab === 'research' ? 'active' : ''} 
          onClick={() => setActiveTab('research')}
        >
          Research Papers
        </button>
      </div>

      <div className="work-content">
        {activeTab === 'projects' && (
          <div className="horizontal-scroll">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="technology">{tech}</span>
                  ))}
                </div>
                <a href={project.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'research' && (
          <div className="horizontal-scroll">
            {researchPapers.map((paper, index) => (
              <div className="project-card" key={index}>
                <h3>{paper.title}</h3>
                <p>{paper.description}</p>
                <div className="technologies">
                  {paper.technologies.map((tech, idx) => (
                    <span key={idx} className="technology">{tech}</span>
                  ))}
                </div>
                <a href={paper.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Mywork;
