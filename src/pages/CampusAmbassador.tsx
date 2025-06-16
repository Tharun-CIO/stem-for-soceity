
import React from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Share2, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CampusAmbassador = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Navigation Bar */}
      <div className="bg-white border-b pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-blue-500 text-white border-blue-500 rounded-full px-4 hover:bg-blue-600">
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </Button>
            </Link>
            <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-blue-500 text-white border-blue-500 rounded-full px-4 hover:bg-blue-600">
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Campus Ambassador Program!</h1>
        </div>

        {/* Hero Image Section */}
        <div className="relative rounded-2xl overflow-hidden mb-12 shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2832&q=80"
            alt="Campus Ambassador Program" 
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
            <div className="p-8">
              <p className="text-white text-lg leading-relaxed max-w-4xl">
                Embrace the role of a Stem For Society initiated to Support students with ambassador at your college or university and help us spread the excitement far and wide! As a Campus Ambassador, you will be instrumental in promoting the festival, engaging with fellow students, and infusing the spirit of Stem for Society into your campus community
              </p>
            </div>
          </div>
        </div>

        {/* Why Join Section */}
        <div className="bg-blue-100 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 bg-blue-200 px-4 py-3 rounded-lg inline-block">
            Why Join?
          </h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-gray-800 text-lg">
                Access to exclusive STEM for Society opportunities and a chance to win a Campus Ambassador Points
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-gray-800 text-lg">
                Certificates of recognition for your contributions
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-gray-800 text-lg">
                Opportunities to network with fellow participants and free access to Stem for Society Conference
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-gray-800 text-lg">
                30% discount in all the program offered by Stem for Society
              </p>
            </div>
          </div>
        </div>

        {/* Ready to Apply Section */}
        <div className="bg-blue-100 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 bg-blue-200 px-4 py-3 rounded-lg inline-block">
            Ready to apply?
          </h2>
          <p className="text-gray-800 text-lg mb-8">
            Sign up today to embark on this exciting journey. Let's make Stem for Society unforgettable together!
          </p>
          <div className="text-right">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold">
              REGISTER NOW
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Logo */}
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
              <span className="text-blue-900 font-bold text-xl">S</span>
            </div>
            <div>
              <h4 className="text-2xl font-bold">STEM FOR SOCIETY</h4>
              <p className="text-blue-200">Let's innovate, incubate and impact the world together!</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Programs */}
            <div>
              <h5 className="font-bold text-lg mb-4">PROGRAMS</h5>
              <div className="space-y-3 text-blue-200">
                <p className="hover:text-white cursor-pointer">Explore Courses</p>
                <p className="hover:text-white cursor-pointer">Psychology counselling</p>
                <p className="hover:text-white cursor-pointer">Career counselling</p>
              </div>
            </div>

            {/* For Institutions */}
            <div>
              <h5 className="font-bold text-lg mb-4">FOR INSTITUTIONS</h5>
              <div className="space-y-3 text-blue-200">
                <p className="hover:text-white cursor-pointer">Plans and pricings</p>
                <p className="hover:text-white cursor-pointer">Campus Ambassador Program</p>
              </div>
            </div>

            {/* Community */}
            <div>
              <h5 className="font-bold text-lg mb-4">COMMUNITY</h5>
              <div className="space-y-3 text-blue-200">
                <p className="hover:text-white cursor-pointer">Join Community</p>
                <p className="hover:text-white cursor-pointer">Scientific Communication Blog</p>
                <p className="hover:text-white cursor-pointer">Our Youtube Channel</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="font-bold text-lg mb-4">QUICK LINKS</h5>
              <div className="space-y-3">
                <Button className="bg-blue-700 hover:bg-blue-600 text-white w-full">Register</Button>
                <Button className="bg-blue-700 hover:bg-blue-600 text-white w-full">Login</Button>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="font-bold text-lg mb-4">SUBSCRIBE FOR THE LATEST UPDATES</h5>
              <div className="space-y-3">
                <input 
                  type="text" 
                  placeholder="First name"
                  className="w-full px-4 py-2 rounded bg-blue-800 text-white placeholder-blue-300 border border-blue-700"
                />
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded bg-blue-800 text-white placeholder-blue-300 border border-blue-700"
                />
                <Button className="w-full bg-blue-600 hover:bg-blue-500">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Contact Info and Social */}
          <div className="mt-12 pt-8 border-t border-blue-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2 text-blue-200 text-sm">
                <p>717 Broadway, floor 2, New York NY 10007</p>
                <p>844-402-4344</p>
                <p>support@stemnovativehealth.com</p>
              </div>
              
              <div className="flex justify-end space-x-4">
                <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer">
                  <span className="text-white text-sm">T</span>
                </div>
                <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer">
                  <span className="text-white text-sm">I</span>
                </div>
                <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer">
                  <span className="text-white text-sm">L</span>
                </div>
                <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer">
                  <span className="text-white text-sm">Y</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-8 border-t border-blue-800">
            <p className="text-blue-200 text-sm">© 2025 STEM for Society. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CampusAmbassador;
