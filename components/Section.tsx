import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
  // Reduced py-16/py-24 to py-8/py-16 to fix "big spaces"
  return (
    <section id={id} className={`py-8 md:py-16 px-4 md:px-8 w-full max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
};