import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const titles = [
    "AI Researcher",
    "AI Developer", 
    "Embedded Systems Engineer",
    "Machine Learning Engineer",
    "Technical Leader",
    "Innovation Driver"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#007CF0]/5 via-background to-background dark:from-[#007CF0]/10 dark:via-background dark:to-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-[#007CF0]/10 dark:bg-[#007CF0]/15 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#007CF0]/10 dark:bg-[#007CF0]/15 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div 
        className="container mx-auto px-4 sm:px-6 text-center relative z-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Professional Profile Photo */}
        <motion.div 
          variants={staggerItem}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <motion.div
              className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsImageOpen(true)}
            >
              <img 
                src="/Bhargav -2.jpg" 
                alt="Bhargav Prasad - AI Engineer"
                className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-white/20 dark:border-white/30"
              />
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#007CF0]/10 to-transparent"></div>
              {/* Animated ring */}
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-[#007CF0]/30"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Image Dialog */}
            <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
              <DialogContent className="max-w-3xl p-0 overflow-hidden bg-transparent border-none">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="relative"
                >
                  <img 
                    src="/Bhargav -2.jpg" 
                    alt="Bhargav Prasad - AI Engineer"
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                  <button
                    onClick={() => setIsImageOpen(false)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white/90 hover:bg-black/70 transition-colors duration-200"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </motion.div>
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>

        <motion.h2
          variants={staggerItem}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground/90 dark:text-foreground/95"
        >
          Hi, I'm Bhargav Prasad
        </motion.h2>

        <motion.h3
          variants={staggerItem}
          className="text-xl sm:text-2xl lg:text-3xl font-medium mb-6 text-[#007CF0] dark:text-[#007CF0] h-12 flex items-center justify-center"
        >
          <motion.span
            key={currentTitleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {titles[currentTitleIndex]}
          </motion.span>
        </motion.h3>

        <motion.p 
          variants={staggerItem}
          className="text-lg sm:text-xl lg:text-2xl text-foreground/70 dark:text-foreground/80 mb-8 max-w-3xl mx-auto text-balance font-medium"
        >
          AI Engineer with 5+ years experience in Generative AI, LLM fine-tuning, 
          RAG/Graph RAG, multi-agent systems, and scalable deployment on cloud platforms.
        </motion.p>

        <motion.div 
          variants={staggerItem}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button 
            size="lg" 
            className="bg-[#007CF0] hover:bg-[#007CF0]/90 text-white font-medium shadow-lg shadow-[#007CF0]/20 dark:shadow-[#007CF0]/20 transition-all duration-300 hover:scale-105"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-[#007CF0]/20 dark:border-[#007CF0]/30 bg-[#007CF0]/5 dark:bg-[#007CF0]/10 text-[#007CF0] dark:text-[#007CF0] hover:bg-[#007CF0]/10 dark:hover:bg-[#007CF0]/15 font-medium transition-all duration-300 hover:scale-105"
            onClick={() => {
              const aboutSection = document.getElementById('about');
              aboutSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <ArrowDown className="mr-2 h-4 w-4" />
            My Work
          </Button>
        </motion.div>

        <motion.div 
          variants={staggerItem}
          className="flex items-center justify-center space-x-6"
        >
          {[
            { 
              Icon: Github, 
              href: 'https://github.com/bhargavprasad', 
              label: 'GitHub' 
            },
            { 
              Icon: Linkedin, 
              href: 'https://www.linkedin.com/in/bhargav-prasad-kalichetti-183552257', 
              label: 'LinkedIn' 
            },
            { 
              Icon: Mail, 
              href: 'mailto:bhargavprasad9814@gmail.com', 
              label: 'Email' 
            },
          ].map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#007CF0]/10 dark:bg-[#007CF0]/15 border-2 border-[#007CF0]/20 dark:border-[#007CF0]/30 text-[#007CF0] dark:text-[#007CF0] hover:bg-[#007CF0]/15 dark:hover:bg-[#007CF0]/20 transition-all duration-300 shadow-lg shadow-[#007CF0]/5 dark:shadow-[#007CF0]/5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={label}
            >
              <Icon className="h-5 w-5" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;