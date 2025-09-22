import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export type Language = 'en' | 'ar';

interface LanguageToggleProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const LanguageToggle = ({ currentLang, onLanguageChange }: LanguageToggleProps) => {
  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    onLanguageChange(newLang);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">
        {currentLang === 'en' ? 'العربية' : 'English'}
      </span>
    </Button>
  );
};