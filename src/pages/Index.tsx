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

const Index = () => {
  return (
    <div className="min-h-screen w-full">

      {/* 🌐 Grid Background Only for Header + Hero */}
      <div className="relative overflow-hidden">
      <div 
  className="absolute inset-0 opacity-50 pointer-events-none z-0"
  style={{
    backgroundImage: `
      linear-gradient(rgba(107,114,128,0.5) 2px, transparent 2px),
      linear-gradient(90deg, rgba(107,114,128,0.5) 2px, transparent 2px)
    `,
    backgroundSize: '100px 100px',
    WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 35%, transparent 100%)',
    maskImage: 'linear-gradient(to bottom, black 0%, transparent 35%, transparent 100%)',
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
    WebkitMaskSize: '100% 100%',
    maskSize: '100% 100%',
  }}
/>





        <div className="relative z-10">
          <Header />
          <Hero />
        </div>
      </div>

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
