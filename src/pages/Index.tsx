
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SectorsSection from '@/components/SectorsSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import ProgramStructure from '@/components/ProgramStructure';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <Hero />
      <SectorsSection />
      <WhyChooseSection />
      <ProgramStructure />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
