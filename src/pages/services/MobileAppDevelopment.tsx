import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Code, Globe, Database, ArrowRight, Play, ExternalLink, CheckCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedWrapper, StaggeredWrapper, StaggeredItem } from '@/components/AnimatedWrapper';

export const MobileAppDevelopment = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Food Delivery App',
      description: 'Complete food delivery platform with real-time tracking and seamless user experience',
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=600&fit=crop&crop=center',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Google Maps API', 'Stripe', 'Firebase'],
      features: ['Real-time Tracking', 'Payment Integration', 'Push Notifications', 'Offline Support', 'Restaurant Management', 'Order History'],
      link: '#',
      category: 'Food & Beverage',
      platforms: ['iOS', 'Android'],
      featured: true
    },
    {
      id: 2,
      title: 'Fitness Tracker',
      description: 'Comprehensive fitness and health tracking application',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center',
      technologies: ['Flutter', 'Firebase', 'HealthKit', 'Google Fit'],
      features: ['Activity Tracking', 'Health Monitoring', 'Social Features', 'Data Analytics'],
      link: '#',
      category: 'Health & Fitness',
      platforms: ['iOS', 'Android']
    },
    {
      id: 3,
      title: 'E-learning Platform',
      description: 'Mobile learning platform with interactive content',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center',
      technologies: ['React Native', 'AWS', 'Video Streaming', 'Offline Sync'],
      features: ['Video Lessons', 'Quizzes', 'Progress Tracking', 'Offline Learning'],
      link: '#',
      category: 'Education',
      platforms: ['iOS', 'Android']
    },
    {
      id: 4,
      title: 'Banking App',
      description: 'Secure mobile banking application with advanced features',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center',
      technologies: ['Native iOS', 'Native Android', 'Blockchain', 'Biometric Auth'],
      features: ['Secure Transactions', 'Biometric Login', 'Investment Tracking', 'Customer Support'],
      link: '#',
      category: 'Finance',
      platforms: ['iOS', 'Android']
    }
  ];

  const testimonials = [
    {
      name: 'Ahmed Al-Rashid',
      company: 'Middle East Solutions',
      content: 'The mobile app they developed for us has over 100k downloads and 4.8-star rating on app stores.',
      rating: 5,
      project: 'Food Delivery App'
    },
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Their React Native expertise helped us launch on both platforms simultaneously, saving us months of development time.',
      rating: 5,
      project: 'Fitness Tracker'
    },
    {
      name: 'Maria Garcia',
      company: 'Global Enterprises',
      content: 'The banking app they built is secure, fast, and user-friendly. Our customers love the experience.',
      rating: 5,
      project: 'Banking App'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-orange-600/10"></div>
        <div className="container mx-auto relative z-10">
          <AnimatedWrapper delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-green-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Smartphone className="w-10 h-10 text-white" />
              </motion.div>
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-green-900">Mobile App</span>{' '}
                <span className="text-blue-600">Development</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Native iOS and Android applications with cross-platform solutions
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
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop&crop=center"
                alt="Mobile App Development Team at Work"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Mobile App Development</h3>
                <p className="text-lg opacity-90">Creating native and cross-platform mobile applications for iOS and Android</p>
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
              <h2 className="text-4xl font-bold mb-4 text-gray-900">See Our Mobile Development Process</h2>
              <p className="text-xl text-gray-600">Watch how we create amazing mobile experiences</p>
            </div>
          </AnimatedWrapper>
          
          <AnimatedWrapper delay={0.4}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-green-500 to-orange-500 flex items-center justify-center">
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
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Mobile Development Services</h2>
              <p className="text-xl text-gray-600">Comprehensive mobile solutions for all platforms</p>
            </div>
          </AnimatedWrapper>
          
          <StaggeredWrapper delay={0.1}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <StaggeredItem>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Smartphone className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Native Apps</h3>
                    <p className="text-gray-600">
                      iOS and Android apps built with native technologies
                    </p>
                  </CardContent>
                </Card>
              </StaggeredItem>
              
              <StaggeredItem>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Code className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Cross-Platform</h3>
                    <p className="text-gray-600">
                      React Native and Flutter for faster development
                    </p>
                  </CardContent>
                </Card>
              </StaggeredItem>
              
              <StaggeredItem>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Globe className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Progressive Web Apps</h3>
                    <p className="text-gray-600">
                      Web apps that work like native applications
                    </p>
                  </CardContent>
                </Card>
              </StaggeredItem>
              
              <StaggeredItem>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Database className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Backend Integration</h3>
                    <p className="text-gray-600">
                      Seamless integration with cloud services
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
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Mobile App Portfolio</h2>
              <p className="text-xl text-gray-600">Explore some of our successful mobile applications</p>
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
                          <div className="flex gap-1">
                            {item.platforms.map((platform) => (
                              <Badge key={platform} variant="outline" className="text-xs">
                                {platform}
                              </Badge>
                            ))}
                          </div>
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
                        <div className="flex gap-2">
                          <Button className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                            View Project
                            <ExternalLink className="ml-2 w-4 h-4" />
                          </Button>
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
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Mobile App Development Pricing</h2>
              <p className="text-xl text-gray-600">Transparent pricing for all your mobile app needs</p>
            </div>
          </AnimatedWrapper>

          <StaggeredWrapper>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <StaggeredItem>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold text-gray-900">Basic App Development</CardTitle>
                    <CardDescription className="text-gray-600">Perfect for simple mobile applications</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-green-600 mb-2">$1,000 - $4,000</div>
                      <div className="text-lg text-gray-600 mb-1">710.00 - 2,840.00 JD</div>
                    </div>
                    <ul className="text-left space-y-3 mb-8">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Simple app with core screens and forms</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">One platform (iOS or Android)</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Maintenance included</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Basic support and updates</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </StaggeredItem>

              <StaggeredItem>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-orange-500 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                  <CardHeader className="text-center pb-4 pt-8">
                    <CardTitle className="text-2xl font-bold text-gray-900">Medium Complexity App</CardTitle>
                    <CardDescription className="text-gray-600">Advanced features and cross-platform support</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-orange-600 mb-2">$4,000 - $7,500</div>
                      <div className="text-lg text-gray-600 mb-1">2,840.00 - 5,325.00 JD</div>
                    </div>
                    <ul className="text-left space-y-3 mb-8">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Cross-platform build (iOS & Android)</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">User authentication system</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Payment & API integrations</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Monthly improvements & support</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Advanced UI/UX design</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
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
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-orange-600">
        <div className="container mx-auto text-center">
          <AnimatedWrapper delay={0.2}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Build Your Mobile App?
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Let's discuss your mobile app idea and bring it to life.
              </p>
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-green-600 hover:bg-gray-100"
                >
                  <Smartphone className="mr-2 w-5 h-5" />
                  Start Your App
                </Button>
              </div>
            </motion.div>
          </AnimatedWrapper>
        </div>
      </section>
    </div>
  );
};
