import { Terminal, Code2, User, Mail, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { id: 'home', icon: Terminal, label: 'Inicio' },
    { id: 'about', icon: User, label: 'Sobre Mí' },
    { id: 'projects', icon: Code2, label: 'Proyectos' },
    { id: 'contact', icon: Mail, label: 'Contacto' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 bg-background/75 backdrop-blur-lg border-b border-border/40 shadow-lg z-50"
    >
      <div className="w-full max-w-[1400px] mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          <motion.span 
            whileHover={{ scale: 1.05 }}
            transition={{ 
              duration: 0.2,
              type: "spring",
              stiffness: 300 
            }}
            onClick={() => setActiveSection('home')}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-violet-500 cursor-pointer hover:opacity-80 transition-opacity"
          >
            {'<'}César Franco{'>'}
          </motion.span>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navItems.map(({ id, icon: Icon, label }) => (
              <motion.button
                key={id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSection(id)}
                className={cn(
                  'px-5 py-2.5 rounded-xl transition-all duration-300',
                  'flex items-center space-x-2.5 relative overflow-hidden',
                  activeSection === id 
                    ? 'text-primary font-medium' 
                    : 'text-muted-foreground hover:bg-primary/15 hover:text-primary'
                )}
              >
                <Icon className="h-4 w-4" />
                <span className="relative">
                  {label}
                  {activeSection === id && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ 
                        duration: 0.3,
                        type: "spring",
                        stiffness: 380,
                        damping: 15
                      }}
                      style={{
                        background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #6366f1 100%)',
                        boxShadow: '0 0 12px rgba(59,130,246,0.5), 0 0 4px rgba(139,92,246,0.3)',
                      }}
                    />
                  )}
                </span>
                {activeSection === id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 via-blue-500/5 to-violet-500/10 rounded-xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            className="fixed top-[5rem] right-0 w-64 h-screen bg-background border-l border-border/40 md:hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navItems.map(({ id, icon: Icon, label }) => (
                <motion.button
                  key={id}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveSection(id);
                    setIsMenuOpen(false);
                  }}
                  className={cn(
                    'px-5 py-2.5 rounded-xl transition-all duration-300',
                    'flex items-center space-x-2.5 relative overflow-hidden w-full',
                    activeSection === id 
                      ? 'text-primary font-medium bg-primary/10' 
                      : 'text-muted-foreground hover:bg-primary/15 hover:text-primary'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}