import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { GALLERY_ITEMS, GALLERY_FILTER_TAGS, GalleryPhoto } from '../data/galleryData';

export const PhotoGallery: React.FC = () => {
  const [activeTag, setActiveTag] = useState<string>('All');
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null);

  const filteredPhotos = GALLERY_ITEMS.filter((item) => {
    if (activeTag === 'All') return true;
    return item.tag === activeTag;
  });

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FFF9EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="w-6 h-[1.5px] bg-[#B65F42]" />
            <span className="text-xs uppercase tracking-widest text-[#B65F42] font-semibold">
              Visual Impressions
            </span>
            <span className="w-6 h-[1.5px] bg-[#B65F42]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#8E2638] font-serif-display">
            Gallery
          </h2>

          <p className="text-sm sm:text-base text-[#27231F]/80 leading-relaxed">
            A glimpse into our spaces, dining tables, fresh dishes, and café details.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="mt-8 flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {GALLERY_FILTER_TAGS.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTag === tag
                  ? 'bg-[#8E2638] text-white'
                  : 'bg-[#F5E9D0]/60 text-[#27231F] hover:bg-[#F5E9D0] border border-[#F5E9D0]'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Editorial Masonry/Grid Layout */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setLightboxPhoto(photo)}
              className="group relative cursor-pointer overflow-hidden rounded-lg bg-[#F5E9D0] border border-[#F5E9D0] aspect-[4/3] shadow-xs hover:shadow-md transition-all duration-300"
            >
              <img
                src={photo.imageSrc}
                alt={photo.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-3 right-3 p-1.5 rounded bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#D1A52C]">
                  {photo.tag}
                </span>
                <p className="text-sm font-medium leading-snug mt-0.5">
                  {photo.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setLightboxPhoto(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full bg-[#27231F] rounded-xl overflow-hidden shadow-2xl border border-[#F5E9D0]/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] flex items-center justify-center bg-black">
              <img
                src={lightboxPhoto.imageSrc}
                alt={lightboxPhoto.title}
                className="max-h-[70vh] w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-4 bg-[#27231F] text-white flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#D1A52C]">
                  {lightboxPhoto.tag}
                </span>
                <h3 className="text-base font-serif-display font-medium mt-0.5">
                  {lightboxPhoto.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
