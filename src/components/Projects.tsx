import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Award, Calendar, Clock, Users, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useState } from 'react';

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const projects = [
    {
      title: 'Service Bot - Finalist HackHathon LLM',
      description: 'Solución que automatiza la gestión de tickets de atención al cliente a través de diferentes canales de comunicación.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop&q=60',
      tags: ['Python', 'LangChain', 'FastAPI', 'Next.js', 'TypeScript', 'LLMs', 'Redis'],
      category: 'Inteligencia Artificial',
      date: '2024-10',
      duration: '1 mes',
      demoUrl: 'https://example.com/demo', // Ensure this is a valid URL
      githubUrl: 'https://github.com/cesarfr2002/CesarServiceBot/tree/main',
      isAward: true,
      benefits: {
        users: [
          'Respuesta instantánea a consultas de clientes',
          'Resolución rápida de problemas comunes',
          'Experiencia personalizada y consistente'
        ],
        developers: [
          'Reducción en tiempo de desarrollo de integraciones',
          'Arquitectura escalable y mantenible',
          'Sistema modular fácil de extender'
        ]
      }
    },
    {
      title: 'Beauty AI Assistant',
      description: 'Asistente virtual para el sector belleza que proporciona recomendaciones personalizadas de productos.',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=60',
      tags: ['Python', 'TensorFlow', 'OpenCV', 'YouTube API', 'Speech Recognition', 'Machine Learning'],
      category: 'Computer Vision',
      date: '2024-09',
      duration: '1 mes',
      demoUrl: 'https://example.com/demo', // Ensure this is a valid URL
      githubUrl: '#',
      benefits: {
        users: [
          'Recomendaciones personalizadas de productos',
          'Análisis facial en tiempo real',
          'Sugerencias basadas en preferencias personales'
        ],
        developers: [
          'Pipeline de ML optimizado y reutilizable',
          'Integración flexible con APIs externas',
          'Arquitectura modular para nuevas características'
        ]
      }
    },
    {
      title: 'Weather Time Machine API',
      description: 'API RESTful que proporciona datos históricos del clima y predicciones meteorológicas avanzadas. Incluye análisis de patrones climáticos y visualización de datos meteorológicos históricos.',
      image: 'https://images.unsplash.com/photo-1561485132-59468cd0b553?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Redis'],
      category: 'Backend',
      date: '2023-09',
      duration: '1 mes',
      demoUrl: 'https://example.com/demo', // Ensure this is a valid URL
      githubUrl: '#',
      benefits: {
        users: [
          'Acceso a datos históricos precisos',
          'Predicciones meteorológicas avanzadas',
          'Visualizaciones intuitivas de datos'
        ],
        developers: [
          'API RESTful bien documentada',
          'Cache eficiente con Redis',
          'Fácil integración con sistemas existentes'
        ]
      }
    }
  ];

  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  const filteredProjects = selectedTag 
    ? projects.filter(project => project.tags.includes(selectedTag))
    : projects;

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
    <div className="w-full px-4 max-w-[1400px] mx-auto py-24">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-16"
      >
        <motion.div variants={item} className="text-center space-y-8">
          <div className="relative inline-block">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-blue-600/10 blur-2xl rounded-full"
            />
            <span className="text-sm font-medium text-primary/70 tracking-wider uppercase block mb-4">
              Mi Trabajo
            </span>
            <h2 className="relative text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-blue-600">
              Proyectos Destacados
            </h2>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Una colección curada de soluciones innovadoras que demuestran mi experiencia 
            en desarrollo backend y machine learning
          </p>

          <div className="flex flex-wrap gap-3 justify-center mt-8 max-w-3xl mx-auto">
            <Badge
              variant={selectedTag === null ? "default" : "secondary"}
              className="px-4 py-2 text-sm cursor-pointer hover:opacity-80 transition-all backdrop-blur-sm border-2 border-primary/10"
              onClick={() => setSelectedTag(null)}
            >
              Todos los proyectos
            </Badge>
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTag === tag ? "default" : "secondary"}
                className="px-4 py-2 text-sm cursor-pointer hover:opacity-80 transition-all backdrop-blur-sm border-2 border-primary/10"
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </motion.div>

        <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <TooltipProvider key={project.title}>
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  {project.isAward && (
                    <div className="absolute top-4 right-4 z-20 bg-yellow-400/10 p-2 rounded-full backdrop-blur-sm border border-yellow-400/20">
                      <div className="relative">
                        <div className="absolute inset-0 bg-yellow-400/20 blur-xl rounded-full" />
                        <Award className="h-8 w-8 text-yellow-400 animate-pulse relative z-10" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{project.date}</span>
                    <Clock className="h-4 w-4 ml-2" />
                    <span>{project.duration}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-lg">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Tooltip key={tag}>
                        <TooltipTrigger>
                          <Badge variant="secondary" className="px-3 py-1 text-sm">
                            {tag}
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Proyecto desarrollado con {tag}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          className="flex-1 group hover:bg-gray-800 hover:text-white transition-colors"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                          Código
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Ver código fuente en GitHub</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </CardContent>
              </Card>
            </TooltipProvider>
          ))}
        </motion.div>

        {/* Unified Benefits Showcase Section */}
        <motion.div
          variants={item}
          className="mt-24 px-4"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              Impacto y Beneficios
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Mis soluciones están diseñadas para generar valor real, tanto para usuarios finales como para equipos técnicos. 
              Aquí hay algunos de los beneficios clave que mis proyectos ofrecen:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Combined Benefits */}
            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 rounded-2xl border border-primary/20 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/20 rounded-xl">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-2xl font-semibold text-primary">Beneficios para Usuarios y Desarrolladores</h4>
              </div>
              <ul className="space-y-4">
                {projects.flatMap(project => project.benefits.users).map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-lg text-muted-foreground">{benefit}</p>
                  </li>
                ))}
                {projects.flatMap(project => project.benefits.developers).map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-lg text-muted-foreground">{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}