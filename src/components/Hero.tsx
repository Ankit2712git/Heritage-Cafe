import React from 'react';
import heroInteriorImg from '../assets/images/heritage_cafe_interior_1790363138480.jpg';
import foodSpreadImg from '../assets/images/gourmet_grilled_fish_1790367469393.jpg';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-[#FFF9EC]">
      {/* Subtle warm cream background texture */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[radial-gradient(#B65F42_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-[0.05] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Text */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Bengali Sub-heading / Brand tag */}
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1.5px] bg-[#B65F42]" />
              <span className="text-xs uppercase tracking-widest text-[#B65F42] font-semibold">
                HERITAGE CAFÉ
              </span>
            </div>

            {/* Main Heading (Bengali + English) */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#8E2638] font-bengali tracking-tight leading-[1.15]">
                স্বাদে কলকাতা, মনে নস্টালজিয়া
              </h1>
              <p className="text-2xl sm:text-3xl md:text-4xl font-serif-display font-medium text-[#27231F]">
                A Taste of Kolkata. A Feeling of Home.
              </p>
            </div>

            {/* Short Supporting Text */}
            <p className="text-base sm:text-lg text-[#27231F]/80 leading-relaxed max-w-xl">
              Good food, warm conversations, and the timeless spirit of Kolkata.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm uppercase tracking-wider font-semibold text-white bg-[#8E2638] hover:bg-[#731E2D] rounded-md transition-all duration-200 shadow-xs"
              >
                Explore Menu
              </a>

              <a
                href="#story"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm uppercase tracking-wider font-semibold text-[#8E2638] bg-transparent hover:bg-[#F5E9D0] border border-[#8E2638]/30 rounded-md transition-colors"
              >
                Our Story
              </a>
            </div>

            {/* Subtle editorial line */}
            <div className="pt-6">
              <div className="h-[1px] w-full max-w-md bg-[#F5E9D0]" />
              <div className="pt-4 flex items-center gap-8 text-xs text-[#27231F]/70">
                <div>
                  <span className="font-semibold block text-[#27231F]">Location</span>
                  <span>Serampore, West Bengal</span>
                </div>
                <div>
                  <span className="font-semibold block text-[#27231F]">Open Daily</span>
                  <span>11:00 AM – 10:00 PM</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Café Visuals */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Primary Atmospheric Café Interior Image */}
              <div className="rounded-xl overflow-hidden shadow-lg border border-[#F5E9D0] bg-[#F5E9D0] aspect-[4/3] sm:aspect-[4/3]">
                <img
                  src={heroInteriorImg}
                  alt="Heritage Cafe warm wooden interior and lighting"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Overlapping Small Dish Image */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 w-48 rounded-lg overflow-hidden shadow-xl border-4 border-[#FFF9EC] bg-[#F5E9D0]">
                <img
                  src={foodSpreadImg}
                  alt="Heritage Cafe freshly prepared grilled fish"
                  className="w-full h-32 object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Decorative Subtle Corner Accent */}
              <div 
                aria-hidden="true" 
                className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#B65F42]/40 rounded-tr-lg pointer-events-none" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
