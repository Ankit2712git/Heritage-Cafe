/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OurStory } from './components/OurStory';
import { DigitalMenu } from './components/DigitalMenu';
import { CafeExperience } from './components/CafeExperience';
import { PhotoGallery } from './components/PhotoGallery';
import { LocationDirections } from './components/LocationDirections';
import { ReservationCTA } from './components/ReservationCTA';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9EC] text-[#27231F] selection:bg-[#8E2638] selection:text-white">
      {/* 1. Navigation */}
      <Header onOpenReservation={() => setIsReservationOpen(true)} />

      <main className="flex-1">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Our Story */}
        <OurStory />

        {/* 4. Menu */}
        <DigitalMenu />

        {/* 5. Adda / Café Experience */}
        <CafeExperience />

        {/* 6. Gallery */}
        <PhotoGallery />

        {/* 7. Location & Contact */}
        <LocationDirections />

        {/* 8. Reservation CTA */}
        <ReservationCTA onOpenReservation={() => setIsReservationOpen(true)} />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Reservation Dialog (WhatsApp / Email) */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </div>
  );
}
