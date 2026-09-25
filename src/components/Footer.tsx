import React from 'react';
import { Instagram, Facebook, ArrowUp } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeInfo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#27231F] text-[#FFF9EC] pt-16 pb-12 border-t border-[#F5E9D0]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <h3 className="text-2xl font-bold font-serif-display text-[#FFF9EC] tracking-tight">
                HERITAGE CAFÉ
              </h3>
              <p className="text-sm font-bengali text-[#D1A52C] mt-0.5">
                হেরিটেজ ক্যাফে
              </p>
            </div>

            <p className="text-sm text-[#FFF9EC]/75 leading-relaxed max-w-sm">
              Good food, warm conversations, and the timeless spirit of Kolkata. Located at Khash Bagan, Serampore.
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={CAFE_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded bg-white/5 hover:bg-[#8E2638] text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CAFE_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded bg-white/5 hover:bg-[#315443] text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D1A52C]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#FFF9EC]/80">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-white transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Opening Hours */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D1A52C]">
              Address & Hours
            </h4>
            <div className="space-y-2 text-sm text-[#FFF9EC]/80 leading-relaxed">
              <p>
                {CAFE_INFO.address.full}
              </p>
              <p className="pt-1">
                <strong>Hours: </strong> {CAFE_INFO.hours[0].days}, {CAFE_INFO.hours[0].time}
              </p>
              <p>
                <strong>Phone: </strong> 
                <a href={`tel:${CAFE_INFO.phone.value}`} className="hover:text-[#D1A52C] tabular-nums">
                  {CAFE_INFO.phone.display}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Subtle Bengali Alpana-Inspired Motif */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF9EC]/60">
          
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} HERITAGE CAFÉ. All rights reserved.</span>
            <span className="hidden sm:inline">·</span>
            <span className="font-bengali text-[#D1A52C] hidden sm:inline">
              স্বাদে কলকাতা, মনে নস্টালজিয়া
            </span>
          </div>

          {/* Subtle Alpana Motif & Back to Top */}
          <div className="flex items-center gap-6">
            <svg
              viewBox="0 0 100 20"
              className="w-20 h-4 opacity-40 text-[#D1A52C]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M50 2C48 7 45 10 40 10C45 10 48 13 50 18C52 13 55 10 60 10C55 10 52 7 50 2Z"
                fill="currentColor"
              />
              <path
                d="M35 10C30 8 25 8 20 10M65 10C70 8 75 8 80 10"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
