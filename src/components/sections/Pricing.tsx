import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star } from 'lucide-react';
import { Language, useTranslation } from '@/lib/i18n';
import { PlanDetailsDialog } from '@/components/PlanDetailsDialog';
import { useState } from 'react';

interface PricingProps {
  lang: Language;
}

export const Pricing = ({ lang }: PricingProps) => {
  const t = useTranslation(lang);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handlePlanSelect = (plan: any) => {
    setSelectedPlan(plan);
    setIsDialogOpen(true);
  };

  const plans = [
    {
      name: t.starter,
      price: '$99',
      period: lang === 'en' ? '/month' : '/شهر',
      description: lang === 'en' ? 'Perfect for small teams getting started' : 'مثالي للفرق الصغيرة التي تبدأ',
      features: [
        lang === 'en' ? 'Up to 10 users' : 'حتى 10 مستخدمين',
        lang === 'en' ? 'Basic reporting' : 'تقارير أساسية',
        lang === 'en' ? 'Email support' : 'دعم البريد الإلكتروني',
        lang === 'en' ? '5GB storage' : '5 جيجابايت تخزين',
        lang === 'en' ? 'Mobile app access' : 'الوصول للتطبيق المحمول'
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: t.growth,
      price: '$199',
      period: lang === 'en' ? '/month' : '/شهر',
      description: lang === 'en' ? 'Ideal for growing businesses' : 'مثالي للشركات النامية',
      features: [
        lang === 'en' ? 'Up to 50 users' : 'حتى 50 مستخدم',
        lang === 'en' ? 'Advanced analytics' : 'تحليلات متقدمة',
        lang === 'en' ? 'Priority support' : 'دعم أولوية',
        lang === 'en' ? '50GB storage' : '50 جيجابايت تخزين',
        lang === 'en' ? 'API access' : 'الوصول للـ API',
        lang === 'en' ? 'Custom workflows' : 'تدفقات عمل مخصصة'
      ],
      popular: true,
      color: 'from-primary to-primary-deep'
    },
    {
      name: t.enterprise,
      price: lang === 'en' ? 'Custom' : 'مخصص',
      period: '',
      description: lang === 'en' ? 'For large organizations with complex needs' : 'للمؤسسات الكبيرة ذات الاحتياجات المعقدة',
      features: [
        lang === 'en' ? 'Unlimited users' : 'مستخدمين غير محدودين',
        lang === 'en' ? 'White-label solution' : 'حل بعلامة تجارية خاصة',
        lang === 'en' ? 'Dedicated support' : 'دعم مخصص',
        lang === 'en' ? 'Unlimited storage' : 'تخزين غير محدود',
        lang === 'en' ? 'Custom integrations' : 'تكاملات مخصصة',
        lang === 'en' ? 'On-premise deployment' : 'نشر محلي'
      ],
      popular: false,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-deep bg-clip-text text-transparent">
            {t.pricingTitle}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-deep mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative group hover:shadow-card transition-all duration-300 hover:-translate-y-2 gradient-card border-0 overflow-hidden ${plan.popular ? 'ring-2 ring-primary' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-2 text-sm font-medium flex items-center justify-center gap-2">
                    <Star className="h-4 w-4 fill-current" />
                    {lang === 'en' ? 'Most Popular' : 'الأكثر شعبية'}
                  </div>
                </div>
              )}
              
              <CardHeader className={`relative ${plan.popular ? 'pt-16' : 'pt-8'}`}>
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-2xl font-bold">
                    {plan.name}
                  </CardTitle>
                  {plan.popular && (
                    <Badge variant="secondary" className="bg-blue-100 text-blue-600">
                      {lang === 'en' ? 'Popular' : 'شائع'}
                    </Badge>
                  )}
                </div>
                
                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-blue-600' : 'text-gray-900'}`}>
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>
                
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'} hover:scale-105 transition-all duration-300`}
                  variant={plan.popular ? 'default' : 'outline'}
                  onClick={() => handlePlanSelect(plan)}
                >
                  {t.startFreeDemo}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <PlanDetailsDialog 
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          plan={selectedPlan}
          lang={lang}
        />
      </div>
    </section>
  );
};