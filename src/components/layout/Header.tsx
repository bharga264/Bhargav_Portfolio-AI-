import { motion } from 'framer-motion';
import { Moon, Sun, Zap, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useThemeStore } from '@/store/themeStore';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { theme, toggleTheme } = useThemeStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  const getThemeIcon = () => {
    switch (theme) {
      case 'light': return <Sun className="h-4 w-4" />;
      case 'dark': return <Moon className="h-4 w-4" />;
      case 'blue': return <Zap className="h-4 w-4" />;
    }
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 glass-nav"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a 
            href="#home"
            className="flex items-center space-x-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
              <span className="text-primary-foreground font-bold text-sm">BPK</span>
            </div>
            <span className="font-bold text-lg gradient-text-primary">Bhargav Prasad Kalichetti</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="hover-glow"
            >
              {getThemeIcon()}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav 
            className="md:hidden py-4 border-t border-border/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;