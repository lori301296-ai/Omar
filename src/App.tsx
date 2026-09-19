import React, { useState, useEffect } from 'react';
import { Language, Tour } from './types';
import { toursData } from './data/toursData';
import { galleryItems } from './data/galleryData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { ToursSection } from './components/ToursSection';
import { TourDetailModal } from './components/TourDetailModal';
import { PrivateGroupSection } from './components/PrivateGroupSection';
import { InclusionsSection } from './components/InclusionsSection';
import { AboutOmar } from './components/AboutOmar';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { QuoteModal } from './components/QuoteModal';
import { Footer } from './components/Footer';
import { StickyWhatsApp } from './components/StickyWhatsApp';

export default function App() {
  // English is the default language as requested
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedTourForQuote, setSelectedTourForQuote] = useState<string | undefined>(undefined);

  useEffect(() => {
    document.documentElement.lang = currentLang;
    if (currentLang === 'it') {
      document.title = "Omar's Company | Tour e Safari Autentici in Kenya da Watamu";
    } else {
      document.title = "Omar's Company | Authentic Kenya Tours & Safaris in Watamu";
    }
  }, [currentLang]);

  const handleOpenQuoteModal = (tourId?: string) => {
    setSelectedTourForQuote(tourId);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedTourForQuote(undefined);
  };

  const handleExploreTours = () => {
    const toursEl = document.querySelector('#tours');
    if (toursEl) {
      toursEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F4EC] text-[#18201B] font-sans flex flex-col selection:bg-[#304C3A] selection:text-[#F7F4EC]">
      {/* Top Navigation */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Hero Section */}
      <Hero
        currentLang={currentLang}
        onExploreClick={handleExploreTours}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* The Experience / Intro Section */}
        <IntroSection currentLang={currentLang} />

        {/* Our Experiences / Tours */}
        <ToursSection
          tours={toursData}
          currentLang={currentLang}
          onSelectTour={setSelectedTour}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* Private or Group Section */}
        <PrivateGroupSection
          currentLang={currentLang}
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* Transport & Food Common Inclusions */}
        <InclusionsSection
          currentLang={currentLang}
        />

        {/* Meet Omar / Local Connection */}
        <AboutOmar
          currentLang={currentLang}
        />

        {/* Editorial Photo Gallery */}
        <GallerySection
          items={galleryItems}
          currentLang={currentLang}
        />

        {/* Reviews Section */}
        <ReviewsSection
          currentLang={currentLang}
        />

        {/* Contact & Final CTA */}
        <ContactSection
          currentLang={currentLang}
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Sticky Mobile/Desktop WhatsApp Button */}
      <StickyWhatsApp
        currentLang={currentLang}
      />

      {/* Tour Detail Modal */}
      <TourDetailModal
        tour={selectedTour}
        currentLang={currentLang}
        onClose={() => setSelectedTour(null)}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        currentLang={currentLang}
        initialTourId={selectedTourForQuote}
        onClose={handleCloseQuoteModal}
      />
    </div>
  );
}
