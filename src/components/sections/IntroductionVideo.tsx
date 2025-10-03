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

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
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
              {/* Video Element with Lazy Loading */}
              <video
                ref={videoRef}
                className="w-full h-auto"
                poster="/images/video-poster.jpg"
                muted={isMuted}
                preload={isInView ? "metadata" : "none"}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                onLoadedData={handleVideoLoad}
                playsInline
              >
                {isInView && (
                  <>
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                    <source src="/videos/final.mp4" type="video/mp4" />
                  </>
                )}
                Your browser does not support the video tag.
              </video>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />

              {/* Play/Pause Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  onClick={togglePlay}
                  className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-gray-800 ml-1" />
                  ) : (
                    <Play className="w-8 h-8 text-gray-800 ml-1" />
                  )}
                </motion.button>
              </div>

              {/* Video Controls */}
              <motion.div 
                className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transition-all duration-300 ${
                  showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: showControls ? 1 : 0, 
                  y: showControls ? 0 : 20 
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={togglePlay}
                      className="text-white hover:bg-white/20"
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5" />
                      ) : (
                        <Play className="w-5 h-5" />
                      )}
                    </Button>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleMute}
                      className="text-white hover:bg-white/20"
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5" />
                      ) : (
                        <Volume2 className="w-5 h-5" />
                      )}
                    </Button>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={restartVideo}
                      className="text-white hover:bg-white/20"
                    >
                      <RotateCcw className="w-5 h-5" />
                    </Button>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleFullscreen}
                      className="text-white hover:bg-white/20"
                    >
                      <Maximize className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </motion.div>
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
