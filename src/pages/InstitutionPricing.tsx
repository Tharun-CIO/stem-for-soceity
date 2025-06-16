
import React from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Share2, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const InstitutionPricing = () => {
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Institution Plans & Pricing</h1>
        </div>

        {/* Hero Image Section */}
        <div className="relative bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl overflow-hidden mb-12">
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/39a6ec81-88d1-451f-af43-fc8a5337cb8f.png" 
              alt="Institution Plans & Pricing" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          <div className="relative p-12">
            <div className="text-white max-w-2xl">
              <p className="text-lg leading-relaxed">
                Plans for Schools, Institutions and Universities STEM for Society initiatives in 
                universities and institutions aim to enhance the skill development.
              </p>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mb-12">
          <p className="text-gray-700 text-base leading-relaxed">
            By fostering collaboration between academia and industry, these programs encourage innovation 
            and practical learning. They focus on diverse outreach, mentorship opportunities, and hands-on 
            projects, preparing students for future careers in STEM by addressing societal challenges
          </p>
        </div>

        {/* Pricing Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Basics</h3>
              <p className="text-sm text-gray-600 mb-6">Essential Skills to Shape a Promising Future</p>
              
              <div className="flex items-baseline justify-center space-x-2 mb-6">
                <span className="text-3xl font-bold text-gray-900">₹ 20,000.00</span>
                <span className="text-gray-500 text-sm">/ Per Year</span>
              </div>
              
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium text-base">
                GET STARTED
              </Button>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-600">Career Counselling</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-600">Psychology Counselling</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-600">Time Management Training</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-600">Personality Development</span>
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
              <p className="text-sm text-gray-600 mb-6">Comprehensive Training for a Brighter Tomorrow</p>
              
              <div className="flex items-baseline justify-center space-x-2 mb-6">
                <span className="text-3xl font-bold text-gray-900">₹ 40,000.00</span>
                <span className="text-gray-500 text-sm">/ Per Year</span>
              </div>
              
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium text-base">
                GET STARTED
              </Button>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-600">Career Counselling</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-600">Psychology Counselling</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-600">Sex Education</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-600">Entrepreneurship Training</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-600">Personality Development</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-600">Industrial Visit</span>
              </div>
            </div>
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

export default InstitutionPricing;
