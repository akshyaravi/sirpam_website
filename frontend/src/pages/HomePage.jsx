import React from 'react';
import HeroSection from '../components/HeroSection';
import PromiseSection from '../components/PromiseSection';
import GallerySection from '../components/GallerySection';
import TestimonialsSection from '../components/TestimonialsSection';

const HomePage = () => {
  return (
    <div className="HomePage">
      <HeroSection />
      <PromiseSection />
      <GallerySection />
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;
