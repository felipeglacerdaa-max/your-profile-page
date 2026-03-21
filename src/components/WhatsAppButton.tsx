import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5500000000000" // Substituir pelo número real
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[#25D366]/20 active:scale-95 animate-fade-in"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="h-7 w-7 fill-current" />
      <span className="absolute -top-2 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white text-[10px] text-[#25D366] font-bold items-center justify-center">1</span>
      </span>
    </a>
  );
};

export default WhatsAppButton;
