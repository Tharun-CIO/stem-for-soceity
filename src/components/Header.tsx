
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 hover:scale-110 transition-transform duration-300 shadow-lg">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold text-gray-900 tracking-tight">STEM FOR SOCIETY</span>
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-semibold text-lg transition-colors duration-300 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/cover"
              className="text-gray-700 hover:text-blue-600 font-semibold text-lg transition-colors duration-300 relative group"
            >
              Cover
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            {['Courses', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-blue-600 font-semibold text-lg transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="hover:scale-105 transition-transform duration-300 font-semibold px-6 py-2 border-2">
              Partner with Us
            </Button>
            <Link to="/login">
              <Button className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 font-semibold px-6 py-2 shadow-lg">
                Login
              </Button>
            </Link>
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
              <Link
                to="/"
                className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2"
              >
                Home
              </Link>
              <Link
                to="/cover"
                className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2"
              >
                Cover
              </Link>
              {['Courses', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2"
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <Button variant="outline" className="w-full font-semibold">
                  Partner with Us
                </Button>
                <Link to="/login" className="block">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 font-semibold">
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
