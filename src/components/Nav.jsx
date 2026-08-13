import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { nav } from "../data/content";
 
export default function Nav() {
  const [open, setOpen] = useState(false);
 
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-[var(--hairline)] bg-[#0b1d24]/85">
      <div className="max-w-[1100px] mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-display font-bold text-lg tracking-tight">
          Wendel<span className="text-[var(--aqua)]">.</span>Davy
        </span>
 
        <nav className="hidden md:flex gap-8">
          {nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)] transition-colors no-underline"
            >
              {l.label}
            </a>
          ))}
        </nav>
 
        <a
          href="#contato"
          className="hidden md:inline-flex items-center gap-1.5 bg-[var(--coral)] text-[var(--coral-on)] font-semibold text-sm px-5 py-2.5 rounded-full no-underline transition-all duration-200 hover:brightness-110 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,107,74,0.35)]"
        >
          Falar comigo <ArrowRight size={15} />
        </a>
 
        <button
          className="md:hidden text-[var(--text)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
 
      {open && (
        <div className="md:hidden px-6 pb-5 pt-2 flex flex-col gap-3.5 border-t border-[var(--hairline)]">
          {nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[15px] text-[var(--text)] no-underline"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-1 text-center bg-[var(--coral)] text-[var(--coral-on)] font-semibold text-sm px-5 py-2.5 rounded-full no-underline"
          >
            Falar comigo
          </a>
        </div>
      )}
    </header>
  );
}
 