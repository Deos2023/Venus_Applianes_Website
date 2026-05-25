import { Phone, MessageCircle } from "lucide-react";

const GlobalContactButtons = () => {
  const phoneNumber = "+919331962120"; // Using the number found in WhatsAppInquiry
  const whatsappNumber = "9331962120";
  const whatsappMessage = encodeURIComponent("Hello, I would like to inquire about Venus Appliances.");

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-3 md:gap-4">
      {/* Phone Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="group relative flex h-11 w-11 md:h-14 md:w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform hover:scale-110 hover:bg-blue-700"
        aria-label="Call Us"
      >
        <span className="absolute right-full mr-3 md:mr-4 hidden whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs md:text-sm text-white opacity-0 transition-opacity group-hover:block group-hover:opacity-100">
          Call Us
        </span>
        <Phone className="h-5 w-5 md:h-6 md:w-6" />
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-11 w-11 md:h-14 md:w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-600"
        aria-label="WhatsApp Us"
      >
        <span className="absolute right-full mr-3 md:mr-4 hidden whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs md:text-sm text-white opacity-0 transition-opacity group-hover:block group-hover:opacity-100">
          WhatsApp Us
        </span>
        <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />
      </a>
    </div>
  );
};

export default GlobalContactButtons;
