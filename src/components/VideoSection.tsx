import React, { useState } from 'react';
import { Play } from 'lucide-react';

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="video-izah"
      className="py-16 md:py-24 bg-[#F5F1E8] dark:bg-[#0A1A3A]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm font-semibold text-[#9A7818] dark:text-[#E8C766] tracking-wide mb-2">
            Video Təlimat
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1A3A] dark:text-white tracking-tight">
            İşi tam anlamayanlar üçün ətraflı video izah
          </h2>
          <p className="mt-3 text-base text-[#334155] dark:text-[#E2DDD2]">
            Sifarişin qəbul edilməsi, restorandan təhvil alınması və müştəriyə
            çatdırılması prosesini videoda addım-addım izləyin.
          </p>
        </div>

        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-[#0B2340] border border-[#C9A227]/55 dark:border-[#D4AF37]/45 shadow-2xl">
          {!isPlaying ? (
            <div className="relative w-full h-full group">
              <img
                src="/src/assets/images/video_cover_courier_1795062336318.jpg"
                alt="Wolt kuryer işi haqqında ətraflı video izah"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061024]/90 via-[#061024]/45 to-[#061024]/20" />

              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  aria-label="Videonu oynat"
                  className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full gold-shimmer-bg text-[#0A1A3A] shadow-2xl shadow-[#D4AF37]/35 transition-transform duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#E8C766]"
                >
                  <Play className="w-9 h-9 sm:w-10 sm:h-10 fill-[#0A1A3A] ml-1" />
                </button>
                <span className="mt-4 text-[#E8C766] font-bold text-base sm:text-lg">
                  Videonu İzlə
                </span>
              </div>
            </div>
          ) : (
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Q3ZB9hiLd6g?autoplay=1&rel=0&hl=az"
              title="İşi tam anlamayanlar üçün ətraflı video izah"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
};
