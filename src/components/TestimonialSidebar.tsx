import { X, MoreHorizontal } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

interface TestimonialSidebarProps {
  lang: 'en' | 'ar';
}

export const TestimonialSidebar = ({ lang }: TestimonialSidebarProps) => {
  const t = useTranslation(lang);
  
  return (
    <div className="relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
          <defs>
            <pattern id="waves" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 Q25 25 50 50 T100 50" stroke="#f97316" strokeWidth="2" fill="none" opacity="0.3"/>
              <path d="M0 75 Q25 50 50 75 T100 75" stroke="#f97316" strokeWidth="2" fill="none" opacity="0.2"/>
              <path d="M0 25 Q25 0 50 25 T100 25" stroke="#f97316" strokeWidth="2" fill="none" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#waves)" />
        </svg>
      </div>
      
      {/* Testimonial Card */}
      <div className="relative bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border-t-4 border-blue-900 p-6 max-w-sm ml-auto hover:shadow-3xl transition-all duration-300">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <X className="h-4 w-4" />
          </button>
        </div>
        
        {/* Testimonial Content */}
        <div className="mb-4">
          <p className="text-gray-700 text-sm leading-relaxed">
            {t.testimonialText}
          </p>
        </div>
        
        {/* Author */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-medium">CN</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">{t.creativeNetwork}</p>
            <p className="text-xs text-gray-500">{t.clientTestimonial}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
