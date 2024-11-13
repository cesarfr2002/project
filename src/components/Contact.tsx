import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <div className="w-full px-4 max-w-4xl mx-auto py-24">
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
              Conversemos
            </span>
            <h2 className="relative text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-blue-600">
              Contacto
            </h2>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y explorar cómo podemos trabajar juntos.
          </p>
        </motion.div>

        <motion.div variants={item}>
          <Card className="relative group">
            <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/50 to-blue-600/50 rounded-xl blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
            <CardContent className="relative p-8">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsSubmitting(true);
                  // El formulario se enviará automáticamente a Netlify
                  const form = e.target as HTMLFormElement;
                  form.submit();
                }}
              >
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <input name="bot-field" />
                </div>

                <p>
                  <label>
                    <span className="sr-only">Nombre</span>
                    <Input
                      name="name"
                      placeholder="Nombre"
                      className="text-lg py-6 bg-background/50 backdrop-blur-sm"
                      required
                    />
                  </label>
                </p>

                <p>
                  <label>
                    <span className="sr-only">Email</span>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="text-lg py-6 bg-background/50 backdrop-blur-sm"
                      required
                    />
                  </label>
                </p>

                <p>
                  <label>
                    <span className="sr-only">Mensaje</span>
                    <Textarea
                      name="message"
                      placeholder="Mensaje"
                      className="min-h-[150px] text-lg resize-none bg-background/50 backdrop-blur-sm"
                      required
                    />
                  </label>
                </p>

                <p>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-lg group relative overflow-hidden"
                    disabled={isSubmitting}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 group-hover:from-blue-600 group-hover:to-primary transition-all duration-500" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Enviar Mensaje
                        </>
                      )}
                    </span>
                  </Button>
                </p>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item} className="flex justify-center gap-6">
          <Button
            variant="outline"
            size="lg"
            className="group relative overflow-hidden"
            onClick={() => window.open('mailto:cesar.franco2002@gmail.com')}
          >
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="group relative overflow-hidden"
            onClick={() => window.open('https://github.com/cesarfranco2')}
          >
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="group relative overflow-hidden"
            onClick={() => window.open('https://linkedin.com/in/tuusuario')}
          >
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}