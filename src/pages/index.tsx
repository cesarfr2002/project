import { useState } from 'react';
import { cn } from '@/lib/utils'; // Asegúrate de que la ruta sea correcta
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="w-full flex flex-col items-center">
        <section id="home" className={cn('min-h-screen w-full flex items-center justify-center py-20', activeSection === 'home' ? 'block' : 'hidden')}>
          <Hero setActiveSection={setActiveSection} />
        </section>

        <section id="about" className={cn('min-h-screen w-full flex items-center justify-center py-20', activeSection === 'about' ? 'block' : 'hidden')}>
          <About />
        </section>

        <section id="projects" className={cn('min-h-screen w-full flex items-center justify-center py-20', activeSection === 'projects' ? 'block' : 'hidden')}>
          <Projects />
        </section>

        <section id="contact" className={cn('min-h-screen w-full flex items-center justify-center py-20', activeSection === 'contact' ? 'block' : 'hidden')}>
          <Contact />
        </section>
      </main>
    </div>
  );
}