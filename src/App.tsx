import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/sections/Footer';
import { CookieBanner } from '@/components/CookieBanner';
import { Toaster } from '@/components/ui/toaster';
// import { PerformanceMonitor } from '@/components/PerformanceMonitor';
import { lazy, Suspense } from 'react';
import Index from '@/pages/Index';

// Lazy load pages for better performance
const Products = lazy(() => import('@/pages/Products').then(module => ({ default: module.Products })));
const Blogs = lazy(() => import('@/pages/Blogs').then(module => ({ default: module.Blogs })));
const BlogPost = lazy(() => import('@/pages/BlogPost').then(module => ({ default: module.BlogPost })));
const ERPServices = lazy(() => import('@/pages/ERPServices').then(module => ({ default: module.ERPServices })));
const WebDevelopment = lazy(() => import('@/pages/services/WebDevelopment').then(module => ({ default: module.WebDevelopment })));
const MobileAppDevelopment = lazy(() => import('@/pages/services/MobileAppDevelopment').then(module => ({ default: module.MobileAppDevelopment })));
const EnterpriseERP = lazy(() => import('@/pages/services/EnterpriseERP').then(module => ({ default: module.EnterpriseERP })));
const APIDevelopment = lazy(() => import('@/pages/services/APIDevelopment').then(module => ({ default: module.APIDevelopment })));
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
    type: "tween" as const,
    ease: "anticipate" as const,
    duration: 0.6
  };

  const renderPage = () => {
    const LoadingSpinner = () => (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );

    switch (currentPage) {
      case 'services':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <Products lang={lang} />
          </Suspense>
        );
      case 'blogs':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <Blogs lang={lang} />
          </Suspense>
        );
      case 'blog-post':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <BlogPost lang={lang} postId={blogPostId} />
          </Suspense>
        );
      case 'web-development':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <WebDevelopment />
          </Suspense>
        );
      case 'mobile-app-development':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <MobileAppDevelopment />
          </Suspense>
        );
      case 'enterprise-erp':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <EnterpriseERP />
          </Suspense>
        );
      case 'api-development':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <APIDevelopment />
          </Suspense>
        );
      case 'erp-services':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <ERPServices lang={lang} />
          </Suspense>
        );
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
      {/* <PerformanceMonitor /> */}
    </div>
  );
};

export default App;