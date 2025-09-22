import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export const Logo = ({ size = 'md', className = '', onClick }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <motion.div
      className={`flex items-center gap-3 cursor-pointer ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {/* Your Original Logo with Spinning Animation */}
      <motion.div
        className={`${sizeClasses[size]} bg-blue-600 rounded-full flex items-center justify-center relative overflow-hidden shadow-brand`}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "linear",
          delay: 0.5 
        }}
        whileHover={{ 
          scale: 1.1,
          rotate: [0, 360, 0],
          transition: { duration: 0.8, ease: "easeInOut" }
        }}
      >
        {/* Computer Monitor Icon - Your Original Design */}
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Monitor Screen */}
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeWidth="2"/>
          {/* Monitor Stand */}
          <line x1="8" y1="21" x2="16" y2="21" strokeWidth="2"/>
          <line x1="12" y1="17" x2="12" y2="21" strokeWidth="2"/>
          {/* Code Symbol on Screen */}
          <text x="12" y="11" textAnchor="middle" fontSize="6" fill="white" fontFamily="monospace">
            &lt;/&gt;
          </text>
        </svg>
        
        {/* Subtle glow effect */}
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Logo Text with Brand Colors */}
      <div className="flex flex-col">
        <motion.span
          className={`font-bold text-black ${textSizes[size]} leading-tight font-brand`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          CREATIVE
        </motion.span>
        <motion.span
          className={`font-bold text-black ${textSizes[size]} leading-tight font-brand`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          NETWORK
        </motion.span>
      </div>
    </motion.div>
  );
};
