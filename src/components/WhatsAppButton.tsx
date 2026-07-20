const WHATSAPP_NUMBER = "23059226558";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Luxora Villa! I'd like to know more about booking the villa in Grand Baie.",
);

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
export const WHATSAPP_DISPLAY = "+230 5922 6558";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Luxora Villa on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg hover:bg-[#1ebe57] transition hover:-translate-y-0.5"
    >
      <svg viewBox="0 0 32 32" className="h-6 w-6 fill-current" aria-hidden>
        <path d="M19.11 17.24c-.28-.14-1.65-.81-1.9-.9-.26-.1-.45-.14-.63.14-.19.28-.72.9-.88 1.09-.16.19-.32.21-.6.07-.28-.14-1.18-.43-2.24-1.38-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.63-1.52-.86-2.08-.23-.55-.46-.47-.63-.48h-.54c-.19 0-.49.07-.75.35-.26.28-.98.96-.98 2.35 0 1.38 1.01 2.72 1.15 2.91.14.19 1.98 3.03 4.81 4.25.67.29 1.19.46 1.6.59.67.21 1.28.18 1.77.11.54-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.11-.26-.18-.54-.32zM16.04 5.33c-5.9 0-10.7 4.8-10.7 10.7 0 1.89.49 3.73 1.44 5.35L5.33 26.67l5.41-1.41a10.66 10.66 0 0 0 5.29 1.39h.01c5.9 0 10.7-4.8 10.7-10.7 0-2.86-1.11-5.55-3.13-7.57a10.66 10.66 0 0 0-7.57-3.05zm0 19.55h-.01a8.87 8.87 0 0 1-4.53-1.24l-.32-.19-3.21.84.86-3.13-.21-.32a8.85 8.85 0 0 1-1.36-4.72c0-4.9 3.99-8.88 8.9-8.88a8.83 8.83 0 0 1 6.29 2.61 8.83 8.83 0 0 1 2.6 6.28c0 4.9-3.98 8.9-8.89 8.9z" />
      </svg>
      <span className="hidden sm:inline text-sm font-semibold">WhatsApp</span>
    </a>
  );
}
