'use client';

import { useEffect, useState } from 'react';
import { CircleArrowUp } from 'lucide-react';
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 rounded-full bg-primary/80 p-3 text-primary-foreground shadow-lg transition-all hover:bg-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-foreground focus:ring-offset-2"
          aria-label="Scroll to top"
        >
          <CircleArrowUp />
        </button>
      )}
    </>
  );
}
