import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Certifications from '@/sections/Certifications';
import Education from '@/sections/Education';
import Resume from '@/sections/Resume';
import Contact from '@/sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-base-900">
      {/* Ambient background grid */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.15]" />

      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
