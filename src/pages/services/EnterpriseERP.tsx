import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Database, BarChart3, Users, ShoppingCart, ArrowRight, Play, ExternalLink, CheckCircle, Star, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedWrapper, StaggeredWrapper, StaggeredItem } from '@/components/AnimatedWrapper';

export const EnterpriseERP = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Manufacturing ERP',
      description: 'Complete manufacturing management system with production planning',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=center',
      technologies: ['Node.js', 'PostgreSQL', 'React', 'Python'],
      features: ['Production Planning', 'Inventory Management', 'Quality Control', 'Cost Tracking'],
      link: '#',
      category: 'Manufacturing',
      modules: ['Production', 'Inventory', 'Quality', 'Finance']
    },
    {
      id: 2,
      title: 'Retail Management System',
      description: 'Comprehensive retail ERP with multi-store support',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center',
      technologies: ['React', 'Express.js', 'MongoDB', 'Redis'],
      features: ['Multi-Store Management', 'POS Integration', 'Customer Management', 'Analytics'],
      link: '#',
      category: 'Retail',
      modules: ['Sales', 'Inventory', 'CRM', 'Analytics']
    },
    {
      id: 3,
      title: 'Healthcare ERP',
      description: 'Healthcare management system with patient records',
      image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&h=600&fit=crop&crop=center',
      technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Docker'],
      features: ['Patient Records', 'Appointment Scheduling', 'Billing', 'Compliance'],
      link: '#',
      category: 'Healthcare',
      modules: ['Patient', 'Scheduling', 'Billing', 'Compliance']
    },
    {
      id: 4,
      title: 'Construction ERP',
      description: 'Project management system for construction companies',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&crop=center',
      technologies: ['Angular', 'NestJS', 'MySQL', 'AWS'],
      features: ['Project Management', 'Resource Planning', 'Budget Tracking', 'Document Management'],
      link: '#',
      category: 'Construction',
      modules: ['Projects', 'Resources', 'Finance', 'Documents']
    }
  ];

  const testimonials = [
    {
      name: 'Maria Garcia',
      company: 'Global Enterprises',
      content: 'The ERP solution transformed our business operations completely. We saw 40% improvement in efficiency.',
      rating: 5,
      project: 'Manufacturing ERP'
    },
    {
      name: 'Ahmed Al-Rashid',
      company: 'Middle East Solutions',
      content: 'Their retail ERP system helped us manage 50+ stores seamlessly. The analytics are incredibly powerful.',
      rating: 5,
      project: 'Retail Management System'
    },
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'The healthcare ERP streamlined our operations and improved patient care significantly.',
      rating: 5,
      project: 'Healthcare ERP'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-orange-600/10"></div>
        <div className="container mx-auto relative z-10">
          <AnimatedWrapper delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Database className="w-10 h-10 text-white" />
              </motion.div>
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-purple-900">Enterprise</span>{' '}
                <span className="text-blue-600">ERP Solutions</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Comprehensive business management systems for modern enterprises
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&crop=center"
                alt="Enterprise ERP Solutions Team at Work"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Enterprise ERP Solutions</h3>
                <p className="text-lg opacity-90">Comprehensive business management systems for modern enterprises</p>
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
              <h2 className="text-4xl font-bold mb-4 text-gray-900">See Our ERP Development Process</h2>
              <p className="text-xl text-gray-600">Watch how we build comprehensive business solutions</p>
            </div>
          </AnimatedWrapper>
          
          <AnimatedWrapper delay={0.4}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-orange-500 flex items-center justify-center">
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
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Our ERP Solutions</h2>
              <p className="text-xl text-gray-600">Comprehensive business management systems</p>
            </div>
          </AnimatedWrapper>
          
          <StaggeredWrapper delay={0.1}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <StaggeredItem>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Database className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Sales Management</h3>
                    <p className="text-gray-600">
                      Complete sales pipeline and customer relationship management
                    </p>
                  </CardContent>
                </Card>
              </StaggeredItem>
              
              <StaggeredItem>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <ShoppingCart className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Inventory Control</h3>
                    <p className="text-gray-600">
                      Advanced inventory management with real-time tracking
                    </p>
                  </CardContent>
                </Card>
              </StaggeredItem>
              
              <StaggeredItem>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">HR Management</h3>
                    <p className="text-gray-600">
                      Complete human resources and payroll management
                    </p>
                  </CardContent>
                </Card>
              </StaggeredItem>
              
              <StaggeredItem>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <BarChart3 className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Analytics</h3>
                    <p className="text-gray-600">
                      Powerful business intelligence and reporting tools
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
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Our ERP Implementations</h2>
              <p className="text-xl text-gray-600">Explore some of our successful ERP projects</p>
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
                        <div>
                          <h4 className="font-semibold mb-2 text-gray-800">Modules:</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.modules.map((module) => (
                              <Badge key={module} variant="secondary" className="text-xs">
                                {module}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
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

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <AnimatedWrapper delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose Our ERP Solutions?</h2>
              <p className="text-xl text-gray-600">Transform your business with our comprehensive ERP systems</p>
            </div>
          </AnimatedWrapper>
          
          <StaggeredWrapper delay={0.1}>
            <div className="grid md:grid-cols-3 gap-8">
              <StaggeredItem>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <TrendingUp className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">Increased Efficiency</h3>
                      <p className="text-gray-600">
                        Streamline operations and reduce manual work with automated processes
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggeredItem>
              
              <StaggeredItem>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <BarChart3 className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">Better Analytics</h3>
                      <p className="text-gray-600">
                        Make data-driven decisions with comprehensive reporting and analytics
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggeredItem>
              
              <StaggeredItem>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Database className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">Scalable Solutions</h3>
                      <p className="text-gray-600">
                        Grow your business with ERP systems that scale with your needs
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggeredItem>
            </div>
          </StaggeredWrapper>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedWrapper delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">What Our Clients Say</h2>
              <p className="text-xl text-gray-600">Trusted by enterprises worldwide</p>
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
              <h2 className="text-4xl font-bold mb-4 text-gray-900">ERP System Pricing</h2>
              <p className="text-xl text-gray-600">Transparent per-user pricing for all ERP solutions</p>
            </div>
          </AnimatedWrapper>

          <StaggeredWrapper>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              <StaggeredItem>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl font-bold text-gray-900">Odoo</CardTitle>
                    <CardDescription className="text-gray-600">Full suite for SMEs</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-blue-600 mb-2">$12.50</div>
                      <div className="text-lg text-gray-600 mb-1">8.88 JD</div>
                    </div>
                    <ul className="text-left space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Full suite of modules</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Perfect for SMEs</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Customizable modules</span>
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
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-orange-500 text-white px-3 py-1 text-xs">Popular</Badge>
                  </div>
                  <CardHeader className="text-center pb-4 pt-6">
                    <CardTitle className="text-xl font-bold text-gray-900">Zoho One</CardTitle>
                    <CardDescription className="text-gray-600">All employee plan</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-orange-600 mb-2">$18.50 - $22.50</div>
                      <div className="text-lg text-gray-600 mb-1">13.14 - 15.98 JD</div>
                    </div>
                    <ul className="text-left space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">40+ integrated apps</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">All employee plan</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Complete business suite</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </StaggeredItem>

              <StaggeredItem>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl font-bold text-gray-900">Microsoft Dynamics 365</CardTitle>
                    <CardDescription className="text-gray-600">Modular pricing by app</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-purple-600 mb-2">$35+</div>
                      <div className="text-lg text-gray-600 mb-1">24.85+ JD</div>
                    </div>
                    <ul className="text-left space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Modular pricing by app</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Popular for mid market</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Microsoft ecosystem</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </StaggeredItem>

              <StaggeredItem>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl font-bold text-gray-900">Oracle NetSuite</CardTitle>
                    <CardDescription className="text-gray-600">Premium full suite</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-red-600 mb-2">$49.50</div>
                      <div className="text-lg text-gray-600 mb-1">35.15 JD</div>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm text-gray-600 mb-1">+ Base: $499.50</div>
                      <div className="text-xs text-gray-500">+ Base: 354.65 JD</div>
                    </div>
                    <ul className="text-left space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Premium full suite</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Higher entry cost</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Enterprise features</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </StaggeredItem>

              <StaggeredItem>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl font-bold text-gray-900">ERPNext Cloud</CardTitle>
                    <CardDescription className="text-gray-600">Open source hosted</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-green-600 mb-2">$25</div>
                      <div className="text-lg text-gray-600 mb-1">17.75 JD</div>
                    </div>
                    <ul className="text-left space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Open source hosted</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Alternative for SMEs</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Cost-effective solution</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white">
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
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-orange-600">
        <div className="container mx-auto text-center">
          <AnimatedWrapper delay={0.2}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Let's discuss your ERP needs and create a solution that drives growth.
              </p>
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-purple-600 hover:bg-gray-100"
                >
                  <Database className="mr-2 w-5 h-5" />
                  Start Your ERP Project
                </Button>
              </div>
            </motion.div>
          </AnimatedWrapper>
        </div>
      </section>
    </div>
  );
};
