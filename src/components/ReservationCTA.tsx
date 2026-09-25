import React from 'react';

interface ReservationCTAProps {
  onOpenReservation: () => void;
}

export const ReservationCTA: React.FC<ReservationCTAProps> = ({ onOpenReservation }) => {
  return (
    <section className="py-20 md:py-28 bg-[#8E2638] text-white relative overflow-hidden">
      {/* Subtle traditional terracotta motif background */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[radial-gradient(#FFF9EC_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-10 pointer-events-none" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative">
        
        {/* Bengali Calligraphy Heading */}
        <p className="font-bengali text-2xl sm:text-3xl text-[#D1A52C] font-semibold tracking-wide">
          আপনার টেবিল অপেক্ষায়।
        </p>

        {/* English Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-display tracking-tight text-[#FFF9EC]">
          Your Table Is Waiting
        </h2>

        <p className="text-base sm:text-lg text-[#FFF9EC]/80 max-w-xl mx-auto leading-relaxed">
          Book your table easily by WhatsApp or Mail. We look forward to serving you good food and welcoming hospitality.
        </p>

        {/* Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenReservation}
            className="inline-flex items-center justify-center px-8 py-3.5 text-xs uppercase tracking-wider font-semibold text-[#8E2638] bg-[#FFF9EC] hover:bg-white rounded-md transition-colors shadow-sm"
          >
            Reserve a Table
          </button>

          <a
            href="#menu"
            className="inline-flex items-center justify-center px-8 py-3.5 text-xs uppercase tracking-wider font-semibold text-[#FFF9EC] bg-transparent hover:bg-white/10 border border-[#FFF9EC]/40 rounded-md transition-colors"
          >
            View Menu
          </a>
        </div>

      </div>
    </section>
  );
};
