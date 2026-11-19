import React from 'react';

const WHATSAPP_FLOAT_URL =
  'https://wa.me/994998007565?text=Salam%2C%20FLASHLY%20sayt%C4%B1ndan%20yaz%C4%B1ram%2C%20Wolt%20qeydiyyat%C4%B1%20haqq%C4%B1nda%20m%C9%99lumat%20ist%C9%99yir%C9%99m';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-30 group">
      {/* Desktop Hover Tooltip */}
      <div
        role="tooltip"
        className="hidden md:block pointer-events-none opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-focus-within:opacity-100 group-focus-within:translate-x-0 transition-all duration-200 absolute right-[72px] top-1/2 -translate-y-1/2 whitespace-nowrap px-3.5 py-2 rounded-xl bg-[#0A192F] text-white text-xs font-bold shadow-xl border border-white/15"
      >
        WhatsApp-da Yaz
      </div>

      {/* Attention Pulse Ring */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[#25D366]/45 animate-ping motion-reduce:hidden"
      />

      <a
        href={WHATSAPP_FLOAT_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp-da Yaz"
        className="relative w-[60px] h-[60px] rounded-full bg-[#25D366] hover:bg-[#1EB954] text-white shadow-2xl shadow-[#25D366]/40 flex items-center justify-center transition-transform duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
      >
        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-8 h-8"
          aria-hidden="true"
        >
          <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.348.613 4.642 1.778 6.663L2.667 29.333l6.835-1.792A13.28 13.28 0 0 0 16.004 29.333c7.363 0 13.333-5.973 13.333-13.333S23.367 2.667 16.004 2.667zm7.768 18.88c-.326.917-1.91 1.753-2.646 1.863-.672.1-1.524.142-2.46-.156-.567-.181-1.294-.421-2.228-.824-3.92-1.693-6.48-5.641-6.676-5.902-.195-.261-1.594-2.12-1.594-4.045 0-1.925 1.008-2.87 1.366-3.261.358-.391.782-.489 1.042-.489.261 0 .521.002.749.014.24.012.562-.091.879.671.326.782 1.108 2.704 1.205 2.9.098.195.163.423.033.684-.13.261-.195.423-.391.651-.195.228-.412.51-.587.684-.195.195-.398.407-.171.798.228.391 1.013 1.671 2.176 2.707 1.495 1.333 2.755 1.747 3.146 1.942.391.195.619.163.847-.098.228-.261.977-1.14 1.238-1.531.261-.391.521-.326.879-.195.358.13 2.279 1.075 2.67 1.27.391.195.651.293.749.456.098.163.098.944-.228 1.861z" />
        </svg>
      </a>
    </div>
  );
};
