
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-800 font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">STEM FOR SOCIETY</span>
            </div>
            <p className="text-blue-200 mb-6 text-sm">
              Let's make societal transformations in the upcoming generations
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {['📧', '📱', '🌐', '💼'].map((icon, index) => (
                <div
                  key={index}
                  className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 cursor-pointer hover:scale-110 transform"
                >
                  <span>{icon}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-blue-200">
              {['Home', 'Courses', 'About Us', 'Contact', 'Blog'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors duration-300 hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Programs */}
          <div>
            <h3 className="font-bold text-lg mb-4">Programs</h3>
            <ul className="space-y-2 text-blue-200">
              {['Student Programs', 'Mentoring', 'Corporate Training', 'Certification'].map((program) => (
                <li key={program}>
                  <a href="#" className="hover:text-white transition-colors duration-300 hover:underline">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
            <p className="text-blue-200 mb-4 text-sm">
              Subscribe to our newsletter for the latest updates
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder-blue-200"
              />
              <Button className="w-full bg-white text-blue-800 hover:bg-blue-50 transition-colors duration-300">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-700 mt-12 pt-8 text-center text-blue-200 text-sm">
          <p>&copy; 2024 Stem for Society. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
