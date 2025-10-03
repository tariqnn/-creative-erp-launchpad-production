// Performance optimization utilities

// Debounce function for better performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for scroll events
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Intersection Observer for lazy loading
export const createIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = { threshold: 0.1 }
) => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }
  
  return new IntersectionObserver(callback, options);
};

// Performance monitoring
export const measurePerformance = (name: string, fn: () => void) => {
  if (typeof window === 'undefined' || !('performance' in window)) {
    fn();
    return;
  }
  
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
};

// Image lazy loading utility
export const lazyLoadImage = (img: HTMLImageElement, src: string) => {
  const observer = createIntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          img.src = src;
          img.classList.remove('lazy');
          observer?.unobserve(img);
        }
      });
    },
    { threshold: 0.1 }
  );
  
  if (observer) {
    observer.observe(img);
  }
};

// Video lazy loading utility
export const lazyLoadVideo = (video: HTMLVideoElement, sources: string[]) => {
  const observer = createIntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sources.forEach((src) => {
            const source = document.createElement('source');
            source.src = src;
            source.type = src.endsWith('.webm') ? 'video/webm' : 'video/mp4';
            video.appendChild(source);
          });
          video.load();
          observer?.unobserve(video);
        }
      });
    },
    { threshold: 0.1 }
  );
  
  if (observer) {
    observer.observe(video);
  }
};

// Memory cleanup utility
export const cleanupResources = () => {
  // Clear any running intervals or timeouts
  const highestTimeoutId = setTimeout(() => {}, 0);
  for (let i = 0; i < highestTimeoutId; i++) {
    clearTimeout(i);
  }
  
  // Clear any running intervals
  const highestIntervalId = setInterval(() => {}, 0);
  for (let i = 0; i < highestIntervalId; i++) {
    clearInterval(i);
  }
};
