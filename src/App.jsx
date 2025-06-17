import React from 'react';
import Header from './components/Header';
import About from './components/About';
import CareerObjective from './components/CareerObjective';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';
import FeedbackForm from './components/FeedbackForm';
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
      
      <Header />
      <About />
      <CareerObjective />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
       <section id="feedback" className="my-12">
        <FeedbackForm />
      </section>
      <Footer />

    </div>
  );
}

export default App;
