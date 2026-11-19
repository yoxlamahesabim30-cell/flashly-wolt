import React, { useState } from 'react';
import { ArrowRight, Calculator } from 'lucide-react';

interface EarningsCalculatorProps {
  onRegister: () => void;
}

export const EarningsCalculator: React.FC<EarningsCalculatorProps> = ({
  onRegister,
}) => {
  const [dailyInput, setDailyInput] = useState<string>('50');
  const [days, setDays] = useState<number>(15);

  const parsedDaily = Math.max(0, Number(dailyInput) || 0);

  const activeCourierRate = days === 15 || parsedDaily > 40 ? 0.8 : 0.75;
  const activeCompanyRate = 1 - activeCourierRate;

  const totalGross = parsedDaily * days;
  const courierEarnings = totalGross * activeCourierRate;
  const companyShare = totalGross * activeCompanyRate;
  const fifteenDayEarnings = parsedDaily * 15 * 0.8;

  const formatAzn = (amount: number) => {
    return amount % 1 === 0 ? amount.toFixed(0) : amount.toFixed(2);
  };

  return (
    <section
      id="hesablayici"
      className="py-16 md:py-24 bg-[#EDE7DA] dark:bg-[#0B2340] border-b border-[#C9A227]/35 dark:border-[#D4AF37]/25"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#9A7818] dark:text-[#E8C766] mb-2">
            <Calculator className="w-4 h-4" />
            <span>Canlı Qazanc Hesablayıcısı</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1A3A] dark:text-white tracking-tight">
            Qazancını Hesabla
          </h2>
          <p className="mt-3 text-base text-[#334155] dark:text-[#E2DDD2]">
            Gündəlik qazancını və işləmək istədiyin gün sayını daxil et, əldə
            edəcəyin təmiz gəliri dərhal gör.
          </p>
        </div>

        <div className="rounded-2xl bg-[#FAF7F0] dark:bg-[#0A1A3A] border border-[#C9A227]/50 dark:border-[#D4AF37]/35 shadow-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div>
              <label
                htmlFor="daily-earnings-input"
                className="block text-sm sm:text-base font-bold text-[#0A1A3A] dark:text-white mb-2.5"
              >
                Gündəlik qazancın neçə AZN-dir?
              </label>
              <div className="relative">
                <input
                  id="daily-earnings-input"
                  type="number"
                  min={0}
                  max={1000}
                  step="1"
                  inputMode="decimal"
                  value={dailyInput}
                  onChange={(e) => setDailyInput(e.target.value)}
                  placeholder="Məsələn: 50"
                  className="w-full min-h-[56px] px-4 pr-16 rounded-xl bg-[#F5F1E8] dark:bg-[#0B2340] border border-[#C9A227]/50 dark:border-[#D4AF37]/40 text-[#0A1A3A] dark:text-white font-mono text-xl font-bold tabular-nums focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-sm font-bold text-[#9A7818] dark:text-[#E8C766]">
                  AZN
                </span>
              </div>
              <p className="mt-2 text-xs font-medium text-[#475569] dark:text-[#CBD5E1]">
                Hazırkı faiz dərəcəsi:{' '}
                <strong className="text-[#9A7818] dark:text-[#E8C766] font-mono tabular-nums">
                  {Math.round(activeCourierRate * 100)}%
                </strong>{' '}
                sənə /{' '}
                <strong className="font-mono tabular-nums">
                  {Math.round(activeCompanyRate * 100)}%
                </strong>{' '}
                şirkətə
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <label
                  htmlFor="work-days-slider"
                  className="text-sm sm:text-base font-bold text-[#0A1A3A] dark:text-white"
                >
                  Neçə gün işləyəcəksən?
                </label>
                <span className="font-mono text-xl font-extrabold text-[#9A7818] dark:text-[#E8C766] tabular-nums">
                  {days} gün
                </span>
              </div>
              <div className="py-3">
                <input
                  id="work-days-slider"
                  type="range"
                  min={1}
                  max={30}
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full h-3 rounded-lg bg-[#DDD5C3] dark:bg-[#0B2340] accent-[#D4AF37] cursor-pointer"
                />
                <div className="flex justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mt-2 tabular-nums">
                  <span>1 gün</span>
                  <span>15 gün</span>
                  <span>30 gün</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[#C9A227]/30 dark:border-[#D4AF37]/25 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-[#EDE7DA] dark:bg-[#0B2340] border border-[#C9A227]/60 dark:border-[#D4AF37]/50 p-6">
              <div className="text-sm font-semibold text-[#5B4B24] dark:text-[#E8C766]">
                Sənin qazancın ({days} gün)
              </div>
              <div className="mt-2 font-mono text-3xl sm:text-4xl font-extrabold text-[#0A1A3A] dark:text-white tabular-nums">
                {formatAzn(courierEarnings)}{' '}
                <span className="text-lg font-bold text-[#9A7818] dark:text-[#D4AF37]">
                  AZN
                </span>
              </div>
              <div className="mt-1 text-xs font-medium text-[#475569] dark:text-[#CBD5E1]">
                {Math.round(activeCourierRate * 100)}% pay ilə hesablandı
              </div>
            </div>

            <div className="rounded-2xl bg-[#F5F1E8] dark:bg-[#091833] border border-[#C9A227]/35 dark:border-[#D4AF37]/25 p-6">
              <div className="text-sm font-semibold text-slate-600 dark:text-[#CBD5E1]">
                Şirkətə ({days} gün)
              </div>
              <div className="mt-2 font-mono text-3xl sm:text-4xl font-extrabold text-[#0A1A3A] dark:text-slate-100 tabular-nums">
                {formatAzn(companyShare)}{' '}
                <span className="text-lg font-bold text-slate-500 dark:text-slate-400">
                  AZN
                </span>
              </div>
              <div className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                {Math.round(activeCompanyRate * 100)}% xidmət payı
              </div>
            </div>

            <div className="rounded-2xl bg-[#EDE7DA] dark:bg-[#0B2340] border border-[#C9A227]/60 dark:border-[#D4AF37]/50 p-6">
              <div className="text-sm font-semibold text-[#5B4B24] dark:text-[#E8C766]">
                15 günlük qazancın
              </div>
              <div className="mt-2 font-mono text-3xl sm:text-4xl font-extrabold text-[#0A1A3A] dark:text-white tabular-nums">
                {formatAzn(fifteenDayEarnings)}{' '}
                <span className="text-lg font-bold text-[#9A7818] dark:text-[#D4AF37]">
                  AZN
                </span>
              </div>
              <div className="mt-1 text-xs font-medium text-[#475569] dark:text-[#CBD5E1]">
                15 günlükdə sabit 80% kuryerə
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={onRegister}
              className="w-full sm:w-auto min-h-[56px] px-8 py-3.5 rounded-xl gold-shimmer-bg text-[#0A1A3A] font-extrabold text-base sm:text-lg inline-flex items-center justify-center gap-2.5 shadow-lg shadow-[#D4AF37]/25 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2"
            >
              <span>Bu Qazancla Qeydiyyatdan Keç</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
