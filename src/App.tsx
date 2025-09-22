import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/sections/Footer';
import { CookieBanner } from '@/components/CookieBanner';
import { Toaster } from '@/components/ui/toaster';
import { Products } from '@/pages/Products';
import { Blogs } from '@/pages/Blogs';
import { BlogPost } from '@/pages/BlogPost';
import { ERPServices } from '@/pages/ERPServices';
import { WebDevelopment } from '@/pages/services/WebDevelopment';
import { MobileAppDevelopment } from '@/pages/services/MobileAppDevelopment';
import { EnterpriseERP } from '@/pages/services/EnterpriseERP';
import { APIDevelopment } from '@/pages/services/APIDevelopment';
import Index from '@/pages/Index';
import { Language } from '@/lib/i18n';

const App = () => {
  const [lang, setLang] = useState<Language>('en');
  const [currentPage, setCurrentPage] = useState('home');
  const [blogPostId, setBlogPostId] = useState<string>('');

  // Set document direction based on language
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  // Handle routing based on URL hash or path
  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      
      console.log('Route change detected:', path, hash); // Debug log
      
      if (path === '/services' || hash === '#services') {
        setCurrentPage('services');
        setBlogPostId('');
      } else if (path === '/blogs' || hash === '#blogs') {
        setCurrentPage('blogs');
        setBlogPostId('');
      } else if (path.startsWith('/blog/')) {
        const postId = path.split('/blog/')[1];
        console.log('Blog post ID:', postId); // Debug log
        setCurrentPage('blog-post');
        setBlogPostId(postId);
      } else if (path === '/services/web-development') {
        setCurrentPage('web-development');
        setBlogPostId('');
      } else if (path === '/services/mobile-app-development') {
        setCurrentPage('mobile-app-development');
        setBlogPostId('');
      } else if (path === '/services/enterprise-erp') {
        setCurrentPage('enterprise-erp');
        setBlogPostId('');
      } else if (path === '/services/api-development') {
        setCurrentPage('api-development');
        setBlogPostId('');
      } else if (path === '/erp-services') {
        setCurrentPage('erp-services');
        setBlogPostId('');
      } else {
        setCurrentPage('home');
        setBlogPostId('');
      }
    };

    // Initial route check
    handleRouteChange();

    // Listen for hash changes and popstate
    window.addEventListener('hashchange', handleRouteChange);
    window.addEventListener('popstate', handleRouteChange);
    
    // Listen for custom navigation events
    const handleNavigation = (event: CustomEvent) => {
      const { page } = event.detail;
      setCurrentPage(page);
    };
    
    window.addEventListener('navigate', handleNavigation as EventListener);

    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('navigate', handleNavigation as EventListener);
    };
  }, []);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
  };

  const pageVariants = {
    initial: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    in: { 
      opacity: 1, 
      y: 0,
      scale: 1
    },
    out: { 
      opacity: 0, 
      y: -50,
      scale: 1.05
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.6
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return <Products lang={lang} />;
      case 'blogs':
        return <Blogs lang={lang} />;
      case 'blog-post':
        return <BlogPost lang={lang} postId={blogPostId} />;
      case 'web-development':
        return <WebDevelopment />;
      case 'mobile-app-development':
        return <MobileAppDevelopment />;
      case 'enterprise-erp':
        return <EnterpriseERP />;
      case 'api-development':
        return <APIDevelopment />;
      case 'erp-services':
        return <ERPServices lang={lang} />;
      default:
        return <Index lang={lang} onLanguageChange={handleLanguageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation lang={lang} onLanguageChange={handleLanguageChange} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Footer lang={lang} onLanguageChange={handleLanguageChange} />
      <CookieBanner />
      <Toaster />
    </div>
  );
};

export default App;