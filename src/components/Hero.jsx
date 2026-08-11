import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Eyebrow from "./Eyebrow";
import { hero } from "../data/content";

export default function Hero() {
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDrawn(true), 250);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="max-w-[1100px] mx-auto px-6 pt-16 pb-14 grid md:grid-cols-[1.3fr_0.9fr] gap-12 items-center">
      <div>
        <Eyebrow>{hero.eyebrow}</Eyebrow>
        <h1 className="font-display font-bold text-[clamp(32px,5vw,52px)] leading-[1.08] tracking-tight m-0">
          {hero.title}
        </h1>

        <svg viewBox="0 0 400 24" width="220" height="20" className="my-5">
          <path
            d="M0 12 C 40 2, 60 22, 100 12 S 160 2, 200 12 S 260 22, 300 12 S 360 2, 400 12"
            fill="none"
            stroke="var(--aqua)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="460"
            strokeDashoffset={drawn ? 0 : 460}
            style={{ transition: "stroke-dashoffset 1.4s ease-out" }}
          />
        </svg>

        <p className="text-[var(--text-muted)] text-[17px] leading-relaxed max-w-[480px] mb-8">
          {hero.subtitle}
        </p>

        <div className="flex gap-3.5 flex-wrap">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-[var(--coral)] text-[var(--coral-on)] font-semibold text-[15px] px-6 py-3.5 rounded-full no-underline"
          >
            {hero.ctaPrimary} <ArrowRight size={16} />
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center gap-2 border border-[var(--hairline)] text-[var(--text)] font-medium text-[15px] px-6 py-3.5 rounded-full no-underline"
          >
            {hero.ctaSecondary}
          </a>
        </div>
      </div>

      <div className="relative justify-self-center">
        <div className="w-[220px] h-[220px] rounded-full bg-[var(--surface)] border border-[var(--surface-border)] overflow-hidden flex items-center justify-center">
          <img
            src={hero.photo}
            alt="Foto de perfil de Wendel Davy Viana"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
        <div className="absolute bottom-2 -right-2.5 bg-[var(--aqua)] text-[#04241c] font-mono text-xs px-3 py-1.5 rounded-[10px] font-medium">
          {hero.badge}
        </div>
      </div>
    </section>
  );
}
