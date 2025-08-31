import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'bhargavprasad9814@gmail.com',
      href: 'mailto:bhargavprasad9814@gmail.com'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/bhargav-prasad-kalichetti-183552257'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Frisco, Texas',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-surface/50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text-primary">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Let's connect and discuss opportunities in AI engineering and machine learning.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="glass-card"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  target={info.title === 'LinkedIn' ? '_blank' : undefined}
                  rel={info.title === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  className="flex items-center space-x-6 p-6 rounded-lg glass hover-lift transition-all duration-300 block"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{info.title}</p>
                    <p className="text-muted-foreground text-base">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default Contact;