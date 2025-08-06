// src/pages/Home.jsx
import React from "react";
import "./Home.css";
import profileImage from "../assets/profile.png"; // Use your own image here
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-left">
        <h1>Hello, my name is <br /> Shreya Chakraborty</h1>
        <p className="subtext">
          I'm a passionate web developer with a strong foundation in full-stack development and a keen interest in building responsive and user-friendly web applications.
        </p>
        <div className="home-buttons">
           <a
  href="/Shreya_Resume_main.pdf"
  className="btn yellow"
  download
>
  Resume
</a>


          <a
  href="https://www.linkedin.com/in/shrxyax/"
  target="_blank"
  rel="noopener noreferrer"
  className="btn outline"
>
  LinkedIn
</a>
        </div>
      </div>
      <div className="home-right">
        <div className="yellow-shape"></div>
        <img src={profileImage} alt="profile" className="profile-img" />
      </div>
    </div>
  );
};

export default Home;
