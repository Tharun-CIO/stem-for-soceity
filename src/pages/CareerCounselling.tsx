
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GridBackground from '@/components/GridBackground';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Share2, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const CareerCounselling = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Career Counselling</h1>
        </div>

        {/* Hero Image Section with uploaded image */}
        <div className="relative rounded-2xl overflow-hidden mb-12">
          <img 
            src="/lovable-uploads/6fabb0fb-f5ce-4b4f-b5d4-2c8d51061b10.png" 
            alt="Career Counselling" 
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
            <div className="p-8">
              <div className="text-white">
                <p className="text-lg leading-relaxed max-w-2xl">
                  Stem For Society provide career counselling services by subject experts in 
                  making career choices by assessing their interests, skills, and goals.
                </p>
              </div>
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
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                <span>Career choice</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                <span>Shortlisting Abroad PhD</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                <span>Post Doc Application</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                <span>PG/PhD abroad application guidance</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                <span>CV/Resume prep</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                <span>Research Proposal editing</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                <span>Industry jobs</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                <span>LOR/SOP editing & preparation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Basic Plan */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Basic</h3>
              <p className="text-sm text-gray-600 mb-4">Want a Specific Service ?</p>
              
              <div className="flex items-baseline justify-center space-x-1 mb-4">
                <span className="text-2xl font-bold text-gray-900">₹ 2,000.00</span>
                <span className="text-gray-500 text-sm">/ Service</span>
              </div>
              
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium">
                GET STARTED
              </Button>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Standard</h3>
              <p className="text-sm text-gray-600 mb-4">Essential Skills to Shape a Promising Future</p>
              
              <div className="flex items-baseline justify-center space-x-1 mb-4">
                <span className="text-2xl font-bold text-gray-900">₹ 30,000.00</span>
                <span className="text-gray-500 text-sm">/ Person</span>
              </div>
              
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium">
                GET STARTED
              </Button>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-600">Extensive candidate profile review</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-600">Shortlisting of colls & University</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-600">Enhancing SOP & LOR</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-600">Refining Research proposal</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-600">Guidance for application</span>
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium</h3>
              <p className="text-sm text-gray-600 mb-4">Comprehensive Training for a Brighter Tomorrow</p>
              
              <div className="flex items-baseline justify-center space-x-1 mb-4">
                <span className="text-2xl font-bold text-gray-900">₹ 50,000.00</span>
                <span className="text-gray-500 text-sm">/ Person</span>
              </div>
              
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium">
                GET STARTED
              </Button>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-600">Extensive candidate profile review</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-600">Shortlisting of colls & University</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-600">Enhancing SOP & LOR</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-600">Refining Research proposal</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-600">Guidance for application</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-600">Connecting with Experts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-600">Interview readiness Program</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-600">Guidance for Funding</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CareerCounselling;
