import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const WhatsAppButton = () => {
  const handleWhatsApp = () => {
    // Replace with actual WhatsApp number
    window.open("https://wa.me/15551234567?text=Hi, I'd like to inquire about your event services", "_blank");
  };

  return (
    <motion.button
      onClick={handleWhatsApp}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 group-hover:animate-pulse" />
    </motion.button>
  );
};
