import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',import React from 'react';

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
      <div style={{ flex: 1, minWidth: '250px' }}>
        <h2>About Me</h2>
        <p>
          I am a passionate <strong>Full Stack</strong> and <strong>Python Developer</strong> dedicated to building responsive web applications and solving real-world problems with clean code.
        </p>
      </div>

      <div style={{ flexShrink: 0, marginTop: '10px' }}>
        <img
           src="/my-portfolio/public/profile.jpg"
          alt="Ankit Kumar"
          width="220"
          style={{
            borderRadius: '50%',
            objectFit: 'cover',
            height: '220px',
            boxShadow: '0 0 10px rgba(0,0,0,0.2)',
            border: '3px solid #ccc',
          }}
        />
      </div>
    </section>
  );
};

export default About;

        padding: '20px',
        flexWrap: 'wrap',
      }}
    >
      <div style={{ flex: 1, minWidth: '250px' }}>
        <h2>About Me</h2>
        <p>
          I am a passionate <strong>Full Stack</strong> and <strong>Python Developer</strong> dedicated to building responsive web applications and solving real-world problems with clean code.
        </p>
      </div>

      <div style={{ flexShrink: 0, marginTop: '10px' }}>
        <img
          src="public/profile.jpg"
          alt="Ankit Kumar"
          width="220"
          style={{
            borderRadius: '50%',
            objectFit: 'cover',
            height: '220px',
            boxShadow: '0 0 10px rgba(0,0,0,0.2)',
            border: '3px solid #ccc',
          }}
        />
      </div>
    </section>
  );
};

export default About;
