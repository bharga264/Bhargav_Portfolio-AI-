import { motion } from 'framer-motion';
import { Brain, Code, Rocket, Users,Cloud } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const About = () => {
  const skills = [
    {
      icon: Brain,
      title: 'Generative AI & LLMs',
      description: 'Fine-tuning LLaMA models, RAG/Graph RAG systems, and memory-enabled AI agents'
    },
    {
      icon: Code,
      title: 'Multi-Agent Systems',
      description: 'CrewAI, LangGraph, AutoGen implementations with complex agent orchestration'
    },
    {
      icon: Rocket,
      title: 'MLOps & Optimization',
      description: 'ONNX, TensorRT, QLoRA/LoRA fine-tuning, and GPU-optimized ML pipelines'
    },
    {
      icon: Cloud,
      title: 'Cloud Deployment',
      description: 'Azure AKS, AWS SageMaker, scalable microservices with CI/CD automation'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text-primary">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            AI Researcher, Data Scientist, and Purpose-Driven Leader building intelligent systems 
            that bring communities together and solve meaningful problems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="glass-card"
          >
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am Bhargav Prasad — AI Researcher, Data Scientist, and Purpose-Driven Leader. 
                I've grown from proving what I can achieve alone to inspiring what we can accomplish together.
              </p>
              <p>
                My journey is shaped by resilience, curiosity, and a commitment to building communities that thrive. 
                From developing multi-agent systems at Cisco to researching knowledge graphs at UNT, 
                I focus on creating AI that serves people and strengthens connections.
              </p>
              <p>
                With 5+ years in AI and machine learning, I believe technology's greatest power lies not in 
                what it can compute, but in how it can bring out the best in human collaboration and innovation.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                variants={fadeInUp}
                className="glass-card hover-lift text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 mb-4">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-bold mb-2">{skill.title}</h4>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="glass-card"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Professional Experience</h3>
          <div className="space-y-8">
            {[
              {
                year: '2024',
                title: 'AI Developer',
                company: 'Cisco Systems | Vzure Solutions',
                description: 'Leading development of collaborative AI platforms. Building multi-agent systems that enable seamless human-AI teamwork and knowledge sharing.'
              },
              {
                year: '2023',
                title: 'Research & Instructional Assistant',
                company: 'University of North Texas',
                description: 'Pioneered Graph RAG systems for cybersecurity knowledge networks. Mentored students while advancing research in AI-human collaboration.'
              },
              {
                year: '2022',
                title: 'Data & Network Analyst',
                company: 'Wipro',
                description: 'Developed AI-driven security solutions that protect digital communities. Created systems that learn and adapt to emerging threats.'
              },
              {
                year: '2020',
                title: 'R&D Engineer',
                company: 'Amara Raja Power Systems',
                description: 'Built intelligent embedded systems that power sustainable technology. Focused on creating reliable, community-serving energy solutions.'
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">{item.year}</span>
                </div>
                <div className="flex-grow">
                  <h4 className="text-lg font-bold">{item.title}</h4>
                  <p className="text-primary font-medium mb-2">{item.company}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;