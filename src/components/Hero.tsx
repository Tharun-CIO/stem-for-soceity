
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-blue-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-blue-200 rounded-full animate-bounce delay-300"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <p className="text-blue-600 text-sm font-medium mb-4 animate-fade-in">
            Empowering culture investmens through STEM learning
          </p>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Let's <span className="text-blue-600">Innovate, Incubate and Impact</span> the world together!
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
            Join Us with our online Real-world challenges
          </p>
          
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 animate-fade-in">
            EXPLORE OUR PROGRAMS
          </Button>
        </div>
        
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Communication</h3>
            <p className="text-gray-600 text-sm mb-4">Engaging team communication skills through virtual collaboration</p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-blue-600">500+</span>
              <span className="text-sm text-gray-500">Students</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in delay-150">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality</h3>
            <p className="text-gray-600 text-sm mb-4">Trained Individuals</p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-blue-600">22,000+</span>
              <span className="text-sm text-gray-500">Graduates</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in delay-300">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Content</h3>
            <p className="text-gray-600 text-sm mb-4">Browse Our Courses</p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-blue-600">100+</span>
              <span className="text-sm text-gray-500">Courses</span>
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
