import { tools } from "../data/content";
 
function ToolIcon({ name, file }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
 
  return (
    <div
      title={name}
      className="w-14 h-14 rounded-2xl bg-[var(--surface)] border border-[var(--hairline)] flex items-center justify-center flex-shrink-0 overflow-hidden transition-all duration-300 hover:scale-110 hover:border-[var(--aqua)] hover:shadow-[0_0_18px_rgba(110,231,200,0.25)]"
    >
      <img
        src={file}
        alt={name}
        className="w-8 h-8 object-contain"
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.nextSibling.style.display = "block";
        }}
      />
      <span className="font-mono text-[13px] text-[var(--text-muted)] hidden">
        {initials}
      </span>
    </div>
  );
}
 
export default function Tools() {
  const doubled = [...tools, ...tools];
  return (
    <section
      id="ferramentas"
      className="border-t border-b border-[var(--hairline)] py-7 overflow-hidden"
    >
      <div className="flex gap-5 w-max tools-track">
        {doubled.map((t, i) => (
          <ToolIcon key={i} {...t} />
        ))}
      </div>
    </section>
  );
}