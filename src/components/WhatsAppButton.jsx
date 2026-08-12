import { whatsapp } from "../data/content";
 
function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" {...props}>
      <path d="M17.47 14.38c-.29-.15-1.7-.84-1.96-.93-.26-.1-.46-.15-.65.15-.19.29-.75.93-.92 1.12-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.58-.9-2.16-.24-.58-.48-.5-.65-.51h-.56c-.19 0-.51.07-.78.36-.26.29-1.02 1-1.02 2.44s1.05 2.83 1.19 3.02c.15.19 2.06 3.15 5 4.41.7.3 1.24.48 1.67.62.7.22 1.34.19 1.84.12.56-.08 1.7-.7 1.94-1.37.24-.68.24-1.26.17-1.37-.07-.12-.26-.19-.55-.34Z" />
      <path d="M12.02 2C6.5 2 2.03 6.47 2.03 12c0 1.86.5 3.6 1.36 5.1L2 22l5.05-1.33A9.94 9.94 0 0 0 12.02 22C17.53 22 22 17.53 22 12S17.53 2 12.02 2Zm0 18.13c-1.66 0-3.2-.46-4.53-1.24l-.32-.19-3 .79.8-2.92-.21-.3A8.09 8.09 0 0 1 3.9 12c0-4.48 3.65-8.13 8.12-8.13S20.14 7.52 20.14 12s-3.64 8.13-8.12 8.13Z" />
    </svg>
  );
}
 
export default function WhatsAppButton() {
  const url = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(
    whatsapp.message
  )}`;
 
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform hover:scale-105"
    >
      <WhatsAppIcon />
    </a>
  );
}
 
