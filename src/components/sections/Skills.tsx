import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { Brain, Code2, Database, Cloud, Cog, Award, Cpu, Bot, GitMerge, Network } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Expertise in building and deploying advanced AI models',
      skills: [
        { name: 'PyTorch', type: 'Framework', tag: 'Advanced' },
        { name: 'TensorFlow', type: 'Framework', tag: 'Expert' },
        { name: 'LangChain', type: 'LLM Tools', tag: 'Advanced' },
        { name: 'CrewAI', type: 'Agent Framework', tag: 'Expert' },
        { name: 'LangGraph', type: 'Graph LLM', tag: 'Advanced' },
        { name: 'AutoGen', type: 'Agent Framework', tag: 'Expert' }
      ]
    },
    {
      title: 'Programming',
      icon: Code2,
      description: 'Strong foundation in multiple programming paradigms',
      skills: [
        { name: 'Python', type: 'Backend', tag: 'Expert' },
        { name: 'TypeScript', type: 'Full-stack', tag: 'Advanced' },
        { name: 'C/C++', type: 'Systems', tag: 'Advanced' },
        { name: 'Embedded C', type: 'IoT', tag: 'Advanced' },
        { name: 'SQL', type: 'Database', tag: 'Advanced' }
      ]
    },
    {
      title: 'Data Infrastructure',
      icon: Database,
      description: 'Experience with modern data storage solutions',
      skills: [
        { name: 'PostgreSQL', type: 'RDBMS', tag: 'Expert' },
        { name: 'ChromaDB', type: 'Vector DB', tag: 'Advanced' },
        { name: 'Neo4j', type: 'Graph DB', tag: 'Advanced' },
        { name: 'pgvector', type: 'Vector Extension', tag: 'Expert' },
        { name: 'MongoDB', type: 'NoSQL', tag: 'Advanced' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Cloud-native development and deployment expertise',
      skills: [
        { name: 'AWS SageMaker', type: 'ML Platform', tag: 'Expert' },
        { name: 'Azure AKS', type: 'Container Service', tag: 'Advanced' },
        { name: 'Docker', type: 'Containerization', tag: 'Expert' },
        { name: 'Kubernetes', type: 'Orchestration', tag: 'Advanced' },
        { name: 'Prometheus', type: 'Monitoring', tag: 'Advanced' }
      ]
    },
    {
      title: 'MLOps & Optimization',
      icon: Cog,
      description: 'Specialized in ML model deployment and optimization',
      skills: [
        { name: 'ONNX', type: 'Model Format', tag: 'Expert' },
        { name: 'TensorRT', type: 'Inference', tag: 'Advanced' },
        { name: 'QLoRA/LoRA', type: 'Fine-tuning', tag: 'Expert' },
        { name: 'Apache TVM', type: 'Compilation', tag: 'Advanced' },
        { name: 'RAG/Graph RAG', type: 'LLM Enhancement', tag: 'Expert' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#007CF0] to-[#00DFD8]">
            Technical Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized in AI Engineering with a focus on building scalable, production-ready AI systems.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              className="group relative p-6 rounded-2xl bg-background/40 backdrop-blur-sm border border-[#007CF0]/10 hover:border-[#007CF0]/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#007CF0]/10 flex items-center justify-center group-hover:bg-[#007CF0]/20 transition-colors duration-300">
                  <category.icon className="h-6 w-6 text-[#007CF0]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="p-3 rounded-xl bg-background/60 hover:bg-background/80 transition-colors duration-300"
                    whileHover={{ x: 8 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">{skill.name}</h4>
                        <p className="text-xs text-muted-foreground">{skill.type}</p>
                      </div>
                      <span className={`
                        px-2 py-1 rounded-full text-xs font-medium
                        ${skill.tag === 'Expert' ? 'bg-[#007CF0]/10 text-[#007CF0]' : 'bg-[#00DFD8]/10 text-[#00DFD8]'}
                      `}>
                        {skill.tag}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#007CF0] to-[#00DFD8]">
            Certifications & Achievements
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                name: 'Java 17 Master Class',
                issuer: 'Udemy',
                icon: Code2,
                date: '2021'
              },
              {
                name: 'Machine Learning: NLP in Python',
                issuer: 'Udemy',
                icon: Brain,
                date: '2021'
              },
              {
                name: 'Deep Learning with TensorFlow',
                issuer: 'IBM',
                icon: Bot,
                date: '2021'
              },
              {
                name: 'Deep Learning with Multimodal RAG',
                issuer: 'Intel',
                icon: Database,
                date: '2024'
              },
              {
                name: 'Deep Learning Course',
                issuer: 'Simplilearn',
                icon: Network,
                date: '2021'
              },
              {
                name: 'Mastering Generative AI & MLOps',
                issuer: 'OpenAI & Hugging Face',
                icon: Cog,
                date: '2024'
              }
            ].map((cert) => (
              <motion.div
                key={cert.name}
                variants={fadeInUp}
                className="p-4 rounded-xl bg-background/40 backdrop-blur-sm border border-[#007CF0]/10 hover:border-[#007CF0]/30 transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#007CF0]/10 flex items-center justify-center">
                    <cert.icon className="h-5 w-5 text-[#007CF0]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{cert.name}</h4>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs text-[#007CF0] mt-1">{cert.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;