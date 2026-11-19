import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const getTargetTimestamp = (): number => {
  const now = new Date();
  let year = now.getFullYear();
  let target = new Date(`${year}-11-30T23:59:59+04:00`).getTime();
  if (now.getTime() > target) {
    year += 1;
    target = new Date(`${year}-11-30T23:59:59+04:00`).getTime();
  }
  return target;
};

const computeTimeLeft = (targetTs: number): TimeLeft => {
  const diff = Math.max(0, targetTs - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
};

export const CountdownTimer: React.FC = () => {
  const [targetTs] = useState<number>(() => getTargetTimestamp());
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    computeTimeLeft(targetTs)
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeLeft(computeTimeLeft(targetTs));
    }, 1000);
    return () => window.clearInterval(interval);
  }, [targetTs]);

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="mt-6 inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-5 px-5 py-3.5 rounded-2xl bg-[#FAF7F0]/90 dark:bg-[#0B2340]/90 backdrop-blur-md border border-[#C9A227]/50 dark:border-[#D4AF37]/40 shadow-lg">
      <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#8E6C13] dark:text-[#E8C766]">
        <Clock className="w-4 h-4 shrink-0 text-[#C9A227] dark:text-[#D4AF37]" />
        <span>30 NOYABR-dək ÖDƏNİŞSİZ Qeydiyyat bitir:</span>
      </div>

      <div className="flex items-center gap-2 font-mono tabular-nums">
        {[
          { val: pad(timeLeft.days), label: 'Gün' },
          { val: pad(timeLeft.hours), label: 'Saat' },
          { val: pad(timeLeft.minutes), label: 'Dəq' },
          { val: pad(timeLeft.seconds), label: 'San' },
        ].map((unit, idx) => (
          <React.Fragment key={unit.label}>
            <div className="flex flex-col items-center min-w-[44px] px-2 py-1 rounded-lg bg-[#EDE7DA] dark:bg-[#0A1A3A] border border-[#C9A227]/40 dark:border-[#D4AF37]/30">
              <span className="text-base sm:text-lg font-extrabold text-[#0A1A3A] dark:text-[#E8C766] leading-none">
                {unit.val}
              </span>
              <span className="mt-0.5 text-[10px] font-sans font-semibold text-[#5B4B24] dark:text-[#D4AF37]/80 leading-none">
                {unit.label}
              </span>
            </div>
            {idx < 3 && (
              <span className="text-[#C9A227] dark:text-[#D4AF37] font-bold">
                :
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
