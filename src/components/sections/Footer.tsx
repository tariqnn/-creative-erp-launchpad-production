import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';
import { Language, useTranslation } from '@/lib/i18n';
import { LanguageToggle } from '../LanguageToggle';

interface FooterProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Footer = ({ lang, onLanguageChange }: FooterProps) => {
  const t = useTranslation(lang);

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-black">
              {t.creativeNetwork}
            </h3>
            <p className="text-muted-foreground">
              {lang === 'en' 
                ? 'Transforming businesses with innovative ERP solutions and custom development services.'
                : 'نحول الشركات بحلول ERP المبتكرة وخدمات التطوير المخصصة.'
              }
            </p>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">
              {t.services}
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">{t.erpTitle}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.mobileTitle}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.websiteTitle}</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">
              {lang === 'en' ? 'Company' : 'الشركة'}
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">
                {lang === 'en' ? 'About Us' : 'من نحن'}
              </a></li>
              <li><a href="#" className="hover:text-primary transition-colors">
                {lang === 'en' ? 'Careers' : 'الوظائف'}
              </a></li>
              <li><a href="#" className="hover:text-primary transition-colors">
                {lang === 'en' ? 'Blog' : 'المدونة'}
              </a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">
              {t.contact}
            </h4>
            <div className="space-y-3 text-muted-foreground">
              <div>
                <a 
                  href="mailto:info@creativenetwork.com"
                  className="hover:text-blue-600 transition-colors duration-300 cursor-pointer block"
                >
                  info@creativenetwork.com
                </a>
              </div>
              <div>
                <a 
                  href="tel:+962795550073"
                  className="hover:text-green-600 transition-colors duration-300 cursor-pointer block"
                >
                  +962795550073
                </a>
              </div>
              <div className="pt-2">
                <LanguageToggle 
                  currentLang={lang}
                  onLanguageChange={onLanguageChange}
                />
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="mb-8" />
        
        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 {t.creativeNetwork}. {t.allRightsReserved}
          </p>
          
          {/* Social links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="w-10 h-10 hover:bg-primary hover:text-white transition-all duration-300"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <Icon className="h-4 w-4" />
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};