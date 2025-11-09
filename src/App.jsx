import React from 'react';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black font-inter">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/10">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 h-14 flex items-center justify-between">
          <a href="#" className="text-sm font-semibold tracking-wide uppercase">Your Name</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-black/70">
            <a href="#projects" className="hover:text-black">Projects</a>
            <a href="#experience" className="hover:text-black">Experience</a>
            <a href="#stack" className="hover:text-black">Stack</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Projects />
        <Experience />
        <TechStack />
      </main>

      <Footer />
    </div>
  );
}
