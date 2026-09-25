import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';

interface HeaderProps {
  onOpenReservation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Story', href: '#story' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFF9EC]/95 backdrop-blur-md border-b border-[#F5E9D0] shadow-xs'
          : 'bg-[#FFF9EC] border-b border-[#F5E9D0]/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#home" className="group flex flex-col">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#8E2638] font-serif-display group-hover:text-[#731E2D] transition-colors">
              HERITAGE CAFÉ
            </span>
            <span className="text-xs font-bengali text-[#B65F42] tracking-wide -mt-0.5">
              হেরিটেজ ক্যাফে
            </span>
          </a>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#27231F]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-[#8E2638] hover:underline underline-offset-8 decoration-[#8E2638]/40"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="flex items-center space-x-4">
            <button
              type="button"
              onClick={onOpenReservation}
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#8E2638] hover:bg-[#731E2D] rounded-md transition-colors shadow-xs"
            >
              Reserve a Table
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#27231F] hover:text-[#8E2638] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#F5E9D0] bg-[#FFF9EC] px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-150">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-[#27231F] hover:bg-[#F5E9D0] rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-3 text-sm uppercase tracking-wider font-semibold text-white bg-[#8E2638] hover:bg-[#731E2D] rounded-md transition-colors text-center"
            >
              Reserve a Table
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
