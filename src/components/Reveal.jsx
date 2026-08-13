import { useEffect, useRef, useState } from "react";
 
/**
 * Envolve qualquer conteúdo e aplica um fade-in + leve deslocamento pra
 * cima quando o elemento entra na tela. Usa IntersectionObserver, então
 * é leve e não depende de bibliotecas externas.
 *
 * Props:
 * - as: qual tag renderizar (default "div")
 * - delay: atraso em ms antes de animar (bom pra escalonar itens de uma lista)
 * - className: classes extras, somadas às da animação
 */
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
 
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
 
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
 
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
 
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      {...rest}
    >
      {children}
    </Tag>
  );
}