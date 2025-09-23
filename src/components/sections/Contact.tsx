import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Language, useTranslation } from '@/lib/i18n';

interface ContactProps {
  lang: Language;
}

export const Contact = ({ lang }: ContactProps) => {
  const t = useTranslation(lang);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
    message: '',
    preferredDate: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Submitting demo request with data:', formData);
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL || 'https://tpopwklrqwkkprefbyls.supabase.co'}/functions/v1/submit-demo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          interest: formData.interest,
          preferred_date: formData.preferredDate,
          message: formData.message
        }),
      });

      console.log('Response status:', response.status);
      const result = await response.json();
      console.log('Response data:', result);

      if (!response.ok) {
        console.error('Server error:', result);
        throw new Error(result.error || 'Failed to submit demo request');
      }
      
      // Show success message
      toast({
        title: lang === 'en' ? 'Request Sent Successfully!' : 'تم إرسال الطلب بنجاح!',
        description: lang === 'en' ? 'Thank you! We\'ll contact you soon.' : 'شكراً لك! سنتواصل معك قريباً.',
      });

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        interest: '',
        message: '',
        preferredDate: ''
      });
    } catch (error) {
      console.error('Demo submission error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      toast({
        title: lang === 'en' ? 'Error' : 'خطأ',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    {/* Updated Contact Section with Blue Branding */}
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
            {t.contactTitle}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  {lang === 'en' ? 'Get in Touch' : 'تواصل معنا'}
                </CardTitle>
                <CardDescription>
                  {lang === 'en' 
                    ? 'Ready to transform your business? Contact us today to schedule a personalized demo.'
                    : 'مستعد لتحويل شركتك؟ تواصل معنا اليوم لجدولة عرض تجريبي مخصص.'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Contact Photo */}
                <div className="mb-8">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop&crop=center"
                      alt={lang === 'en' ? 'Contact Us - Creative Network Team' : 'اتصل بنا - فريق الشبكة الإبداعية'}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-1">
                        {lang === 'en' ? 'Get in Touch' : 'تواصل معنا'}
                      </h3>
                      <p className="text-sm opacity-90">
                        {lang === 'en' ? 'We\'re here to help you succeed' : 'نحن هنا لمساعدتك على النجاح'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-deep rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">
                      {lang === 'en' ? 'Email' : 'البريد الإلكتروني'}
                    </p>
                    <a 
                      href="mailto:info@creativenetworkservices.com"
                      className="text-muted-foreground hover:text-blue-600 transition-colors duration-300 cursor-pointer"
                    >
                      {import.meta.env.VITE_BOOKING_EMAIL || "info@creativenetworkservices.com"}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">
                      {lang === 'en' ? 'Phone' : 'الهاتف'}
                    </p>
                    <a 
                      href="tel:+962795550073"
                      className="text-muted-foreground hover:text-green-600 transition-colors duration-300 cursor-pointer"
                    >
                      +962795550073
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">
                      {lang === 'en' ? 'Office' : 'المكتب'}
                    </p>
                    <p className="text-muted-foreground">
                      {lang === 'en' 
                        ? '123 Business Street, Tech City, TC 12345'
                        : '123 شارع الأعمال، المدينة التقنية، TC 12345'
                      }
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                {lang === 'en' ? 'Request Demo' : 'طلب عرض تجريبي'}
              </CardTitle>
              <CardDescription>
                {lang === 'en' 
                  ? 'Fill out the form below and we\'ll get back to you within 24 hours.'
                  : 'املأ النموذج أدناه وسنعاود الاتصال بك خلال 24 ساعة.'
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">{t.fullName}</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.email}</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t.phone}</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">{t.company}</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="interest">{t.interest}</Label>
                  <Select value={formData.interest} onValueChange={(value) => handleInputChange('interest', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder={lang === 'en' ? 'Select an option' : 'اختر خياراً'} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-development">{t.websiteTitle}</SelectItem>
                      <SelectItem value="mobile-development">{t.mobileTitle}</SelectItem>
                      <SelectItem value="erp-solutions">{t.erpTitle}</SelectItem>
                      <SelectItem value="consultation">Consultation & Planning</SelectItem>
                      <SelectItem value="other">Other Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="preferredDate">{t.preferredDate}</Label>
                  <Input
                    id="preferredDate"
                    type="datetime-local"
                    value={formData.preferredDate}
                    onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">{t.message}</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    lang === 'en' ? 'Submitting...' : 'جارٍ الإرسال...'
                  ) : (
                    <>
                      {t.submit}
                      <Send className={`ml-2 h-4 w-4 ${lang === 'ar' ? 'rotate-180 -ml-2 mr-2' : ''}`} />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};