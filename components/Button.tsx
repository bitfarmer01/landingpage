
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#080808] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.96] tracking-tight";
  
  const variants = {
    primary: "bg-[#D4FF3F] text-[#080808] hover:bg-[#c4ed34] hover:shadow-[0_0_30px_rgba(212,255,63,0.3)] focus:ring-[#D4FF3F]",
    secondary: "bg-white text-[#080808] hover:bg-gray-100 focus:ring-white",
    outline: "border-2 border-white/10 bg-transparent text-white hover:bg-white/5 focus:ring-white/20",
    ghost: "bg-transparent text-white/70 hover:text-white hover:bg-white/5",
    glass: "bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 focus:ring-white/20"
  };

  const sizes = {
    sm: "px-5 py-2 text-xs uppercase tracking-widest",
    md: "px-8 py-3.5 text-base",
    lg: "px-12 py-5 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
