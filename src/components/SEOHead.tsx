import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
  noIndex?: boolean;
}

export const SEOHead = ({
  title = "Creative Network | Web Development, Mobile Apps & ERP Solutions",
  description = "Transform your business with Creative Network's cloud-based ERP solution. Get sales, invoicing, inventory, HR, and project management in one platform. Custom mobile apps and websites available.",
  keywords = "ERP, SaaS, business management, mobile apps, custom websites, Creative Network, شبكة الإبداع, web development, mobile app development, API development, enterprise solutions, business automation, cloud ERP, inventory management, HR management, project management, Arabic ERP, bilingual software",
  canonical,
  ogImage = "https://craetivenetworks.vercel.app/images/og-image.jpg",
  ogType = "website",
  structuredData,
  noIndex = false
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update robots meta tag
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    }
    
    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonical) {
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = canonical;
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta) {
      ogImageMeta.setAttribute('content', ogImage);
    }
    
    const ogTypeMeta = document.querySelector('meta[property="og:type"]');
    if (ogTypeMeta) {
      ogTypeMeta.setAttribute('content', ogType);
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl && canonical) {
      ogUrl.setAttribute('content', canonical);
    }
    
    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }
    
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', ogImage);
    }
    
    // Update structured data
    if (structuredData) {
      let structuredDataScript = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.type = 'application/ld+json';
        document.head.appendChild(structuredDataScript);
      }
      structuredDataScript.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, canonical, ogImage, ogType, structuredData, noIndex]);

  return null; // This component doesn't render anything
};

// Predefined SEO configurations for different pages
export const SEOConfigs = {
  home: {
    title: "Creative Network | Web Development, Mobile Apps & ERP Solutions",
    description: "Transform your business with Creative Network's cloud-based ERP solution. Get sales, invoicing, inventory, HR, and project management in one platform. Custom mobile apps and websites available.",
    keywords: "ERP, SaaS, business management, mobile apps, custom websites, Creative Network, شبكة الإبداع, web development, mobile app development, API development, enterprise solutions, business automation, cloud ERP, inventory management, HR management, project management, Arabic ERP, bilingual software",
    canonical: "https://craetivenetworks.vercel.app/",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Creative Network",
      "alternateName": "شبكة الإبداع",
      "url": "https://craetivenetworks.vercel.app",
      "logo": "https://craetivenetworks.vercel.app/images/logo.png",
      "description": "Creative Network provides comprehensive web development, mobile app development, and ERP solutions for businesses worldwide.",
      "foundingDate": "2020",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-0123",
        "contactType": "customer service",
        "availableLanguage": ["English", "Arabic"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://twitter.com/CreativeNetwork",
        "https://linkedin.com/company/creative-network",
        "https://facebook.com/CreativeNetwork"
      ]
    }
  },
  
  services: {
    title: "Our Services | Web Development, Mobile Apps & ERP Solutions - Creative Network",
    description: "Explore Creative Network's comprehensive development services including web development, mobile app development, API development, and enterprise ERP solutions.",
    keywords: "web development services, mobile app development, API development, ERP solutions, custom software development, Creative Network services",
    canonical: "https://craetivenetworks.vercel.app/services",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Creative Network Development Services",
      "description": "Comprehensive web development, mobile app development, and ERP solutions",
      "provider": {
        "@type": "Organization",
        "name": "Creative Network"
      },
      "serviceType": "Software Development",
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile App Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "ERP Solutions"
            }
          }
        ]
      }
    }
  },
  
  webDevelopment: {
    title: "Web Development Services | Custom Websites & Web Applications - Creative Network",
    description: "Professional web development services by Creative Network. We create custom websites, web applications, and e-commerce solutions using modern technologies.",
    keywords: "web development, custom websites, web applications, e-commerce development, responsive design, modern web technologies",
    canonical: "https://craetivenetworks.vercel.app/services/web-development",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Web Development Services",
      "description": "Professional web development services including custom websites, web applications, and e-commerce solutions",
      "provider": {
        "@type": "Organization",
        "name": "Creative Network"
      },
      "serviceType": "Web Development",
      "areaServed": "Worldwide"
    }
  },
  
  mobileAppDevelopment: {
    title: "Mobile App Development | iOS & Android Apps - Creative Network",
    description: "Expert mobile app development services for iOS and Android. We create native and cross-platform mobile applications for businesses of all sizes.",
    keywords: "mobile app development, iOS app development, Android app development, cross-platform apps, native mobile apps, mobile application design",
    canonical: "https://craetivenetworks.vercel.app/services/mobile-app-development",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Mobile App Development Services",
      "description": "Expert mobile app development for iOS and Android platforms",
      "provider": {
        "@type": "Organization",
        "name": "Creative Network"
      },
      "serviceType": "Mobile App Development",
      "areaServed": "Worldwide"
    }
  },
  
  erpServices: {
    title: "ERP Solutions | Enterprise Resource Planning Software - Creative Network",
    description: "Comprehensive ERP solutions for businesses. Manage sales, invoicing, inventory, HR, and projects with our cloud-based ERP system. Available in English and Arabic.",
    keywords: "ERP solutions, enterprise resource planning, business management software, cloud ERP, inventory management, HR management, project management, Arabic ERP",
    canonical: "https://craetivenetworks.vercel.app/erp-services",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Creative Network ERP",
      "description": "Comprehensive cloud-based ERP solution for business management",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "provider": {
        "@type": "Organization",
        "name": "Creative Network"
      },
      "featureList": [
        "Sales Management",
        "Invoicing",
        "Inventory Management",
        "HR Management",
        "Project Management",
        "Multi-language Support"
      ]
    }
  },
  
  blogs: {
    title: "Blog | Latest Articles on Web Development & Business Technology - Creative Network",
    description: "Read the latest articles on web development, mobile app development, ERP solutions, and business technology trends from Creative Network experts.",
    keywords: "web development blog, mobile app development articles, ERP solutions blog, business technology trends, software development insights",
    canonical: "https://craetivenetworks.vercel.app/blogs",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Creative Network Blog",
      "description": "Latest articles on web development, mobile app development, and ERP solutions",
      "publisher": {
        "@type": "Organization",
        "name": "Creative Network"
      },
      "url": "https://craetivenetworks.vercel.app/blogs"
    }
  }
};
