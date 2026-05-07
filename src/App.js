import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Header />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
