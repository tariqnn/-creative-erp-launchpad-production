import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Language, useTranslation } from '@/lib/i18n';
import { LanguageToggle } from './LanguageToggle';
import { Logo } from './Logo';

interface NavigationProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navigation = ({ lang, onLanguageChange }: NavigationProps) => {
  const t = useTranslation(lang);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      // Handle hash links for same page navigation
      if (href === '#home') {
        // Navigate to home page
        setIsNavigating(true);
        window.history.pushState({}, '', '/');
        window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'home' } }));
        setTimeout(() => setIsNavigating(false), 2000);
      } else {
        // Scroll to section on current page
        const element = document.getElementById(href.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // Handle page navigation
      setIsNavigating(true);
      let page = 'home';
      if (href === '/services') page = 'services';
      else if (href === '/blogs') page = 'blogs';
      
      window.history.pushState({}, '', href);
      window.dispatchEvent(new CustomEvent('navigate', { detail: { page } }));
      setTimeout(() => setIsNavigating(false), 2000);
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: t.home, href: '#home' },
    { label: t.services, href: '/services' },
    { label: t.blog, href: '/blogs' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Logo 
            size="md"
            onClick={() => handleNavigation('#home')}
            animate={isNavigating}
          />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <button
                  onClick={() => handleNavigation(item.href)}
                      className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-semibold text-base px-3 py-2 rounded-lg hover:bg-orange-50"
                >
                  <span>{item.label}</span>
                </button>
              </div>
            ))}
          </div>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <LanguageToggle 
              currentLang={lang}
              onLanguageChange={onLanguageChange}
            />
            <Button 
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 font-semibold"
              onClick={() => handleNavigation('/services')}
            >
              {t.ourServices}
            </Button>
                <Button 
                  className="btn-brand-secondary px-6 py-2 font-semibold"
              onClick={() => handleNavigation('#contact')}
            >
              {t.hireUs}
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageToggle 
              currentLang={lang}
              onLanguageChange={onLanguageChange}
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white shadow-lg">
            <div className="py-6 space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation(item.href)}
                      className="block w-full text-left px-6 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-300 font-semibold text-lg"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-6 py-4 space-y-4 border-t border-gray-100">
                <Button 
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 py-3 font-semibold"
                  onClick={() => handleNavigation('/services')}
                >
                  {t.ourServices}
                </Button>
                    <Button 
                      className="w-full btn-brand-secondary py-3 font-semibold"
                  onClick={() => handleNavigation('#contact')}
                >
                  {t.hireUs}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};