import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { 
  Building2, 
  Cpu, 
  Bot, 
  Network, 
  Database, 
  Cloud, 
  Globe, 
  Brain,
  Shield,
  Waypoints,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const Experience = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const experiences = [
    {
      company: 'Cisco Systems / Vzure Solutions',
      role: 'AI Developer',
      period: 'Aug 2024 – Present',
      location: 'Texas, USA',
      icon: Bot,
      keyPoints: [
        {
          title: 'Enterprise Chatbot Platform',
          description: 'Built no-code/low-code platform with Django REST + React, integrating OpenAI & LLaMA',
          tags: ['OpenAI', 'LLaMA', 'Django', 'React']
        },
        {
          title: 'Multi-Agent Systems',
          description: 'Designed and deployed sophisticated agent networks using LangGraph, CrewAI, AutoGen',
          tags: ['LangGraph', 'CrewAI', 'AutoGen']
        }
      ],
      detailedInfo: {
        achievements: [
          "Built Python-based no-code/low-code chatbot platform using Django REST + React, enabling enterprises to create custom assistants with OpenAI GPT and local NVIDIA Llama models",
          "Designed and deployed multi-agent systems with LangGraph, CrewAI, AutoGen, and LangChain where agents collaborated on domain-specific workflows",
          "Implemented Agent-to-Agent (A2A) communication protocol to enable seamless coordination, message passing, and distributed decision-making",
          "Integrated persistent memory using Mem0, pgvector, and ChromaDB enabling long-term context retention and multilingual interactions",
          "Developed database agent from scratch with LangChain + LangGraph to interact with manufacturing relational data across PostgreSQL, Oracle, and SQL Server",
          "Fine-tuned Llama-3B with LoRA and QLoRA on proprietary manufacturing domain data, delivering 35% higher domain-task accuracy and 50% lower inference latency",
          "Constructed Azure model optimization pipeline using ONNX, NVIDIA TensorRT, TensorFlow Lite, and Apache TVM resulting in 3× faster inference and 50% lower compute cost",
          "Implemented smart GPU-aware autoscaling in AKS using Luna autoscaler, reducing GPU provisioning costs and improving utilization"
        ],
        technologies: ['Python', 'Django REST', 'React', 'OpenAI GPT', 'LLaMA', 'LangGraph', 'CrewAI', 'AutoGen', 'LangChain', 'Mem0', 'pgvector', 'ChromaDB', 'PostgreSQL', 'Oracle', 'SQL Server', 'ONNX', 'TensorRT', 'Azure AKS', 'Docker', 'Kubernetes']
      }
    },
    {
      company: 'University of North Texas',
      role: 'Research & Instructional Assistant',
      period: 'Mar 2023 – Aug 2024',
      location: 'Texas, USA',
      icon: Brain,
      keyPoints: [
        {
          title: 'Graph RAG Systems',
          description: 'Developed advanced RAG with Neo4j & LangChain for cybersecurity data analysis',
          tags: ['Neo4j', 'LangChain', 'RAG']
        },
        {
          title: 'LLM Training',
          description: 'Fine-tuned LLaMA 3 models with graph-enhanced knowledge for specialized classification',
          tags: ['LLaMA', 'Graph Neural Networks']
        }
      ],
      detailedInfo: {
        achievements: [
          "Researched and developed cybersecurity knowledge graph, training custom Llama 3 models on structured domain data",
          "Designed and implemented Graph RAG system with LangChain and Neo4j to retrieve knowledge from cybersecurity interviews",
          "Enabled multi-hop reasoning and complex relationship queries, achieving 40% improvement in context-aware response generation",
          "Conducted comparative research on transformer architecture using PyTorch and TensorFlow",
          "Developed and evaluated custom BERT variants for cybersecurity entity extraction, achieving 15% performance improvement over baseline models",
          "Deployed Graph RAG system on Azure Kubernetes Service (AKS) with Dockerized microservices, CI/CD pipelines, and monitoring via Grafana"
        ],
        technologies: ['LLaMA 3', 'Neo4j', 'LangChain', 'PyTorch', 'TensorFlow', 'BERT', 'Azure AKS', 'Docker', 'Kubernetes', 'Grafana', 'CI/CD', 'Graph Neural Networks']
      }
    },
    {
      company: 'Wipro',
      role: 'Data and Network Analyst',
      period: 'Feb 2022 – Dec 2022',
      location: 'Remote, India',
      icon: Shield,
      keyPoints: [
        {
          title: 'ML Security Pipeline',
          description: 'Created threat detection pipelines on AWS SageMaker with NMAP integration',
          tags: ['AWS', 'ML', 'Security']
        },
        {
          title: 'Risk Framework',
          description: 'Designed AI-based risk scoring system for banking compliance',
          tags: ['Risk Analysis', 'Banking']
        }
      ],
      detailedInfo: {
        achievements: [
          "Designed and deployed AI-assisted risk assessment framework for secure online banking systems",
          "Combined traditional ML models with network security protocols (NMAP scans, firewall policies, load balancing rules)",
          "Delivered 40% reduction in exploitable vulnerabilities and strengthened regulatory compliance (PCI-DSS, ISO 27001)",
          "Built and operationalized machine learning threat detection pipelines on AWS SageMaker",
          "Leveraged Random Cut Forest for anomaly detection and XGBoost for fraud pattern recognition",
          "Achieved 25% improvement in early threat detection rates and reduced false positives in banking security alerts",
          "Integrated ML-driven insights with SQL Server databases and SIEM systems (Splunk, ELK) improving incident response times by 30%"
        ],
        technologies: ['AWS SageMaker', 'Random Cut Forest', 'XGBoost', 'NMAP', 'SQL Server', 'Splunk', 'ELK Stack', 'Python', 'Machine Learning', 'Network Security', 'Banking Security']
      }
    },
    {
      company: 'Amara Raja Power Systems',
      role: 'R&D Engineer',
      period: 'Aug 2020 – Dec 2021',
      location: 'Tirupati, India',
      icon: Cpu,
      keyPoints: [
        {
          title: 'Embedded Systems',
          description: 'Built and optimized STM32 firmware using Embedded C/C++',
          tags: ['STM32', 'Embedded C', 'Firmware']
        },
        {
          title: 'IoT Platform',
          description: 'Built telemetry system using AWS IoT Core and Azure IoT Hub',
          tags: ['AWS IoT', 'Azure IoT']
        }
      ],
      detailedInfo: {
        achievements: [
          "Developed and optimized firmware for ARM and STM32 microcontrollers using Embedded C/C++",
          "Created lightweight graphical user interfaces (GUIs) and implemented advanced communication protocols (SPI, I2C, UART, CAN)",
          "Enhanced battery life by 20% and improved user interaction and energy efficiency in battery-management systems",
          "Implemented predictive battery lifespan analysis and real-time fault detection algorithms using Python and Embedded C",
          "Leveraged classical ML models (Random Forests, Regression, and SVM) for anomaly detection on sensor data streams",
          "Designed cloud-based IoT monitoring system on AWS IoT Core and Azure IoT Hub to collect telemetry from power electronics devices",
          "Applied time-series ML models (ARIMA, LSTM prototypes in TensorFlow 2.0) on battery usage data to predict failures and optimize charging cycles"
        ],
        technologies: ['ARM', 'STM32', 'Embedded C/C++', 'SPI', 'I2C', 'UART', 'CAN', 'Python', 'Random Forests', 'SVM', 'AWS IoT Core', 'Azure IoT Hub', 'ARIMA', 'LSTM', 'TensorFlow', 'IoT', 'Battery Management']
      }
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#007CF0] to-[#00DFD8]">
            Professional Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building cutting-edge AI solutions across diverse domains and technologies.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              variants={fadeInUp}
              className="relative"
            >
              {/* Connection Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-px bg-gradient-to-b from-[#007CF0]/20 to-transparent" />
              )}

              <div className="relative">
                {/* Main Card */}
                <div 
                  className="flex gap-8 p-6 rounded-2xl bg-background/40 backdrop-blur-sm border border-[#007CF0]/10 hover:border-[#007CF0]/30 transition-all duration-300 cursor-pointer"
                  onClick={() => toggleCard(index)}
                >
                  {/* Icon Column */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-[#007CF0]/10 flex items-center justify-center">
                      <exp.icon className="w-8 h-8 text-[#007CF0]" />
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="flex-grow space-y-4">
                    {/* Header */}
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold">{exp.company}</h3>
                        <div className="flex items-center gap-4 text-muted-foreground mt-1">
                          <span className="font-medium text-[#007CF0]">{exp.role}</span>
                          <span>•</span>
                          <span>{exp.period}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Globe className="w-4 h-4" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <div className="text-[#007CF0]">
                        {expandedCard === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </div>
                    </div>

                    {/* Key Points Preview */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      {exp.keyPoints.map((point) => (
                        <div key={point.title} className="p-3 rounded-lg bg-[#007CF0]/5">
                          <h4 className="font-medium text-sm mb-1">{point.title}</h4>
                          <p className="text-xs text-muted-foreground mb-2">
                            {point.description}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {point.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 text-xs rounded-full bg-[#007CF0]/10 text-[#007CF0]"
                              >
                                {tag}
                              </span>
                            ))}
                            {point.tags.length > 3 && (
                              <span className="px-2 py-0.5 text-xs rounded-full bg-[#007CF0]/10 text-[#007CF0]">
                                +{point.tags.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {expandedCard === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 ml-24 mr-0"
                    >
                      <div className="p-6 rounded-2xl bg-[#007CF0]/5 border border-[#007CF0]/20 space-y-6">
                        {/* Detailed Achievements */}
                        <div>
                          <h4 className="text-lg font-bold mb-4 text-[#007CF0]">Key Achievements</h4>
                          <ul className="space-y-3">
                            {exp.detailedInfo.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#007CF0] mt-2 flex-shrink-0" />
                                <p className="text-sm text-muted-foreground leading-relaxed">{achievement}</p>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies Used */}
                        <div>
                          <h4 className="text-lg font-bold mb-4 text-[#007CF0]">Technologies & Tools</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.detailedInfo.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 text-xs rounded-full bg-[#007CF0]/10 text-[#007CF0] border border-[#007CF0]/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;