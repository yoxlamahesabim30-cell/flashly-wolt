import React, { useCallback, useEffect, useState } from 'react';
import { Bike, Car, ChevronLeft, ChevronRight, Footprints } from 'lucide-react';

export interface TransportSlide {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  alt: string;
  type: 'piyada' | 'velosiped' | 'moto' | 'avto';
}

// Şəkilləri dəyişmək üçün yalnız aşağıdakı massivdəki imageUrl dəyərini yeniləyin
export const TRANSPORT_SLIDES: TransportSlide[] = [
  {
    id: 'piyada',
    title: 'Piyada Kuryer',
    subtitle: 'Piyada işlə — əlavə xərc yoxdur',
    imageUrl: '/src/assets/images/transport_piyada_baku_1795063395457.jpg',
    alt: 'Bakı küçəsində Wolt termal çantası ilə piyada kuryer',
    type: 'piyada',
  },
  {
    id: 'velosiped',
    title: 'Velosiped Kuryer',
    subtitle: 'Şəhər daxilində çevik və sürətli çatdırılma',
    imageUrl: '/src/assets/images/transport_velosiped_baku_1795063394711.jpg',
    alt: 'Bakı bulvarında velosipedlə çatdırılma edən kuryer',
    type: 'velosiped',
  },
  {
    id: 'moto',
    title: 'Moto Kuryer',
    subtitle: 'Daha çox sifariş qəbul et, gündəlik qazancını artır',
    imageUrl: '/src/assets/images/transport_moto_baku_1795063394664.jpg',
    alt: 'Bakıda motosikletlə sifariş çatdıran kuryer',
    type: 'moto',
  },
  {
    id: 'avto',
    title: 'Avto Kuryer',
    subtitle: 'Böyük sifarişlər və istənilən havada rahat iş',
    imageUrl: '/src/assets/images/transport_avto_baku_1795063395394.jpg',
    alt: 'Avtomobil ilə sifariş çatdıran kuryer',
    type: 'avto',
  },
];

export const TransportCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % TRANSPORT_SLIDES.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex(
      (prev) => (prev - 1 + TRANSPORT_SLIDES.length) % TRANSPORT_SLIDES.length
    );
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = window.setInterval(() => {
      goNext();
    }, 4000);
    return () => window.clearInterval(interval);
  }, [goNext, isPaused]);

  const renderFallbackIcon = (type: TransportSlide['type']) => {
    if (type === 'piyada') return <Footprints className="w-14 h-14 text-[#D4AF37]" />;
    if (type === 'avto') return <Car className="w-14 h-14 text-[#D4AF37]" />;
    return <Bike className="w-14 h-14 text-[#D4AF37]" />;
  };

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden border border-[#C9A227]/50 dark:border-[#D4AF37]/40 bg-[#0B2340] shadow-2xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      aria-roledescription="karusel"
      aria-label="Kuryer nəqliyyat növləri"
    >
      <div className="relative aspect-[16/9] sm:aspect-[16/8.5] w-full overflow-hidden">
        <div
          className="flex h-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {TRANSPORT_SLIDES.map((slide) => (
            <div
              key={slide.id}
              className="relative w-full h-full shrink-0 select-none"
            >
              {!failedImages[slide.id] ? (
                <img
                  src={slide.imageUrl}
                  alt={slide.alt}
                  referrerPolicy="no-referrer"
                  onError={() =>
                    setFailedImages((prev) => ({ ...prev, [slide.id]: true }))
                  }
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0A1A3A] to-[#0B2340] text-white p-6">
                  {renderFallbackIcon(slide.type)}
                  <p className="mt-3 font-bold text-lg text-[#E8C766]">
                    {slide.title}
                  </p>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-[#061024]/92 via-[#061024]/35 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-[#E8C766] mb-1">
                    Nəqliyyat seçimi · 0{TRANSPORT_SLIDES.indexOf(slide) + 1} / 0
                    {TRANSPORT_SLIDES.length}
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {slide.title}
                  </h2>
                  <p className="mt-1 text-sm sm:text-base text-[#E2DDD2] max-w-xl">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={goPrev}
          aria-label="Əvvəlki slayd"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-xl bg-[#0A1A3A]/80 hover:bg-[#0A1A3A] backdrop-blur-md text-[#E8C766] border border-[#D4AF37]/45 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={goNext}
          aria-label="Növbəti slayd"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-xl bg-[#0A1A3A]/80 hover:bg-[#0A1A3A] backdrop-blur-md text-[#E8C766] border border-[#D4AF37]/45 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="px-5 py-3.5 bg-[#0A1A3A]/95 border-t border-[#D4AF37]/25 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto">
          {TRANSPORT_SLIDES.map((slide, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                  isActive
                    ? 'gold-shimmer-bg text-[#0A1A3A]'
                    : 'bg-white/5 text-[#E2DDD2] hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {slide.title}
              </button>
            );
          })}
        </div>

        <div className="hidden sm:flex items-center gap-2 shrink-0">
          {TRANSPORT_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`${slide.title} slaydına keç`}
              className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                idx === activeIndex
                  ? 'w-7 bg-[#D4AF37]'
                  : 'w-2.5 bg-white/25 hover:bg-white/45'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
