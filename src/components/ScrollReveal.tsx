'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "zoom-in";
  delay?: number; // delay in ms
  duration?: number; // duration in ms
}

export default function ScrollReveal({ 
  children, 
  className = "", 
  animation = "fade-up",
  delay = 0,
  duration = 1000
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.15, // Trigger when 15% visible
        rootMargin: "0px 0px -50px 0px" // Offset slightly so it triggers before bottom
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getInitialClass = () => {
    switch (animation) {
      case "fade-up": return "translate-y-16 opacity-0";
      case "fade-in": return "opacity-0";
      case "slide-left": return "-translate-x-16 opacity-0";
      case "slide-right": return "translate-x-16 opacity-0";
      case "zoom-in": return "scale-95 opacity-0";
      default: return "opacity-0";
    }
  };

  const getFinalClass = () => {
    switch (animation) {
      case "fade-up": return "translate-y-0 opacity-100";
      case "fade-in": return "opacity-100";
      case "slide-left": return "translate-x-0 opacity-100";
      case "slide-right": return "translate-x-0 opacity-100";
      case "zoom-in": return "scale-100 opacity-100";
      default: return "opacity-100";
    }
  };

  return (
    <div
      ref={ref}
      className={`${className} transition-all ease-out will-change-transform ${isVisible ? getFinalClass() : getInitialClass()}`}
      style={{ 
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}
