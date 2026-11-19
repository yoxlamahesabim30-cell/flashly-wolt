import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { OFFICIAL_LOGO_URL } from './Logo';

export const LoadingScreen: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const delay = prefersReduced ? 50 : 650;

    const timer = window.setTimeout(() => {
      setVisible(false);
    }, delay);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
          className="fixed inset-0 z-[100] bg-[#0A1A3A] flex flex-col items-center justify-center p-6 pointer-events-none"
        >
          <div className="relative">
            <span className="absolute -inset-3 rounded-full bg-[#D4AF37]/30 blur-lg animate-pulse" />
            <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-2xl">
              <img
                src={OFFICIAL_LOGO_URL}
                alt="FLASHLY"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover scale-[1.06]"
              />
            </div>
          </div>
          <p className="mt-5 font-serif text-2xl font-bold tracking-widest text-[#E8C766]">
            FLASHLY
          </p>
          <p className="mt-1 text-xs font-medium tracking-wide text-[#D4AF37]/80">
            Wolt Qeydiyyatı | Bakı
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
