import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarCanvas from './components/StarCanvas';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  return (
    <div className="app-shell">
      {/* Animated starfield — visible in dark mode only */}
      <StarCanvas visible={theme === 'dark'} />

      {/* Ambient lighting glow */}
      <div className="ambient-glow" />

      <Navbar theme={theme} toggleTheme={toggleTheme} />

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
