import React from "react";
import "./About.css";
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaGithub } from "react-icons/fa";
import { SiCplusplus, SiExpress, SiMongodb, SiMysql } from "react-icons/si";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2>About Me</h2>
        <p className="about-para">
          I’m Shreya Chakraborty, a passionate UI/UX designer and full-stack developer.
          I enjoy building user-friendly, scalable web applications with modern technologies.
          My core stack includes React, Node.js, MongoDB, and Express.
        </p>
        <p className="about-para">
          I also love working on machine learning models and AI tools that make life easier.
          I’m constantly looking to learn and grow through projects, hackathons, and real-world challenges.
        </p>
        <p className="about-para">
          When I’m not coding, I enjoy design, teaching, and mentoring others. You can check out
          some of my work on the Projects page.
        </p>

        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-item"><FaJava size={40} /><p>Java</p></div>
          <div className="skill-item"><FaPython size={40} /><p>Python</p></div>
          <div className="skill-item"><SiCplusplus size={40} /><p>C/C++</p></div>
          <div className="skill-item"><FaHtml5 size={40} /><p>HTML</p></div>
          <div className="skill-item"><FaCss3Alt size={40} /><p>CSS</p></div>
          <div className="skill-item"><FaReact size={40} /><p>React.js</p></div>
          <div className="skill-item"><FaNodeJs size={40} /><p>Node.js</p></div>
          <div className="skill-item"><SiExpress size={40} /><p>Express.js</p></div>
          <div className="skill-item"><SiMongodb size={40} /><p>MongoDB</p></div>
          <div className="skill-item"><SiMysql size={40} /><p>MySQL</p></div>
          <div className="skill-item"><FaGithub size={40} /><p>GitHub</p></div>
        </div>

       <h2>Education</h2>

<p className="about-para">
  <strong>Vellore Institute of Technology</strong> | CGPA: 9.05<br />
  Bachelor of Technology (B.Tech) in Computer Science and Engineering<br />
  Vellore, Tamil Nadu<br />
  Aug. 2023 – July 2027
</p>

<p className="about-para">
  <strong>Delhi Public School</strong> | PCMB: 91% (CBSE)<br />
  Siliguri, West Bengal<br />
  Apr. 2019 – Mar. 2021
</p>

<p className="about-para">
  <strong>St. Joseph High School</strong> | 92% (ICSE)<br />
  Siliguri, West Bengal<br />
  Passed – 2019
</p>
      </div>
    </div>
  );
};

export default About;


