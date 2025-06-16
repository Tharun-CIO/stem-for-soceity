
import React from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Share2, Shield, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const PsychologyCounselling = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Navigation Bar */}
      <div className="bg-white border-b pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-blue-100 text-blue-600 border-blue-200 rounded-full px-4">
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </Button>
            </Link>
            <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-blue-100 text-blue-600 border-blue-200 rounded-full px-4">
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
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Psychology Counselling</h1>
        </div>

        {/* Hero Image Section */}
        <div className="relative bg-gradient-to-r from-teal-400 to-teal-500 rounded-2xl overflow-hidden mb-12">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Psychology Counselling" 
              className="w-full h-full object-cover mix-blend-overlay"
            />
          </div>
          <div className="relative p-12">
            <div className="text-white">
              <p className="text-lg leading-relaxed max-w-2xl">
                Stem For Society Initiated to Support students with psychological problems is 
                essential for their well-being and academic success.
              </p>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mb-12">
          <p className="text-gray-700 text-lg leading-relaxed">
            Stem For Society, establishing open communication channels allows students to express their 
            feelings and seek help without stigma. Providing access to counselling services ensures that 
            students receive professional support tailored to their needs
          </p>
        </div>

        {/* Service Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Service Info */}
          <div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 flex items-center space-x-3">
              <Shield className="h-5 w-5 text-yellow-600" />
              <span className="text-yellow-800 font-medium">Your identity will be 100% confidential</span>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Psychology Counselling for Students
              </h2>
              <p className="text-gray-600">
                Talk to trained experts about your mental health, 
                academics, or stress - safely and without judgment.
              </p>
            </div>
          </div>

          {/* Right Column - Pricing */}
          <div>
            <div className="bg-white rounded-lg border p-6 mb-6">
              <div className="flex items-baseline space-x-2 mb-4">
                <span className="text-3xl font-bold text-gray-900">₹ 2,000.00</span>
                <span className="text-gray-500">/ For 30 mins</span>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-start space-x-3">
                <Leaf className="h-5 w-5 text-green-600 mt-0.5" />
                <div className="text-green-800 text-sm">
                  <p className="font-medium">If you have a Valid student (UG/PG/Ph.D) ID card 75% fee will be waived off by Stem for Society.</p>
                </div>
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold">
                BOOK YOUR SESSION
              </Button>
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

export default PsychologyCounselling;
