import React from 'react';
import HeroSection from '../components/HeroSection';
import PromiseSection from '../components/PromiseSection';
import GallerySection from '../components/GallerySection';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';

const HomePage = () => {
  return (
    <div className="HomePage">
      <HeroSection />
      <PromiseSection />
      <GallerySection />
      
      <TestimonialsSection />
      <ProcessSection />
    </div>
  );
};

export default HomePage;
