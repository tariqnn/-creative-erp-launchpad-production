import { useState, useRef, useEffect, Suspense } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Language, useTranslation } from '@/lib/i18n';
import { AnimatedWrapper } from '@/components/AnimatedWrapper';
import { motion, useReducedMotion } from 'framer-motion';

interface IntroductionVideoProps {
  lang: Language;
}

export const IntroductionVideo = ({ lang }: IntroductionVideoProps) => {
  const t = useTranslation(lang);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const videoElement = videoRef.current;
    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  const togglePlay = async () => {
    if (videoRef.current) {
      try {
        if (isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        } else {
          await videoRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.error('Video play error:', error);
        // If play fails, try to load the video first
        if (videoRef.current.readyState < 2) {
          videoRef.current.load();
        }
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const restartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoLoad = () => {
    setIsLoaded(true);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="container mx-auto px-4">
        <AnimatedWrapper delay={0.1}>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
            >
              {t.introVideoTitle}
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.3 : 0.6, delay: shouldReduceMotion ? 0 : 0.2 }}
            >
              {t.introVideoDescription}
            </motion.p>
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper delay={0.3}>
          <div className="max-w-4xl mx-auto">
            <div 
              className="relative bg-black rounded-2xl overflow-hidden shadow-2xl group"
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
            >
              {/* Vimeo Video Embed */}
              {isInView ? (
                <iframe
                  src="https://player.vimeo.com/video/1124356128?autoplay=0&muted=1&controls=1&loop=0"
                  className="w-full h-auto min-h-[400px] md:min-h-[500px]"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Creative Network Services Video"
                />
              ) : (
                <div className="w-full h-[400px] md:h-[500px] bg-gray-200 flex items-center justify-center">
                  <div className="text-gray-500">Loading video...</div>
                </div>
              )}

            </div>

            {/* Video Description */}
            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                {t.introVideoSubtext}
              </p>
            </motion.div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
};
