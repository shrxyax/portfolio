import React from "react";
import "./Projects.css";
import vaxImg from "../assets/vaxportal.png";
import spamImg from "../assets/spamclassifier.png";
import learnifyImg from "../assets/leanify.jpeg"

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-heading">Projects</h2>

      <div className="project-item">
        <img src={vaxImg} alt="VaxPortal" className="project-img" />
        <div className="project-info">
          <h3>VaxPortal</h3>
          <p>
            A web-based vaccination portal built using the MERN stack. It allows
            users to register, schedule appointments, and keep track of vaccinations.
          </p>
          <p><strong>Technologies:</strong> React.js, Node.js, Express.js, MongoDB</p>
          <a href="https://github.com/shrxyax/vaxportal" target="_blank" rel="noopener noreferrer" className="btn yellow">
            View Code
          </a>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>


      <div className="project-item">
        <img src={spamImg} alt="SMS Spam Classifier" className="project-img" />
        <div className="project-info">
          <h3>SMS Spam Classifier</h3>
          <p>
            A machine learning model that classifies SMS messages as spam or not spam.
            Built with Python and Scikit-learn, and deployed with a web interface.
          </p>
          <p><strong>Technologies:</strong> Python, Scikit-learn, Streamlit</p>
          <a href="https://github.com/shrxyax/sms-spam-classifier" target="_blank" rel="noopener noreferrer" className="btn yellow">
            View Code
          </a>
        </div>

      </div>

      <br></br>
      <br></br>
      <br></br>


      <div className="project-item">
        <img src={learnifyImg} alt="SMS Spam Classifier" className="project-img" />
        <div className="project-info">
          <h3>Learnify</h3>
          <p>
            Platform to learn new languages through interactive lessons and quizzes exercises. 
          </p>
          <p><strong>Technologies:</strong> React.js, Node.js, Express.js, MongoDB</p>
          <a href="https://github.com/shrxyax/learnify" target="_blank" rel="noopener noreferrer" className="btn yellow">
            View Code
          </a>
        </div>
        
      </div>

    </div>

    
  );
};

export default Projects;
