import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Contact Me</h2>
      
      <p>
        📧 Email:{" "}
        <a href="mailto:ankitkumark0065@gmail.com" style={{ color: '#00bcd4' }}>
          ankitkumark0065@gmail.com
        </a>
      </p>

      <p>
        🔗 LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/ankitkumar0065"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#0a66c2' }}
        >
          linkedin.com/in/ankitkumar0065
        </a>
      </p>
    </section>
  );
};

export default Contact;
