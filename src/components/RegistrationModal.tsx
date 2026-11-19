import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { OFFICIAL_LOGO_URL } from './Logo';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GOOGLE_FORM_URL = 'https://forms.gle/jmeGxgsDB4GYj4t48';

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState<'question' | 'returning'>('question');

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => setStep('question'), 200);
      return () => clearTimeout(timer);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#040B1A]/75 backdrop-blur-[3px]"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full sm:max-w-lg bg-[#FAF7F0] dark:bg-[#0B2340] rounded-t-2xl sm:rounded-2xl shadow-2xl border border-[#C9A227]/60 dark:border-[#D4AF37]/45 p-6 sm:p-8"
          >
            <div className="flex items-center justify-between gap-4 mb-5">
              {step === 'returning' ? (
                <button
                  type="button"
                  onClick={() => setStep('question')}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0A1A3A] dark:text-[#E8C766] hover:opacity-80 py-1.5 px-2 -ml-2 rounded-lg transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Geri</span>
                </button>
              ) : (
                <div className="inline-flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-[#D4AF37] bg-[#0A1A3A]">
                    <img
                      src={OFFICIAL_LOGO_URL}
                      alt="FLASHLY"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover scale-[1.06]"
                    />
                  </div>
                  <span className="text-xs font-bold tracking-wide text-[#9A7818] dark:text-[#E8C766]">
                    FLASHLY · Wolt Qeydiyyatı | Bakı
                  </span>
                </div>
              )}

              <button
                type="button"
                onClick={onClose}
                aria-label="Bağla"
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#EDE7DA] dark:bg-[#0A1A3A] text-[#0A1A3A] dark:text-[#E8C766] border border-[#C9A227]/40 hover:opacity-85 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {step === 'question' ? (
              <div>
                <h2
                  id="modal-title"
                  className="text-2xl font-serif font-bold text-[#0A1A3A] dark:text-[#E8C766] tracking-tight"
                >
                  Qeydiyyat növünü seçin
                </h2>
                <p className="mt-2.5 text-base text-[#334155] dark:text-[#E2DDD2] leading-relaxed">
                  Siz ilk dəfə qeydiyyatdan keçirsiniz, yoxsa əvvəllər Wolt-da
                  işləmisiniz?
                </p>

                <div className="mt-6 flex flex-col gap-3.5">
                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      setTimeout(onClose, 150);
                    }}
                    className="w-full min-h-[56px] px-6 py-3.5 rounded-xl gold-shimmer-bg text-[#0A1A3A] font-extrabold text-base flex items-center justify-between gap-3 transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2"
                  >
                    <span>İlk dəfə qeydiyyatdan keçirəm</span>
                    <ArrowRight className="w-5 h-5 shrink-0" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setStep('returning')}
                    className="w-full min-h-[56px] px-6 py-3.5 rounded-xl bg-[#EDE7DA] dark:bg-[#0A1A3A] hover:bg-[#E2DAC9] dark:hover:bg-[#0E2B4D] text-[#0A1A3A] dark:text-[#F8F5EE] border border-[#C9A227]/45 font-bold text-base flex items-center justify-between gap-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2"
                  >
                    <span>Əvvəllər işləmişəm</span>
                    <ArrowRight className="w-5 h-5 shrink-0 text-[#9A7818] dark:text-[#D4AF37]" />
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h2
                  id="modal-title"
                  className="text-2xl font-serif font-bold text-[#0A1A3A] dark:text-[#E8C766] tracking-tight"
                >
                  Hesab dəstəyi
                </h2>
                <p className="mt-2.5 text-base text-[#334155] dark:text-[#E2DDD2] leading-relaxed">
                  Siz əvvəllər işləmisinizsə, hesabınızla bağlı sizə kömək edək.
                  Bizimlə əlaqə saxlayın:
                </p>

                <div className="mt-6 flex flex-col gap-3.5">
                  <a
                    href="https://wa.me/994998007565"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[56px] px-5 py-3.5 rounded-xl gold-shimmer-bg text-[#0A1A3A] font-extrabold text-base flex items-center justify-between gap-3 transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                  >
                    <span className="inline-flex items-center gap-3">
                      <MessageCircle className="w-5 h-5 shrink-0" />
                      <span className="tabular-nums">
                        WhatsApp: +994 99 800 75 65
                      </span>
                    </span>
                    <ArrowRight className="w-5 h-5 shrink-0" />
                  </a>

                  <a
                    href="https://wa.me/994604466404"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[56px] px-5 py-3.5 rounded-xl bg-[#0A1A3A] hover:bg-[#112A4E] text-[#E8C766] border border-[#D4AF37]/60 font-bold text-base flex items-center justify-between gap-3 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                  >
                    <span className="inline-flex items-center gap-3">
                      <MessageCircle className="w-5 h-5 shrink-0" />
                      <span className="tabular-nums">
                        WhatsApp: +994 60 446 64 04
                      </span>
                    </span>
                    <ArrowRight className="w-5 h-5 shrink-0" />
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
