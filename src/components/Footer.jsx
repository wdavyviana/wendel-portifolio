import { Mail } from "lucide-react";
import { footer } from "../data/content";
 
function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.72-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}
 
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
 
export default function Footer() {
  return (
    <footer className="border-t border-[var(--hairline)] px-6 py-7">
      <div className="max-w-[1100px] mx-auto flex justify-between flex-wrap gap-3 items-center">
        <span className="text-[13px] text-[var(--text-muted)]">
          © wdavyviana {new Date().getFullYear()}. Todos os direitos
          reservados.
        </span>
        <div className="flex gap-4">
          {footer.github && (
            <a
              href={footer.github}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--text-muted)] transition-all duration-200 hover:text-[var(--aqua)] hover:scale-110 inline-block"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
          )}
          {footer.instagram && (
            <a
              href={footer.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--text-muted)] transition-all duration-200 hover:text-[var(--aqua)] hover:scale-110 inline-block"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          )}
          <a
            href="#contato"
            className="text-[var(--text-muted)] transition-all duration-200 hover:text-[var(--aqua)] hover:scale-110 inline-block"
            aria-label="Contato"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}