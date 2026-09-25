import React from 'react';
import courtyardImg from '../assets/images/cafe_courtyard_evening_1790363183124.jpg';

export const OurStory: React.FC = () => {
  return (
    <section id="story" className="py-20 md:py-28 bg-[#F5E9D0]/60 relative border-y border-[#F5E9D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: One Strong Café Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-xl overflow-hidden shadow-md border border-[#F5E9D0] bg-[#FFF9EC]">
              <img
                src={courtyardImg}
                alt="Heritage Cafe evening outdoor seating"
                className="w-full h-[360px] sm:h-[460px] object-cover object-center"
              />
              {/* Subtle Bengali detail overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#FFF9EC]/90 backdrop-blur-xs p-3.5 rounded-lg border border-[#F5E9D0]/80">
                <p className="font-bengali text-sm font-semibold text-[#8E2638] text-center">
                  একটু বসুন, গল্প হোক।
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text Area */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1.5px] bg-[#B65F42]" />
              <span className="text-xs uppercase tracking-widest text-[#B65F42] font-semibold">
                Our Story
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#8E2638] font-serif-display">
              A Little Piece of Kolkata
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#27231F]/85 leading-relaxed font-normal">
              <p>
                Heritage Café was created as a welcoming retreat where Kolkata's warm culinary soul and unhurried charm come together under one roof in Serampore.
              </p>
              <p>
                From freshly brewed coffee and aromatic teas to hearty sizzlers, classic continental mains, and wholesome snacks, every recipe is crafted to bring people together over honest flavors and comfortable seating.
              </p>
              <p>
                Whether you drop in for an afternoon tea, a quiet corner with a book, or an evening meal with friends, we welcome you to relax, unwind, and savor the timeless comfort of good food and warm hospitality.
              </p>
            </div>

            {/* Subtle Bengali Calligraphy Detail */}
            <div className="pt-2 flex items-center gap-4">
              <div className="p-3 rounded-md bg-[#FFF9EC] border border-[#F5E9D0]">
                <span className="font-bengali text-lg text-[#8E2638] font-semibold block">
                  একটু বসুন, গল্প হোক।
                </span>
                <span className="text-xs text-[#27231F]/60 mt-0.5 block">
                  Sit for a while, let conversations unfold.
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
