
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

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
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.96] tracking-tight";

  const variants = {
    primary: isLight
      ? "bg-[#D4FF3F] text-[#1A1A1A] hover:bg-[#c4ed34] hover:shadow-[0_0_30px_rgba(212,255,63,0.35)] focus:ring-[#D4FF3F] focus:ring-offset-[#FAFAF7] font-extrabold"
      : "bg-[#D4FF3F] text-[#080808] hover:bg-[#c4ed34] hover:shadow-[0_0_30px_rgba(212,255,63,0.3)] focus:ring-[#D4FF3F] focus:ring-offset-[#080808]",
    secondary: isLight
      ? "bg-[#1A1A1A] text-white hover:bg-[#333] focus:ring-[#1A1A1A] focus:ring-offset-[#FAFAF7]"
      : "bg-white text-[#080808] hover:bg-gray-100 focus:ring-white focus:ring-offset-[#080808]",
    outline: isLight
      ? "border-2 border-black/10 bg-transparent text-[#1A1A1A] hover:bg-black/5 focus:ring-black/20 focus:ring-offset-[#FAFAF7]"
      : "border-2 border-white/10 bg-transparent text-white hover:bg-white/5 focus:ring-white/20 focus:ring-offset-[#080808]",
    ghost: isLight
      ? "bg-transparent text-black/70 hover:text-black hover:bg-black/5"
      : "bg-transparent text-white/70 hover:text-white hover:bg-white/5",
    glass: isLight
      ? "bg-black/5 backdrop-blur-md border border-black/10 text-[#1A1A1A] hover:bg-black/10 focus:ring-black/20 focus:ring-offset-[#FAFAF7]"
      : "bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 focus:ring-white/20 focus:ring-offset-[#080808]"
  };

  const sizes = {
    sm: "px-5 py-2.5 text-xs uppercase tracking-widest",
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
