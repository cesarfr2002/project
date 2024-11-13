import { ChevronRight, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaPython, FaJava, FaDocker, FaAws } from 'react-icons/fa';
import { SiDjango, SiFastapi, SiPostgresql } from 'react-icons/si';
import profileImage from '@/images/elegan.jpeg';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  const [text, setText] = useState('');
  const fullText = 'César Franco';
  const [showCursor, setShowCursor] = useState(true);
  const [commandIndex, setCommandIndex] = useState(0);

  const commands = [
    { text: '> Loading profile...', delay: 500 },
    { text: '> Initializing skills...', delay: 1000 },
    { text: '> Backend: Python, Django, FastAPI', delay: 1500 },
    { text: '> Database: PostgreSQL, MongoDB', delay: 2000 },
    { text: '> Profile loaded successfully!', delay: 2500 },
  ];

  const additionalCommands = [
    { text: '> Setting up environment...', delay: 3000 },
    { text: '> Fetching latest projects...', delay: 3500 },
    { text: '> Projects ready for review!', delay: 4000 },
  ];

  const allCommands = [...commands, ...additionalCommands];

  const stats = [
    { label: 'Años de Experiencia', value: '2+' },
    { label: 'Proyectos Completados', value: '20+' },
    { label: 'Líneas de Código', value: '50k+' },
    { label: 'Tecnologías Dominadas', value: '10+' }
  ];


  const techBadges = [
    { name: 'Python', icon: FaPython },
    { name: 'Django', icon: SiDjango },
    { name: 'FastAPI', icon: SiFastapi },
    { name: 'Java', icon: FaJava },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Docker', icon: FaDocker },
    { name: 'AWS', icon: FaAws }
  ];

  const techIcons = [
    FaPython, SiDjango, SiFastapi, FaJava, SiPostgresql, FaDocker, FaAws
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (text.length < fullText.length) {
      timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 150);
    }
    return () => clearTimeout(timeout);
  }, [text]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Efecto para los comandos
  useEffect(() => {
    if (commandIndex < allCommands.length) {
      const timeout = setTimeout(() => {
        setCommandIndex(prev => prev + 1);
      }, allCommands[commandIndex].delay);
      return () => clearTimeout(timeout);
    }
  }, [commandIndex]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-12">
      <div className="w-full min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-12">
        {/* Refined background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/95 to-background/90">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
          {/* Particle effect with reduced density */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  animationDelay: `${Math.random() * 5}s`,
                  opacity: 0.1
                }}
              >
                <Code className="text-primary w-4 h-4" />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-background" />
        </div>

        <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-4xl mx-auto space-y-12">
          {/* Matrix effect and existing background */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/50" />
          </div>

          <div className="flex flex-col items-center justify-center space-y-8">
            {/* Left column - Enhanced main content */}
            <motion.div variants={item} className="space-y-6 text-center">
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl font-bold">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-600 to-purple-600">
                    {text}
                    <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} ml-1`}>|</span>
                  </span>
                </h1>

                {/* Add profile image here */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="relative w-48 h-48 mx-auto mt-8 mb-6"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-600 to-purple-600 rounded-full blur-md opacity-75 animate-rotate-gradient" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background">
                    <img
                      src={profileImage}
                      alt="César Franco"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-semibold text-blue-400">
                  {'{'} Backend Developer {'}'}
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto">
                  Arquitecto de soluciones escalables y robustas, especializado en crear sistemas de alto rendimiento que impulsan el crecimiento empresarial.
                </p>
              </div>

              {/* Enhanced animated badges with icons */}
              <motion.div variants={item} className="flex flex-wrap gap-3 justify-center">
                {techBadges.map((tech, i) => (
                  <div
                    key={tech.name}
                    className="px-4 py-2 rounded-full bg-primary/5 border border-primary/20 text-primary flex items-center gap-2 hover:bg-primary/10 transition-all duration-300 backdrop-blur-sm"
                    style={{ animationDelay: `${i * 200}ms` }}
                  >
                    <tech.icon className="w-4 h-4" />
                    {tech.name}
                  </div>
                ))}
              </motion.div>

              {/* Added Stats Section */}
              <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {stats.map((stat) => (
                  <div 
                    key={stat.label}
                    className="p-4 rounded-xl bg-primary/5 border border-primary/10 backdrop-blur-sm text-center"
                  >
                    <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground/80 mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* Call to action buttons */}
              <motion.div variants={item} className="flex gap-4 justify-center pt-4">
                <Button 
                  size="lg" 
                  className="group text-lg relative overflow-hidden"
                  onClick={() => setActiveSection('projects')}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 group-hover:from-blue-600 group-hover:to-primary transition-all duration-500" />
                  <span className="relative z-10">Ver Proyectos</span>
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg border-2 relative group"
                  onClick={() => setActiveSection('contact')}
                >
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10">Contactar</span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right column - Enhanced Terminal */}
            <motion.div variants={item} className="w-full max-w-2xl mx-auto relative">
              <div className="w-full bg-black/90 rounded-lg shadow-xl border border-primary/20 overflow-hidden backdrop-blur-xl">
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-900/50 border-b border-primary/20">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-sm text-gray-400">cesar@developer:~$</span>
                </div>
                <div className="p-4 space-y-2 font-mono text-sm">
                  {allCommands.slice(0, commandIndex).map((command, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-green-400"
                    >
                      {command.text}
                    </motion.div>
                  ))}
                  <span className="animate-pulse">█</span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 inset-0 blur-3xl opacity-30">
                <div className="absolute top-0 right-0 w-72 h-72 bg-primary/30 rounded-full" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/30 rounded-full" />
              </div>

              {/* Added floating tech icons */}
              <div className="absolute -z-10 inset-0">
                {techIcons.map((Icon, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-primary w-8 h-8 opacity-20"
                    animate={{
                      x: ["0%", "100%", "0%"],
                      y: ["0%", "100%", "0%"],
                    }}
                    transition={{
                      duration: 20,
                      delay: i * 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  >
                    <Icon />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Added scrolling tech stack with icons */}
          <motion.div variants={item} className="overflow-hidden py-8 relative opacity-70 hover:opacity-100 transition-opacity">
            <div className="flex space-x-8 animate-scroll">
              {/* Repite los logos dos veces para scroll infinito */}
              {[...techIcons, ...techIcons].map((Icon, i) => (
                <motion.div
                  key={i}
                  className="h-12 text-primary grayscale hover:grayscale-0 transition-all duration-300"
                  animate={{
                    x: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 10,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Icon className="w-full h-full" />
                </motion.div>
              ))}
            </div>
            {/* Gradient overlays para suavizar los bordes */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}