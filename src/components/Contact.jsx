import { ArrowRight } from "lucide-react";
import Eyebrow from "./Eyebrow";
import { contact } from "../data/content";

export default function Contact() {
  return (
    <section id="contato" className="max-w-[1100px] mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Eyebrow>{contact.eyebrow}</Eyebrow>
          <h2 className="font-display font-bold text-[clamp(26px,3.5vw,34px)] mb-4">
            {contact.title}
          </h2>
          <p className="text-[var(--text-muted)] text-base leading-relaxed max-w-[420px]">
            {contact.subtitle}
          </p>
        </div>

        <form
          action={contact.formAction}
          method="post"
          className="bg-[var(--surface)] border border-[var(--hairline)] rounded-2xl p-7 flex flex-col gap-3.5"
        >
          <label className="text-[13px] text-[var(--text-muted)]">
            E-mail
            <input
              type="email"
              required
              name="Email"
              placeholder="seu@email.com"
              className="block w-full mt-1.5 bg-[var(--bg)] border border-[var(--hairline)] rounded-[10px] px-3.5 py-3 text-[var(--text)] text-[15px] outline-none"
            />
          </label>
          <input
            type="hidden"
            name="Created"
            value="x-sheetmonkey-current-date-time"
          />
          <button
            type="submit"
            className="bg-[var(--coral)] text-[var(--coral-on)] font-semibold text-[15px] px-4.5 py-3.5 rounded-[10px] border-none cursor-pointer flex items-center justify-center gap-2"
          >
            Enviar <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}
