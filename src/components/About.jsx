import React from 'react';
import myImage from '../assets/me.jpg'; // ← your image here
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Hi, I’m Ankit Kumar, a passionate and curious front-end developer currently pursuing my MCA from Graphic Era Hill University.My journey in tech began with a strong foundation in computer science, and since then, I’ve been continuously evolving—learning modern tools like React, Node.js, and MongoDB. I enjoy turning ideas into interactive experiences and take pride in writing efficient and maintainable code.
        </p>
      </div>
      <div className="about-image">
        <img src={myImage} alt="My Profile" />
      </div>
    </section>
  );
};

export default About;
