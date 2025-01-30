import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import TestimonialsSection from './TestimonialsSection';
import FAQSection from './FAQSection';
import CTASection from './CTASection';
import ScrollToTopButton from '../common/ScrollToTopButton';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <ScrollToTopButton />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Home; 