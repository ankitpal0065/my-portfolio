import React from 'react';

const Certificates = () => {
  return (
    <section style={{ padding: '2rem' }}>
      <h2>📜 Certificates</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        {/* Certificate 1 */}
        <div>
          <img
            src={`${import.meta.env.BASE_URL}certificates/oop-java.jpg.png`}
            alt="OOP Java"
            style={{ width: '300px', height: 'auto' }}
          />
          <p>Object Oriented Programming with Java – Coursera</p>
        </div>

        {/* Certificate 2 */}
        <div>
          <img
            src={`${import.meta.env.BASE_URL}certificates/english-career.jpg.png`}
            alt="English for Career Development"
            style={{ width: '300px', height: 'auto' }}
          />
          <p>English for Career Development – Coursera</p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
