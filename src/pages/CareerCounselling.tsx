
import React from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Share2, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const CareerCounselling = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Navigation Bar */}
      <div className="bg-white border-b pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-blue-500 text-white border-blue-500 rounded-full px-4">
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </Button>
            </Link>
            <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-blue-500 text-white border-blue-500 rounded-full px-4">
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
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Career Counselling</h1>
        </div>

        {/* Hero Image Section */}
        <div className="relative bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl overflow-hidden mb-12">
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/68900e8a-ac41-4c5f-ac2c-d8e77058ece2.png" 
              alt="Career Counselling" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          <div className="relative p-12">
            <div className="text-white">
              <p className="text-lg leading-relaxed max-w-2xl">
                Stem For Society provide career counselling services by subject experts in 
                making career choices by assessing their interests, skills, and goals.
              </p>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mb-12">
          <p className="text-gray-700 text-base leading-relaxed">
            These services offer personalized advice, resources, and support to navigate education paths, job 
            opportunities, and industry trends. By addressing career-related concerns, they empower 
            individuals to build fulfilling careers and achieve long-term professional success. Stem for Society 
            has 200+ subject experts as mentor across globally
          </p>
        </div>

        {/* Services Section */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-gray-600 mb-6">Our service includes</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span>Career choice</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span>Shortlisting Abroad PhD</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span>Post Doc Application</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span>PG/PhD abroad application guidance</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span>CV/Resume prep</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span>Research Proposal editing</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span>Industry jobs</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span>LOR/SOP editing & preparation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Basic Plan */}
          <div className="bg-white rounded-lg border p-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Basic</h3>
              <p className="text-sm text-gray-600 mb-4">Want a Specific Service ?</p>
              
              <div className="flex items-baseline justify-center space-x-1 mb-4">
                <span className="text-2xl font-bold text-gray-900">₹ 2,000.00</span>
                <span className="text-gray-500 text-sm">/ Service</span>
              </div>
              
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2">
                GET STARTED
              </Button>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="bg-white rounded-lg border p-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Standard</h3>
              <p className="text-sm text-gray-600 mb-4">Essential Skills to Shape a Promising Future</p>
              
              <div className="flex items-baseline justify-center space-x-1 mb-4">
                <span className="text-2xl font-bold text-gray-900">₹ 30,000.00</span>
                <span className="text-gray-500 text-sm">/ Person</span>
              </div>
              
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2">
                GET STARTED
              </Button>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-gray-600">Extensive candidate profile review</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-gray-600">Shortlisting of colls & University</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-gray-600">Enhancing SOP & LOR</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-gray-600">Refining Research proposal</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-gray-600">Guidance for application</span>
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-lg border p-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium</h3>
              <p className="text-sm text-gray-600 mb-4">Comprehensive Training for a Brighter Tomorrow</p>
              
              <div className="flex items-baseline justify-center space-x-1 mb-4">
                <span className="text-2xl font-bold text-gray-900">₹ 50,000.00</span>
                <span className="text-gray-500 text-sm">/ Person</span>
              </div>
              
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2">
                GET STARTED
              </Button>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-gray-600">Extensive candidate profile review</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-gray-600">Shortlisting of colls & University</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-gray-600">Enhancing SOP & LOR</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-gray-600">Refining Research proposal</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-gray-600">Guidance for application</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-gray-600">Connecting with Experts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-gray-600">Interview readiness Program</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-gray-600">Guidance for Funding</span>
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
                <Button className="bg-blue-700 hover:bg-blue-600 text-white">Register</Button>
                <Button className="bg-blue-700 hover:bg-blue-600 text-white">Login</Button>
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
                <p>37 Broadway, floor 2, New York NY 10007</p>
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

export default CareerCounselling;
