import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Database, Users, ShoppingCart, BarChart3, Settings, Shield, ArrowRight } from 'lucide-react';
import { Language, useTranslation } from '@/lib/i18n';

interface ERPOnDemandProps {
  lang: Language;
}

export const ERPOnDemand = ({ lang }: ERPOnDemandProps) => {
  const t = useTranslation(lang);
  const [currentSlide, setCurrentSlide] = useState(0);

  const erpServices = [
    {
      id: 1,
      title: lang === 'en' ? 'Financial Management' : 'إدارة مالية',
      description: lang === 'en' ? 'Complete accounting and financial reporting system' : 'نظام محاسبة وتقارير مالية شامل',
      features: [
        lang === 'en' ? 'General Ledger' : 'دفتر الأستاذ العام',
        lang === 'en' ? 'Accounts Payable/Receivable' : 'حسابات الدائنين والمدينين',
        lang === 'en' ? 'Financial Reporting' : 'التقارير المالية',
        lang === 'en' ? 'Budget Management' : 'إدارة الميزانية'
      ],
      technologies: ['Odoo', 'SAP', 'Oracle'],
      price: lang === 'en' ? 'From $25/user' : 'من 25$/مستخدم',
      icon: Database,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: lang === 'en' ? 'Human Resources' : 'الموارد البشرية',
      description: lang === 'en' ? 'Comprehensive HR management and payroll system' : 'نظام إدارة موارد بشرية ورواتب شامل',
      features: [
        lang === 'en' ? 'Employee Management' : 'إدارة الموظفين',
        lang === 'en' ? 'Payroll Processing' : 'معالجة الرواتب',
        lang === 'en' ? 'Performance Reviews' : 'مراجعات الأداء',
        lang === 'en' ? 'Leave Management' : 'إدارة الإجازات'
      ],
      technologies: ['Workday', 'BambooHR', 'ADP'],
      price: lang === 'en' ? 'From $15/user' : 'من 15$/مستخدم',
      icon: Users,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      title: lang === 'en' ? 'Inventory Management' : 'إدارة المخزون',
      description: lang === 'en' ? 'Advanced inventory tracking and warehouse management' : 'تتبع متقدم للمخزون وإدارة المستودعات',
      features: [
        lang === 'en' ? 'Stock Tracking' : 'تتبع المخزون',
        lang === 'en' ? 'Warehouse Management' : 'إدارة المستودعات',
        lang === 'en' ? 'Purchase Orders' : 'أوامر الشراء',
        lang === 'en' ? 'Supplier Management' : 'إدارة الموردين'
      ],
      technologies: ['NetSuite', 'Infor', 'Epicor'],
      price: lang === 'en' ? 'From $20/user' : 'من 20$/مستخدم',
      icon: ShoppingCart,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      title: lang === 'en' ? 'Business Analytics' : 'التحليلات التجارية',
      description: lang === 'en' ? 'Powerful reporting and business intelligence tools' : 'أدوات تقارير وذكاء تجاري قوية',
      features: [
        lang === 'en' ? 'Real-time Dashboards' : 'لوحات تحكم فورية',
        lang === 'en' ? 'Custom Reports' : 'تقارير مخصصة',
        lang === 'en' ? 'Data Visualization' : 'تصور البيانات',
        lang === 'en' ? 'Predictive Analytics' : 'التحليلات التنبؤية'
      ],
      technologies: ['Tableau', 'Power BI', 'Qlik'],
      price: lang === 'en' ? 'From $30/user' : 'من 30$/مستخدم',
      icon: BarChart3,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 5,
      title: lang === 'en' ? 'System Configuration' : 'تكوين النظام',
      description: lang === 'en' ? 'Custom system setup and configuration services' : 'خدمات إعداد وتكوين نظام مخصص',
      features: [
        lang === 'en' ? 'System Setup' : 'إعداد النظام',
        lang === 'en' ? 'Data Migration' : 'نقل البيانات',
        lang === 'en' ? 'User Training' : 'تدريب المستخدمين',
        lang === 'en' ? 'Ongoing Support' : 'دعم مستمر'
      ],
      technologies: ['Custom', 'Integration', 'Training'],
      price: lang === 'en' ? 'From $50/hour' : 'من 50$/ساعة',
      icon: Settings,
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 6,
      title: lang === 'en' ? 'Security & Compliance' : 'الأمان والامتثال',
      description: lang === 'en' ? 'Enterprise-grade security and compliance management' : 'إدارة أمان وامتثال على مستوى المؤسسات',
      features: [
        lang === 'en' ? 'Data Encryption' : 'تشفير البيانات',
        lang === 'en' ? 'Access Control' : 'التحكم في الوصول',
        lang === 'en' ? 'Audit Trails' : 'مسارات التدقيق',
        lang === 'en' ? 'Compliance Reporting' : 'تقارير الامتثال'
      ],
      technologies: ['ISO 27001', 'SOC 2', 'GDPR'],
      price: lang === 'en' ? 'From $40/user' : 'من 40$/مستخدم',
      icon: Shield,
      color: 'from-red-500 to-red-600'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % erpServices.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + erpServices.length) % erpServices.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {lang === 'en' ? 'ERP On-Demand Services' : 'خدمات ERP عند الطلب'}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              {lang === 'en' 
                ? 'Get the ERP modules you need, when you need them. Flexible, scalable, and cost-effective solutions for your business.'
                : 'احصل على وحدات ERP التي تحتاجها، عندما تحتاجها. حلول مرنة وقابلة للتوسع وفعالة من حيث التكلفة لعملك.'
              }
            </p>
          </motion.div>
        </div>

        {/* Sliding Cards Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons - Both Desktop and Mobile */}
          <div>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-10 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4 md:h-6 md:w-6 text-blue-600" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-10 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4 md:h-6 md:w-6 text-blue-600" />
            </Button>
          </div>

          {/* Cards Container */}
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-full"
              >
                <Card className="border-0 shadow-none overflow-hidden bg-gradient-to-br from-white to-blue-50/30">
                  <div className={`h-3 bg-gradient-to-r ${erpServices[currentSlide].color} relative`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                  </div>
                  
                  <CardHeader className="pb-8 pt-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${erpServices[currentSlide].color} flex items-center justify-center shadow-lg relative`}>
                        <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse" />
                        {(() => {
                          const IconComponent = erpServices[currentSlide].icon;
                          return <IconComponent className="w-10 h-10 text-white relative z-10" />;
                        })()}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                          {erpServices[currentSlide].title}
                        </CardTitle>
                        <Badge className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border border-blue-300 px-4 py-2 text-lg font-semibold">
                          {erpServices[currentSlide].price}
                        </Badge>
                      </div>
                    </div>
                    <CardDescription className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                      {erpServices[currentSlide].description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-8 px-8 pb-8">
                    {/* Features */}
                    <div>
                      <h4 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        {lang === 'en' ? 'Key Features' : 'الميزات الرئيسية'}
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {erpServices[currentSlide].features.map((feature, index) => (
                          <motion.div 
                            key={index} 
                            className="flex items-center gap-4 p-3 rounded-lg bg-white/50 hover:bg-white/80 transition-all duration-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${erpServices[currentSlide].color} flex-shrink-0`} />
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        {lang === 'en' ? 'Technologies' : 'التقنيات'}
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {erpServices[currentSlide].technologies.map((tech, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Badge 
                              variant="outline" 
                              className="text-sm px-4 py-2 border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Button 
                          className={`w-full bg-gradient-to-r ${erpServices[currentSlide].color} hover:opacity-90 text-white py-4 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                          onClick={() => {
                            window.history.pushState({}, '', '/erp-services');
                            window.dispatchEvent(new PopStateEvent('popstate'));
                          }}
                        >
                          {lang === 'en' ? 'Learn More' : 'اعرف المزيد'}
                          <ArrowRight className="ml-3 w-6 h-6" />
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="md:hidden flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={prevSlide}
              className="flex items-center gap-3 bg-white/90 backdrop-blur-sm border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5 text-blue-600" />
              {lang === 'en' ? 'Previous' : 'السابق'}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={nextSlide}
              className="flex items-center gap-3 bg-white/90 backdrop-blur-sm border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300"
            >
              {lang === 'en' ? 'Next' : 'التالي'}
              <ChevronRight className="h-5 w-5 text-blue-600" />
            </Button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {erpServices.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-blue-600 scale-125 shadow-lg' 
                    : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            {lang === 'en' 
              ? 'Need a custom ERP solution? We can build exactly what you need.'
              : 'تحتاج إلى حل ERP مخصص؟ يمكننا بناء ما تحتاجه بالضبط.'
            }
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
            onClick={() => {
              window.history.pushState({}, '', '/erp-services');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
          >
            {lang === 'en' ? 'Explore All ERP Services' : 'استكشف جميع خدمات ERP'}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
