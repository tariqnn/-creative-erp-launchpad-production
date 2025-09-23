import { Search, Settings, Rocket } from 'lucide-react';
import { Language, useTranslation } from '@/lib/i18n';

interface HowItWorksProps {
  lang: Language;
}

export const HowItWorks = ({ lang }: HowItWorksProps) => {
  const t = useTranslation(lang);

  const steps = [
    {
      icon: Search,
      title: t.step1Title,
      description: t.step1Description,
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Settings,
      title: t.step2Title,
      description: t.step2Description,
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Rocket,
      title: t.step3Title,
      description: t.step3Description,
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
            {t.howItWorksTitle}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isReverse = index % 2 === 1;
            
            return (
              <div key={index} className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${isReverse && lang === 'en' ? 'md:flex-row-reverse' : ''} ${isReverse && lang === 'ar' ? 'md:flex-row' : ''}`}>
                {/* Icon and number */}
                <div className="flex-shrink-0 relative">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-card`}>
                    <Icon className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                
                {/* Content */}
                <div className={`flex-1 text-center md:text-left ${isReverse && lang === 'en' ? 'md:text-right' : ''}`}>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-primary to-transparent" 
                       style={{ top: `${(index + 1) * 200}px` }} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};