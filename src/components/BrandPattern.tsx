import { motion } from 'framer-motion';

interface BrandPatternProps {
  type?: 'dots' | 'grid' | 'mesh' | 'gradient';
  intensity?: 'light' | 'medium' | 'strong';
  className?: string;
  animated?: boolean;
}

export const BrandPattern = ({ 
  type = 'dots', 
  intensity = 'light', 
  className = '',
  animated = true 
}: BrandPatternProps) => {
  const intensityClasses = {
    light: 'opacity-20',
    medium: 'opacity-40',
    strong: 'opacity-60'
  };

  const patternClasses = {
    dots: 'pattern-dots',
    grid: 'pattern-grid',
    mesh: 'bg-brand-mesh',
    gradient: 'bg-brand-gradient'
  };

  const PatternComponent = () => {
    switch (type) {
      case 'dots':
        return (
          <div className={`absolute inset-0 ${patternClasses.dots} ${intensityClasses[intensity]}`} />
        );
      case 'grid':
        return (
          <div className={`absolute inset-0 ${patternClasses.grid} ${intensityClasses[intensity]}`} />
        );
      case 'mesh':
        return (
          <div className={`absolute inset-0 ${patternClasses.mesh} ${intensityClasses[intensity]}`} />
        );
      case 'gradient':
        return (
          <div className={`absolute inset-0 ${patternClasses.gradient} ${intensityClasses[intensity]}`} />
        );
      default:
        return null;
    }
  };

  if (animated) {
    return (
      <motion.div
        className={`relative overflow-hidden ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <PatternComponent />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
          }}
        />
      </motion.div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <PatternComponent />
    </div>
  );
};

// Brand Watermark Component
export const BrandWatermark = ({ className = '' }: { className?: string }) => {
  return (
    <motion.div
      className={`absolute inset-0 pointer-events-none ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.03 }}
      transition={{ duration: 2 }}
    >
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-300 rounded-full animate-brand-float" />
      <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-orange-300 rounded-full animate-brand-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-blue-400 rounded-full animate-brand-float" style={{ animationDelay: '2s' }} />
    </motion.div>
  );
};

// Brand Accent Line Component
export const BrandAccentLine = ({ 
  direction = 'horizontal',
  length = 'full',
  className = ''
}: { 
  direction?: 'horizontal' | 'vertical';
  length?: 'full' | 'half' | 'quarter';
  className?: string;
}) => {
  const lengthClasses = {
    full: direction === 'horizontal' ? 'w-full' : 'h-full',
    half: direction === 'horizontal' ? 'w-1/2' : 'h-1/2',
    quarter: direction === 'horizontal' ? 'w-1/4' : 'h-1/4'
  };

  return (
    <motion.div
      className={`${lengthClasses[length]} ${direction === 'horizontal' ? 'h-1' : 'w-1'} gradient-brand-hero rounded-full ${className}`}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    />
  );
};







