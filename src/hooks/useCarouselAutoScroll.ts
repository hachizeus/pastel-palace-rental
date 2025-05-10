
import { useState, useEffect } from 'react';

/**
 * Custom hook for auto-scrolling carousel
 * @param totalSlides - The total number of slides in the carousel
 * @param interval - The interval in milliseconds between slide changes
 * @param initialSlide - The initial slide index
 * @returns The current active slide index
 */
export const useCarouselAutoScroll = (
  totalSlides: number, 
  interval: number = 2000,
  initialSlide: number = 0
) => {
  const [activeSlide, setActiveSlide] = useState(initialSlide);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, interval);
    
    return () => clearInterval(timer);
  }, [totalSlides, interval]);
  
  return activeSlide;
};
