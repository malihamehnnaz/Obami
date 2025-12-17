'use client';

import { useEffect, useRef, useState } from 'react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number; // 0 to 1, higher is faster movement
}

export default function ParallaxImage({ 
  src, 
  alt, 
  className = "",
  speed = 0.2 
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let rafId: number;
    
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate visibility (0 to 1)
      // When top of element is at bottom of screen -> start
      // When bottom of element is at top of screen -> end
      
      // We want the image to move relative to the container
      // Center point: when element center is at screen center
      
      const elementCenter = rect.top + rect.height / 2;
      const screenCenter = windowHeight / 2;
      const distanceFromCenter = elementCenter - screenCenter;
      
      // Move image opposite to scroll direction
      setOffset(distanceFromCenter * speed);
    };

    const onScroll = () => {
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll);
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return (
    <div ref={containerRef} className={`overflow-hidden relative ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="absolute left-0 w-full h-[120%] object-cover will-change-transform"
        style={{ 
          top: '-10%', // Start slightly up to allow movement
          transform: `translateY(${offset}px)` 
        }}
      />
    </div>
  );
}
