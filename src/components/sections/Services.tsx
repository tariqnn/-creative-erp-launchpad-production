import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, Smartphone, Globe, ArrowRight, Check } from 'lucide-react';
import { Language, useTranslation } from '@/lib/i18n';
import { ServiceExamplesDialog } from '@/components/ServiceExamplesDialog';
import { useState } from 'react';

interface ServicesProps {
  lang: Language;
}

export const Services = ({ lang }: ServicesProps) => {
  const t = useTranslation(lang);
  const [selectedService, setSelectedService] = useState<'erp' | 'mobile' | 'website' | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleLearnMore = (serviceType: 'erp' | 'mobile' | 'website') => {
    if (serviceType === 'erp') {
      // Navigate to ERP services page
      window.history.pushState({}, '', '/erp-services');
      window.dispatchEvent(new PopStateEvent('popstate'));
    } else {
      // Keep dialog for other services
      setSelectedService(serviceType);
      setIsDialogOpen(true);
    }
  };

  const services = [
    {
      icon: BarChart3,
      title: t.erpTitle,
      description: t.erpDescription,
      features: t.erpFeatures,
      color: 'from-blue-600 to-blue-700',
      type: 'erp' as const
    },
    {
      icon: Smartphone,
      title: t.mobileTitle,
      description: t.mobileDescription,
      features: t.mobileFeatures,
      color: 'from-blue-500 to-blue-600',
      type: 'mobile' as const
    },
    {
      icon: Globe,
      title: t.websiteTitle,
      description: t.websiteDescription,
      features: t.websiteFeatures,
      color: 'from-blue-400 to-blue-500',
      type: 'website' as const
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600">
            {t.servicesTitle}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 gradient-card border-0 relative overflow-hidden"
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <CardHeader className="relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
                    onClick={() => handleLearnMore(service.type)}
                  >
                    Learn More
                    <ArrowRight className={`ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300 ${lang === 'ar' ? 'rotate-180 -ml-2 mr-2' : ''}`} />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <ServiceExamplesDialog 
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          serviceType={selectedService}
          lang={lang}
        />
      </div>
    </section>
  );
};