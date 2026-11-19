import React from 'react';
import { motion } from 'motion/react';

interface TierRow {
  id: string;
  period: string;
  condition: string;
  courierPct: number;
  companyPct: number;
}

const EARNING_TIERS: TierRow[] = [
  {
    id: 'tier-1',
    period: 'Gündəlik qazanc',
    condition: '40 AZN-ə qədər olduqda',
    courierPct: 75,
    companyPct: 25,
  },
  {
    id: 'tier-2',
    period: 'Gündəlik qazanc',
    condition: '40 AZN-dən çox olduqda',
    courierPct: 80,
    companyPct: 20,
  },
  {
    id: 'tier-3',
    period: '15 günlük qazanc',
    condition: 'Ümumi 15 günlük dövr üzrə',
    courierPct: 80,
    companyPct: 20,
  },
];

export const EarningsSection: React.FC = () => {
  return (
    <section
      id="qazanc"
      className="py-16 md:py-24 bg-[#07142C] text-white border-y border-[#D4AF37]/30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-12">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold text-[#D4AF37] tracking-wide mb-2">
              Şəffaf Gəlir Modeli
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Qazanc Sistemi
            </h2>
            <p className="mt-4 text-[#E2DDD2] text-base sm:text-lg max-w-2xl leading-relaxed">
              Nə qədər çox çatdırılma etsəniz, payınız bir o qədər yüksək olur.
              Gündəlik 40 AZN həddini keçdikdə və ya 15 günlük hesablaşmada
              qazancın 80%-i birbaşa sizə qalır.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#0B2340] border border-[#D4AF37]/30 p-5 shadow-lg">
              <div className="text-xs font-medium text-[#E2DDD2]">
                40 AZN-dək gündəlik
              </div>
              <div className="mt-2 font-mono text-4xl sm:text-5xl font-bold tabular-nums text-[#E8C766]">
                75%
              </div>
              <div className="mt-1 text-sm text-[#E2DDD2]">Kuryer payı</div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-[#0B2340] to-[#132F54] border border-[#D4AF37]/60 p-5 shadow-lg">
              <div className="text-xs font-medium text-[#E8C766]">
                40+ AZN və 15 günlük
              </div>
              <div className="mt-2 font-mono text-4xl sm:text-5xl font-bold tabular-nums text-[#D4AF37]">
                80%
              </div>
              <div className="mt-1 text-sm text-white">Kuryer payı</div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-[#FAF7F0] dark:bg-[#0B2340] text-[#0A1A3A] dark:text-white border border-[#C9A227]/50 dark:border-[#D4AF37]/35 overflow-hidden shadow-2xl">
          <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-4 bg-[#EDE7DA] dark:bg-[#0A1A3A] border-b border-[#C9A227]/35 dark:border-[#D4AF37]/25 text-xs font-bold text-[#5B4B24] dark:text-[#E8C766] tracking-wide">
            <div className="col-span-4">Qazanc növü və şərti</div>
            <div className="col-span-2 text-right">Kuryerə</div>
            <div className="col-span-2 text-right">Şirkətə</div>
            <div className="col-span-4">Bölgü göstəricisi</div>
          </div>

          <div className="divide-y divide-[#C9A227]/25 dark:divide-[#D4AF37]/20">
            {EARNING_TIERS.map((tier, index) => (
              <div
                key={tier.id}
                className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 md:items-center"
              >
                <div className="md:col-span-4">
                  <div className="text-base sm:text-lg font-bold text-[#0A1A3A] dark:text-white">
                    {tier.period}
                  </div>
                  <div className="mt-0.5 text-sm text-slate-600 dark:text-[#CBD5E1]">
                    {tier.condition}
                  </div>
                </div>

                <div className="md:col-span-2 flex items-center justify-between md:justify-end gap-2">
                  <span className="md:hidden text-sm font-medium text-slate-600 dark:text-[#CBD5E1]">
                    Kuryerə:
                  </span>
                  <span className="font-mono text-2xl font-extrabold tabular-nums text-[#9A7818] dark:text-[#E8C766]">
                    {tier.courierPct}%
                  </span>
                </div>

                <div className="md:col-span-2 flex items-center justify-between md:justify-end gap-2">
                  <span className="md:hidden text-sm font-medium text-slate-600 dark:text-[#CBD5E1]">
                    Şirkətə:
                  </span>
                  <span className="font-mono text-xl font-bold tabular-nums text-slate-500 dark:text-slate-400">
                    {tier.companyPct}%
                  </span>
                </div>

                <div className="md:col-span-4">
                  <div className="flex items-center justify-between text-xs font-semibold mb-1.5 tabular-nums">
                    <span className="text-[#0A1A3A] dark:text-[#E8C766]">
                      Kuryer {tier.courierPct}%
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">
                      Şirkət {tier.companyPct}%
                    </span>
                  </div>
                  <div
                    className="h-3.5 w-full rounded-full bg-[#DDD5C3] dark:bg-[#0A1A3A] overflow-hidden flex border border-[#C9A227]/30"
                    role="progressbar"
                    aria-valuenow={tier.courierPct}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${tier.period} ${tier.condition}: ${tier.courierPct}% kuryerə, ${tier.companyPct}% şirkətə`}
                  >
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      style={{
                        width: `${tier.courierPct}%`,
                        transformOrigin: 'left',
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-[#C9A227] via-[#D4AF37] to-[#E8C766]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
