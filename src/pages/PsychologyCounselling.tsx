
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Share2, Shield, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const PsychologyCounselling = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Navigation Bar - Removed pt-20 to fix spacing */}
      <div className="bg-white border-b">
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

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Psychology Counselling</h1>
        </div>

        {/* Hero Image Section - Doubled height from h-full to h-96 */}
        <div className="relative bg-gradient-to-r from-teal-400 to-teal-500 rounded-2xl overflow-hidden mb-12">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Psychology Counselling" 
              className="w-full h-96 object-cover mix-blend-overlay"
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
              
              <Link to="/psychology-booking">
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 text-lg font-semibold">
                  BOOK YOUR SESSION
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Standard Footer */}
      <Footer />
    </div>
  );
};

export default PsychologyCounselling;
