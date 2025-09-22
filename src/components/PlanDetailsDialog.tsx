import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Check, Calendar, Star, Clock, Users, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Language } from '@/lib/i18n';

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  color: string;
}

interface PlanDetailsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  plan: Plan | null;
  lang: Language;
}

export const PlanDetailsDialog = ({ isOpen, onClose, plan, lang }: PlanDetailsDialogProps) => {
  const { toast } = useToast();
  const [isBooking, setIsBooking] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    preferredDate: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleBookMeeting = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooking(true);

    try {
      const { error } = await supabase.functions.invoke('submit-demo', {
        body: {
          ...formData,
          interest: plan?.name,
          preferred_date: formData.preferredDate,
          message: `${formData.message}\n\nInterested in: ${plan?.name} plan`
        }
      });

      if (error) throw error;

      toast({
        title: lang === 'en' ? 'Meeting Booked!' : 'تم حجز الاجتماع!',
        description: lang === 'en' 
          ? 'We\'ll contact you soon to arrange the meeting details.' 
          : 'سنتواصل معك قريباً لترتيب تفاصيل الاجتماع.',
      });

      setFormData({ name: '', email: '', phone: '', company: '', preferredDate: '', message: '' });
      onClose();
    } catch (error: any) {
      toast({
        title: lang === 'en' ? 'Error' : 'خطأ',
        description: lang === 'en' 
          ? 'Failed to book meeting. Please try again.' 
          : 'فشل في حجز الاجتماع. يرجى المحاولة مرة أخرى.',
        variant: 'destructive',
      });
    } finally {
      setIsBooking(false);
    }
  };

  if (!plan) return null;

  const detailedFeatures = {
    'Starter': {
      en: [
        'Up to 10 users included',
        'Core ERP modules (Finance, Inventory, Sales)',
        'Basic reporting and analytics',
        'Email support (48h response)',
        '10GB cloud storage',
        'Mobile app access',
        'Standard integrations (5 apps)',
        'Monthly backups'
      ],
      ar: [
        'حتى 10 مستخدمين',
        'وحدات ERP الأساسية (المالية، المخزون، المبيعات)',
        'تقارير وتحليلات أساسية',
        'دعم البريد الإلكتروني (استجابة 48 ساعة)',
        'تخزين سحابي 10 جيجابايت',
        'الوصول لتطبيق الموبايل',
        'تكاملات قياسية (5 تطبيقات)',
        'نسخ احتياطية شهرية'
      ]
    },
    'Professional': {
      en: [
        'Up to 50 users included',
        'All ERP modules + Advanced features',
        'Advanced reporting with custom dashboards',
        'Priority support (24h response)',
        '100GB cloud storage',
        'Mobile app + API access',
        'Premium integrations (15 apps)',
        'Weekly backups + real-time sync',
        'Multi-location support',
        'Advanced user permissions'
      ],
      ar: [
        'حتى 50 مستخدم',
        'جميع وحدات ERP + ميزات متقدمة',
        'تقارير متقدمة مع لوحات تحكم مخصصة',
        'دعم أولوية (استجابة 24 ساعة)',
        'تخزين سحابي 100 جيجابايت',
        'تطبيق الموبايل + وصول API',
        'تكاملات متميزة (15 تطبيق)',
        'نسخ احتياطية أسبوعية + مزامنة فورية',
        'دعم مواقع متعددة',
        'صلاحيات مستخدمين متقدمة'
      ]
    },
    'Enterprise': {
      en: [
        'Unlimited users',
        'Full ERP suite + Custom modules',
        'Advanced analytics + AI insights',
        'Dedicated support team (4h response)',
        'Unlimited cloud storage',
        'Full API access + Custom integrations',
        'White-label solution available',
        'Real-time backups + disaster recovery',
        'Global multi-location support',
        'Advanced security + SSO',
        'Custom training + onboarding',
        'On-premise deployment option'
      ],
      ar: [
        'مستخدمين غير محدودين',
        'مجموعة ERP كاملة + وحدات مخصصة',
        'تحليلات متقدمة + رؤى الذكاء الاصطناعي',
        'فريق دعم مخصص (استجابة 4 ساعات)',
        'تخزين سحابي غير محدود',
        'وصول API كامل + تكاملات مخصصة',
        'حل بعلامة تجارية بيضاء متاح',
        'نسخ احتياطية فورية + استعادة الكوارث',
        'دعم مواقع متعددة عالمياً',
        'أمان متقدم + تسجيل دخول موحد',
        'تدريب مخصص + إعداد',
        'خيار النشر المحلي'
      ]
    }
  };

  const currentFeatures = detailedFeatures[plan.name as keyof typeof detailedFeatures]?.[lang as keyof typeof detailedFeatures.Starter] || plan.features;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              {plan.name}
              {plan.popular && (
                <Badge className="bg-gradient-to-r from-primary to-primary-deep text-white">
                  <Star className="h-3 w-3 mr-1 fill-current" />
                  {lang === 'en' ? 'Popular' : 'شائع'}
                </Badge>
              )}
            </DialogTitle>
          </div>
          <div className="flex items-baseline gap-2 mb-4">
            <span className={`text-4xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
              {plan.price}
            </span>
            <span className="text-muted-foreground text-lg">{plan.period}</span>
          </div>
          <DialogDescription className="text-lg">
            {plan.description}
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {/* Features Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              {lang === 'en' ? 'What\'s Included' : 'ما هو مُتضمن'}
            </h3>
            <ul className="space-y-3">
              {currentFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Booking Form */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              {lang === 'en' ? 'Book a Meeting' : 'احجز اجتماع'}
            </h3>
            <form onSubmit={handleBookMeeting} className="space-y-4">
              <div>
                <Label htmlFor="name">{lang === 'en' ? 'Full Name' : 'الاسم الكامل'}</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email">{lang === 'en' ? 'Email' : 'البريد الإلكتروني'}</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone">{lang === 'en' ? 'Phone' : 'الهاتف'}</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="company">{lang === 'en' ? 'Company' : 'الشركة'}</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="preferredDate">{lang === 'en' ? 'Preferred Date & Time' : 'التاريخ والوقت المفضل'}</Label>
                <Input
                  id="preferredDate"
                  type="datetime-local"
                  value={formData.preferredDate}
                  onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="message">{lang === 'en' ? 'Additional Notes' : 'ملاحظات إضافية'}</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder={lang === 'en' ? 'Tell us about your business needs...' : 'أخبرنا عن احتياجات عملك...'}
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isBooking}
                className="w-full gradient-primary text-white shadow-hero hover:scale-105 transition-all duration-300"
              >
                {isBooking ? (
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 animate-spin" />
                    {lang === 'en' ? 'Booking...' : 'جاري الحجز...'}
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {lang === 'en' ? 'Book Meeting' : 'احجز الاجتماع'}
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};