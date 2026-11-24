import React, { useState } from 'react';

export interface AppLogoProps {
  className?: string;
  withTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  logoSrc?: string;
  showWordmark?: boolean;
  variant?: 'light' | 'dark';
}

// Official logo assets path configuration
export const DEFAULT_LOGO_PATH = '/assets/images/logo_p2r_transparent.png';
export const ORIGINAL_ATTACHED_LOGO_PATH = '/assets/aistudio/WhatsApp_Image_2026-11-06_at_21.13.39_7f76736e.jpeg';

export const AppLogo: React.FC<AppLogoProps> = ({
  className = '',
  withTagline = false,
  size = 'md',
  logoSrc = DEFAULT_LOGO_PATH,
  showWordmark = true,
  variant = 'light'
}) => {
  const [imageError, setImageError] = useState(false);

  const imageSizes = {
    sm: 'h-8 sm:h-9 w-auto',
    md: 'h-10 sm:h-12 w-auto',
    lg: 'h-14 sm:h-16 w-auto',
    xl: 'h-20 sm:h-24 w-auto'
  };

  const eyebrowSizes = {
    sm: 'text-[9px] sm:text-[10px]',
    md: 'text-[10px] sm:text-[11px]',
    lg: 'text-xs',
    xl: 'text-xs sm:text-sm'
  };

  const titleSizes = {
    sm: 'text-sm sm:text-base font-extrabold',
    md: 'text-base sm:text-xl font-extrabold',
    lg: 'text-xl sm:text-2xl font-extrabold',
    xl: 'text-2xl sm:text-3xl font-extrabold'
  };

  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 shrink-0 ${className}`}>
      {/* Official 3D Pixel To Reality Logo Image */}
      {!imageError ? (
        <img
          src={logoSrc}
          alt="Pixel to Reality Official Logo"
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
          className={`${imageSizes[size]} object-contain drop-shadow-sm select-none transition-transform hover:scale-105 duration-200 shrink-0`}
        />
      ) : null}

      {/* Brand Hierarchy Wordmark: PIXEL TO REALITY (Exhibition) -> FUTURE PATH (Product) */}
      {showWordmark && (
        <div className="flex flex-col text-left leading-none whitespace-nowrap">
          <span
            className={`font-bold uppercase tracking-[0.14em] mb-0.5 ${eyebrowSizes[size]} ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            PIXEL TO REALITY
          </span>
          <div className={`tracking-tight leading-none font-display ${titleSizes[size]}`}>
            <span className={isDark ? 'text-white' : 'text-slate-900'}>FUTURE </span>
            <span
              className={
                isDark
                  ? 'text-blue-400'
                  : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600'
              }
            >
              PATH
            </span>
          </div>
          {withTagline && (
            <span className={`text-[11px] sm:text-xs font-medium mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Dari Potensi Menjadi Masa Depan.
            </span>
          )}
        </div>
      )}
    </div>
  );
};
