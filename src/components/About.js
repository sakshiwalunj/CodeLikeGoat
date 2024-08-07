import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-container">
      <style>
        {`
          .about-container {
            text-align: center;
            margin-top: 50px;
            font-family: 'Arial', sans-serif;
          }

          h1 {
            color: #0039a6;
            font-size: 45px;
          }

          p {
            color: #333;
            font-size: 30px;
            line-height: 1.6;
            margin: 20px auto;
            max-width: 800px;
          }

          .social-links {
            margin-top: 20px;
          }

          .social-links a {
            color: #0039a6;
            text-decoration: none;
            margin: 0 10px;
            font-size: 60px; /* Increased icon size */
            transition: color 0.3s;
            display: inline-block;
          }

          .social-links a:hover {
            color: #333;
          }
        `}
      </style>
      <h1>About Me</h1>
      <p>
        Hello! I'm a software engineer who builds cool projects and spends a lot of time coding. I love creating innovative solutions and diving deep into the world of programming. Feel free to explore my work and connect with me!
      </p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default About;
