import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, Database, BarChart3, Users, ShoppingCart, FileText, Calendar, DollarSign, Package, TrendingUp, Monitor, Zap, Shield, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from '@/lib/i18n';

interface ERPServicesProps {
  lang: Language;
}

export const ERPServices = ({ lang }: ERPServicesProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const erpServices = [
    {
      id: 1,
      title: lang === 'en' ? 'Financial Management Suite' : 'نظام إدارة الشؤون المالية',
      description: lang === 'en' ? 'Complete accounting and financial planning system with real-time reporting and multi-currency support' : 'نظام محاسبي وتخطيط مالي شامل مع التقارير الفورية ودعم العملات المتعددة',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-600',
      features: lang === 'en' 
        ? ['Real-time financial reporting', 'Budget planning & tracking', 'Invoice management', 'Tax compliance', 'Multi-currency support', 'Cash flow analysis']
        : ['تقارير مالية فورية', 'تخطيط وتتبع الميزانية', 'إدارة الفواتير', 'الامتثال الضريبي', 'دعم العملات المتعددة', 'تحليل التدفق النقدي'],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Chart.js', 'Stripe'],
      price: lang === 'en' ? '$12.50 per user' : '12.50 دولار لكل مستخدم',
      category: lang === 'en' ? 'Finance' : 'المالية'
    },
    {
      id: 2,
      title: lang === 'en' ? 'Inventory Control System' : 'نظام مراقبة المخزون',
      description: lang === 'en' ? 'Advanced warehouse and inventory management with automated reorder points and barcode scanning' : 'إدارة المخازن والمخزون المتقدمة مع نقاط إعادة الطلب التلقائية ومسح الباركود',
      icon: Package,
      color: 'from-blue-500 to-cyan-600',
      features: lang === 'en'
        ? ['Real-time stock tracking', 'Automated reorder points', 'Barcode scanning', 'Supplier management', 'Cost analysis', 'Multi-location support']
        : ['تتبع المخزون الفوري', 'نقاط إعادة الطلب التلقائية', 'مسح الباركود', 'إدارة الموردين', 'تحليل التكاليف', 'دعم المواقع المتعددة'],
      technologies: ['Vue.js', 'Express', 'MongoDB', 'Redis', 'Barcode API'],
      price: lang === 'en' ? '$18.50 per user' : '18.50 دولار لكل مستخدم',
      category: lang === 'en' ? 'Inventory' : 'المخزون'
    },
    {
      id: 3,
      title: lang === 'en' ? 'CRM & Sales Platform' : 'منصة إدارة العلاقات والمبيعات',
      description: lang === 'en' ? 'Customer relationship and sales management with lead tracking and performance dashboards' : 'إدارة علاقات العملاء والمبيعات مع تتبع العملاء المحتملين ولوحات الأداء',
      icon: Users,
      color: 'from-purple-500 to-pink-600',
      features: lang === 'en'
        ? ['Lead tracking', 'Sales pipeline', 'Customer analytics', 'Email automation', 'Performance dashboards', 'Contact management']
        : ['تتبع العملاء المحتملين', 'خط أنابيب المبيعات', 'تحليلات العملاء', 'أتمتة البريد الإلكتروني', 'لوحات الأداء', 'إدارة جهات الاتصال'],
      technologies: ['React', 'Django', 'PostgreSQL', 'Elasticsearch', 'SendGrid'],
      price: lang === 'en' ? '$25.00 per user' : '25.00 دولار لكل مستخدم',
      category: lang === 'en' ? 'Sales' : 'المبيعات'
    },
    {
      id: 4,
      title: lang === 'en' ? 'Human Resources Management' : 'نظام إدارة الموارد البشرية',
      description: lang === 'en' ? 'Complete HR solution with employee management, payroll integration, and performance tracking' : 'حل شامل للموارد البشرية مع إدارة الموظفين وتكامل كشوف المرتبات وتتبع الأداء',
      icon: Users,
      color: 'from-indigo-500 to-purple-600',
      features: lang === 'en'
        ? ['Employee database', 'Payroll integration', 'Time tracking', 'Leave management', 'Performance reviews', 'Recruitment tools']
        : ['قاعدة بيانات الموظفين', 'تكامل كشوف المرتبات', 'تتبع الوقت', 'إدارة الإجازات', 'تقييمات الأداء', 'أدوات التوظيف'],
      technologies: ['Angular', 'Laravel', 'MySQL', 'JWT', 'PayPal API'],
      price: lang === 'en' ? '$22.50 per user' : '22.50 دولار لكل مستخدم',
      category: lang === 'en' ? 'HR' : 'الموارد البشرية'
    },
    {
      id: 5,
      title: lang === 'en' ? 'Manufacturing Management' : 'نظام إدارة التصنيع',
      description: lang === 'en' ? 'Production planning and manufacturing control with quality management and cost tracking' : 'تخطيط الإنتاج ومراقبة التصنيع مع إدارة الجودة وتتبع التكاليف',
      icon: BarChart3,
      color: 'from-orange-500 to-red-600',
      features: lang === 'en'
        ? ['Production planning', 'Quality control', 'Cost tracking', 'Resource scheduling', 'Bill of materials', 'Work order management']
        : ['تخطيط الإنتاج', 'مراقبة الجودة', 'تتبع التكاليف', 'جدولة الموارد', 'قائمة المواد', 'إدارة أوامر العمل'],
      technologies: ['React', 'Python', 'PostgreSQL', 'Docker', 'Kubernetes'],
      price: lang === 'en' ? '$35.00 per user' : '35.00 دولار لكل مستخدم',
      category: lang === 'en' ? 'Manufacturing' : 'التصنيع'
    },
    {
      id: 6,
      title: lang === 'en' ? 'Project Management Suite' : 'مجموعة إدارة المشاريع',
      description: lang === 'en' ? 'Comprehensive project management with task tracking, resource allocation, and timeline management' : 'إدارة مشاريع شاملة مع تتبع المهام وتخصيص الموارد وإدارة الجدول الزمني',
      icon: Calendar,
      color: 'from-teal-500 to-green-600',
      features: lang === 'en'
        ? ['Task management', 'Resource allocation', 'Timeline tracking', 'Budget monitoring', 'Team collaboration', 'Progress reporting']
        : ['إدارة المهام', 'تخصيص الموارد', 'تتبع الجدول الزمني', 'مراقبة الميزانية', 'تعاون الفريق', 'تقارير التقدم'],
      technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io', 'Gantt Charts'],
      price: lang === 'en' ? '$20.00 per user' : '20.00 دولار لكل مستخدم',
      category: lang === 'en' ? 'Project Management' : 'إدارة المشاريع'
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

  const handleBackToHome = () => {
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const currentService = erpServices[currentSlide];
  const IconComponent = currentService.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Header */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button
                onClick={handleBackToHome}
                variant="outline"
                className="mb-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                {lang === 'en' ? 'Back to Home' : 'العودة للرئيسية'}
              </Button>
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {lang === 'en' ? 'ERP Services' : 'خدمات تخطيط الموارد'}
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {lang === 'en' 
                ? 'Comprehensive business management solutions tailored to your industry needs'
                : 'حلول إدارة الأعمال الشاملة المصممة خصيصاً لاحتياجات صناعتك'
              }
            </motion.p>

            {/* Floating Icons */}
            <div className="flex justify-center gap-8 mt-12">
              {[Database, BarChart3, Users, Package].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut"
                  }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sliding Cards Section */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              {lang === 'en' ? 'Our ERP Solutions' : 'حلول تخطيط الموارد'}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {lang === 'en' 
                ? 'Choose from our comprehensive suite of ERP modules designed to streamline your business operations'
                : 'اختر من مجموعة وحدات تخطيط الموارد الشاملة المصممة لتبسيط عمليات عملك'
              }
            </p>
          </motion.div>

          {/* Sliding Cards Container */}
          <div className="relative max-w-7xl mx-auto">
            {/* Previous Button - Left Side */}
            <motion.div
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={prevSlide}
                  variant="outline"
                  size="lg"
                  className="rounded-full w-16 h-16 p-0 bg-white/90 backdrop-blur-sm border-2 border-blue-200 hover:border-blue-400 hover:bg-white shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <ArrowLeft className="w-6 h-6 text-blue-600 group-hover:text-blue-700 group-hover:-translate-x-0.5 transition-all duration-300" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Next Button - Right Side */}
            <motion.div
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={nextSlide}
                  variant="outline"
                  size="lg"
                  className="rounded-full w-16 h-16 p-0 bg-white/90 backdrop-blur-sm border-2 border-blue-200 hover:border-blue-400 hover:bg-white shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <ArrowRight className="w-6 h-6 text-blue-600 group-hover:text-blue-700 group-hover:translate-x-0.5 transition-all duration-300" />
                </Button>
              </motion.div>
            </motion.div>

            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 300, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -300, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  className="w-full"
                >
                  <Card className="border-0 shadow-none bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 backdrop-blur-sm relative overflow-hidden">
                    {/* Card Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                      }} />
                    </div>

                    <CardHeader className="text-center pb-8 relative z-10">
                      <motion.div 
                        className="flex justify-center mb-8"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 200 }}
                      >
                        <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${currentService.color} flex items-center justify-center shadow-2xl relative group hover:scale-110 transition-all duration-300`}>
                          <IconComponent className="h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300" />
                          {/* Glow effect */}
                          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${currentService.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`} />
                        </div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border border-blue-200 px-4 py-2 text-sm font-medium">
                          {currentService.category}
                        </Badge>
                        <CardTitle className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                          {currentService.title}
                        </CardTitle>
                        <CardDescription className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                          {currentService.description}
                        </CardDescription>
                      </motion.div>
                    </CardHeader>
                    
                    <CardContent className="px-12 pb-12 relative z-10">
                      <motion.div 
                        className="grid md:grid-cols-2 gap-12 mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      >
                        {/* Features */}
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.8 }}
                        >
                          <h4 className="font-bold mb-6 flex items-center gap-3 text-xl text-gray-800">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                              <Shield className="h-5 w-5 text-white" />
                            </div>
                            {lang === 'en' ? 'Key Features' : 'الميزات الرئيسية'}
                          </h4>
                          <ul className="space-y-4">
                            {currentService.features.map((feature, index) => (
                              <motion.li 
                                key={index} 
                                className="flex items-start gap-4 group"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                              >
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                                  <CheckCircle className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>

                        {/* Technologies & Pricing */}
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.8 }}
                        >
                          <h4 className="font-bold mb-6 flex items-center gap-3 text-xl text-gray-800">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                              <Zap className="h-5 w-5 text-white" />
                            </div>
                            {lang === 'en' ? 'Technologies' : 'التقنيات'}
                          </h4>
                          <div className="flex flex-wrap gap-3 mb-8">
                            {currentService.technologies.map((tech, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                              >
                                <Badge 
                                  variant="secondary" 
                                  className="text-sm px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-blue-800 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 cursor-default"
                                >
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                          
                          <motion.div 
                            className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 p-6 rounded-2xl border border-blue-200/50 relative overflow-hidden group hover:shadow-lg transition-all duration-300"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="text-center relative z-10">
                              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                                {currentService.price}
                              </div>
                              <div className="text-sm text-gray-600 font-medium">
                                {lang === 'en' ? 'Starting price' : 'السعر الابتدائي'}
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>
                      </motion.div>

                      <motion.div 
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                      >
                        <Button 
                          size="lg"
                          className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white px-12 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 group"
                        >
                          {lang === 'en' ? 'Get Started' : 'ابدأ الآن'}
                          <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Navigation Buttons */}
            <motion.div 
              className="flex justify-center items-center mt-8 gap-4 md:hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={prevSlide}
                  variant="outline"
                  size="lg"
                  className="rounded-full w-14 h-14 p-0 bg-white/90 backdrop-blur-sm border-2 border-blue-200 hover:border-blue-400 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <ArrowLeft className="w-5 h-5 text-blue-600 group-hover:text-blue-700 group-hover:-translate-x-0.5 transition-all duration-300" />
                </Button>
              </motion.div>

              {/* Slide Indicators */}
              <div className="flex gap-2 px-4">
                {erpServices.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`relative transition-all duration-300 ${
                      index === currentSlide 
                        ? 'w-6 h-2' 
                        : 'w-2 h-2'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className={`w-full h-full rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`} />
                    {index === currentSlide && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-30"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={nextSlide}
                  variant="outline"
                  size="lg"
                  className="rounded-full w-14 h-14 p-0 bg-white/90 backdrop-blur-sm border-2 border-blue-200 hover:border-blue-400 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <ArrowRight className="w-5 h-5 text-blue-600 group-hover:text-blue-700 group-hover:translate-x-0.5 transition-all duration-300" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Desktop Slide Indicators */}
            <motion.div 
              className="hidden md:flex justify-center items-center mt-12 gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              {erpServices.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative transition-all duration-300 ${
                    index === currentSlide 
                      ? 'w-8 h-3' 
                      : 'w-3 h-3'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className={`w-full h-full rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`} />
                  {index === currentSlide && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-30"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>

            {/* Slide Counter */}
            <motion.div 
              className="text-center mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 shadow-lg">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-700">
                  {currentSlide + 1} / {erpServices.length}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold text-white mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {lang === 'en' ? 'Ready to Transform Your Business?' : 'مستعد لتحويل عملك؟'}
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {lang === 'en' 
                ? 'Let\'s discuss your ERP needs and create a solution that drives growth and efficiency.'
                : 'دعنا نناقش احتياجاتك من تخطيط الموارد وننشئ حلاً يدفع النمو والكفاءة.'
              }
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300 group"
                >
                  <Database className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  {lang === 'en' ? 'Start Your ERP Project' : 'ابدأ مشروع تخطيط الموارد'}
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm transition-all duration-300 group"
                >
                  <Calendar className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  {lang === 'en' ? 'Schedule Demo' : 'جدولة عرض توضيحي'}
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.8 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-white/80">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">Secure & Reliable</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-medium">Proven Results</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Users className="w-5 h-5" />
                <span className="text-sm font-medium">Expert Support</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};