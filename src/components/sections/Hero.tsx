import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { Language, useTranslation } from '@/lib/i18n';
import { TestimonialSidebar } from '@/components/TestimonialSidebar';
import { AnimatedWrapper, StaggeredWrapper, StaggeredItem } from '@/components/AnimatedWrapper';
import { Logo } from '@/components/Logo';
import { BrandPattern, BrandWatermark } from '@/components/BrandPattern';
import { motion, useReducedMotion } from 'framer-motion';

interface HeroProps {
  lang: Language;
}

export const Hero = ({ lang }: HeroProps) => {
  const t = useTranslation(lang);
  const shouldReduceMotion = useReducedMotion();
  
  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (window.location.pathname !== '/' && window.location.pathname !== '') {
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'home' } }));
      
      // Wait for page to load, then scroll to section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // We're on home page, just scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-brand-gradient">
      {/* Professional Programming Video Background */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop&crop=center"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="w-full h-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-6xl mb-4">💻</div>
              <p className="text-xl">Professional Development Services</p>
            </div>
          </div>
        </video>
        
        {/* Video Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/0.25"></div>
        
        {/* Subtle animated elements on top of video */}
        <div className="absolute inset-0">
          {/* Floating code snippets */}
          <motion.div
            className="absolute top-20 right-20 text-white/20 font-mono text-sm"
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0 }}
          >
            &lt;div className="hero"&gt;
          </motion.div>
          <motion.div
            className="absolute bottom-20 left-20 text-white/20 font-mono text-sm"
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          >
            function createWebsite() &#123;
          </motion.div>
        </div>
      </div>
      
      {/* Brand Background Patterns */}
      <BrandPattern type="mesh" intensity="light" className="absolute inset-0 opacity-1" />
      <BrandPattern type="dots" intensity="light" className="absolute inset-0 opacity-1" />
      <BrandWatermark className="absolute inset-0 opacity-1" />
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('data:image/svg+xml;base64,${btoa(`
              <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f8fafc;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#e0f2fe;stop-opacity:0.8" />
                    <stop offset="100%" style="stop-color:#f0f9ff;stop-opacity:1" />
                  </linearGradient>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" stroke-width="1" opacity="0.3"/>
                  </pattern>
                </defs>
                <rect width="1920" height="1080" fill="url(#grad1)"/>
                <rect width="1920" height="1080" fill="url(#grid)"/>
                <circle cx="200" cy="200" r="100" fill="#3b82f6" opacity="0.1"/>
                <circle cx="1720" cy="300" r="150" fill="#8b5cf6" opacity="0.1"/>
                <circle cx="400" cy="800" r="120" fill="#06b6d4" opacity="0.1"/>
                <circle cx="1500" cy="900" r="80" fill="#f59e0b" opacity="0.1"/>
                <path d="M0,400 Q480,200 960,400 T1920,400" stroke="#3b82f6" stroke-width="2" fill="none" opacity="0.1"/>
                <path d="M0,600 Q480,400 960,600 T1920,600" stroke="#8b5cf6" stroke-width="2" fill="none" opacity="0.1"/>
              </svg>
            `)}')`
          }}
        />
        {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-background/10 backdrop-blur-[0.002px]"></div>
      </div>
      
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        ></motion.div>
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.1, 0.3],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>
        
        {/* Enhanced floating elements with complex animations */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400/30 rounded-full"
          animate={{ 
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/3 right-1/3 w-6 h-6 bg-purple-400/30 rounded-full"
          animate={{ 
            y: [20, -20, 20],
            x: [10, -10, 10],
            scale: [1.5, 1, 1.5],
            opacity: [1, 0.3, 1]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-orange-400/30 rounded-full"
          animate={{ 
            y: [-15, 15, -15],
            x: [-15, 15, -15],
            scale: [1, 2, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-teal-400/30 rounded-full"
          animate={{ 
            y: [15, -15, 15],
            x: [15, -15, 15],
            scale: [2, 1, 2],
            opacity: [0.8, 0.3, 0.8]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
        ></motion.div>
        
        {/* Additional floating particles */}
        <motion.div 
          className="absolute top-1/2 left-1/6 w-2 h-2 bg-yellow-400/40 rounded-full"
          animate={{ 
            y: [-30, 30, -30],
            x: [-20, 20, -20],
            scale: [0.5, 1.5, 0.5]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.5
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-2/3 right-1/6 w-3 h-3 bg-pink-400/40 rounded-full"
          animate={{ 
            y: [30, -30, 30],
            x: [20, -20, 20],
            scale: [1.5, 0.5, 1.5]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1.5
          }}
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-12 lg:py-20">
          {/* Main Content */}
          <div className="space-y-8">
          {/* Logo and Main headline */}
            <AnimatedWrapper delay={0.1}>
              <div className="flex justify-center mb-8">
                <Logo size="lg" />
              </div>
            </AnimatedWrapper>
            
            <AnimatedWrapper delay={0.2}>
              <div className="space-y-4">
                <motion.h1 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <motion.span 
                    className="text-blue-600 font-serif"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    {t.enterpriseLevelDevelopment}
                  </motion.span>
                  <br />
                  <motion.span 
                    className="text-foreground font-serif"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    {t.agencyForAllTechnologies}
                  </motion.span>
                </motion.h1>
              </div>
            </AnimatedWrapper>
            
            {/* Description */}
            <AnimatedWrapper delay={0.4} direction="up">
              <motion.p 
                className="text-base sm:text-lg text-gray-700 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                {t.heroDescription}
              </motion.p>
            </AnimatedWrapper>
            
            {/* Programming Languages */}
            <AnimatedWrapper delay={0.6}>
              <div className="space-y-4">
                <motion.h3 
                  className="text-lg font-semibold text-foreground"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  {t.ourDevelopmentExpertise}
                </motion.h3>
                <StaggeredWrapper delay={0.1}>
                  <div className="flex flex-wrap gap-3">
                        {[
                          { name: 'React', color: 'bg-blue-100 text-blue-800' },
                          { name: 'React Native', color: 'bg-blue-100 text-blue-800' },
                          { name: 'Node.js', color: 'bg-blue-100 text-blue-800' },
                          { name: 'JavaScript', color: 'bg-blue-100 text-blue-800' },
                          { name: 'TypeScript', color: 'bg-blue-100 text-blue-800' },
                          { name: 'Python', color: 'bg-blue-100 text-blue-800' },
                          { name: 'PHP', color: 'bg-blue-100 text-blue-800' },
                          { name: 'Vue.js', color: 'bg-blue-100 text-blue-800' },
                          { name: 'Angular', color: 'bg-blue-100 text-blue-800' },
                          { name: 'Flutter', color: 'bg-blue-100 text-blue-800' },
                          { name: 'Swift', color: 'bg-blue-100 text-blue-800' },
                          { name: 'Kotlin', color: 'bg-blue-100 text-blue-800' },
                          { name: 'Laravel', color: 'bg-blue-100 text-blue-800' },
                          { name: 'Django', color: 'bg-blue-100 text-blue-800' },
                          { name: 'Next.js', color: 'bg-blue-100 text-blue-800' },
                          { name: 'Express.js', color: 'bg-blue-100 text-blue-800' },
                          { name: 'MongoDB', color: 'bg-blue-100 text-blue-800' },
                          { name: 'PostgreSQL', color: 'bg-blue-100 text-blue-800' },
                          { name: 'MySQL', color: 'bg-blue-100 text-blue-800' },
                          { name: 'Firebase', color: 'bg-blue-100 text-blue-800' },
                        ].map((tech, index) => (
                      <StaggeredItem key={tech.name}>
                        <motion.span 
                          className={`px-4 py-2 ${tech.color} rounded-full text-sm font-medium cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg`}
                          whileHover={{ 
                            scale: 1.15, 
                            y: -5,
                            rotate: [0, -5, 5, 0],
                            boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                          }}
                          whileTap={{ scale: 0.9 }}
                          animate={{
                            y: [0, -2, 0],
                            boxShadow: [
                              "0 4px 8px rgba(0,0,0,0.1)",
                              "0 8px 16px rgba(0,0,0,0.15)",
                              "0 4px 8px rgba(0,0,0,0.1)"
                            ]
                          }}
                          transition={{
                            y: { duration: 2, repeat: Infinity, delay: index * 0.1 },
                            boxShadow: { duration: 2, repeat: Infinity, delay: index * 0.1 }
                          }}
                        >
                          {tech.name}
                        </motion.span>
                      </StaggeredItem>
                    ))}
                  </div>
                </StaggeredWrapper>
              </div>
            </AnimatedWrapper>
            
            {/* Contact Info */}
            <AnimatedWrapper delay={0.8}>
              <motion.div 
                className="flex items-center space-x-6 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                <motion.div 
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                  <span className="text-muted-foreground font-medium">Available 24/7</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.span 
                    className="text-muted-foreground font-medium"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    📞
                  </motion.span>
                  <a 
                    href="tel:+962795550073"
                    className="text-foreground font-semibold hover:text-green-600 transition-colors duration-300 cursor-pointer"
                  >
                    +962795550073
                  </a>
                </motion.div>
              </motion.div>
            </AnimatedWrapper>
            
            {/* CTA Button */}
            <motion.button
              className="group relative px-12 py-6 text-lg font-semibold text-white rounded-full overflow-hidden cursor-pointer border-0 outline-none focus:outline-none mt-6"
              style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #2563eb 100%)',
                boxShadow: '0 15px 30px rgba(37, 99, 235, 0.3)',
              }}
              onClick={() => scrollToSection('contact')}
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                boxShadow: [
                  "0 15px 30px rgba(37, 99, 235, 0.3)",
                  "0 20px 40px rgba(37, 99, 235, 0.4)",
                  "0 15px 30px rgba(37, 99, 235, 0.3)"
                ]
              }}
              whileHover={{
                background: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 50%, #1d4ed8 100%)',
                scale: 1.05,
                y: -3,
                boxShadow: "0 25px 50px rgba(37, 99, 235, 0.5)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{
                opacity: { duration: 0.6, delay: 1.5 },
                y: { duration: 0.6, delay: 1.5 },
                boxShadow: { duration: 3, repeat: Infinity },
                background: { duration: 0.3 }
              }}
                >
                  {/* Animated background particles */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={{
                      background: [
                        'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                        'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                        'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)'
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                  
                  {/* Button content */}
                  <motion.span
                    className="relative z-10 flex items-center justify-center gap-3"
                    animate={{ 
                      y: [0, -1, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <motion.span
                      className="text-white font-bold tracking-wide"
                      animate={{
                        textShadow: [
                          "0 0 0px rgba(255,255,255,0)",
                          "0 0 8px rgba(255,255,255,0.6)",
                          "0 0 0px rgba(255,255,255,0)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                    >
                      Let's Work Together
                    </motion.span>
                    <motion.div
                      animate={{ 
                        x: [0, 4, 0],
                        rotate: [0, 15, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                    >
                      <ArrowUpRight className="h-5 w-5 text-white" />
                    </motion.div>
                  </motion.span>
                  
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                    style={{
                      background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
                    }}
                    transition={{ duration: 0.3 }}
                  />
            </motion.button>
          </div>
          
          {/* Testimonial Sidebar */}
          <AnimatedWrapper delay={1.2} direction="right">
            <div className="lg:block hidden">
              <TestimonialSidebar lang={lang} />
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
};