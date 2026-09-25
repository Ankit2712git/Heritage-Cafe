import React from 'react';
import interiorImg from '../assets/images/heritage_cafe_interior_1790363138480.jpg';

export const CafeExperience: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F5E9D0]/50 relative border-t border-[#F5E9D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="w-6 h-[1.5px] bg-[#B65F42]" />
              <span className="text-xs uppercase tracking-widest text-[#B65F42] font-semibold">
                Atmosphere & Space
              </span>
              <span className="w-6 h-[1.5px] bg-[#B65F42]" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#8E2638] font-serif-display">
              Come for the Food. Stay for the Atmosphere.
            </h2>

            <p className="text-base sm:text-lg text-[#27231F]/80 leading-relaxed max-w-2xl mx-auto">
              A relaxed space for good food, conversations, coffee and time well spent.
            </p>
          </div>

          {/* Atmospheric Café Photograph */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-[#F5E9D0] bg-[#FFF9EC]">
            <img
              src={interiorImg}
              alt="Heritage Cafe relaxed seating and warm ambient lighting"
              className="w-full h-[380px] sm:h-[480px] object-cover object-center"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
