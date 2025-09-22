import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedWrapper } from '@/components/AnimatedWrapper';
import { Language, useTranslation } from '@/lib/i18n';

interface BlogPostProps {
  lang: Language;
  postId: string;
}

export const BlogPost = ({ lang, postId }: BlogPostProps) => {
  const t = useTranslation(lang);

  // Blog posts data with unique content for each
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Explore the latest trends shaping the future of web development, from AI integration to progressive web apps.',
      content: `
        <h2>AI-Powered Development</h2>
        <p>Artificial Intelligence is revolutionizing how we build web applications. From code generation to automated testing, AI tools are becoming essential for modern developers.</p>
        
        <p>GitHub Copilot and similar tools can now understand context and generate meaningful code snippets. This isn't just about completing lines of code - it's about understanding project structure and suggesting entire functions.</p>
        
        <h2>Performance-First Approach</h2>
        <p>Web performance is no longer optional. Google's Core Web Vitals have become the standard for measuring user experience, directly impacting search rankings.</p>
        
        <p>Modern frameworks like Next.js and SvelteKit are built with performance in mind. They offer features like automatic code splitting, image optimization, and server-side rendering out of the box.</p>
        
        <h2>Edge Computing Integration</h2>
        <p>Edge computing brings processing closer to users, reducing latency and improving performance. Platforms like Vercel and Netlify make it easy to deploy functions at the edge.</p>
        
        <p>This technology enables faster content delivery and more responsive applications, regardless of where your users are located.</p>
        
        <h2>Enhanced Security</h2>
        <p>Security has become a primary concern in web development. Modern applications implement zero-trust architecture and automated security scanning.</p>
        
        <p>HTTPS is now mandatory, and developers are implementing advanced security headers and content security policies to protect against common vulnerabilities.</p>
      `,
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
      content: `
        <h2>React Native Architecture</h2>
        <p>React Native uses a bridge to communicate between JavaScript and native code. Understanding this architecture is crucial for building performant applications.</p>
        
        <p>The new architecture with JSI and Fabric renderer minimizes bridge communication and improves performance significantly.</p>
        
        <h2>Performance Optimization</h2>
        <p>Bundle size directly impacts app startup time. Implement dynamic imports, tree shaking, and code splitting to minimize initial bundle size.</p>
        
        <p>Use tools like Metro bundler's built-in optimizations and consider implementing lazy loading for non-critical components.</p>
        
        <h2>State Management</h2>
        <p>For complex applications, consider using Redux Toolkit or Zustand for state management. These libraries provide predictable state updates and excellent debugging capabilities.</p>
        
        <p>Context API is powerful but can lead to unnecessary re-renders if not used properly. Implement proper context splitting and use useMemo strategically.</p>
        
        <h2>Testing Strategies</h2>
        <p>Implement comprehensive testing including unit tests, integration tests, and end-to-end tests. Use Jest for unit testing and Detox for end-to-end testing.</p>
        
        <p>Performance testing is essential to identify bottlenecks and ensure your app meets performance requirements.</p>
        
        <h2>Deployment Best Practices</h2>
        <p>Set up automated CI/CD pipelines using tools like GitHub Actions or Bitrise. Implement proper code review processes and staged deployments.</p>
        
        <p>Leverage Code Push for JavaScript updates without going through app store approval processes.</p>
      `,
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
      content: `
        <h2>What is ERP?</h2>
        <p>Enterprise Resource Planning (ERP) systems integrate various business processes into a unified platform. They provide real-time visibility and control across your entire organization.</p>
        
        <p>Modern ERP systems have evolved from simple inventory management to sophisticated platforms that drive digital transformation.</p>
        
        <h2>Core ERP Modules</h2>
        <p>Financial Management modules handle accounts payable, receivable, and financial reporting. They include automated invoice processing and real-time financial dashboards.</p>
        
        <p>Human Capital Management goes beyond payroll to include talent management, performance tracking, and workforce analytics.</p>
        
        <h2>Implementation Strategy</h2>
        <p>Successful ERP implementation requires careful planning and change management. Start with a pilot project and gradually expand to other departments.</p>
        
        <p>User adoption is critical for success. Invest in comprehensive training programs and involve end users in the design and testing phases.</p>
        
        <h2>Cloud vs On-Premise</h2>
        <p>Cloud-based ERP solutions offer lower upfront costs, automatic updates, and scalability. They provide access to the latest features and security updates.</p>
        
        <p>On-premise solutions provide greater control over data and customization but require significant IT resources and upfront investment.</p>
        
        <h2>Industry-Specific Solutions</h2>
        <p>Many ERP vendors offer industry-specific solutions with pre-configured processes and compliance features. Manufacturing ERP systems include production planning and quality management.</p>
        
        <p>Healthcare ERP systems focus on patient management and regulatory compliance, while retail ERP systems integrate with e-commerce platforms.</p>
      `,
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
      content: `
        <h2>API Design Principles</h2>
        <p>RESTful APIs use standard HTTP methods and resource-based URL structures. Follow consistent naming conventions and appropriate HTTP status codes.</p>
        
        <p>GraphQL offers clients the ability to request exactly the data they need in a single request, reducing over-fetching and under-fetching.</p>
        
        <h2>Security Best Practices</h2>
        <p>Implement proper authentication using JWT tokens, OAuth 2.0, or API keys. Always validate user permissions for each endpoint.</p>
        
        <p>Use schema validation libraries like Joi or Yup to ensure data integrity. Implement rate limiting to prevent abuse and ensure fair resource allocation.</p>
        
        <h2>Performance Optimization</h2>
        <p>Implement strategic caching using Redis or Memcached to reduce database load and improve response times.</p>
        
        <p>Optimize database queries, use proper indexing, and consider read replicas for read-heavy workloads.</p>
        
        <h2>Documentation and Developer Experience</h2>
        <p>Use OpenAPI specifications to create interactive documentation. Provide comprehensive code examples and step-by-step tutorials.</p>
        
        <p>Offer interactive testing tools that allow developers to experiment with your API without writing code.</p>
        
        <h2>Monitoring and Analytics</h2>
        <p>Implement comprehensive monitoring using tools like Prometheus or Grafana. Track response times, error rates, and resource utilization.</p>
        
        <p>Use structured logging with correlation IDs to trace requests across distributed systems.</p>
      `,
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
      content: `
        <h2>What are PWAs?</h2>
        <p>Progressive Web Apps combine the best of web and mobile applications. They provide native app-like experiences through web technologies.</p>
        
        <p>PWAs are built on three pillars: reliability, performance, and engagement. They work regardless of network conditions and provide fast, smooth interactions.</p>
        
        <h2>Service Workers</h2>
        <p>Service workers enable offline capabilities, background synchronization, and push notifications. They run in the background, separate from the main browser thread.</p>
        
        <p>Offline-first architecture ensures users can continue using the app even in poor network conditions, significantly improving user experience.</p>
        
        <h2>Web App Manifest</h2>
        <p>The web app manifest defines how the PWA appears to users and behaves when installed. It controls the app's name, icons, theme colors, and display mode.</p>
        
        <p>PWAs can be installed on users' home screens, providing quick access and creating a native app-like experience without app store approval.</p>
        
        <h2>Performance Optimization</h2>
        <p>Prioritize loading critical resources first to ensure fast initial page loads. Use resource hints, preloading, and code splitting.</p>
        
        <p>Implement sophisticated caching strategies using service workers. Use cache-first, network-first, and stale-while-revalidate strategies based on content type.</p>
        
        <h2>Business Benefits</h2>
        <p>PWAs require only one codebase for all platforms, significantly reducing development and maintenance costs compared to native applications.</p>
        
        <p>They're discoverable through search engines and can be shared via URLs, making user acquisition easier and more cost-effective than native apps.</p>
      `,
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
      content: `
        <h2>Relational Database Patterns</h2>
        <p>Database normalization reduces redundancy and improves data integrity. However, over-normalization can impact performance due to excessive joins.</p>
        
        <p>Strategic denormalization can improve read performance by reducing the number of joins required. This is particularly effective for read-heavy applications.</p>
        
        <h2>NoSQL Patterns</h2>
        <p>Document databases like MongoDB store related data together in flexible, JSON-like documents. They're ideal for content management and user profiles.</p>
        
        <p>Key-value stores like Redis provide simple, high-performance storage for caching and session management. They excel at high-throughput operations.</p>
        
        <h2>Hybrid Approaches</h2>
        <p>Many modern applications use polyglot persistence, combining different database types for different use cases within the same application.</p>
        
        <p>In microservices architectures, each service can choose the most appropriate database type for its specific requirements.</p>
        
        <h2>Performance Considerations</h2>
        <p>Effective indexing goes beyond simple primary and foreign key indexes. Composite indexes, partial indexes, and covering indexes can dramatically improve query performance.</p>
        
        <p>Connection pooling manages database connections efficiently, reducing connection overhead and improving application performance.</p>
        
        <h2>Scalability Patterns</h2>
        <p>Sharding distributes data across multiple database instances based on a shard key. Effective sharding strategies consider data distribution and query patterns.</p>
        
        <p>Read replicas provide additional read capacity by replicating data from a master database, particularly effective for read-heavy applications.</p>
      `,
      author: 'Creative Network Team',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'Database',
      tags: ['Database', 'Design Patterns', 'PostgreSQL', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&crop=center',
      featured: false
    }
  ];

  console.log('BlogPost component - postId:', postId); // Debug log
  const post = blogPosts.find(p => p.id === parseInt(postId));
  console.log('BlogPost component - found post:', post); // Debug log

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Button 
            onClick={() => {
              window.history.pushState({}, '', '/blogs');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  const handleBackToBlog = () => {
    window.history.pushState({}, '', '/blogs');
    // Trigger the route change handler
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Button 
            variant="ghost" 
            onClick={handleBackToBlog}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Blog
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedWrapper delay={0.2}>
            <div className="text-center mb-8">
              <Badge className="bg-blue-600 text-white mb-4">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                {post.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-gray-500 mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-4 mb-12">
        <div className="container mx-auto max-w-4xl">
          <AnimatedWrapper delay={0.4}>
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </AnimatedWrapper>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 pb-20">
        <div className="container mx-auto max-w-4xl">
          <AnimatedWrapper delay={0.6}>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 md:p-12">
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-800 prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 prose-p:mb-4 prose-p:leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </CardContent>
            </Card>
          </AnimatedWrapper>
        </div>
      </section>

      {/* Share Section */}
      <section className="px-4 pb-12">
        <div className="container mx-auto max-w-4xl">
          <AnimatedWrapper delay={0.8}>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Share this article</h3>
                <p className="text-gray-600 mb-6">Help others discover this content</p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => window.print()}
                    className="flex items-center gap-2"
                  >
                    <BookOpen className="w-4 h-4" />
                    Print
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedWrapper>
        </div>
      </section>
    </div>
  );
};
