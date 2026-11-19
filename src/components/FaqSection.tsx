import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Wolt-da iş necə olur?',
    answer:
      'Wolt tətbiqi ilə restorandan sifarişi götürüb müştəriyə çatdırırsan, iş saatı sərbəstdir.',
  },
  {
    question: 'Neçə yaşdan işləmək olar?',
    answer:
      '18 yaşdan yuxarı. 16-18 yaş arası valideyn icazə kağızı ilə mümkündür.',
  },
  {
    question: 'Qazanc necə hesablanır?',
    answer:
      'Gündəlik 40 AZN-ə qədər 75% sənin, 25% şirkətin. 40 AZN-dən çox olduqda 80% sənin, 20% şirkətin. 15 günlük qazanc 80% sənin.',
  },
  {
    question: 'Hansı sənədlər lazımdır?',
    answer:
      'Şəxsiyyət vəsiqəsi ön/arxa, selfie, aktiv telefon, aktiv Gmail, M10 nömrəsi, Wolt-da əvvəllər qeydiyyatdan keçməmiş olmaq.',
  },
  {
    question: 'Depozit nədir?',
    answer:
      'Hesab aktiv olduqda -40 AZN depozit yaranır, qazancdan hissə-hissə tutulur. İçində 1 ədəd Wolt termo çantası var. Geyim hazırda verilmir. Çantanı qaytarsan 32 AZN geri alırsan.',
  },
  {
    question: 'Əvvəllər Wolt-da işləmişəm, yenidən qoşula bilərəm?',
    answer: 'Bəli, WhatsApp nömrələrimizə yaz, kömək edək.',
  },
  {
    question: 'Ofis haradadır?',
    answer: 'Məmməd Araz 25A, English Yard.',
  },
  {
    question: 'Nə vaxt başlaya bilərəm?',
    answer:
      'Sənədlərini göndər, qeydiyyatdan keç, hesabın aktivləşən kimi başlaya bilərsən.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="suallar"
      className="py-16 md:py-24 bg-[#F5F1E8] dark:bg-[#0A1A3A] border-t border-[#C9A227]/30 dark:border-[#D4AF37]/25"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-[#9A7818] dark:text-[#E8C766] tracking-wide mb-2">
            Tez-tez Verilən Suallar
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1A3A] dark:text-white tracking-tight">
            Suallar və Cavablar
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.question}
                className="bg-[#FAF7F0] dark:bg-[#0B2340] rounded-2xl border border-[#C9A227]/45 dark:border-[#D4AF37]/30 shadow-md overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full min-h-[60px] px-5 sm:px-6 py-4 flex items-center justify-between gap-4 text-left font-bold text-base sm:text-lg text-[#0A1A3A] dark:text-white hover:bg-[#EDE7DA]/60 dark:hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D4AF37]"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C9A227] dark:text-[#E8C766] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-2.5 text-base text-[#334155] dark:text-[#E2DDD2] border-t border-[#C9A227]/30 dark:border-[#D4AF37]/20 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
