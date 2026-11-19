import React from 'react';
import { ExternalLink, Instagram } from 'lucide-react';
import { OFFICIAL_LOGO_URL } from './Logo';

const INSTAGRAM_URL = 'https://www.instagram.com/woltqeydiyyati';
const TIKTOK_URL = 'https://www.tiktok.com/@kuryer_qeydiyyati';

const INSTAGRAM_POSTS = [
  {
    id: 'post-1',
    img: '/src/assets/images/transport_piyada_baku_1795063395457.jpg',
    caption: 'Piyada kuryer kimi bu gün başla',
  },
  {
    id: 'post-2',
    img: '/src/assets/images/transport_velosiped_baku_1795063394711.jpg',
    caption: 'Velosipedlə Bakıda sərbəst qrafik',
  },
  {
    id: 'post-3',
    img: '/src/assets/images/transport_moto_baku_1795063394664.jpg',
    caption: 'Moto kuryerlərə 80%-dək qazanc',
  },
  {
    id: 'post-4',
    img: '/src/assets/images/transport_avto_baku_1795063395394.jpg',
    caption: 'Avto ilə böyük sifarişlər',
  },
  {
    id: 'post-5',
    img: '/src/assets/images/courier_thermal_bag_1795062336687.jpg',
    caption: 'Rəsmi termal çanta təminatı',
  },
  {
    id: 'post-6',
    img: '/src/assets/images/hero_baku_courier_1795062335677.jpg',
    caption: '30 Noyabradək qeydiyyat ödənişsizdir',
  },
];

export const SocialShowcaseSection: React.FC = () => {
  return (
    <section
      id="sosial-showcase"
      className="py-16 md:py-24 bg-[#EDE7DA] dark:bg-[#0B2340] border-t border-[#C9A227]/30 dark:border-[#D4AF37]/25"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* INSTAGRAM SECTION */}
        <div className="rounded-2xl bg-[#FAF7F0] dark:bg-[#0A1A3A] border border-[#C9A227]/50 dark:border-[#D4AF37]/35 shadow-2xl p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#C9A227]/30 dark:border-[#D4AF37]/25">
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-lg bg-[#0A1A3A] shrink-0">
                <img
                  src={OFFICIAL_LOGO_URL}
                  alt="FLASHLY @woltqeydiyyati profil şəkli"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover scale-[1.06]"
                />
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#0A1A3A] dark:text-white tracking-tight">
                  Instagram Səhifəmiz
                </h2>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                  <span className="font-bold text-[#9A7818] dark:text-[#E8C766]">
                    @woltqeydiyyati
                  </span>
                  <span aria-hidden="true" className="text-[#C9A227]">
                    ·
                  </span>
                  <span className="font-semibold text-[#475569] dark:text-[#CBD5E1] tabular-nums">
                    4 850 izləyici
                  </span>
                </div>
                <p className="mt-1 text-sm text-[#475569] dark:text-[#94A3B8]">
                  Wolt Kuryer Məlumatı | Bakı
                </p>
              </div>
            </div>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[50px] px-6 py-3 rounded-xl gold-shimmer-bg text-[#0A1A3A] font-extrabold text-sm sm:text-base inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0 shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              <Instagram className="w-5 h-5 shrink-0" />
              <span>Instagram-da İzlə</span>
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {INSTAGRAM_POSTS.map((post) => (
              <a
                key={post.id}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-xl overflow-hidden bg-[#0A1A3A] border border-[#C9A227]/45 dark:border-[#D4AF37]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <img
                  src={post.img}
                  alt={post.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061024]/90 via-transparent to-transparent flex items-end p-3 sm:p-4">
                  <div className="w-full flex items-center justify-between gap-2 text-white">
                    <span className="text-xs sm:text-sm font-semibold line-clamp-2">
                      {post.caption}
                    </span>
                    <ExternalLink className="w-4 h-4 shrink-0 text-[#E8C766]" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* TIKTOK SECTION */}
        <div className="rounded-2xl bg-[#0A1A3A] text-white border border-[#D4AF37]/40 shadow-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/45 flex items-center justify-center shrink-0 text-[#E8C766]">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7"
                aria-hidden="true"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-extrabold tracking-tight text-white">
                TikTok Səhifəmiz
              </h3>
              <p className="mt-1 text-sm text-[#E2DDD2]">
                <span className="font-bold text-[#E8C766]">
                  @kuryer_qeydiyyati
                </span>{' '}
                · Gündəlik videolar, məsləhətlər və qazanc paylaşımları
              </p>
            </div>
          </div>

          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[50px] px-6 py-3 rounded-xl gold-shimmer-bg text-[#0A1A3A] font-extrabold text-sm sm:text-base inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <span>TikTok-da İzlə</span>
            <ExternalLink className="w-4 h-4 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
};
