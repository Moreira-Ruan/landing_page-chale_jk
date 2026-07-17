import React from 'react';
import logoChale from '../assets/logo.webp';

interface LogoProps {
  className?: string;
  light?: boolean;
  cropped?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-full", light = false, cropped = false }) => {
  return (
    <div className={`flex items-center justify-center select-none ${className}`} id="chale-jk-logo">
      <img
        src={logoChale}
        alt="Chalé JK Pirenópolis"
        className={`object-contain h-full w-auto transition-all duration-300 ${
          light ? 'brightness-0 invert opacity-95 hover:scale-[1.03]' : 'hover:scale-[1.03]'
        }`}
        style={{
          // Mantivemos o scale(1.6) no modo cropped para o desktop, que preencheu muito bem a área central livre
          transform: cropped ? 'scale(1.6)' : 'scale(1.25)',
          transformOrigin: 'center',
        }}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};