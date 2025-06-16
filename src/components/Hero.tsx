
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleExplorePrograms = () => {
    navigate('/explore-program-dashboard');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-blue-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-blue-200 rounded-full animate-bounce delay-300"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <p className="text-blue-600 text-sm font-medium mb-6 animate-fade-in tracking-wide">
            Empowering culture investments through STEM learning
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 animate-fade-in leading-tight">
            Let's <span className="text-blue-600">Innovate, Incubate and Impact</span> the world together!
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto animate-fade-in leading-relaxed">
            Join Us with our online Real-world challenges
          </p>
          
          <Button 
            onClick={handleExplorePrograms}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 animate-fade-in shadow-lg"
          >
            EXPLORE OUR PROGRAMS
          </Button>
        </div>
        
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Communication</h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">Engaging team communication skills through virtual collaboration</p>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-blue-600">500+</span>
              <span className="text-sm text-gray-500 font-medium">Students</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in delay-150 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Quality</h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">Trained Individuals</p>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-blue-600">22,000+</span>
              <span className="text-sm text-gray-500 font-medium">Graduates</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in delay-300 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Content</h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">Browse Our Courses</p>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-blue-600">100+</span>
              <span className="text-sm text-gray-500 font-medium">Courses</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-blue-600" />
      </div>
    </section>
  );
};

export default Hero;
