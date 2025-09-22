import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart3, Smartphone, Globe, Users, ShoppingCart, FileText, Calendar, DollarSign, Package, TrendingUp, Monitor, Zap, Shield } from 'lucide-react';
import { Language } from '@/lib/i18n';

interface ServiceExamplesDialogProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType: 'erp' | 'mobile' | 'website' | null;
  lang: Language;
}

export const ServiceExamplesDialog = ({ isOpen, onClose, serviceType, lang }: ServiceExamplesDialogProps) => {
  if (!serviceType) return null;

  const examples = {
    erp: {
      title: lang === 'en' ? 'ERP System Examples' : 'أمثلة على أنظمة تخطيط الموارد',
      description: lang === 'en' ? 'Comprehensive business management solutions' : 'حلول إدارة الأعمال الشاملة',
      apps: [
        {
          name: lang === 'en' ? 'Financial Management Suite' : 'نظام إدارة الشؤون المالية',
          description: lang === 'en' ? 'Complete accounting and financial planning system' : 'نظام محاسبي وتخطيط مالي شامل',
          features: lang === 'en' 
            ? ['Real-time financial reporting', 'Budget planning & tracking', 'Invoice management', 'Tax compliance', 'Multi-currency support']
            : ['تقارير مالية فورية', 'تخطيط وتتبع الميزانية', 'إدارة الفواتير', 'الامتثال الضريبي', 'دعم العملات المتعددة'],
          icon: DollarSign,
          color: 'from-green-500 to-emerald-600',
          tech: ['React', 'Node.js', 'PostgreSQL', 'Chart.js']
        },
        {
          name: lang === 'en' ? 'Inventory Control System' : 'نظام مراقبة المخزون',
          description: lang === 'en' ? 'Advanced warehouse and inventory management' : 'إدارة المخازن والمخزون المتقدمة',
          features: lang === 'en'
            ? ['Real-time stock tracking', 'Automated reorder points', 'Barcode scanning', 'Supplier management', 'Cost analysis']
            : ['تتبع المخزون الفوري', 'نقاط إعادة الطلب التلقائية', 'مسح الباركود', 'إدارة الموردين', 'تحليل التكاليف'],
          icon: Package,
          color: 'from-blue-500 to-cyan-600',
          tech: ['Vue.js', 'Express', 'MongoDB', 'Redis']
        },
        {
          name: lang === 'en' ? 'CRM & Sales Platform' : 'منصة إدارة العلاقات والمبيعات',
          description: lang === 'en' ? 'Customer relationship and sales management' : 'إدارة علاقات العملاء والمبيعات',
          features: lang === 'en'
            ? ['Lead tracking', 'Sales pipeline', 'Customer analytics', 'Email automation', 'Performance dashboards']
            : ['تتبع العملاء المحتملين', 'خط أنابيب المبيعات', 'تحليلات العملاء', 'أتمتة البريد الإلكتروني', 'لوحات الأداء'],
          icon: Users,
          color: 'from-purple-500 to-pink-600',
          tech: ['React', 'Django', 'PostgreSQL', 'Elasticsearch']
        }
      ]
    },
    mobile: {
      title: lang === 'en' ? 'Mobile App Examples' : 'أمثلة على تطبيقات الموبايل',
      description: lang === 'en' ? 'Native and cross-platform mobile solutions' : 'حلول موبايل أصلية ومتعددة المنصات',
      apps: [
        {
          name: lang === 'en' ? 'Business Analytics Dashboard' : 'لوحة تحليلات الأعمال',
          description: lang === 'en' ? 'Real-time business insights on the go' : 'رؤى الأعمال الفورية أثناء التنقل',
          features: lang === 'en'
            ? ['Live data visualization', 'Push notifications', 'Offline mode', 'Custom reports', 'Team collaboration']
            : ['تصور البيانات المباشر', 'الإشعارات الفورية', 'وضع عدم الاتصال', 'التقارير المخصصة', 'تعاون الفريق'],
          icon: TrendingUp,
          color: 'from-orange-500 to-red-600',
          tech: ['React Native', 'Firebase', 'Redux', 'D3.js']
        },
        {
          name: lang === 'en' ? 'Employee Management App' : 'تطبيق إدارة الموظفين',
          description: lang === 'en' ? 'HR and workforce management solution' : 'حل إدارة الموارد البشرية والقوى العاملة',
          features: lang === 'en'
            ? ['Time tracking', 'Leave management', 'Payroll integration', 'Performance reviews', 'Employee directory']
            : ['تتبع الوقت', 'إدارة الإجازات', 'تكامل كشوف المرتبات', 'تقييمات الأداء', 'دليل الموظفين'],
          icon: Users,
          color: 'from-indigo-500 to-purple-600',
          tech: ['Flutter', 'Node.js', 'MySQL', 'JWT']
        },
        {
          name: lang === 'en' ? 'Field Service App' : 'تطبيق الخدمة الميدانية',
          description: lang === 'en' ? 'On-site service management and reporting' : 'إدارة وتقارير الخدمة في الموقع',
          features: lang === 'en'
            ? ['GPS tracking', 'Work order management', 'Photo documentation', 'Digital signatures', 'Inventory sync']
            : ['تتبع GPS', 'إدارة أوامر العمل', 'توثيق الصور', 'التوقيعات الرقمية', 'مزامنة المخزون'],
          icon: Monitor,
          color: 'from-teal-500 to-green-600',
          tech: ['Native iOS/Android', 'Laravel', 'PostgreSQL', 'AWS']
        }
      ]
    },
    website: {
      title: lang === 'en' ? 'Website Examples' : 'أمثلة على المواقع الإلكترونية',
      description: lang === 'en' ? 'Modern web applications and portals' : 'تطبيقات ومنصات ويب حديثة',
      apps: [
        {
          name: lang === 'en' ? 'E-commerce Platform' : 'منصة التجارة الإلكترونية',
          description: lang === 'en' ? 'Full-featured online store with admin panel' : 'متجر إلكتروني متكامل مع لوحة إدارة',
          features: lang === 'en'
            ? ['Product catalog', 'Shopping cart', 'Payment gateway', 'Order management', 'Analytics dashboard']
            : ['كتالوج المنتجات', 'سلة التسوق', 'بوابة الدفع', 'إدارة الطلبات', 'لوحة التحليلات'],
          icon: ShoppingCart,
          color: 'from-pink-500 to-rose-600',
          tech: ['Next.js', 'Stripe', 'Supabase', 'Tailwind CSS']
        },
        {
          name: lang === 'en' ? 'Corporate Portal' : 'البوابة المؤسسية',
          description: lang === 'en' ? 'Internal company portal with document management' : 'بوابة شركة داخلية مع إدارة الوثائق',
          features: lang === 'en'
            ? ['Employee portal', 'Document sharing', 'News & announcements', 'Directory', 'Calendar integration']
            : ['بوابة الموظفين', 'مشاركة الوثائق', 'الأخبار والإعلانات', 'الدليل', 'تكامل التقويم'],
          icon: FileText,
          color: 'from-blue-500 to-indigo-600',
          tech: ['React', 'Node.js', 'MongoDB', 'Socket.io']
        },
        {
          name: lang === 'en' ? 'Booking & Scheduling System' : 'نظام الحجز والجدولة',
          description: lang === 'en' ? 'Advanced appointment and resource booking' : 'حجز المواعيد والموارد المتقدم',
          features: lang === 'en'
            ? ['Online booking', 'Calendar integration', 'Payment processing', 'Email notifications', 'Resource management']
            : ['الحجز الإلكتروني', 'تكامل التقويم', 'معالجة المدفوعات', 'إشعارات البريد الإلكتروني', 'إدارة الموارد'],
          icon: Calendar,
          color: 'from-cyan-500 to-blue-600',
          tech: ['Vue.js', 'Laravel', 'MySQL', 'Pusher']
        }
      ]
    }
  };

  const currentService = examples[serviceType];
  if (!currentService) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-3">
            {serviceType === 'erp' && <BarChart3 className="h-6 w-6 text-primary" />}
            {serviceType === 'mobile' && <Smartphone className="h-6 w-6 text-primary" />}
            {serviceType === 'website' && <Globe className="h-6 w-6 text-primary" />}
            {currentService.title}
          </DialogTitle>
          <DialogDescription className="text-lg">
            {currentService.description}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 mt-6">
          {currentService.apps.map((app, index) => {
            const Icon = app.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${app.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold mb-2">{app.name}</CardTitle>
                      <CardDescription className="text-base">{app.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Shield className="h-4 w-4 text-primary" />
                        {lang === 'en' ? 'Key Features' : 'الميزات الرئيسية'}
                      </h4>
                      <ul className="space-y-2">
                        {app.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-primary" />
                        {lang === 'en' ? 'Technologies Used' : 'التقنيات المستخدمة'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {app.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-center mt-8">
          <Button 
            onClick={onClose}
            className="gradient-primary text-white px-8"
          >
            {lang === 'en' ? 'Start Your Project' : 'ابدأ مشروعك'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};