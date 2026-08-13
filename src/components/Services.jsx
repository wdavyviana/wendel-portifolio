import { Target, Workflow, MessageCircle, Code2 } from "lucide-react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { services } from "../data/content";
 
const ICONS = { Target, Workflow, MessageCircle, Code2 };
 
export default function Services() {
  return (
    <section id="servicos" className="max-w-[1100px] mx-auto px-6 py-24">
      <Reveal>
        <Eyebrow>O pipeline</Eyebrow>
        <h2 className="font-display font-bold text-[clamp(26px,3.5vw,36px)] mb-3 max-w-[560px]">
          Quatro etapas que se conectam, não quatro serviços soltos.
        </h2>
        <p className="text-[var(--text-muted)] text-base max-w-[520px] mb-14">
          Cada estação alimenta a próxima — do primeiro clique até o sistema
          que sustenta o negócio rodando.
        </p>
      </Reveal>
 
      <div>
        {services.map((s, i) => {
          const Icon = ICONS[s.icon];
          const isLast = i === services.length - 1;
          return (
            <Reveal key={s.n} delay={i * 90} className="flex gap-6 group">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-13 h-13 w-[52px] h-[52px] rounded-full bg-[var(--aqua-dim)] border border-[var(--aqua)] flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--aqua)] group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(110,231,200,0.35)]">
                  <Icon
                    size={22}
                    className="text-[var(--aqua)] transition-colors duration-300 group-hover:text-[#04241c]"
                  />
                </div>
                {!isLast && (
                  <svg width="3" height="72" className="mt-0.5">
                    <line
                      x1="1.5"
                      y1="0"
                      x2="1.5"
                      y2="72"
                      stroke="var(--aqua)"
                      strokeWidth="2"
                      strokeDasharray="1 7"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </div>
 
              <div className={isLast ? "pb-0 pt-1" : "pb-10 pt-1"}>
                <div className="font-mono text-xs text-[var(--text-muted)] mb-1">
                  {s.n}
                </div>
                <h3 className="font-display font-semibold text-[21px] mb-1 transition-colors duration-300 group-hover:text-[var(--aqua)]">
                  {s.title}{" "}
                  <span className="text-[var(--text-muted)] font-medium text-[15px]">
                    — {s.label}
                  </span>
                </h3>
                <p className="text-[var(--text-muted)] text-[15.5px] leading-relaxed max-w-[520px] m-0">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}