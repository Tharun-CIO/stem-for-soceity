
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GridBackground from '@/components/GridBackground';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Share2, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const InstitutionPricing = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <GridBackground>
        <Header />
        
        {/* Navigation Bar */}
        <div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link to="/">
                <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-[#0389FF] text-white border-[#0389FF] rounded-full px-4 hover:bg-[#0389FF]/90">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back</span>
                </Button>
              </Link>
              <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-[#0389FF] text-white border-[#0389FF] rounded-full px-4 hover:bg-[#0389FF]/90">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </Button>
            </div>
          </div>
        </div>
      </GridBackground>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Institution Plans & Pricing</h1>
        </div>

        {/* Hero Image Section with uploaded image */}
        <div className="relative rounded-2xl overflow-hidden mb-12">
          <img 
            src="/lovable-uploads/39558913-b076-4d6b-8dfc-daece1423218.png" 
            alt="Institution Plans & Pricing" 
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
            <div className="p-8">
              <div className="text-white max-w-2xl">
                <p className="text-lg leading-relaxed">
                  Plans for Schools, Institutions and Universities STEM for Society initiatives in 
                  universities and institutions aim to enhance the skill development.
                </p>
              </div>
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
              
              <Link to="/institution-booking">
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium text-base">
                  GET STARTED
                </Button>
              </Link>
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
              
              <Link to="/institution-booking">
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium text-base">
                  GET STARTED
                </Button>
              </Link>
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

      <Footer />
    </div>
  );
};

export default InstitutionPricing;
