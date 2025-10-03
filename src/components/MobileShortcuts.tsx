import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Home, 
  Briefcase, 
  Database, 
  MessageCircle, 
  ChevronUp,
  Globe,
  Smartphone,
  Code,
  BarChart3
} from 'lucide-react';
import { Language, useTranslation } from '@/lib/i18n';

interface MobileShortcutsProps {
  lang: Language;
}

export const MobileShortcuts = ({ lang }: MobileShortcutsProps) => {
  const t = useTranslation(lang);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Show shortcuts only on mobile devices
  useEffect(() => {
    const checkScreenSize = () => {
      setIsVisible(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const shortcuts = [
    {
      id: 'home',
      label: lang === 'en' ? 'Home' : 'الرئيسية',
      icon: Home,
      href: '#home',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      id: 'services',
      label: lang === 'en' ? 'Services' : 'الخدمات',
      icon: Briefcase,
      href: '#services',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      id: 'erp-on-demand',
      label: lang === 'en' ? 'ERP Services' : 'خدمات ERP',
      icon: Database,
      href: '#erp-on-demand',
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      id: 'contact',
      label: lang === 'en' ? 'Contact' : 'اتصل بنا',
      icon: MessageCircle,
      href: '#contact',
      color: 'bg-orange-500 hover:bg-orange-600'
    }
  ];

  const serviceShortcuts = [
    {
      id: 'web-dev',
      label: lang === 'en' ? 'Web Dev' : 'تطوير ويب',
      icon: Globe,
      href: '/services',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      id: 'mobile-dev',
      label: lang === 'en' ? 'Mobile' : 'موبايل',
      icon: Smartphone,
      href: '/services',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      id: 'api-dev',
      label: lang === 'en' ? 'API' : 'API',
      icon: Code,
      href: '/services',
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      id: 'erp-dev',
      label: lang === 'en' ? 'ERP' : 'ERP',
      icon: BarChart3,
      href: '/erp-services',
      color: 'bg-orange-500 hover:bg-orange-600'
    }
  ];

  const handleShortcutClick = (href: string) => {
    if (href.startsWith('#')) {
      // Scroll to section
      const element = document.getElementById(href.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to page
      window.history.pushState({}, '', href);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
    setIsExpanded(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-4 left-4 right-4 z-40 md:hidden"
      >
        {/* Main Shortcuts */}
        <motion.div
          layout
          className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
        >
          {!isExpanded ? (
            <div className="flex items-center justify-between p-2">
              {shortcuts.map((shortcut) => (
                <Button
                  key={shortcut.id}
                  variant="ghost"
                  size="sm"
                  className="flex-1 flex flex-col items-center gap-1 p-2 h-auto"
                  onClick={() => handleShortcutClick(shortcut.href)}
                >
                  <shortcut.icon className="w-5 h-5" />
                  <span className="text-xs font-medium">{shortcut.label}</span>
                </Button>
              ))}
              <Button
                variant="ghost"
                size="sm"
                className="p-2"
                onClick={() => setIsExpanded(true)}
              >
                <ChevronUp className="w-5 h-5" />
              </Button>
            </div>
          ) : (
            <div className="p-4">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {lang === 'en' ? 'Quick Navigation' : 'التنقل السريع'}
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsExpanded(false)}
                >
                  <ChevronUp className="w-5 h-5 rotate-180" />
                </Button>
              </div>

              {/* Main Sections */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  {lang === 'en' ? 'Main Sections' : 'الأقسام الرئيسية'}
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {shortcuts.map((shortcut) => (
                    <Button
                      key={shortcut.id}
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 justify-start h-auto p-3"
                      onClick={() => handleShortcutClick(shortcut.href)}
                    >
                      <shortcut.icon className="w-4 h-4" />
                      <span className="text-sm">{shortcut.label}</span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Service Shortcuts */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  {lang === 'en' ? 'Our Services' : 'خدماتنا'}
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {serviceShortcuts.map((shortcut) => (
                    <Button
                      key={shortcut.id}
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 justify-start h-auto p-3"
                      onClick={() => handleShortcutClick(shortcut.href)}
                    >
                      <shortcut.icon className="w-4 h-4" />
                      <span className="text-sm">{shortcut.label}</span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => handleShortcutClick('#contact')}
                  >
                    {lang === 'en' ? 'Get Quote' : 'احصل على عرض سعر'}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={() => handleShortcutClick('/services')}
                  >
                    {lang === 'en' ? 'View All' : 'عرض الكل'}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};





