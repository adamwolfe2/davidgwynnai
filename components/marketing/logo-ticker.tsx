"use client"

import Image from "next/image"

const PARTNERS = [
  { src: "/images/partners/3Mpvf2kjeOX9rhi4A033R1O5I.webp",  alt: "ABC News" },
  { src: "/images/partners/48biUygDiwbZYSpDjOkDbWcvg.webp",  alt: "NBC" },
  { src: "/images/partners/INhUQ15tVRlexqBYDVn8V3f1QZA.avif", alt: "Willamette University" },
  { src: "/images/partners/JA4e70uuB6w88xiCGB410mfx2xs.webp", alt: "Oregon State University" },
  { src: "/images/partners/KyTX3O9y2aVYCwcZBeKK1nmAiNU.avif", alt: "University of Oregon" },
  { src: "/images/partners/NrWEkANSuhU5alDIXE1hmiauNM4.webp", alt: "University of Arizona" },
  { src: "/images/partners/QEc1J5NpW8H1Ly5PxgRNEoCQxHk.avif", alt: "University of Washington" },
  { src: "/images/partners/YQrlBuuAOMQOrPrRbC57SDw7zHk.webp", alt: "CBS News" },
]

// Duplicate for seamless loop
const TICKER = [...PARTNERS, ...PARTNERS]

export function LogoTicker() {
  return (
    <div className="w-full overflow-hidden bg-white py-10 border-y border-[#e2e8f0]">
      <p className="text-center text-xs font-medium tracking-[0.15em] uppercase text-[#292929]/40 mb-6">
        As Seen On
      </p>
      <div className="relative flex">
        <div
          className="flex items-center gap-12 animate-ticker"
          style={{ width: "max-content" }}
        >
          {TICKER.map((p, i) => (
            <div key={i} className="flex-shrink-0 flex items-center justify-center h-8 px-2">
              <Image
                src={p.src}
                alt={p.alt}
                width={120}
                height={32}
                unoptimized
                className="h-7 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 30s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
