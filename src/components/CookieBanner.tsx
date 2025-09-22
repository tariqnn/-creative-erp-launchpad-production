import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookies-accepted');
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookies-accepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm">
          We use cookies to ensure that we give you the best experience on our website. 
          If you continue to use this site we will assume that you are happy with it.
        </p>
        <Button 
          onClick={handleAccept}
          className="bg-orange-500 hover:bg-orange-600 text-white ml-4"
        >
          Got it!
        </Button>
      </div>
    </div>
  );
};



