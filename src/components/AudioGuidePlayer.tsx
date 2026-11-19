import React, { useEffect, useRef, useState } from 'react';
import { Check, Copy, FileCheck2, Pause, Play, Volume2 } from 'lucide-react';

// Qanuni şirkət adı tələb olunduğu kimi "Wolt KURYERİST MMC" olaraq saxlanılır
const DECLARATION_TEXT =
  'Adım Soyadım: ________. Mən //_____ tarixində Wolt KURYERİST MMC şirkətində kuryer qeydiyyatından keçdim. Qeydiyyat zamanı təqdim etdiyim məlumatların düzgün olduğunu təsdiq edirəm. Hesabımda yarana biləcək hər hansı problem, və ya qayda pozuntusuna görə məsuliyyət tam olaraq mənə aiddir.';

const GUIDE_SEGMENTS = [
  {
    start: 0,
    end: 7,
    text: '1. Şəxsiyyət vəsiqənizi əlinizdə tutun və üzünüzün kameraya aydın düşdüyünə əmin olun.',
  },
  {
    start: 7,
    end: 15,
    text: '2. Vəsiqə üzərindəki ad, soyad və məlumatlar oxunaqlı şəkildə görünməlidir.',
  },
  {
    start: 15,
    end: 26,
    text: '3. Yuxarıdakı rəsmi təsdiq mətnini aydın Azərbaycan dilində səsləndirib videonu göndərin.',
  },
];

const AUDIO_DURATION_SEC = 26;

export const AudioGuidePlayer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const timerRef = useRef<number | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(DECLARATION_TEXT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = DECLARATION_TEXT;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const stopPlayback = () => {
    setIsPlaying(false);
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  };

  const playAcousticCue = () => {
    try {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (!AudioContextClass) return;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContextClass();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime);
      osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } catch {
      // Ignore audio context restrictions
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopPlayback();
      return;
    }

    if (elapsed >= AUDIO_DURATION_SEC) {
      setElapsed(0);
    }

    setIsPlaying(true);
    playAcousticCue();

    if ('speechSynthesis' in window) {
      const voices = window.speechSynthesis.getVoices();
      const azVoice = voices.find((v) =>
        v.lang.toLowerCase().startsWith('az')
      );
      if (azVoice) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(
          GUIDE_SEGMENTS.map((s) => s.text).join(' ')
        );
        utterance.voice = azVoice;
        utterance.lang = azVoice.lang;
        utterance.rate = 0.95;
        utterance.onend = () => {
          stopPlayback();
          setElapsed(AUDIO_DURATION_SEC);
        };
        window.speechSynthesis.speak(utterance);
      }
    }

    timerRef.current = window.setInterval(() => {
      setElapsed((prev) => {
        if (prev + 1 >= AUDIO_DURATION_SEC) {
          stopPlayback();
          return AUDIO_DURATION_SEC;
        }
        return prev + 1;
      });
    }, 1000);
  };

  useEffect(() => {
    return () => {
      stopPlayback();
    };
  }, []);

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60)
      .toString()
      .padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const progressPct = Math.min(100, (elapsed / AUDIO_DURATION_SEC) * 100);
  const currentSegment =
    GUIDE_SEGMENTS.find((seg) => elapsed >= seg.start && elapsed < seg.end) ||
    GUIDE_SEGMENTS[0];

  return (
    <section
      id="video-teqdimat"
      className="py-16 md:py-24 bg-[#EDE7DA] dark:bg-[#0B2340]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F0] dark:bg-[#0A1A3A] rounded-2xl border border-[#C9A227]/50 dark:border-[#D4AF37]/35 p-6 sm:p-10 shadow-2xl">
          <div className="flex items-center gap-2.5 text-[#9A7818] dark:text-[#E8C766] text-sm font-semibold mb-2">
            <FileCheck2 className="w-4 h-4" />
            <span>Rəsmi Təsdiq Mərhələsi</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1A3A] dark:text-white tracking-tight">
            VİDEO TƏQDİMAT TƏLƏBİ
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#334155] dark:text-[#E2DDD2]">
            Qeydiyyatdan keçən şəxs qısa təqdimat videosu göndərməlidir.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              'Şəxsiyyət vəsiqəsi əlində olmalıdır',
              'Üzü və vəsiqə üzərindəki məlumatlar aydın görünməlidir',
              'Aşağıdakı mətni səsləndirməlidir:',
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-base text-[#0A1A3A] dark:text-[#F8F5EE] font-medium"
              >
                <span className="mt-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#9A7818] dark:text-[#E8C766] shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-xl bg-[#F5F1E8] dark:bg-[#0B2340] border border-[#C9A227]/45 dark:border-[#D4AF37]/30 p-5 sm:p-6">
            <p className="text-base sm:text-lg font-medium text-[#0A1A3A] dark:text-[#F8F5EE] leading-relaxed">
              &ldquo;{DECLARATION_TEXT}&rdquo;
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#C9A227]/30 dark:border-[#D4AF37]/20">
              <span className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD5E1]">
                Video çəkiliş zamanı bu mətni aydın Azərbaycan dilində oxuyun
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className={`inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl font-bold text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                  copied
                    ? 'bg-[#00C853] text-white'
                    : 'gold-shimmer-bg text-[#0A1A3A]'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Kopyalandı</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Mətni Kopyala</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <p className="mt-5 text-sm sm:text-base font-medium text-[#334155] dark:text-[#E2DDD2]">
            Bu video qeydiyyatın rəsmi təsdiqi hesab olunur və hesabın
            aktivləşdirilməsi üçün tələb edilir.
          </p>

          <div className="mt-7 rounded-xl bg-[#07142C] border border-[#D4AF37]/35 text-white p-5">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={
                  isPlaying ? 'Səsli izahı dayandır' : 'Səsli izahı dinlə'
                }
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl gold-shimmer-bg text-[#0A1A3A] shrink-0 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8C766]"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 fill-[#0A1A3A]" />
                ) : (
                  <Play className="w-5 h-5 fill-[#0A1A3A] ml-0.5" />
                )}
              </button>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-2 font-bold text-sm sm:text-base truncate">
                    <Volume2 className="w-4 h-4 text-[#E8C766] shrink-0" />
                    <span>Səsli İzahı Dinlə</span>
                  </span>
                  <span className="font-mono text-xs text-[#E8C766] tabular-nums shrink-0">
                    {formatTime(elapsed)} / {formatTime(AUDIO_DURATION_SEC)}
                  </span>
                </div>

                <div
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const ratio = Math.max(
                      0,
                      Math.min(1, (e.clientX - rect.left) / rect.width)
                    );
                    setElapsed(Math.round(ratio * AUDIO_DURATION_SEC));
                  }}
                  className="h-2.5 w-full rounded-full bg-white/15 overflow-hidden cursor-pointer"
                  role="slider"
                  aria-label="Səsli izah vaxt xətti"
                  aria-valuemin={0}
                  aria-valuemax={AUDIO_DURATION_SEC}
                  aria-valuenow={elapsed}
                  tabIndex={0}
                >
                  <div
                    className="h-full bg-gradient-to-r from-[#C9A227] to-[#E8C766] rounded-full transition-all duration-300"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3.5 border-t border-[#D4AF37]/20 text-sm text-[#E2DDD2] leading-relaxed">
              {currentSegment.text}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
