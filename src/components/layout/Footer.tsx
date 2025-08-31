import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { 
      Icon: Mail,
      label: 'Email',
      href: 'mailto:bhargavprasad9814@gmail.com',
    },
    { 
      Icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/bhargav-prasad-kalichetti-183552257',
    },
    { 
      Icon: Github,
      label: 'GitHub',
      href: 'https://github.com/bhargavprasad',
    },
    {
      Icon: Download,
      label: 'Resume',
      href: '/BHARGAV_PRASAD_KALICHETTI- AI Engineer.pdf',
    }
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md border-t border-[#007CF0]/10">
      <div className="container mx-auto max-w-7xl py-6">
        <nav className="flex flex-wrap items-center justify-center md:justify-between gap-6">
          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            {footerLinks.map(({ Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-muted-foreground hover:text-[#007CF0] transition-colors duration-300 py-1"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="h-5 w-5" />
                <span className="text-sm font-medium">{label}</span>
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} BPK | AI Engineer
          </p>
        </nav>
      </div>

      {/* Subtle Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#007CF0]/20 to-transparent" />
    </footer>
  );
};

export default Footer;