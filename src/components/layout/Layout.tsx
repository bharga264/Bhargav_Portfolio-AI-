import { useEffect } from 'react';
import { useThemeStore } from '@/store/themeStore';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '@/components/ui/scroll-to-top';
import ChatBot from '@/components/chatbot/ChatBot';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { theme } = useThemeStore();

  useEffect(() => {
    // Apply theme to document on mount and theme change
    document.documentElement.className = theme === 'light' ? '' : theme;
  }, [theme]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
      <ChatBot />
    </div>
  );
};

export default Layout;