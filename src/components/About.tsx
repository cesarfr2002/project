import { Card, CardContent } from '@/components/ui/card';
import { Server, Database, Brain, Code, Terminal, BarChart2, Workflow, Boxes } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    {
      category: "Especialidades Core",
      items: [
        {
          icon: Server,
          title: 'Backend Development',
          description: 'Desarrollo de APIs que soportan miles de solicitudes por segundo, con tiempos de respuesta rápidos y alta disponibilidad.'
        },
        {
          icon: Brain,
          title: 'Machine Learning',
          description: 'Implementación de modelos predictivos para mejorar la toma de decisiones y automatizar procesos.'
        },
        {
          icon: Database,
          title: 'Gestión de Datos',
          description: 'Diseño y optimización de bases de datos para manejar grandes volúmenes de datos con eficiencia.'
        }
      ]
    },
    {
      category: "Herramientas & Tecnologías",
      items: [
        {
          icon: Code,
          title: 'Stack Principal',
          description: 'Python, PostgreSQL, Redis, Docker, AWS'
        },
        {
          icon: Boxes,
          title: 'Data Science Stack',
          description: 'NumPy, Pandas, scikit-learn, TensorFlow'
        },
        {
          icon: Terminal,
          title: 'DevOps & Monitoring',
          description: 'CI/CD, Prometheus, Grafana, Testing, Logging'
        }
      ]
    }
  ];

  const stats = [
    { value: '2+', label: 'Años de experiencia' },
    { value: '10+', label: 'Proyectos completados' },
    { value: '5+', label: 'Modelos ML implementados' },
  ];

  const certifications = [
    { 
      name: 'Professional Python Developer', 
      issuer: 'DataCamp',
      details: 'Especialización en desarrollo avanzado con Python'
    },
    { 
      name: 'Machine Learning Engineering', 
      issuer: 'Platzi',
      details: 'Enfoque en implementación de modelos ML'
    },
    { 
      name: 'Backend Development with FastAPI', 
      issuer: 'Udemy',
      details: 'Desarrollo de APIs con FastAPI'
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="relative py-24 w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/90" />
      
      <div className="relative w-full max-w-6xl mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-16"
        >
          {/* Intro Section */}
          <motion.div variants={item} className="text-center space-y-8">
            <div className="relative inline-block">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-blue-600/10 blur-2xl rounded-full"
              />
              <h2 className="relative text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-blue-600">
                Backend Developer & ML Engineer
              </h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Desarrollador Backend apasionado por la tecnología y la inteligencia artificial. 
                Con 2 años de experiencia, me especializo en crear APIs robustas y soluciones de Machine Learning.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Mi enfoque combina el desarrollo backend con las últimas tecnologías en IA, 
                permitiéndome crear servicios eficientes y escalables con capacidades predictivas.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Actualmente, me dedico a integrar modelos de Machine Learning en arquitecturas de microservicios, 
                optimizando el rendimiento y la precisión de las soluciones que desarrollo.
              </p>
            </div>

            {/* Highlighted Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur-sm opacity-20 group-hover:opacity-40 transition duration-300" />
                <Card className="relative bg-card/50 border-0">
                  <CardContent className="p-6">
                    <BarChart2 className="h-8 w-8 text-primary mb-4" />
                    <h4 className="font-semibold text-lg mb-2">Análisis Predictivo</h4>
                    <p className="text-sm text-muted-foreground">
                      Implementación de modelos ML con alta precisión en predicciones
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur-sm opacity-20 group-hover:opacity-40 transition duration-300" />
                <Card className="relative bg-card/50 border-0">
                  <CardContent className="p-6">
                    <Server className="h-8 w-8 text-primary mb-4" />
                    <h4 className="font-semibold text-lg mb-2">APIs Eficientes</h4>
                    <p className="text-sm text-muted-foreground">
                      Desarrollo de APIs que soportan miles de solicitudes por segundo, con tiempos de respuesta rápidos y alta disponibilidad.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur-sm opacity-20 group-hover:opacity-40 transition duration-300" />
                <Card className="relative bg-card/50 border-0">
                  <CardContent className="p-6">
                    <Workflow className="h-8 w-8 text-primary mb-4" />
                    <h4 className="font-semibold text-lg mb-2">Integración ML-API</h4>
                    <p className="text-sm text-muted-foreground">
                      Experiencia en integrar modelos ML en servicios web
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Stats Section with enhanced styling */}
            <div className="relative mt-12">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-blue-600/5 blur-xl rounded-2xl" />
              <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto bg-card/30 p-8 rounded-xl backdrop-blur-sm border border-primary/10">
                {stats.map(({ value, label }) => (
                  <motion.div
                    key={label}
                    whileHover={{ scale: 1.05 }}
                    className="text-center space-y-2"
                  >
                    <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-blue-600">
                      {value}
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">{label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                Certificaciones
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {certifications.map((cert) => (
                  <motion.span
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    key={cert.name}
                    className="px-4 py-2 bg-primary/5 rounded-full text-sm font-medium border border-primary/10 hover:border-primary/20 transition-colors duration-200"
                  >
                    {cert.name} - {cert.issuer}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Sections */}
          {skills.map((skillSet) => (
            <motion.div key={skillSet.category} variants={item} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-blue-600/5 blur-lg rounded-2xl" />
              <h3 className="relative text-3xl font-semibold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                {skillSet.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skillSet.items.map(({ icon: Icon, title, description }) => (
                  <Card 
                    key={title} 
                    className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/30"
                  >
                    <CardContent className="p-8">
                      <div className="text-center space-y-4">
                        <div className="relative w-20 h-20 mx-auto">
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                          <div className="relative w-full h-full flex items-center justify-center">
                            <Icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                          </div>
                        </div>
                        <h3 className="text-2xl font-semibold mt-4">{title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}