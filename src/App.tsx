import React, { useEffect, useState } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  Bike,
  Building2,
  CalendarClock,
  Check,
  CheckCircle2,
  Clock,
  Globe,
  Instagram,
  MessageCircle,
  Moon,
  Navigation,
  Phone,
  Play,
  ShieldCheck,
  Smartphone,
  Sun,
  UserCheck,
  Video,
} from 'lucide-react';
import { Logo } from './components/Logo';
import { LoadingScreen } from './components/LoadingScreen';
import { TransportCarousel } from './components/TransportCarousel';
import { CountdownTimer } from './components/CountdownTimer';
import { RegistrationModal } from './components/RegistrationModal';
import { InstagramPopupModal } from './components/InstagramPopupModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { WhyUsSection } from './components/WhyUsSection';
import { EarningsSection } from './components/EarningsSection';
import { EarningsCalculator } from './components/EarningsCalculator';
import { VideoSection } from './components/VideoSection';
import { AudioGuidePlayer } from './components/AudioGuidePlayer';
import { LocationMapSection } from './components/LocationMapSection';
import { SocialShowcaseSection } from './components/SocialShowcaseSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';

const WHO_CAN_WORK = [
  {
    num: '01',
    title: '18 yaşdan yuxarı şəxslər',
    desc: 'Şəxsiyyət vəsiqəsi ilə birbaşa müstəqil qeydiyyat imkanı.',
    icon: UserCheck,
  },
  {
    num: '02',
    title: '16-18 yaş arası şəxslər (valideyn icazə kağızı ilə)',
    desc: 'Valideynin rəsmi yazılı icazəsi ilə kuryer kimi çalışmaq mümkündür.',
    icon: ShieldCheck,
  },
  {
    num: '03',
    title: 'Şəhəri yaxşı tanıyan və ya xəritə ilə işləməyi bacaranlar',
    desc: 'Bakının küçələrində naviqasiya tətbiqlərindən rahat istifadə edənlər.',
    icon: Navigation,
  },
  {
    num: '04',
    title: 'Məsuliyyətli və aktiv şəxslər',
    desc: 'Sifarişləri vaxtında və səliqəli şəkildə müştərilərə çatdıranlar.',
    icon: CheckCircle2,
  },
  {
    num: '05',
    title: 'Piyada, velosiped, moto və ya avto ilə işləmək istənlər',
    desc: 'Özünüzə uyğun nəqliyyat vasitəsini və ya piyada çatdırılmanı seçin.',
    icon: Bike,
  },
];

const SCHEDULE_CARDS = [
  {
    title: 'Tam sərbəstdir',
    desc: 'Nə zaman işə başlamaq və bitirmək istədiyinizə tamamilə özünüz qərar verirsiniz.',
    icon: CalendarClock,
  },
  {
    title: 'İstədiyiniz saatda işləyə bilərsiniz',
    desc: 'Səhər, günorta və ya axşam saatlarında tətbiqi aktiv edib sifariş qəbul edin.',
    icon: Clock,
  },
  {
    title: 'Əlavə iş kimi də uyğundur',
    desc: 'Təhsiliniz və ya əsas işinizlə paralel olaraq boş vaxtlarınızda əlavə gəlir qazanın.',
    icon: Smartphone,
  },
];

const REQUIREMENTS_LIST = [
  'Şəxsiyyət vəsiqəsinin ön və arxa şəkli',
  'Selfie (öz şəkli)',
  'Aktiv telefon nömrəsi',
  'Aktiv Gmail hesabı',
  'Wolt-da əvvəllər qeydiyyatdan keçməmiş olmalıdır',
  'Maaş üçün M10 nömrəsi (aktiv olmalıdır)',
];

const LaurelShieldPattern: React.FC = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 800 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-[0.06] dark:opacity-[0.07]"
  >
    <circle
      cx="400"
      cy="300"
      r="250"
      stroke="#D4AF37"
      strokeWidth="1.5"
      strokeDasharray="6 6"
    />
    <circle cx="400" cy="300" r="215" stroke="#D4AF37" strokeWidth="1" />
    <path
      d="M400 95 L535 155 V295 C535 395 475 465 400 505 C325 465 265 395 265 295 V155 L400 95 Z"
      stroke="#D4AF37"
      strokeWidth="1.5"
    />
    <path
      d="M195 360 C160 280 175 190 230 140 M205 385 C155 315 155 215 210 155 M605 360 C640 280 625 190 570 140 M595 385 C645 315 645 215 590 155"
      stroke="#D4AF37"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bagImgFailed, setBagImgFailed] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark')
        ? 'dark'
        : 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('flashly-theme', theme);
    } catch {
      // Ignore storage restrictions
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openRegistration = () => setIsModalOpen(true);

  const scrollToVideo = () => {
    const el = document.getElementById('video-izah');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F1E8] dark:bg-[#0A1A3A] text-[#0A1A3A] dark:text-[#F8F5EE] pb-16 md:pb-0 transition-colors duration-200">
      <LoadingScreen />

      {/* Top Announcement Bar */}
      <div className="bg-[#07142C] text-[#E8C766] px-4 py-2.5 text-center text-xs sm:text-sm font-semibold tracking-tight border-b border-[#D4AF37]/30">
        <span>
          Qeydiyyat 30 NOYABR-dək ÖDƏNİŞSİZDİR — Kampanyadan yararlanın!
        </span>
      </div>

      {/* 3-Zone Header */}
      <header className="relative md:sticky md:top-0 z-30 bg-[#FAF7F0]/95 dark:bg-[#0A1A3A]/92 backdrop-blur-md border-b border-[#C9A227]/40 dark:border-[#D4AF37]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 sm:gap-8">
          {/* Zone 1: Clickable Official Logo to top */}
          <a
            href="#"
            onClick={scrollToTop}
            aria-label="FLASHLY yuxarı qayıt"
            className="whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-lg"
          >
            <Logo size="sm" />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav
            aria-label="Əsas menyu"
            className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#334155] dark:text-[#E2DDD2]"
          >
            <a
              href="#is-haqqinda"
              className="hover:text-[#9A7818] dark:hover:text-[#E8C766] transition-colors whitespace-nowrap shrink-0"
            >
              İş haqqında
            </a>
            <a
              href="#qazanc"
              className="hover:text-[#9A7818] dark:hover:text-[#E8C766] transition-colors whitespace-nowrap shrink-0"
            >
              Qazanc
            </a>
            <a
              href="#hesablayici"
              className="hover:text-[#9A7818] dark:hover:text-[#E8C766] transition-colors whitespace-nowrap shrink-0"
            >
              Hesablayıcı
            </a>
            <a
              href="#elaqe"
              className="hover:text-[#9A7818] dark:hover:text-[#E8C766] transition-colors whitespace-nowrap shrink-0"
            >
              Ünvan
            </a>
          </nav>

          {/* Zone 3: Theme Switcher + Gold Primary Action */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                theme === 'dark' ? 'Açıq rejimə keç' : 'Tünd rejimə keç'
              }
              title={
                theme === 'dark' ? 'Açıq rejimə keç' : 'Tünd rejimə keç'
              }
              className="w-10 h-10 rounded-xl bg-[#EDE7DA] dark:bg-[#0B2340] hover:bg-[#E2DAC9] dark:hover:bg-[#112F54] border border-[#C9A227]/45 dark:border-[#D4AF37]/40 text-[#0A1A3A] dark:text-[#E8C766] flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            <button
              type="button"
              onClick={openRegistration}
              className="min-h-[40px] px-4 sm:px-5 py-2 rounded-xl gold-shimmer-bg text-[#0A1A3A] text-sm font-extrabold whitespace-nowrap shrink-0 transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2"
            >
              Qeydiyyatdan Keç
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* HERO SECTION WITH OFFICIAL EMBLEM + TRANSPORT CAROUSEL */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#EDE7DA] via-[#F5F1E8] to-[#F5F1E8] dark:from-[#07142C] dark:via-[#0A1A3A] dark:to-[#0B2340] border-b border-[#C9A227]/40 dark:border-[#D4AF37]/30">
          <LaurelShieldPattern />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 md:pt-14 md:pb-20">
            <div className="text-center max-w-3xl mx-auto">
              {/* Large Official Logo Emblem with Glowing Gold Ring */}
              <div className="mb-6 flex justify-center">
                <Logo size="hero" />
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-serif font-bold tracking-tight leading-[1.15] text-[#8E6C13] dark:text-[#E8C766]">
                FLASHLY - Wolt Qeydiyyatı | Bakı
              </h1>

              <p className="mt-4 text-lg sm:text-xl font-bold text-[#0A1A3A] dark:text-white tracking-tight">
                Rəsmi Qeydiyyat · Sürətli Başlanğıc · Sərbəst Qrafik
              </p>

              <p className="mt-3 text-base sm:text-lg text-[#475569] dark:text-[#E2DDD2] leading-relaxed max-w-2xl mx-auto">
                Wolt tətbiqi ilə restorandan sifarişi götürüb müştəriyə
                çatdırırsan. İş saatı tam sərbəstdir, istədiyin vaxt işləyə
                bilərsən.
              </p>

              {/* Hero CTAs right below subheadline */}
              <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <button
                  type="button"
                  onClick={openRegistration}
                  className="w-full sm:w-auto min-h-[56px] px-8 py-3.5 rounded-xl gold-shimmer-bg text-[#0A1A3A] font-extrabold text-base sm:text-lg inline-flex items-center justify-center gap-2.5 shadow-xl shadow-[#D4AF37]/25 transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2"
                >
                  <span>Qeydiyyatdan Keç</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={scrollToVideo}
                  className="w-full sm:w-auto min-h-[56px] px-8 py-3.5 rounded-xl bg-[#0A1A3A] hover:bg-[#112A4E] text-[#E8C766] border border-[#D4AF37]/65 font-bold text-base sm:text-lg inline-flex items-center justify-center gap-2.5 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2"
                >
                  <Play className="w-5 h-5 text-[#E8C766] fill-[#E8C766]" />
                  <span>Video İzahı İzlə</span>
                </button>
              </div>

              {/* Trust Metadata */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-sm font-semibold text-[#475569] dark:text-[#CBD5E1]">
                <span>30 Noyabr-dək Ödənişsiz Qeydiyyat</span>
                <span aria-hidden="true" className="text-[#D4AF37]">
                  ·
                </span>
                <span>Rəsmi Qeydiyyat</span>
                <span aria-hidden="true" className="text-[#D4AF37]">
                  ·
                </span>
                <span>Gündəlik Qazanc</span>
              </div>

              {/* Countdown Timer to Nov 30 */}
              <div className="flex justify-center">
                <CountdownTimer />
              </div>
            </div>

            {/* Automatic Transport Types Carousel */}
            <div className="mt-10">
              <TransportCarousel />
            </div>
          </div>
        </section>

        {/* WHY US SECTION */}
        <WhyUsSection />

        {/* İŞ HAQQINDA */}
        <section
          id="is-haqqinda"
          className="py-14 md:py-20 bg-[#F5F1E8] dark:bg-[#0A1A3A]"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#FAF7F0] dark:bg-[#0B2340] rounded-2xl border border-[#C9A227]/45 dark:border-[#D4AF37]/30 shadow-xl p-7 sm:p-10 md:p-12">
              <p className="text-sm font-semibold text-[#9A7818] dark:text-[#E8C766] tracking-wide mb-2">
                İş Haqqında
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1A3A] dark:text-white tracking-tight">
                Wolt Kuryer İşi Necə İşləyir?
              </h2>
              <p className="mt-4 text-lg sm:text-xl text-[#334155] dark:text-[#E2DDD2] leading-relaxed max-w-3xl">
                Wolt tətbiqi ilə restorandan sifarişi götürüb müştəriyə
                çatdırırsınız. İş saatı sərbəstdir, istədiyiniz vaxt işləyə
                bilərsiniz.
              </p>
            </div>
          </div>
        </section>

        {/* KİMLƏR İŞLƏYƏ BİLƏR? */}
        <section
          id="kimler"
          className="py-14 md:py-20 bg-[#EDE7DA] dark:bg-[#0B2340] border-y border-[#C9A227]/35 dark:border-[#D4AF37]/25"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <p className="text-sm font-semibold text-[#9A7818] dark:text-[#E8C766] tracking-wide mb-2">
                Namizədlərə Tələblər
              </p>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1A3A] dark:text-white tracking-tight">
                Kimlər İşləyə Bilər?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
              {WHO_CAN_WORK.map((item, idx) => {
                const Icon = item.icon;
                const colSpan = idx < 2 ? 'lg:col-span-3' : 'lg:col-span-2';
                return (
                  <div
                    key={item.num}
                    className={`${colSpan} bg-[#FAF7F0] dark:bg-[#0A1A3A] rounded-2xl border border-[#C9A227]/45 dark:border-[#D4AF37]/30 shadow-lg p-6 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span className="font-mono text-sm font-bold text-[#9A7818] dark:text-[#E8C766] tabular-nums">
                          {item.num}
                        </span>
                        <Icon className="w-5 h-5 text-[#9A7818] dark:text-[#D4AF37]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#0A1A3A] dark:text-white leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-[#475569] dark:text-[#CBD5E1] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* İŞ QRAFİKİ */}
        <section
          id="qrafik"
          className="py-14 md:py-20 bg-[#F5F1E8] dark:bg-[#0A1A3A]"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <p className="text-sm font-semibold text-[#9A7818] dark:text-[#E8C766] tracking-wide mb-2">
                Vaxt Azadlığı
              </p>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1A3A] dark:text-white tracking-tight">
                İş Qrafiki
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {SCHEDULE_CARDS.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="bg-[#FAF7F0] dark:bg-[#0B2340] rounded-2xl border border-[#C9A227]/45 dark:border-[#D4AF37]/30 shadow-lg p-6 sm:p-7"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#9A7818] dark:text-[#E8C766] flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0A1A3A] dark:text-white">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 text-base text-[#475569] dark:text-[#CBD5E1] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* QAZANC SİSTEMİ */}
        <EarningsSection />

        {/* LIVE EARNINGS CALCULATOR */}
        <EarningsCalculator onRegister={openRegistration} />

        {/* QEYDİYYAT ÜÇÜN TƏLƏB OLUNANLAR */}
        <section
          id="telebler"
          className="py-16 md:py-24 bg-[#F5F1E8] dark:bg-[#0A1A3A] border-b border-[#C9A227]/35 dark:border-[#D4AF37]/25"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5">
                <p className="text-sm font-semibold text-[#9A7818] dark:text-[#E8C766] tracking-wide mb-2">
                  Sənədlər Siyahısı
                </p>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1A3A] dark:text-white tracking-tight">
                  Qeydiyyat Üçün Tələb Olunanlar
                </h2>
                <p className="mt-4 text-base text-[#334155] dark:text-[#E2DDD2] leading-relaxed">
                  Müraciət zamanı prosesin sürətli tamamlanması üçün aşağıdakı
                  bütün məlumat və sənədlərin hazır olduğundan əmin olun.
                </p>
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={openRegistration}
                    className="min-h-[52px] px-6 py-3 rounded-xl gold-shimmer-bg text-[#0A1A3A] font-extrabold text-base inline-flex items-center gap-2 shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2"
                  >
                    <span>Qeydiyyatdan Keç</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7">
                <ul className="bg-[#FAF7F0] dark:bg-[#0B2340] rounded-2xl border border-[#C9A227]/50 dark:border-[#D4AF37]/35 shadow-xl divide-y divide-[#C9A227]/25 dark:divide-[#D4AF37]/20">
                  {REQUIREMENTS_LIST.map((req) => (
                    <li
                      key={req}
                      className="p-4 sm:p-5 flex items-center gap-4 text-base sm:text-lg font-semibold text-[#0A1A3A] dark:text-[#F8F5EE]"
                    >
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/45 text-[#9A7818] dark:text-[#E8C766] shrink-0">
                        <Check className="w-5 h-5" />
                      </span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* DEPOZİT HAQQINDA */}
        <section
          id="depozit"
          className="py-14 md:py-20 bg-[#EDE7DA] dark:bg-[#0B2340] border-b border-[#C9A227]/35 dark:border-[#D4AF37]/25"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-7 rounded-2xl bg-[#FAF7F0] dark:bg-[#0A1A3A] border border-[#C9A227]/55 dark:border-[#D4AF37]/40 shadow-xl p-6 sm:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2.5 text-[#9A7818] dark:text-[#E8C766] font-bold text-sm mb-3">
                  <AlertTriangle className="w-5 h-5 shrink-0" />
                  <span>Vacib Şərtlər</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1A3A] dark:text-white tracking-tight">
                  Depozit Haqqında
                </h2>

                <ul className="mt-6 space-y-3.5 text-base sm:text-lg text-[#334155] dark:text-[#E2DDD2]">
                  <li className="flex items-start gap-3">
                    <span className="font-mono font-bold text-[#C9A227] dark:text-[#E8C766] mt-0.5">
                      •
                    </span>
                    <span>
                      Hesab aktiv olduqda balansda{' '}
                      <strong className="font-mono tabular-nums text-[#0A1A3A] dark:text-[#E8C766]">
                        -40 AZN
                      </strong>{' '}
                      mənfi depozit yaranır.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono font-bold text-[#C9A227] dark:text-[#E8C766] mt-0.5">
                      •
                    </span>
                    <span>
                      Bu məbləğ işlədikcə qazancdan hissə-hissə tutulur.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono font-bold text-[#C9A227] dark:text-[#E8C766] mt-0.5">
                      •
                    </span>
                    <span>
                      Hazırda depozitə daxildir:{' '}
                      <strong className="text-[#0A1A3A] dark:text-white">
                        1 ədəd Wolt termo çantası
                      </strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono font-bold text-[#C9A227] dark:text-[#E8C766] mt-0.5">
                      •
                    </span>
                    <span>
                      Hazırda geyimlər (kurtka, yağmurluq, şalvar və köynək)
                      təqdim edilmir. Geyim təminatı başladıqda əlavə məlumat
                      veriləcək.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono font-bold text-[#C9A227] dark:text-[#E8C766] mt-0.5">
                      •
                    </span>
                    <span>
                      Çanta geri qaytarıldıqda depozitin{' '}
                      <strong className="font-mono tabular-nums text-[#0A1A3A] dark:text-[#E8C766]">
                        80%-i (32 AZN)
                      </strong>{' '}
                      hesabınıza qaytarılır. Qalan{' '}
                      <strong className="font-mono tabular-nums">20%</strong>{' '}
                      isə çantanın istifadəsi və amortizasiyası üçün saxlanılır.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-5">
                <div className="w-full h-full min-h-[260px] rounded-2xl overflow-hidden border border-[#C9A227]/50 dark:border-[#D4AF37]/35 shadow-xl bg-[#0A1A3A]">
                  {!bagImgFailed ? (
                    <img
                      src="/src/assets/images/courier_thermal_bag_1795062336687.jpg"
                      alt="Wolt kuryer termo çantası"
                      referrerPolicy="no-referrer"
                      onError={() => setBagImgFailed(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center text-white">
                      <ShieldCheck className="w-12 h-12 text-[#D4AF37] mb-3" />
                      <p className="font-bold">1 ədəd Wolt termo çantası</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VİDEO İZAH */}
        <VideoSection />

        {/* SƏSLİ İZAH / VİDEO TƏQDİMAT TƏLƏBİ */}
        <AudioGuidePlayer />

        {/* QEYDİYYAT ÜSULLARI */}
        <section
          id="qeydiyyat-usullari"
          className="py-16 md:py-24 bg-[#F5F1E8] dark:bg-[#0A1A3A] border-y border-[#C9A227]/35 dark:border-[#D4AF37]/25"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="text-sm font-semibold text-[#9A7818] dark:text-[#E8C766] tracking-wide mb-2">
                Müraciət Seçimləri
              </p>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1A3A] dark:text-white tracking-tight">
                Qeydiyyat Üsulları
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-[#FAF7F0] dark:bg-[#0B2340] border border-[#C9A227]/50 dark:border-[#D4AF37]/35 shadow-xl p-7 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#9A7818] dark:text-[#E8C766] flex items-center justify-center mb-5">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1A3A] dark:text-white">
                    Ofisdə Qeydiyyat
                  </h3>
                  <p className="mt-2.5 text-base text-[#475569] dark:text-[#E2DDD2] leading-relaxed">
                    Ofisə yaxınlaşıb qeydiyyatdan keçə bilərsiniz. Sənədləriniz
                    yerində yoxlanılır və müraciətiniz dərhal sistemə daxil
                    edilir.
                  </p>
                </div>
                <div className="mt-6 pt-5 border-t border-[#C9A227]/30 dark:border-[#D4AF37]/20">
                  <a
                    href="#elaqe"
                    className="inline-flex items-center gap-2 font-bold text-[#9A7818] dark:text-[#E8C766] hover:opacity-80 transition-opacity"
                  >
                    <span>Ofis ünvanına bax</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="rounded-2xl bg-[#07142C] text-white border border-[#D4AF37]/50 shadow-2xl p-7 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#E8C766] flex items-center justify-center mb-5">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Onlayn Qeydiyyat
                  </h3>
                  <p className="mt-2.5 text-base text-[#E2DDD2] leading-relaxed">
                    Onlayn qeydiyyat da mümkündür. Evdən çıxmadan bir neçə
                    dəqiqə ərzində müraciətinizi göndərə bilərsiniz.
                  </p>
                </div>
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={openRegistration}
                    className="w-full min-h-[54px] px-6 py-3.5 rounded-xl gold-shimmer-bg text-[#0A1A3A] font-extrabold text-base inline-flex items-center justify-center gap-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                  >
                    <span>Onlayn Qeydiyyatdan Keç</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BİZİ HARADA TAPARSAN? (FIXED MAP + ADDRESS + PHONES) */}
        <LocationMapSection />

        {/* TESTIMONIALS ("Kuryerlərimiz Nə Deyir?") */}
        <TestimonialsSection />

        {/* INSTAGRAM & TIKTOK SHOWCASE */}
        <SocialShowcaseSection />

        {/* DETAILED FAQ (Accordion) */}
        <FaqSection />

        {/* QUICK SOCIAL CONTACT CARDS */}
        <section
          id="sosial"
          className="py-14 md:py-20 bg-[#EDE7DA] dark:bg-[#0B2340] border-t border-[#C9A227]/35 dark:border-[#D4AF37]/25"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="text-sm font-semibold text-[#9A7818] dark:text-[#E8C766] tracking-wide mb-2">
                Sürətli Əlaqə
              </p>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1A3A] dark:text-white tracking-tight">
                Sosial Şəbəkələr və Dəstək
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a
                href="https://www.instagram.com/woltqeydiyyati"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[84px] p-5 rounded-2xl bg-[#FAF7F0] dark:bg-[#0A1A3A] hover:bg-[#F1EAD9] dark:hover:bg-[#10284E] border border-[#C9A227]/45 dark:border-[#D4AF37]/30 shadow-lg flex items-center gap-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <span className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/45 text-[#9A7818] dark:text-[#E8C766] flex items-center justify-center shrink-0">
                  <Instagram className="w-6 h-6" />
                </span>
                <div className="min-w-0">
                  <div className="font-bold text-[#0A1A3A] dark:text-white">
                    Instagram
                  </div>
                  <div className="text-sm text-[#475569] dark:text-[#CBD5E1] truncate">
                    @woltqeydiyyati
                  </div>
                </div>
              </a>

              <a
                href="https://www.tiktok.com/@kuryer_qeydiyyati"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[84px] p-5 rounded-2xl bg-[#FAF7F0] dark:bg-[#0A1A3A] hover:bg-[#F1EAD9] dark:hover:bg-[#10284E] border border-[#C9A227]/45 dark:border-[#D4AF37]/30 shadow-lg flex items-center gap-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <span className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/45 text-[#9A7818] dark:text-[#E8C766] flex items-center justify-center shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                    aria-hidden="true"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </span>
                <div className="min-w-0">
                  <div className="font-bold text-[#0A1A3A] dark:text-white">
                    TikTok
                  </div>
                  <div className="text-sm text-[#475569] dark:text-[#CBD5E1] truncate">
                    @kuryer_qeydiyyati
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/994998007565"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[84px] p-5 rounded-2xl bg-[#FAF7F0] dark:bg-[#0A1A3A] hover:bg-[#F1EAD9] dark:hover:bg-[#10284E] border border-[#C9A227]/45 dark:border-[#D4AF37]/30 shadow-lg flex items-center gap-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <span className="w-12 h-12 rounded-xl bg-[#25D366]/15 border border-[#25D366]/45 text-[#179B48] dark:text-[#25D366] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </span>
                <div className="min-w-0">
                  <div className="font-bold text-[#0A1A3A] dark:text-white">
                    WhatsApp
                  </div>
                  <div className="text-sm text-[#475569] dark:text-[#CBD5E1] tabular-nums truncate">
                    +994 99 800 75 65
                  </div>
                </div>
              </a>

              <a
                href="tel:+994604466404"
                className="min-h-[84px] p-5 rounded-2xl bg-[#FAF7F0] dark:bg-[#0A1A3A] hover:bg-[#F1EAD9] dark:hover:bg-[#10284E] border border-[#C9A227]/45 dark:border-[#D4AF37]/30 shadow-lg flex items-center gap-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <span className="w-12 h-12 rounded-xl gold-shimmer-bg text-[#0A1A3A] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </span>
                <div className="min-w-0">
                  <div className="font-bold text-[#0A1A3A] dark:text-white">
                    Telefon
                  </div>
                  <div className="text-sm text-[#475569] dark:text-[#CBD5E1] tabular-nums truncate">
                    +994 60 446 64 04
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER WITH SUBTLE SHIELD/LAUREL PATTERN */}
      <footer className="relative overflow-hidden bg-[#061024] text-white py-12 border-t border-[#D4AF37]/35">
        <LaurelShieldPattern />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="dark">
            <Logo showSubtitle size="lg" />
          </div>
          <p className="text-sm text-[#E2DDD2]">
            © 2026 FLASHLY - Wolt Qeydiyyatı | Bakı. Bütün hüquqlar qorunur.
          </p>
        </div>
      </footer>

      {/* STICKY BOTTOM BAR ON MOBILE */}
      <div
        className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FAF7F0]/95 dark:bg-[#07142C]/95 backdrop-blur-md border-t border-[#C9A227]/50 dark:border-[#D4AF37]/40 shadow-[0_-4px_20px_rgba(0,0,0,0.35)] px-3 py-2"
        role="navigation"
        aria-label="Mobil sürətli menyu"
      >
        <div className="grid grid-cols-3 gap-2">
          <button
            type="button"
            onClick={openRegistration}
            className="min-h-[44px] px-2 py-2 rounded-xl gold-shimmer-bg text-[#0A1A3A] font-extrabold text-sm inline-flex items-center justify-center gap-1.5 whitespace-nowrap transition-all"
          >
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Qeydiyyat</span>
          </button>

          <button
            type="button"
            onClick={scrollToVideo}
            className="min-h-[44px] px-2 py-2 rounded-xl bg-[#EDE7DA] dark:bg-[#0B2340] text-[#0A1A3A] dark:text-[#E8C766] border border-[#C9A227]/45 dark:border-[#D4AF37]/40 font-bold text-sm inline-flex items-center justify-center gap-1.5 whitespace-nowrap transition-colors"
          >
            <Video className="w-4 h-4 shrink-0" />
            <span>Video</span>
          </button>

          <a
            href="tel:+994998007565"
            className="min-h-[44px] px-2 py-2 rounded-xl bg-[#0A1A3A] dark:bg-[#122D54] text-[#E8C766] border border-[#D4AF37]/50 font-bold text-sm inline-flex items-center justify-center gap-1.5 whitespace-nowrap transition-colors"
          >
            <Phone className="w-4 h-4 shrink-0" />
            <span>Zəng Et</span>
          </a>
        </div>
      </div>

      {/* FLOATING WHATSAPP BUTTON */}
      <FloatingWhatsApp />

      {/* REGISTRATION POPUP MODAL */}
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* INSTAGRAM POPUP AFTER 4 SECONDS */}
      <InstagramPopupModal />
    </div>
  );
}
