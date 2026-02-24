import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px', // Aciona um pouco antes para suavidade
      }
    );

    observer.observe(currentRef);

    return () => {
      if (observer && currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-element transition-all duration-500 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};