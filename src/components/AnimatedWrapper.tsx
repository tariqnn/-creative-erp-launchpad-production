import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimatedWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

interface StaggeredWrapperProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

interface StaggeredItemProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
}

const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
}) => {
  return (
    <motion.div
      className={className}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        delay,
        duration,
        ease: [0.6, -0.05, 0.01, 0.99],
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggeredWrapper: React.FC<StaggeredWrapperProps> = ({
  children,
  className = '',
  staggerDelay = 0.1,
}) => {
  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {children}
    </motion.div>
  );
};

export const StaggeredItem: React.FC<StaggeredItemProps> = ({
  children,
  className = '',
  index = 0,
}) => {
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={itemVariants}
    >
      {children}
    </motion.div>
  );
};


