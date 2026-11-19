import React, { useEffect, useState } from 'react';
import { ExternalLink, Instagram, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { OFFICIAL_LOGO_URL } from './Logo';

const SESSION_KEY = 'flashly_ig_popup_shown';
const INSTAGRAM_URL = 'https://www.instagram.com/woltqeydiyyati';

export const InstagramPopupModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY) === '1') {
        return;
      }
    } catch {
      // Ignore storage access errors
    }

    const timer = window.setTimeout(() => {
      setIsOpen(true);
      try {
        sessionStorage.setItem(SESSION_KEY, '1');
      } catch {
        // Ignore storage access errors
      }
    }, 4000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ig-popup-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-[#040B1A]/75 backdrop-blur-[3px]"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full sm:max-w-md bg-[#FAF7F0] dark:bg-[#0B2340] border border-[#C9A227]/60 dark:border-[#D4AF37]/45 rounded-t-2xl sm:rounded-2xl shadow-2xl p-6 sm:p-7"
          >
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="flex items-center gap-3.5">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-lg bg-[#0A1A3A] shrink-0">
                  <img
                    src={OFFICIAL_LOGO_URL}
                    alt="FLASHLY @woltqeydiyyati loqosu"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover scale-[1.06]"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9A7818] dark:text-[#E8C766]">
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </div>
                  <div className="text-base font-extrabold text-[#0A1A3A] dark:text-white">
                    @woltqeydiyyati
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Bağla"
                className="w-9 h-9 rounded-lg bg-[#EDE7DA] dark:bg-[#0A1A3A] text-[#0A1A3A] dark:text-[#E8C766] border border-[#C9A227]/40 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <h2
              id="ig-popup-title"
              className="text-xl sm:text-2xl font-serif font-bold text-[#0A1A3A] dark:text-[#E8C766] tracking-tight"
            >
              Instagram Səhifəmizi İzlə
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-[#334155] dark:text-[#E2DDD2] leading-relaxed">
              Ən son yeniliklər, qazanc sübutları və canlı yayımlar burada!
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex-1 min-h-[50px] px-5 py-3 rounded-xl gold-shimmer-bg text-[#0A1A3A] font-extrabold text-sm sm:text-base inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <Instagram className="w-5 h-5 shrink-0" />
                <span>Instagram-da İzlə</span>
                <ExternalLink className="w-4 h-4 shrink-0" />
              </a>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="min-h-[50px] px-5 py-3 rounded-xl bg-[#EDE7DA] dark:bg-[#0A1A3A] hover:bg-[#E2DAC9] dark:hover:bg-[#0E2B4D] text-[#0A1A3A] dark:text-[#F8F5EE] border border-[#C9A227]/45 font-bold text-sm sm:text-base whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                Bağla
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
