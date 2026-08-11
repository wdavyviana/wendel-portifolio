import Eyebrow from "./Eyebrow";
import { about } from "../data/content";

export default function About() {
  return (
    <section
      id="sobre"
      className="bg-[var(--bg-soft)] border-t border-b border-[var(--hairline)]"
    >
      <div className="max-w-[1100px] mx-auto px-6 py-20 grid md:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
        <div>
          <Eyebrow>{about.eyebrow}</Eyebrow>
          <h2 className="font-display font-bold text-[clamp(24px,3vw,32px)] m-0">
            {about.name}
          </h2>
        </div>
        <div>
          <p className="text-[var(--text)] text-[17px] leading-[1.7] mb-4">
            {about.p1}
          </p>
          <p className="text-[var(--text-muted)] text-base leading-[1.7] m-0">
            {about.p2}
          </p>
        </div>
      </div>
    </section>
  );
}
