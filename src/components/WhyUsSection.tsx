import React from 'react';
import { CalendarCheck2, Headphones, Percent, Zap } from 'lucide-react';

const REASONS = [
  {
    title: 'Sürətli Qeydiyyat',
    desc: 'Sənədlərinizi göndərdikdən sonra müraciətiniz dərhal yoxlanılır və hesabınız qısa müddətdə aktivləşdirilir.',
    icon: Zap,
  },
  {
    title: 'Sərbəst Qrafik',
    desc: 'Sabit iş saatı məcburiyyəti yoxdur — günün istənilən saatında tətbiqi açaraq işə başlaya bilərsiniz.',
    icon: CalendarCheck2,
  },
  {
    title: 'Şəffaf Qazanc',
    desc: '75%-dən 80%-dək kuryer payı ilə nə qədər qazandığınızı əvvəlcədən dəqiq bilirsiniz.',
    icon: Percent,
  },
  {
    title: 'Həmişə Dəstək',
    desc: 'Qeydiyyatdan iş prosesinə qədər bütün suallarınızda Bakı ofisimiz və WhatsApp komandamız yanınızdadır.',
    icon: Headphones,
  },
];

export const WhyUsSection: React.FC = () => {
  return (
    <section
      id="niye-biz"
      className="py-14 md:py-20 bg-[#EDE7DA] dark:bg-[#0B2340] border-t border-[#C9A227]/30 dark:border-[#D4AF37]/25"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm font-semibold text-[#9A7818] dark:text-[#E8C766] tracking-wide mb-2">
            Üstünlüklərimiz
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1A3A] dark:text-white tracking-tight">
            Niyə Bizi Seçməlisən?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="bg-[#FAF7F0] dark:bg-[#0A1A3A] rounded-2xl border border-[#C9A227]/45 dark:border-[#D4AF37]/30 shadow-lg p-6 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#9A7818] dark:text-[#E8C766] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0A1A3A] dark:text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#475569] dark:text-[#CBD5E1] leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
