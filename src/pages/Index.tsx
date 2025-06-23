import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SectorsSection from '@/components/SectorsSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import PartnersSection from '@/components/PartnersSection';
import ProgramStructure from '@/components/ProgramStructure';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import GridBackground from '@/components/GridBackground';

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Grid Background Only for Header + Hero */}
      <GridBackground>
        <Header />
        <Hero />
      </GridBackground>

      {/* Other Sections */}
      <SectorsSection />
      <WhyChooseSection />
      <PartnersSection />
      <ProgramStructure />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
