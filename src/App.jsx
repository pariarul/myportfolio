import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThreeBackground from './components/ThreeBackground';
import SmoothScroll from './components/SmoothScroll';

import AIIntegration from './components/AIIntegration';

function App() {
  return (
    <Suspense fallback={<div className="bg-black w-full h-screen text-white flex items-center justify-center">Loading 3D Assets...</div>}>
      <ThreeBackground />
      <SmoothScroll>
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <AIIntegration />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </SmoothScroll>
    </Suspense>
  );
}

export default App;
