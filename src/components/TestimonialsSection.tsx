import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Elvin Məmmədov',
    role: 'Moto Kuryer · Bakı',
    quote:
      'Universitetdən sonra boş vaxtlarımda iş axtarırdım. FLASHLY ilə bir günə qeydiyyatdan keçdim, indi gündəlik 40 AZN-dən yuxarı işləyib 80% pay alıram.',
    rating: 5,
  },
  {
    name: 'Aysel Həsənova',
    role: 'Piyada Kuryer · Bakı',
    quote:
      'Heç bir nəqliyyatım yox idi, piyada kuryer kimi başladım. Qeydiyyat komandası video təqdimatdan tutmuş M10 nömrəsinə qədər hər addımda kömək etdi.',
    rating: 5,
  },
  {
    name: 'Tural Əliyev',
    role: 'Velosiped Kuryer · Bakı',
    quote:
      'Əvvəllər hesabımla bağlı çətinliyim vardı, WhatsApp-dan yazdım və dərhal həll etdilər. Qrafik tam sərbəstdir, nə vaxt istəsəm çıxıram.',
    rating: 5,
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="reyler"
      className="py-16 md:py-24 bg-[#F5F1E8] dark:bg-[#0A1A3A] border-t border-[#C9A227]/30 dark:border-[#D4AF37]/25"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm font-semibold text-[#9A7818] dark:text-[#E8C766] tracking-wide mb-2">
            Real Təcrübələr
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1A3A] dark:text-white tracking-tight">
            Kuryerlərimiz Nə Deyir?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.name}
              className="bg-[#FAF7F0] dark:bg-[#0B2340] rounded-2xl border border-[#C9A227]/45 dark:border-[#D4AF37]/30 shadow-xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div
                  className="flex items-center gap-1 mb-4"
                  aria-label={`${item.rating} ulduzdan 5-i`}
                >
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]"
                    />
                  ))}
                  <span className="ml-1.5 font-mono text-xs font-bold text-[#9A7818] dark:text-[#E8C766] tabular-nums">
                    5/5
                  </span>
                </div>

                <p className="text-base text-[#334155] dark:text-[#E2DDD2] leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#C9A227]/30 dark:border-[#D4AF37]/20">
                <div className="font-bold text-[#0A1A3A] dark:text-white">
                  {item.name}
                </div>
                <div className="text-xs font-semibold text-[#9A7818] dark:text-[#D4AF37] mt-0.5">
                  {item.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
