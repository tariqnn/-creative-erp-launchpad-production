import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, User, Search, ArrowRight, Tag, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedWrapper, StaggeredWrapper, StaggeredItem } from '@/components/AnimatedWrapper';
import { useState } from 'react';
import { Language, useTranslation } from '@/lib/i18n';

interface BlogsProps {
  lang: Language;
}

export const Blogs = ({ lang }: BlogsProps) => {
  const t = useTranslation(lang);
  const [searchTerm, setSearchTerm] = useState('');

  const handleReadMore = (postId: number) => {
    window.history.pushState({}, '', `/blog/${postId}`);
    // Trigger the route change handler
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Explore the latest trends shaping the future of web development, from AI integration to progressive web apps.',
      content: 'Web development is evolving rapidly with new technologies and frameworks emerging constantly...',
      author: 'Creative Network Team',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Web Development',
      tags: ['React', 'Next.js', 'AI', 'Trends'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop&crop=center',
      featured: true
    },
    {
      id: 2,
      title: 'Building Scalable Mobile Apps with React Native',
      excerpt: 'Learn best practices for creating high-performance mobile applications using React Native.',
      content: 'React Native has revolutionized mobile app development by enabling cross-platform solutions...',
      author: 'Ahmed Al-Rashid',
      date: '2024-01-12',
      readTime: '7 min read',
      category: 'Mobile Development',
      tags: ['React Native', 'Mobile', 'Performance', 'Scalability'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop&crop=center',
      featured: false
    },
    {
      id: 3,
      title: 'Enterprise ERP Solutions: A Complete Guide',
      excerpt: 'Everything you need to know about implementing ERP systems for your business.',
      content: 'Enterprise Resource Planning (ERP) systems are crucial for modern businesses...',
      author: 'Sarah Johnson',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'ERP Solutions',
      tags: ['ERP', 'Business', 'Automation', 'Management'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&crop=center',
      featured: false
    },
    {
      id: 4,
      title: 'API Development Best Practices for 2024',
      excerpt: 'Essential guidelines for building robust and secure APIs that scale with your business.',
      content: 'APIs are the backbone of modern applications, connecting different systems and services...',
      author: 'Creative Network Team',
      date: '2024-01-08',
      readTime: '6 min read',
      category: 'Backend Development',
      tags: ['API', 'Node.js', 'Security', 'Best Practices'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop&crop=center',
      featured: false
    },
    {
      id: 5,
      title: 'The Rise of Progressive Web Apps (PWAs)',
      excerpt: 'How PWAs are changing the way we think about web and mobile applications.',
      content: 'Progressive Web Apps combine the best of web and mobile applications...',
      author: 'Maria Garcia',
      date: '2024-01-05',
      readTime: '8 min read',
      category: 'Web Development',
      tags: ['PWA', 'Web Apps', 'Mobile', 'Performance'],
      image: 'https://images.unsplash.com/photo-1551650975-87de658b3d7e?w=800&h=500&fit=crop&crop=center',
      featured: false
    },
    {
      id: 6,
      title: 'Database Design Patterns for Modern Applications',
      excerpt: 'Learn about different database design patterns and when to use them.',
      content: 'Choosing the right database design pattern is crucial for application performance...',
      author: 'Creative Network Team',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'Database',
      tags: ['Database', 'Design Patterns', 'PostgreSQL', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&crop=center',
      featured: false
    }
  ];

  const categories = ['All', 'Web Development', 'Mobile Development', 'ERP Solutions', 'Backend Development', 'Database'];

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Custom Blog Header Background */}
        <div className="absolute inset-0">
          <img 
            src="/blog-header.jpg" 
            alt="Blog Header"
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
                <span className="text-white">{t.ourBlog}</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-white/90 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t.blogDescription}
              </motion.p>
            </div>
          </AnimatedWrapper>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder={t.searchArticles}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge 
                  key={category} 
                  variant={category === 'All' ? 'default' : 'secondary'}
                  className="cursor-pointer hover:bg-blue-600 hover:text-white transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          {filteredPosts.filter(post => post.featured).map((post) => (
            <AnimatedWrapper key={post.id} delay={0.2}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="border-0 shadow-xl overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <div className="relative h-64 md:h-full overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge className="bg-blue-600 text-white">{t.featured}</Badge>
                        <Badge variant="secondary">{post.category}</Badge>
                      </div>
                      <CardTitle className="text-2xl mb-4">{post.title}</CardTitle>
                      <CardDescription className="text-gray-600 mb-6 text-base">
                        {post.excerpt}
                      </CardDescription>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                             <Button 
                               onClick={() => handleReadMore(post.id)}
                               className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                             >
                               {t.readMore}
                               <ArrowRight className="ml-2 w-4 h-4" />
                             </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatedWrapper>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <StaggeredWrapper delay={0.1}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.filter(post => !post.featured).map((post) => (
                <StaggeredItem key={post.id}>
                  <motion.div
                    whileHover={{ 
                      y: -8,
                      scale: 1.02,
                      rotateY: 2,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                    animate={{
                      boxShadow: [
                        "0 8px 16px rgba(0,0,0,0.1)",
                        "0 12px 24px rgba(0,0,0,0.12)",
                        "0 8px 16px rgba(0,0,0,0.1)"
                      ]
                    }}
                    transition={{
                      boxShadow: { duration: 5, repeat: Infinity }
                    }}
                  >
                    <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <div className="relative h-48 w-full overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                        </div>
                        <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                        <CardDescription className="text-gray-600 line-clamp-3">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                               <Button 
                                 onClick={() => handleReadMore(post.id)}
                                 className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                               >
                                 {t.readMore}
                                 <ArrowRight className="ml-2 w-4 h-4" />
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

      {/* Newsletter Signup */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center max-w-2xl">
          <AnimatedWrapper delay={0.2}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Subscribe to our newsletter for the latest insights and updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                />
                <Button className="bg-white text-blue-600 hover:bg-gray-100">
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </AnimatedWrapper>
        </div>
      </section>
    </div>
  );
};
