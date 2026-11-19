import React from 'react';

export const OFFICIAL_LOGO_URL =
  '/assets/aistudio/image_20261119_094022_11548edc.jpg';

interface LogoProps {
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

export const Logo: React.FC<LogoProps> = ({
  showSubtitle = false,
  size = 'md',
}) => {
  if (size === 'hero') {
    return (
      <div className="relative inline-flex items-center justify-center">
        {/* Glowing gold ring animation */}
        <span
          aria-hidden="true"
          className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#C9A227]/45 via-[#E8C766]/65 to-[#D4AF37]/45 blur-md animate-pulse motion-reduce:hidden"
        />
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.35)] bg-[#0A1A3A]">
          <img
            src={OFFICIAL_LOGO_URL}
            alt="FLASHLY — Wolt Qeydiyyatı rəsmi emblemi"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover scale-[1.06]"
          />
        </div>
      </div>
    );
  }

  const imgDim =
    size === 'sm' ? 'w-10 h-10' : size === 'lg' ? 'w-14 h-14' : 'w-11 h-11';
  const titleSize =
    size === 'sm' ? 'text-xl' : size === 'lg' ? 'text-2xl' : 'text-xl';

  return (
    <div className="inline-flex items-center gap-3 select-none">
      <div
        className={`${imgDim} rounded-full overflow-hidden border border-[#D4AF37]/80 shadow-md shrink-0 bg-[#0A1A3A]`}
      >
        <img
          src={OFFICIAL_LOGO_URL}
          alt="FLASHLY loqosu"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover scale-[1.06]"
        />
      </div>

      <div className="flex flex-col leading-none">
        <span
          className={`${titleSize} font-serif font-bold tracking-wider whitespace-nowrap text-[#0A1A3A] dark:text-[#E8C766]`}
        >
          FLASHLY
        </span>
        {showSubtitle && (
          <span className="mt-1 text-xs font-medium whitespace-nowrap text-[#4A3E1D] dark:text-[#D4AF37]/90">
            Wolt Qeydiyyatı | Bakı
          </span>
        )}
      </div>
    </div>
  );
};
