import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  href?: string;
  showIcon?: boolean;
  target?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  fullWidth = false, 
  variant = 'primary', 
  className = '', 
  href,
  showIcon = true,
  target,
  onClick,
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl transition-all duration-300 transform active:scale-[0.98] cursor-pointer select-none font-display uppercase tracking-tight";
  
  const variants = {
    primary: "bg-brand-red text-white hover:bg-[#F43F5E] shadow-xl shadow-brand-red/10",
    secondary: "bg-white text-black hover:bg-gray-100",
    outline: "bg-transparent border-2 border-white/10 text-white hover:border-brand-red/50 hover:text-brand-red"
  };

  const widthClass = fullWidth ? 'w-full' : 'w-auto px-10';
  const sizeClass = "py-5 text-sm md:text-base font-black"; // Negrito clean absoluto

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {showIcon && (
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
        )}
      </span>
    </>
  );

  const handleInternalClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
    if (onClick) {
      (onClick as React.MouseEventHandler<HTMLAnchorElement>)(e);
    }
  };

  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <a 
        href={href} 
        onClick={handleInternalClick}
        target={target || (isExternal ? "_blank" : undefined)}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={`${baseStyles} ${variants[variant]} ${widthClass} ${sizeClass} ${className} no-underline group`}
        {...(props as any)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${sizeClass} ${className} group`}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
};