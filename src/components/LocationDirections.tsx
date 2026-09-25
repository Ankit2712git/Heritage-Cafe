import React, { useState } from 'react';
import { MapPin, Phone, Clock, ExternalLink, Navigation, Copy, Check, MessageSquare, Instagram, Facebook } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeInfo';

export const LocationDirections: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CAFE_INFO.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F5E9D0]/50 relative border-t border-[#F5E9D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="w-6 h-[1.5px] bg-[#B65F42]" />
            <span className="text-xs uppercase tracking-widest text-[#B65F42] font-semibold">
              Visit Us
            </span>
            <span className="w-6 h-[1.5px] bg-[#B65F42]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#8E2638] font-serif-display">
            Find Heritage Cafe
          </h2>

          <p className="text-sm sm:text-base text-[#27231F]/80 leading-relaxed">
            Conveniently located at Khash Bagan, Serampore. Come join us for honest food and relaxed conversations.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            
            {/* Address Card */}
            <div className="bg-white p-6 sm:p-7 rounded-lg border border-[#F5E9D0] shadow-xs space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded bg-[#FFF9EC] text-[#8E2638] border border-[#F5E9D0] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-[#27231F] font-serif-display">
                      Address
                    </h3>
                    <p className="text-sm text-[#27231F] font-medium leading-relaxed">
                      {CAFE_INFO.address.line1}
                    </p>
                    <p className="text-xs text-[#27231F]/70">
                      {CAFE_INFO.address.landmark}
                    </p>
                    <p className="text-xs text-[#27231F]/70">
                      {CAFE_INFO.address.locality}, {CAFE_INFO.address.city}, {CAFE_INFO.address.state} — {CAFE_INFO.address.pin}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#27231F] bg-[#FFF9EC] hover:bg-[#F5E9D0] border border-[#F5E9D0] rounded transition-colors shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={CAFE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#8E2638] hover:bg-[#731E2D] rounded-md transition-colors shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3 opacity-80" />
                </a>

                <a
                  href={`tel:${CAFE_INFO.phone.value}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#8E2638] bg-[#FFF9EC] hover:bg-[#F5E9D0] border border-[#8E2638]/30 rounded-md transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Contact Us</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-white p-6 sm:p-7 rounded-lg border border-[#F5E9D0] shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded bg-[#FFF9EC] text-[#8E2638] border border-[#F5E9D0] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#27231F] font-serif-display">
                    Opening Hours
                  </h3>
                  <p className="text-xs sm:text-sm text-[#27231F]/80 mt-0.5">
                    {CAFE_INFO.hours[0].days}: <strong className="text-[#27231F]">{CAFE_INFO.hours[0].time}</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Phone & Direct Contact */}
            <div className="bg-white p-6 sm:p-7 rounded-lg border border-[#F5E9D0] shadow-xs space-y-3">
              <h3 className="text-sm font-bold text-[#27231F] font-serif-display">
                Telephone & Social Media
              </h3>
              
              <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                <div>
                  <span className="text-xs text-[#27231F]/60 block">Phone</span>
                  <a
                    href={`tel:${CAFE_INFO.phone.value}`}
                    className="text-sm font-bold text-[#8E2638] hover:underline tabular-nums"
                  >
                    {CAFE_INFO.phone.display}
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/${CAFE_INFO.phone.value}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded bg-[#FFF9EC] hover:bg-[#F5E9D0] text-[#315443] border border-[#F5E9D0] transition-colors"
                    aria-label="WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                  <a
                    href={CAFE_INFO.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded bg-[#FFF9EC] hover:bg-[#F5E9D0] text-[#8E2638] border border-[#F5E9D0] transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={CAFE_INFO.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded bg-[#FFF9EC] hover:bg-[#F5E9D0] text-[#315443] border border-[#F5E9D0] transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="bg-white rounded-lg border border-[#F5E9D0] overflow-hidden shadow-xs flex-1 flex flex-col min-h-[360px]">
              
              {/* Map Top Bar */}
              <div className="px-4 py-3 bg-[#F5E9D0]/60 border-b border-[#F5E9D0] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#27231F]">Google Maps Location</span>
                <span className="text-[#27231F]/60">Serampore, West Bengal 712201</span>
              </div>

              {/* Map Iframe */}
              <div className="relative flex-1 bg-[#F5E9D0] min-h-[320px]">
                <iframe
                  title="Heritage Cafe Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14725.132228519124!2d88.33742466964177!3d22.751141443424075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89b4080d76333%3A0xfa397c90b5c84557!2sHeritage%20Cafe!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full absolute inset-0"
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
