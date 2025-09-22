import { useState, useEffect } from 'react';

interface AnimatedTextProps {
  words: string[];
  className?: string;
  interval?: number;
}

export const AnimatedText = ({ words, className = '', interval = 3000 }: AnimatedTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsVisible(true);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span 
      className={`inline-block transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
      } ${className}`}
    >
      {words[currentIndex]}
    </span>
  );
};