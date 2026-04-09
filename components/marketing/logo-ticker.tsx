"use client"

import Image from "next/image"

const PARTNERS = [
  { src: "/images/partners/1sM8Y0OnHlPjStk7nEaoNdVlmU.avif", alt: "Partner 1" },
  { src: "/images/partners/9YLe44uAb48dDcYLHbq3kpj0i4.avif", alt: "Partner 2" },
  { src: "/images/partners/D7rnliPAgSJ20uq2RmGUXQwWUs0.avif", alt: "Partner 3" },
  { src: "/images/partners/Ftbs1mLQJr5rmpKgaqqP2BLIFI.avif", alt: "Partner 4" },
  { src: "/images/partners/KbiOomK1eCrGHt9gjd0DbgB6U.avif", alt: "Partner 5" },
  { src: "/images/partners/OmUmGExykzHFyBFIYmEoYO2Iyw4.avif", alt: "Partner 6" },
  { src: "/images/partners/R569WrfDBKIlGsESRiYSg6CiQPY.avif", alt: "Partner 7" },
  { src: "/images/partners/RjSgBKkvwb1BEf48ipbENSH7YMo.avif", alt: "Partner 8" },
  { src: "/images/partners/d47HCaLBtdKq1xW1Get4WbllEg.avif", alt: "Partner 9" },
  { src: "/images/partners/g0wzN9aJF7DG9vJaaQR7UD3Ns.avif", alt: "Partner 10" },
  { src: "/images/partners/gPdMe2SH51luuw22zPuPCRMzfQk.avif", alt: "Partner 11" },
  { src: "/images/partners/hVfYXZ0nAG4EmEnyG1CzJuAiE.avif", alt: "Partner 12" },
  { src: "/images/partners/oYLZOHBI9l917jYrDaHzUyvM9o.avif", alt: "Partner 13" },
  { src: "/images/partners/pOrGqiOKLJyC8xnDCoSkAOKI.avif", alt: "Partner 14" },
  { src: "/images/partners/udOYGYZGDjy66MXSCNVxfpMjTg.png", alt: "Partner 15" },
  { src: "/images/partners/yUj4fNy4CUuQVo7XgzQsNabOIuY.avif", alt: "Partner 16" },
  { src: "/images/partners/ywU2SlgM4DblXToMuJFR4HnIfKI.avif", alt: "Partner 17" },
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
                className="h-7 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300"
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
