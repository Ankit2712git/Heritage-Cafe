import React, { useState } from 'react';
import { X, MessageSquare, Mail, AlertCircle } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeInfo';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    time: '01:00 PM',
    guests: 2,
    notes: '',
  });

  const [error, setError] = useState('');

  if (!isOpen) return null;

  const validate = () => {
    if (!formData.name.trim()) {
      setError('Please provide your name.');
      return false;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setError('Please provide a valid 10-digit phone number.');
      return false;
    }
    setError('');
    return true;
  };

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    let msg = `*HERITAGE CAFÉ — TABLE RESERVATION REQUEST*\n\n`;
    msg += `Name: ${formData.name}\n`;
    msg += `Phone: ${formData.phone}\n`;
    if (formData.email) msg += `Email: ${formData.email}\n`;
    msg += `Date: ${formData.date}\n`;
    msg += `Time: ${formData.time}\n`;
    msg += `Guests: ${formData.guests} ${formData.guests === 1 ? 'Person' : 'People'}\n`;
    if (formData.notes.trim()) msg += `Notes: ${formData.notes.trim()}\n`;

    const url = `https://wa.me/${CAFE_INFO.phone.value}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = `Table Reservation Request: ${formData.name} (${formData.date}, ${formData.time})`;
    let body = `Name: ${formData.name}\nPhone: ${formData.phone}\nDate: ${formData.date}\nTime: ${formData.time}\nGuests: ${formData.guests}\n`;
    if (formData.notes.trim()) body += `Notes: ${formData.notes.trim()}\n`;

    const mailto = `mailto:${CAFE_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-lg bg-[#FFF9EC] rounded-lg shadow-2xl border border-[#F5E9D0] overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 py-5 bg-[#F5E9D0] border-b border-[#F5E9D0] flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold font-serif-display text-[#8E2638]">
              Reserve a Table
            </h3>
            <p className="text-xs text-[#27231F]/70 mt-0.5">
              Confirm instantly via WhatsApp or direct Email.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded text-[#27231F]/70 hover:text-[#27231F] hover:bg-[#FFF9EC] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form className="p-6 space-y-4 text-sm text-[#27231F]">
          {error && (
            <div className="p-3 rounded bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#27231F]/70 mb-1">
                Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your Name"
                className="w-full px-3.5 py-2 text-sm bg-white border border-[#F5E9D0] rounded focus:outline-none focus:ring-1 focus:ring-[#8E2638]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#27231F]/70 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                placeholder="10-digit mobile number"
                className="w-full px-3.5 py-2 text-sm bg-white border border-[#F5E9D0] rounded focus:outline-none focus:ring-1 focus:ring-[#8E2638]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#27231F]/70 mb-1">
                Date
              </label>
              <input
                type="date"
                min={new Date().toISOString().split('T')[0]}
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#F5E9D0] rounded focus:outline-none focus:ring-1 focus:ring-[#8E2638]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#27231F]/70 mb-1">
                Time
              </label>
              <select
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#F5E9D0] rounded focus:outline-none focus:ring-1 focus:ring-[#8E2638]"
              >
                {['11:00 AM', '11:30 AM', '12:30 PM', '01:30 PM', '02:30 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:30 PM', '08:30 PM', '09:30 PM'].map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#27231F]/70 mb-1">
                Guests
              </label>
              <select
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#F5E9D0] rounded focus:outline-none focus:ring-1 focus:ring-[#8E2638]"
              >
                {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((g) => (
                  <option key={g} value={g}>{g} {g === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#27231F]/70 mb-1">
              Special Requests (Optional)
            </label>
            <input
              type="text"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="e.g. Window table, quiet seating..."
              className="w-full px-3.5 py-2 text-sm bg-white border border-[#F5E9D0] rounded focus:outline-none focus:ring-1 focus:ring-[#8E2638]"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-[#F5E9D0] grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={handleWhatsApp}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#315443] hover:bg-[#254134] rounded transition-colors shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Book via WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={handleEmail}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#8E2638] hover:bg-[#731E2D] rounded transition-colors shadow-xs"
            >
              <Mail className="w-4 h-4" />
              <span>Book via Email</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
