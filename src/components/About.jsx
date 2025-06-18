import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        flexWrap: 'wrap',
      }}
    >
      {/* Left Text Section */}
      <div style={{ flex: 1, minWidth: '250px' }}>
        <h2>About Me</h2>
        <p>
          I am a passionate <strong>Full Stack</strong> and <strong>Python Developer</strong> dedicated to building responsive web applications and solving real-world problems with clean code.
        </p>
      </div>

      {/* Right Image Section (centered + slight shift on mobile) */}
      <div
        style={{
          flexShrink: 0,
          marginTop: '20px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img
          src="/my-portfolio/profile.jpg"
          alt="Ankit Kumar"
          width="220"
          style={{
            borderRadius: '50%',
            objectFit: 'cover',
            height: '220px',
            boxShadow: '0 0 10px rgba(0,0,0,0.2)',
            border: '3px solid #ccc',
            transform: 'translateX(20px)', // slight right shift on small screens
          }}
        />
      </div>
    </section>
  );
};

export default About;
