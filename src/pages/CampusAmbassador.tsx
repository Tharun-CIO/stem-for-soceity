import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GridBackground from '@/components/GridBackground';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Share2, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CampusAmbassador = () => {
  return (
    <div className="min-h-screen bg-gray-50">
              <div className="relative overflow-hidden min-h-screen"style={{ height: '100%', minHeight: '100%' }}
>
  {/* Grid background */}
  <div 
    className="absolute inset-0 opacity-50 pointer-events-none z-0"
    style={{
      minHeight: '100vh',
      backgroundImage: `
        linear-gradient(rgba(107,114,128,0.5) 2px, transparent 2px),
        linear-gradient(90deg, rgba(107,114,128,0.5) 2px, transparent 2px)
      `,
      backgroundSize: '100px 100px',
     WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 35%, transparent 100%)',
maskImage: 'linear-gradient(to bottom, black 0%, transparent 35%, transparent 100%)',


      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskSize: '100% 100%',
      maskSize: '100% 100%',
    }}
  />

  {/* Content above grid */}
  <div className="relative z-10">
    <Header />

    {/* Navigation Bar */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex items-center justify-between">
        <Link to="/">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center space-x-2 bg-[#0389FF] text-white border-[#0389FF] rounded-full px-4 hover:bg-[#0389FF]/90"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>
        </Link>

        <Button
          variant="outline"
          size="sm"
          className="flex items-center space-x-2 bg-[#0389FF] text-white border-[#0389FF] rounded-full px-4 hover:bg-[#0389FF]/90"
        >
          <Share2 className="h-4 w-4" />
          <span>Share</span>
        </Button>
      </div>
    </div>
       <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Campus Ambassador Program!</h1>
        </div>

  </div>
</div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        
        {/* Hero Image Section with uploaded image */}
        <div className="relative rounded-2xl overflow-hidden mb-12 shadow-lg">
          <img 
            src="/lovable-uploads/img5.png"
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
            <Link to="/campus-ambassador-booking">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold">
                REGISTER NOW
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CampusAmbassador;
