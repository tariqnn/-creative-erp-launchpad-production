import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Globe, Code, Smartphone, Database, ArrowRight, Play, ExternalLink, CheckCircle, Star, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedWrapper, StaggeredWrapper, StaggeredItem } from '@/components/AnimatedWrapper';
import { Logo } from '@/components/Logo';
import { useState } from 'react';

export const WebDevelopment = () => {
  const [showPricing, setShowPricing] = useState(false);

  const portfolioItems = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Modern e-commerce website with advanced features',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      features: ['Shopping Cart', 'Payment Integration', 'Admin Dashboard', 'Mobile Responsive'],
      link: '#',
      category: 'E-commerce'
    },
    {
      id: 2,
      title: 'Corporate Website',
      description: 'Professional corporate website with CMS',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Sanity CMS'],
      features: ['Content Management', 'SEO Optimized', 'Fast Loading', 'Multi-language'],
      link: '#',
      category: 'Corporate'
    },
    {
      id: 3,
      title: 'SaaS Dashboard',
      description: 'Complex dashboard for SaaS application',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center',
      technologies: ['React', 'D3.js', 'Express.js', 'PostgreSQL'],
      features: ['Data Visualization', 'Real-time Updates', 'User Management', 'Analytics'],
      link: '#',
      category: 'SaaS'
    },
    {
      id: 4,
      title: 'Creative Portfolio Website',
      description: 'Stunning portfolio website with smooth animations and interactive elements',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop&crop=center',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vercel'],
      features: ['Smooth Animations', 'Interactive Elements', 'Portfolio Gallery', 'Contact Form', 'Dark/Light Mode', 'Responsive Design'],
      link: '#',
      category: 'Portfolio',
      featured: true
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Creative Network delivered an exceptional e-commerce platform that increased our sales by 300%.',
      rating: 5,
      project: 'E-commerce Platform'
    },
    {
      name: 'Ahmed Al-Rashid',
      company: 'Middle East Solutions',
      content: 'Their web development team created a stunning corporate website that perfectly represents our brand.',
      rating: 5,
      project: 'Corporate Website'
    },
    {
      name: 'Maria Garcia',
      company: 'Global Enterprises',
      content: 'The SaaS dashboard they built is intuitive and powerful. Our users love it!',
      rating: 5,
      project: 'SaaS Dashboard'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-orange-600/10"></div>
        <div className="container mx-auto relative z-10">
          <AnimatedWrapper delay={0.1}>
            <div className="flex justify-center mb-8">
              <Logo size="lg" />
            </div>
          </AnimatedWrapper>
          
          <AnimatedWrapper delay={0.15}>
            <div className="flex justify-center mb-6">
              <Button
                variant="outline"
                onClick={() => {
                  window.history.pushState({}, '', '/services');
                  window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'services' } }));
                }}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Services
              </Button>
            </div>
          </AnimatedWrapper>
          
          <AnimatedWrapper delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Globe className="w-10 h-10 text-white" />
              </motion.div>
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-orange-600">Web</span>{' '}
                <span className="text-blue-600">Development</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Modern, responsive websites and web applications built with cutting-edge technologies
              </motion.p>
            </div>
          </AnimatedWrapper>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <AnimatedWrapper delay={0.3}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&crop=center"
                alt="Web Development Team at Work"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Professional Web Development</h3>
                <p className="text-lg opacity-90">Creating modern, responsive websites with cutting-edge technologies</p>
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedWrapper delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">See Our Web Development Process</h2>
              <p className="text-xl text-gray-600">Watch how we create amazing web experiences</p>
            </div>
          </AnimatedWrapper>
          
          <AnimatedWrapper delay={0.4}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center">
                <motion.div
                  className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Play className="w-8 h-8 text-white ml-1" />
                </motion.div>
              </div>
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <Badge className="bg-blue-600 text-white px-4 py-2">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo Video
                </Badge>
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <AnimatedWrapper delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Web Development Services</h2>
              <p className="text-xl text-gray-600">Comprehensive solutions for all your web needs</p>
            </div>
          </AnimatedWrapper>
          
          <StaggeredWrapper delay={0.1}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <StaggeredItem>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Globe className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Responsive Websites</h3>
                    <p className="text-gray-600">
                      Mobile-first designs that work perfectly on all devices
                    </p>
                  </CardContent>
                </Card>
              </StaggeredItem>
              
              <StaggeredItem>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Code className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Web Applications</h3>
                    <p className="text-gray-600">
                      Complex web apps with advanced functionality
                    </p>
                  </CardContent>
                </Card>
              </StaggeredItem>
              
              <StaggeredItem>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Database className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">E-commerce Solutions</h3>
                    <p className="text-gray-600">
                      Complete online stores with payment integration
                    </p>
                  </CardContent>
                </Card>
              </StaggeredItem>
              
              <StaggeredItem>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Smartphone className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Progressive Web Apps</h3>
                    <p className="text-gray-600">
                      App-like experiences in the browser
                    </p>
                  </CardContent>
                </Card>
              </StaggeredItem>
            </div>
          </StaggeredWrapper>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedWrapper delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Recent Work</h2>
              <p className="text-xl text-gray-600">Explore some of our successful web development projects</p>
            </div>
          </AnimatedWrapper>
          
          <StaggeredWrapper delay={0.1}>
            <div className="grid md:grid-cols-2 gap-8">
              {portfolioItems.map((item) => (
                <StaggeredItem key={item.id}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <div className="relative h-48 w-full overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary">{item.category}</Badge>
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <CardDescription className="text-gray-600">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-gray-800">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-gray-800">Key Features:</h4>
                          <div className="space-y-1">
                            {item.features.map((feature) => (
                              <div key={feature} className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-sm text-gray-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                          View Project
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggeredItem>
              ))}
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
                          <p className="text-xs text-blue-600 font-medium">{testimonial.project}</p>
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


      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <AnimatedWrapper delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Web Development Pricing</h2>
              <p className="text-xl text-gray-600">Transparent pricing for all your web development needs</p>
            </div>
          </AnimatedWrapper>

          <StaggeredWrapper>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <StaggeredItem>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold text-gray-900">Basic Website</CardTitle>
                    <CardDescription className="text-gray-600">Perfect for small businesses and personal sites</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-blue-600 mb-2">$75 - $150</div>
                      <div className="text-lg text-gray-600 mb-1">53.25 - 106.50 JD</div>
                    </div>
                    <ul className="text-left space-y-3 mb-8">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">5 page responsive website</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Domain & hosting included</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Security updates</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">A few edits each month</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </StaggeredItem>

              <StaggeredItem>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-500 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                  <CardHeader className="text-center pb-4 pt-8">
                    <CardTitle className="text-2xl font-bold text-gray-900">Standard Business / Ecommerce</CardTitle>
                    <CardDescription className="text-gray-600">Perfect for growing businesses and online stores</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-blue-600 mb-2">$250 - $400</div>
                      <div className="text-lg text-gray-600 mb-1">177.50 - 284.00 JD</div>
                    </div>
                    <ul className="text-left space-y-3 mb-8">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">10+ pages or small store</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">CMS/Shopify setup</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Analytics & basic SEO</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Monthly content updates</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Payment integration</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </StaggeredItem>

              <StaggeredItem>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold text-gray-900">Advanced Web App</CardTitle>
                    <CardDescription className="text-gray-600">Custom applications with advanced features</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-purple-600 mb-2">$500+</div>
                      <div className="text-lg text-gray-600 mb-1">355.00+ JD</div>
                    </div>
                    <ul className="text-left space-y-3 mb-8">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Custom web application</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Database & integrations</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Continuous delivery & support</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Advanced security features</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">24/7 monitoring</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </StaggeredItem>
            </div>
          </StaggeredWrapper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-orange-600">
        <div className="container mx-auto text-center">
          <AnimatedWrapper delay={0.2}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Build Your Dream Website?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and create something amazing together.
              </p>
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  <Globe className="mr-2 w-5 h-5" />
                  Start Your Project
                </Button>
              </div>
            </motion.div>
          </AnimatedWrapper>
        </div>
      </section>
    </div>
  );
};
