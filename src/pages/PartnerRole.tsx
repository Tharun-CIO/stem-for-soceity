
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { GraduationCap, Building2 } from 'lucide-react';
import Footer from '@/components/Footer';

const PartnerRole = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 relative overflow-hidden">
        {/* Animated Background */}
        <div 
          className="absolute inset-0 bg-cover animate-subtle-zoom"
          style={{
            backgroundImage: `url("/lovable-uploads/cc0094aa-ced3-4e50-b5f1-d61b7b6d2988.png")`,
            backgroundPosition: 'center 75%',
          }}
        />

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex min-h-screen relative z-10">
          {/* Left Section - Logo */}
          <div className="lg:w-1/2 relative flex items-center justify-center">
            <div className="text-center text-white">
              <img 
                src="/lovable-uploads/ceabc523-dba1-475b-b670-7ed6b88782a1.png" 
                alt="STEM for Society Logo" 
                className="h-40 w-40 md:h-56 md:w-56 lg:h-72 lg:w-72 opacity-50 mx-auto mb-8 animate-pulse-glow-delayed"
              />
              <h1 className="text-4xl font-bold mb-4">STEM FOR SOCIETY</h1>
              <p className="text-xl">Partner with us to transform education!</p>
            </div>
          </div>

          {/* Right Section - Role Selection with 50% opacity */}
          <div className="lg:w-1/2 relative">
            {/* White overlay with 50% opacity and curved left corner */}
            <div className="absolute inset-0 bg-white/50 rounded-l-3xl backdrop-blur-sm"></div>
            
            {/* Content Container */}
            <div className="relative z-10 h-full flex items-center justify-center px-8 py-16">
              <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Choose Your Role</h2>
                  <p className="text-gray-600">Select how you'd like to partner with us</p>
                </div>

                <div className="space-y-6">
                  <Link to="/campus-ambassador-signup">
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-[#0389FF] bg-white/70 backdrop-blur-sm rounded-xl">
                      <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0389FF] transition-colors">
                          <GraduationCap className="h-8 w-8 text-[#0389FF] group-hover:text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Campus Ambassador</h3>
                        <p className="text-gray-600 text-sm">Represent STEM for Society in your institution and help spread STEM education</p>
                      </CardContent>
                    </Card>
                  </Link>

                  <Link to="/partner-institution-signup">
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-[#0389FF] bg-white/70 backdrop-blur-sm rounded-xl">
                      <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0389FF] transition-colors">
                          <Building2 className="h-8 w-8 text-[#0389FF] group-hover:text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Institution Partner</h3>
                        <p className="text-gray-600 text-sm">Partner your institution with us to provide quality STEM education programs</p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>

                <div className="text-center pt-6">
                  <p className="text-gray-600 text-sm">
                    Already have an account?{' '}
                    <Link to="/institution-login" className="text-[#0389FF] hover:text-[#0389FF]/80 font-medium underline">
                      Sign in here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden relative z-10 min-h-screen">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("/lovable-uploads/cc0094aa-ced3-4e50-b5f1-d61b7b6d2988.png")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center bottom',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          </div>
          
          {/* Mobile Content */}
          <div className="relative z-10 min-h-screen flex flex-col">
            {/* Mobile Logo */}
            <div className="flex-1 flex items-center justify-center pt-16">
              <div className="text-center text-white">
                <img 
                  src="/lovable-uploads/ceabc523-dba1-475b-b670-7ed6b88782a1.png" 
                  alt="STEM for Society Logo" 
                  className="h-24 w-24 mx-auto mb-4 opacity-50"
                />
                <h1 className="text-2xl font-bold mb-2">STEM FOR SOCIETY</h1>
                <p className="text-sm">Partner with us to transform education!</p>
              </div>
            </div>
            
            {/* Mobile Role Selection with 50% opacity */}
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-white/50 rounded-t-3xl backdrop-blur-sm"></div>
              <div className="relative z-10 h-full overflow-y-auto flex items-start justify-center px-4 pt-8 pb-4">
                <div className="w-full max-w-sm space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Choose Your Role</h2>
                    <p className="text-gray-600 text-sm">Select how you'd like to partner with us</p>
                  </div>

                  <div className="space-y-4">
                    <Link to="/campus-ambassador-signup">
                      <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-[#0389FF] bg-white/70 backdrop-blur-sm rounded-xl">
                        <CardContent className="p-6 text-center">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#0389FF] transition-colors">
                            <GraduationCap className="h-6 w-6 text-[#0389FF] group-hover:text-white" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">Campus Ambassador</h3>
                          <p className="text-gray-600 text-xs">Represent STEM for Society in your institution</p>
                        </CardContent>
                      </Card>
                    </Link>

                    <Link to="/partner-institution-signup">
                      <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-[#0389FF] bg-white/70 backdrop-blur-sm rounded-xl">
                        <CardContent className="p-6 text-center">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#0389FF] transition-colors">
                            <Building2 className="h-6 w-6 text-[#0389FF] group-hover:text-white" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">Institution Partner</h3>
                          <p className="text-gray-600 text-xs">Partner your institution with us</p>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>

                  <div className="text-center pt-4">
                    <p className="text-gray-600 text-xs">
                      Already have an account?{' '}
                      <Link to="/institution-login" className="text-[#0389FF] hover:text-[#0389FF]/80 font-medium underline">
                        Sign in here
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PartnerRole;
