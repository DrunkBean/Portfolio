import React from 'react';
import './Projects.css';
import proj1 from '../img/project1.png';
import proj2 from '../img/project2.png';
import proj3 from '../img/project3.png';
import Reviews from '../Components/Reviews';

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        {/* Title */}
        <div className="project-title">
          <h1>Projects</h1>
          <hr className="divider" />
        </div>

        {/* Projects top row (2 columns) */}
        <div className="projects-top">
          <div className="project-card">
            <img src={proj1} alt="Project 1" className="project-img" />
            <div className="project-tags">
              <span>UI/UX Design</span>
              <span>Figma</span>
            </div>
          </div>
          <div className="project-card">
            <img src={proj2} alt="Project 2" className="project-img" />
            <div className="project-tags">
              <span>Mob App Dev</span>
              <span>Python</span>
            </div>
          </div>
        </div>

        {/* Projects bottom row (1 column) */}
        <div className="projects-bottom">
          <div className="project-card project-large">
            <img src={proj3} alt="Project 3" className="project-img" />
            <div className="project-tags">
              <span>Web Dev</span>
              <span>React JS</span>
              <span>Javascript</span>
            </div>
          </div>
        </div>
      </div>
      <Reviews/>
    </section>
  );
};

export default Projects;
