import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star, ArrowRight, Code, Smartphone, Database, Globe, Zap, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedWrapper, StaggeredWrapper, StaggeredItem } from '@/components/AnimatedWrapper';
import { useState } from 'react';
import { Language, useTranslation } from '@/lib/i18n';

interface ProductsProps {
  lang: Language;
}

export const Products = ({ lang }: ProductsProps) => {
  const t = useTranslation(lang);
  const [showPrices, setShowPrices] = useState<{ [key: number]: boolean }>({});

  const togglePriceVisibility = (productId: number) => {
    setShowPrices(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const products = [
    {
      id: 1,
      title: t.webDevelopment,
      description: t.webDevelopmentDescription,
      icon: Globe,
      features: [t.responsiveDesign, t.seoOptimized, t.fastLoading, t.mobileFirst],
      technologies: ['React', 'Next.js', 'Vue.js', 'Angular'],
      price: `${t.startingAt} $500`,
      popular: true,
      color: 'bg-blue-500',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center'
    },
    {
      id: 2,
      title: t.mobileAppDevelopment,
      description: t.mobileAppDevelopmentDescription,
      icon: Smartphone,
      features: [t.nativePerformance, t.crossPlatform, t.appStoreReady, t.customUIUX],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      price: `${t.startingAt} $800`,
      popular: false,
      color: 'bg-green-500',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=center'
    },
    {
      id: 3,
      title: t.enterpriseERPSolutions,
      description: t.enterpriseERPSolutionsDescription,
      icon: Database,
      features: [t.salesManagement, t.inventoryControl, t.hrManagement, t.analytics],
      technologies: ['Node.js', 'PostgreSQL', 'React', 'Python'],
      price: `${t.startingAt} $1,200`,
      popular: false,
      color: 'bg-purple-500',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center'
    },
    {
      id: 4,
      title: t.apiDevelopment,
      description: t.apiDevelopmentDescription,
      icon: Code,
      features: ['RESTful APIs', 'GraphQL', 'Microservices', 'Cloud Ready'],
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
      price: `${t.startingAt} $300`,
      popular: false,
      color: 'bg-blue-600',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&crop=center'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Creative Network delivered an exceptional web application that exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Ahmed Al-Rashid',
      company: 'Middle East Solutions',
      content: 'Their mobile app development team is outstanding. Highly recommended!',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      company: 'Global Enterprises',
      content: 'The ERP solution transformed our business operations completely.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Custom Services Header Background */}
        <div className="absolute inset-0">
          <img 
            src="/services-header.jpg" 
            alt="Services Header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <AnimatedWrapper delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-white">{t.ourServices}</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-white/90 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t.professionalServicesDescription}
              </motion.p>
            </div>
          </AnimatedWrapper>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <StaggeredWrapper delay={0.1}>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {products.map((product, index) => {
                const Icon = product.icon;
                return (
                  <StaggeredItem key={product.id}>
                    <motion.div
                      whileHover={{ 
                        y: -10,
                        scale: 1.02,
                        rotateY: 5,
                        boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }}
                      animate={{
                        boxShadow: [
                          "0 10px 25px rgba(0,0,0,0.1)",
                          "0 15px 35px rgba(0,0,0,0.12)",
                          "0 10px 25px rgba(0,0,0,0.1)"
                        ]
                      }}
                      transition={{
                        boxShadow: { duration: 3, repeat: Infinity }
                      }}
                    >
                      <Card className="h-full card-brand relative overflow-hidden">
                        {product.popular && (
                          <div className="absolute top-4 right-4 z-10">
                            <Badge className="bg-orange-500 text-white">
                              <Star className="w-3 h-3 mr-1" />
                              {t.popular}
                            </Badge>
                          </div>
                        )}
                        
                        {/* Service Image */}
                        <div className="relative h-48 w-full overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                        
                        <CardHeader className="pb-4">
                          <div className="flex items-center space-x-4 mb-4">
                            <motion.div 
                              className={`w-12 h-12 ${product.color} rounded-lg flex items-center justify-center`}
                              whileHover={{ 
                                scale: 1.2,
                                rotate: 360,
                                boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
                              }}
                              transition={{ 
                                type: "spring",
                                stiffness: 300,
                                damping: 10
                              }}
                              animate={{
                                rotate: [0, 5, -5, 0],
                                scale: [1, 1.05, 1]
                              }}
                              transition={{
                                rotate: { duration: 4, repeat: Infinity },
                                scale: { duration: 2, repeat: Infinity }
                              }}
                            >
                              <Icon className="w-6 h-6 text-white" />
                            </motion.div>
                            <div>
                              <CardTitle className="text-2xl">{product.title}</CardTitle>
                              <div className="flex items-center gap-2">
                                {showPrices[product.id] ? (
                                  <motion.p 
                                    className="text-orange-600 font-semibold"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    {product.price}
                                  </motion.p>
                                ) : (
                                  <motion.p 
                                    className="text-gray-500 text-sm"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                         {t.clickToRevealPricing}
                                  </motion.p>
                                )}
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => togglePriceVisibility(product.id)}
                                      className="h-6 w-6 p-0 hover:bg-orange-100"
                                >
                                  {showPrices[product.id] ? (
                                    <EyeOff className="w-3 h-3 text-orange-600" />
                                  ) : (
                                    <Eye className="w-3 h-3 text-gray-500" />
                                  )}
                                </Button>
                              </div>
                            </div>
                          </div>
                          <CardDescription className="text-gray-600 text-base">
                            {product.description}
                          </CardDescription>
                        </CardHeader>
                        
                        <CardContent className="space-y-6">
                          <div>
                                 <h4 className="font-semibold mb-3 text-gray-800">{t.keyFeatures}</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {product.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                  <span className="text-sm text-gray-600">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                                 <h4 className="font-semibold mb-3 text-gray-800">{t.technologies}</h4>
                            <div className="flex flex-wrap gap-2">
                              {product.technologies.map((tech, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                              <Button 
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                            onClick={() => {
                              const serviceRoutes = {
                                1: '/services/web-development',
                                2: '/services/mobile-app-development', 
                                3: '/services/enterprise-erp',
                                4: '/services/api-development'
                              };
                              const route = serviceRoutes[product.id as keyof typeof serviceRoutes];
                              if (route) {
                                window.history.pushState({}, '', route);
                                const pageName = route.replace('/services/', '').replace(/-/g, '-');
                                window.dispatchEvent(new CustomEvent('navigate', { 
                                  detail: { page: pageName } 
                                }));
                              }
                            }}
                          >
                                 {t.discoverWhatWeCanDo}
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </StaggeredItem>
                );
              })}
            </div>
          </StaggeredWrapper>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <AnimatedWrapper delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">What Our Clients Say</h2>
              <p className="text-xl text-gray-600">Trusted by businesses worldwide</p>
            </div>
          </AnimatedWrapper>
          
          <StaggeredWrapper delay={0.1}>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <StaggeredItem key={index}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                        <div>
                          <p className="font-semibold text-gray-900">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.company}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggeredItem>
              ))}
            </div>
          </StaggeredWrapper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <AnimatedWrapper delay={0.2}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                {t.readyToTransform}
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                {t.letsDiscussProject}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-gray-100"
                  onClick={() => {
                    window.history.pushState({}, '', '/');
                    window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'home' } }));
                    setTimeout(() => {
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                >
                  <Zap className="mr-2 w-5 h-5" />
                  {t.startYourProject}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                  onClick={() => {
                    window.history.pushState({}, '', '/');
                    window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'home' } }));
                    setTimeout(() => {
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                >
                  {t.getInTouch}
                </Button>
              </div>
            </motion.div>
          </AnimatedWrapper>
        </div>
      </section>
    </div>
  );
};
