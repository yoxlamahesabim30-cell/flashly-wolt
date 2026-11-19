import React, { useState } from 'react';
import {
  Check,
  Copy,
  ExternalLink,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from 'lucide-react';

// ============================================================================
// MAP ADDRESS - CHANGE HERE
// Xəritə ünvanını və ya koordinatlarını dəyişmək üçün yalnız aşağıdakı dəyişənləri yeniləyin:
// ============================================================================
const MAP_SEARCH_QUERY =
  'Media FM Digital Media MMC, Mammad Araz 25A, Yeni English Yard Biznes Merkezi, Baku';
const OFFICE_ADDRESS =
  'Məmməd Araz 25A, Avropa qapıları ilə üzbəüz, English Yard, 2-ci mərtəbə, 7-ci ofis, Soldan 3-cü otaq - Media FM (Digital Media MMC), Yeni English Yard Biznes Mərkəzi';
const MAP_ZOOM_LEVEL = 17;
// ============================================================================

const ENCODED_QUERY = encodeURIComponent(MAP_SEARCH_QUERY);
const MAPS_OPEN_URL = `https://www.google.com/maps/search/?api=1&query=${ENCODED_QUERY}`;
const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${ENCODED_QUERY}`;
const MAPS_EMBED_URL = `https://maps.google.com/maps?q=${ENCODED_QUERY}&t=&z=${MAP_ZOOM_LEVEL}&ie=UTF8&iwloc=&output=embed`;

export const LocationMapSection: React.FC = () => {
  const [addressCopied, setAddressCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(OFFICE_ADDRESS);
      setAddressCopied(true);
      setTimeout(() => setAddressCopied(false), 2200);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = OFFICE_ADDRESS;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setAddressCopied(true);
      setTimeout(() => setAddressCopied(false), 2200);
    }
  };

  return (
    <section
      id="elaqe"
      className="py-16 md:py-24 bg-[#EDE7DA] dark:bg-[#0B2340]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-semibold text-[#9A7818] dark:text-[#E8C766] tracking-wide mb-2">
            Bakı Ofisi və Əlaqə
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1A3A] dark:text-white tracking-tight">
            Bizi Harada Taparsan?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-[#FAF7F0] dark:bg-[#0A1A3A] rounded-2xl border border-[#C9A227]/50 dark:border-[#D4AF37]/35 shadow-xl p-6">
              <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#9A7818] dark:text-[#E8C766] flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0A1A3A] dark:text-white">
                Ofis Ünvanımız
              </h3>
              <p className="mt-2.5 text-sm sm:text-base text-[#334155] dark:text-[#E2DDD2] leading-relaxed font-medium">
                {OFFICE_ADDRESS}
              </p>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={MAPS_OPEN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[46px] px-4 py-2.5 rounded-xl gold-shimmer-bg text-[#0A1A3A] font-extrabold text-sm inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                >
                  <ExternalLink className="w-4 h-4 shrink-0" />
                  <span>Xəritədə Aç</span>
                </a>

                <a
                  href={MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[46px] px-4 py-2.5 rounded-xl bg-[#0A1A3A] dark:bg-[#0B2340] hover:bg-[#122B59] text-[#E8C766] border border-[#D4AF37]/55 font-bold text-sm inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                >
                  <Navigation className="w-4 h-4 shrink-0" />
                  <span>Yol Tarifi Al</span>
                </a>
              </div>

              <button
                type="button"
                onClick={handleCopyAddress}
                className="mt-2.5 w-full min-h-[44px] px-4 py-2 rounded-xl bg-[#F5F1E8] dark:bg-[#0B2340] hover:bg-[#EDE7DA] dark:hover:bg-[#102B4D] border border-[#C9A227]/40 dark:border-[#D4AF37]/30 text-[#0A1A3A] dark:text-[#E2DDD2] font-bold text-sm inline-flex items-center justify-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                {addressCopied ? (
                  <>
                    <Check className="w-4 h-4 text-[#00C853]" />
                    <span>Ünvan kopyalandı</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#9A7818] dark:text-[#D4AF37]" />
                    <span>Ünvanı Kopyala</span>
                  </>
                )}
              </button>
            </div>

            {[
              {
                display: '+994 99 800 75 65',
                tel: 'tel:+994998007565',
                wa: 'https://wa.me/994998007565',
                label: 'Əlaqə nömrəsi 1',
              },
              {
                display: '+994 60 446 64 04',
                tel: 'tel:+994604466404',
                wa: 'https://wa.me/994604466404',
                label: 'Əlaqə nömrəsi 2',
              },
            ].map((phone) => (
              <div
                key={phone.display}
                className="bg-[#FAF7F0] dark:bg-[#0A1A3A] rounded-2xl border border-[#C9A227]/50 dark:border-[#D4AF37]/35 shadow-lg p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <span className="text-xs font-semibold text-[#9A7818] dark:text-[#D4AF37]">
                    {phone.label}
                  </span>
                  <div className="mt-0.5 font-mono text-lg sm:text-xl font-bold text-[#0A1A3A] dark:text-white tabular-nums">
                    {phone.display}
                  </div>
                </div>

                <div className="flex gap-2">
                  <a
                    href={phone.tel}
                    className="flex-1 sm:flex-initial min-h-[44px] px-4 py-2 rounded-xl bg-[#0A1A3A] dark:bg-[#0B2340] hover:bg-[#122B59] text-[#E8C766] border border-[#D4AF37]/50 font-bold text-sm inline-flex items-center justify-center gap-1.5 whitespace-nowrap transition-colors"
                  >
                    <Phone className="w-4 h-4 shrink-0" />
                    <span>Zəng Et</span>
                  </a>
                  <a
                    href={phone.wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial min-h-[44px] px-4 py-2 rounded-xl gold-shimmer-bg text-[#0A1A3A] font-extrabold text-sm inline-flex items-center justify-center gap-1.5 whitespace-nowrap transition-all"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#C9A227]/55 dark:border-[#D4AF37]/40 shadow-2xl min-h-[360px] lg:min-h-full bg-[#0A1A3A]">
            <iframe
              title="FLASHLY Bakı Ofisi Xəritəsi — Media FM, Məmməd Araz 25A, Yeni English Yard Biznes Mərkəzi"
              src={MAPS_EMBED_URL}
              className="w-full h-full min-h-[360px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};
