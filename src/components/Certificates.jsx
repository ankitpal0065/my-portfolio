import React from 'react';

const Certificates = () => {
  return (
    <section style={{ padding: '2rem' }}>
      <h2>📜 Certificates</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <img src="public/certificates/oop-java.jpg.png" alt="Object Oriented Programming with Java" width="300" />
          <p>Object Oriented Programming with Java – Coursera</p>
        </div>
        <div>
          <img src="public/certificates/english-career.jpg.png" alt="English for Career Development" width="300" />
          <p>English for Career Development – Coursera</p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
