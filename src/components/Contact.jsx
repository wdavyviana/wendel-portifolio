import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { contact } from "../data/content";
 
function encode(data) {
  return Object.keys(data)
    .map(
      (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    )
    .join("&");
}
 
export default function Contact() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
 
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contato",
          Email: email,
          Created: new Date().toISOString(),
        }),
      });
      setStatus("sent");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }
 
  return (
    <section id="contato" className="max-w-[1100px] mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <Eyebrow>{contact.eyebrow}</Eyebrow>
          <h2 className="font-display font-bold text-[clamp(26px,3.5vw,34px)] mb-4">
            {contact.title}
          </h2>
          <p className="text-[var(--text-muted)] text-base leading-relaxed max-w-[420px]">
            {contact.subtitle}
          </p>
        </Reveal>
 
        {status === "sent" ? (
          <div className="bg-[var(--surface)] border border-[var(--hairline)] rounded-2xl p-7 flex flex-col items-center justify-center gap-3 text-center min-h-[180px]">
            <div className="w-10 h-10 rounded-full bg-[var(--coral)] flex items-center justify-center text-[var(--coral-on)]">
              <Check size={20} />
            </div>
            <p className="font-semibold">Recebido!</p>
            <p className="text-[13px] text-[var(--text-muted)]">
              Obrigado pelo contato. Retorno em breve.
            </p>
          </div>
        ) : (
          <Reveal
            as="form"
            delay={120}
            name="contato"
            method="post"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="bg-[var(--surface)] border border-[var(--hairline)] rounded-2xl p-7 flex flex-col gap-3.5 transition-colors duration-300 hover:border-[var(--surface-border)]"
          >
            <input type="hidden" name="form-name" value="contato" />
            <p className="hidden">
              <label>
                Não preencha isto: <input name="bot-field" />
              </label>
            </p>
 
            <label className="text-[13px] text-[var(--text-muted)]">
              E-mail
              <input
                type="email"
                required
                name="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="block w-full mt-1.5 bg-[var(--bg)] border border-[var(--hairline)] rounded-[10px] px-3.5 py-3 text-[var(--text)] text-[15px] outline-none transition-colors duration-200 focus:border-[var(--aqua)]"
              />
            </label>
 
            {status === "error" && (
              <p className="text-[13px] text-red-400">
                Algo deu errado. Tenta de novo ou me chama no WhatsApp.
              </p>
            )}
 
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-[var(--coral)] text-[var(--coral-on)] font-semibold text-[15px] px-4.5 py-3.5 rounded-[10px] border-none cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 enabled:hover:brightness-110 enabled:hover:scale-[1.02]"
            >
              {status === "sending" ? "Enviando..." : "Enviar"}{" "}
              {status !== "sending" && <ArrowRight size={16} />}
            </button>
          </Reveal>
        )}
      </div>
    </section>
  );
}