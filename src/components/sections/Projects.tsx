import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { TrendingUp, Eye, Database, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Advanced Multimodal Image Captioning System',
      description: 'Production-scale image captioning system using SWIN Transformer for visual features and GPT-3 for text generation, trained on 100K+ images. Achieved 89% BLEU score improvement with custom attention mechanisms.',
      tags: ['SWIN Transformer', 'GPT-3', 'PyTorch', 'Computer Vision', 'Attention Mechanisms'],
      metrics: [
        { icon: TrendingUp, label: 'BLEU Score Improvement', value: '89%' },
        { icon: Database, label: 'Training Images', value: '100K+' },
        { icon: Eye, label: 'Inference Speed', value: '0.3s' },
        { icon: Zap, label: 'Model Accuracy', value: '94.2%' }
      ],
      highlights: [
        'Custom attention mechanisms for context-aware caption generation',
        'Scalable inference pipeline for real-time processing',
        'Multi-modal feature fusion architecture',
        'Production-ready deployment with monitoring'
      ]
    },
    {
      title: 'Phone Recommendation System',
      description: 'Personalized recommendation engine using Flask with collaborative and content-based filtering algorithms. Integrated machine learning models using scikit-learn to analyze user preferences and usage patterns.',
      tags: ['Flask', 'Scikit-learn', 'Collaborative Filtering', 'Content-Based Filtering', 'ML'],
      metrics: [
        { icon: TrendingUp, label: 'Recommendation Accuracy', value: '87.5%' },
        { icon: Database, label: 'User Interactions', value: '50K+' },
        { icon: Eye, label: 'Response Time', value: '<100ms' },
        { icon: Zap, label: 'User Satisfaction', value: '4.6/5' }
      ],
      highlights: [
        'Hybrid recommendation system combining multiple algorithms',
        'Real-time user preference learning and adaptation',
        'Comprehensive user behavior analysis pipeline',
        'A/B testing framework for recommendation optimization'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 bg-surface/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text-primary">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Key AI and machine learning projects showcasing technical innovation and measurable impact.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              className="glass-card hover-lift"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Key Highlights */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="space-y-6">
                  <h4 className="font-semibold text-primary">Performance Metrics:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {project.metrics.map((metric, i) => (
                      <div 
                        key={i} 
                        className="p-4 rounded-lg bg-primary/5 border border-primary/10 text-center hover:bg-primary/10 transition-colors"
                      >
                        <div className="flex justify-center mb-3">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                            <metric.icon className="w-5 h-5 text-primary" />
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-primary mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;