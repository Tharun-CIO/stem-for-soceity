
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Share2, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Community = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Join our community!</h1>
        </div>

        {/* QR Code Section - Updated with new QR code */}
        <div className="bg-green-100 rounded-2xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* QR Code */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 bg-white rounded-lg p-4 mb-4 shadow-sm">
                <img 
                  src="/lovable-uploads/218f64aa-6d49-4fa7-8c34-97cddea68f5e.png"
                  alt="QR Code" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-gray-800 font-medium">Stem for Society</p>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-green-600 mb-4">
                Stem for Society<br />
                WhatsApp group
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                to get update related to upcoming<br />
                Events, trainings, workshop
              </p>
              <a 
                href="https://chat.whatsapp.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 font-medium text-lg inline-flex items-center gap-2"
              >
                chat.whatsapp.com <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Community Image Section */}
        <div className="relative rounded-2xl overflow-hidden mb-8">
          <img 
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=2832&q=80"
            alt="Community members" 
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
            <div className="p-8">
              <p className="text-white text-xl font-medium leading-relaxed">
                Join our vibrant community and connect with like-minded individuals<br />
                passionate about innovation and collaboration.
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="text-center mb-12">
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Engage in enriching discussions, share ideas, and access valuable resources that empower 
            personal and professional growth. Together, we can create impactful solutions and inspire change. 
            Become a part of our journey today!
          </p>
        </div>
      </div>

      {/* Standard Footer */}
      <Footer />
    </div>
  );
};

export default Community;
