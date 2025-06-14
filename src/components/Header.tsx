
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3 hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">STEM FOR SOCIETY</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Courses', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="hover:scale-105 transition-transform duration-300">
              Partner with Us
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300">
              Login
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-300"
          >
            <div className="space-y-1">
              <div className={`w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-gray-600 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <div className="space-y-4">
              {['Home', 'Courses', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full">
                  Partner with Us
                </Button>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
