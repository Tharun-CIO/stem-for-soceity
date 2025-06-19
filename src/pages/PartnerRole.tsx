
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { GraduationCap, Building2, ArrowRight } from 'lucide-react';

const PartnerRole = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
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
        <div className="lg:w-1/2 relative flex items-center justify-center px-8">
          <div className="text-center text-white">
            <img 
              src="/lovable-uploads/ceabc523-dba1-475b-b670-7ed6b88782a1.png" 
              alt="STEM for Society Logo" 
              className="h-40 w-40 md:h-56 md:w-56 lg:h-72 lg:w-72 opacity-50 mx-auto mb-12 animate-pulse-glow-delayed"
            />
            <h1 className="text-4xl font-bold mb-6">STEM FOR SOCIETY</h1>
            <p className="text-xl">Partner with us to transform education!</p>
          </div>
        </div>

        {/* Right Section - Role Selection with 50% opacity */}
        <div className="lg:w-1/2 relative">
          {/* White overlay with 50% opacity and curved left corner */}
          <div className="absolute inset-0 bg-white/50 rounded-l-3xl backdrop-blur-sm"></div>
          
          {/* Arrow in top right corner */}
          <div className="absolute top-8 right-8 z-20">
            <div className="w-12 h-12 bg-[#0389FF] rounded-full flex items-center justify-center">
              <ArrowRight className="h-6 w-6 text-white" />
            </div>
          </div>
          
          {/* Content Container */}
          <div className="relative z-10 h-full flex items-center justify-center px-12 py-20">
            <div className="w-full max-w-lg space-y-16">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Select your Role</h2>
                <p className="text-gray-600 text-lg">Log in as a student, ambassador, or partner institution.</p>
              </div>

              <div className="space-y-12">
                <Link to="/campus-ambassador-signup">
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-[#0389FF] bg-white/70 backdrop-blur-sm rounded-xl">
                    <CardContent className="p-10 text-left">
                      <div className="flex items-start space-x-6">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-[#0389FF] transition-colors flex-shrink-0">
                          <GraduationCap className="h-8 w-8 text-[#0389FF] group-hover:text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-800 mb-3">Become a Campus Ambassador</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">Promote STEM for Society programs within your campus or community and help bridge the education gap while building your own leadership profile.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                <Link to="/partner-institution-signup">
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-[#0389FF] bg-white/70 backdrop-blur-sm rounded-xl">
                    <CardContent className="p-10 text-left">
                      <div className="flex items-start space-x-6">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-[#0389FF] transition-colors flex-shrink-0">
                          <Building2 className="h-8 w-8 text-[#0389FF] group-hover:text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-800 mb-3">Partner Institution Portal</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">Manage collaborations, propose training programs, and access institutional insights for your students' academic and career growth.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>

              <div className="text-center pt-8">
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
          <div className="flex-1 flex items-center justify-center pt-20 pb-8">
            <div className="text-center text-white px-4">
              <img 
                src="/lovable-uploads/ceabc523-dba1-475b-b670-7ed6b88782a1.png" 
                alt="STEM for Society Logo" 
                className="h-24 w-24 mx-auto mb-6 opacity-50"
              />
              <h1 className="text-2xl font-bold mb-4">STEM FOR SOCIETY</h1>
              <p className="text-sm">Partner with us to transform education!</p>
            </div>
          </div>
          
          {/* Mobile Role Selection with 50% opacity */}
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-white/50 rounded-t-3xl backdrop-blur-sm"></div>
            
            {/* Arrow in top right corner for mobile */}
            <div className="absolute top-6 right-6 z-20">
              <div className="w-10 h-10 bg-[#0389FF] rounded-full flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </div>
            
            <div className="relative z-10 h-full overflow-y-auto flex items-start justify-center px-6 pt-12 pb-8">
              <div className="w-full max-w-sm space-y-12">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Select your Role</h2>
                  <p className="text-gray-600 text-sm">Log in as a student, ambassador, or partner institution.</p>
                </div>

                <div className="space-y-8">
                  <Link to="/campus-ambassador-signup">
                    <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-[#0389FF] bg-white/70 backdrop-blur-sm rounded-xl">
                      <CardContent className="p-6 text-left">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-[#0389FF] transition-colors flex-shrink-0">
                            <GraduationCap className="h-6 w-6 text-[#0389FF] group-hover:text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Become a Campus Ambassador</h3>
                            <p className="text-gray-600 text-xs leading-relaxed">Promote STEM for Society programs within your campus or community.</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>

                  <Link to="/partner-institution-signup">
                    <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-[#0389FF] bg-white/70 backdrop-blur-sm rounded-xl">
                      <CardContent className="p-6 text-left">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-[#0389FF] transition-colors flex-shrink-0">
                            <Building2 className="h-6 w-6 text-[#0389FF] group-hover:text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Partner Institution Portal</h3>
                            <p className="text-gray-600 text-xs leading-relaxed">Manage collaborations and propose training programs.</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>

                <div className="text-center pt-6">
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
  );
};

export default PartnerRole;
