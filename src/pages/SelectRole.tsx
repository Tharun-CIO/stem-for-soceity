import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const SelectRole = () => {
  const navigate = useNavigate();
  const handlePartnerIndividual = () => {
    navigate('/partner-login');
  };
  const handlePartnerInstitution = () => {
    navigate('/institution-login');
  };
  return <div className="min-h-screen flex">
      {/* Left side - Sky background with DNA logo and running people */}
      <div className="flex-1 relative overflow-hidden">
        {/* Sky Background */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-110" style={{
        backgroundImage: `url('/lovable-uploads/0107c03e-de5d-4312-a1ec-89a132b9e0aa.png')`
      }}>
          {/* Light overlay for better contrast */}
          <div className="absolute inset-0 bg-blue-200/20"></div>
        </div>

        {/* DNA Helix Logo with "STEM FOR SOCIETY" text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
          {/* DNA Helix Logo placeholder - you can replace with actual SVG */}
          
        </div>
      </div>

      {/* Right side - Role Selection with glass effect */}
      <div className="w-full max-w-2xl bg-white/30 backdrop-blur-lg border border-white/20 shadow-2xl flex flex-col justify-center px-12 py-16 relative">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Select your Role
            </h1>
            <p className="text-gray-700 text-lg">
              Log in as a student, ambassador, or partner institution.
            </p>
          </div>

          {/* Role Cards */}
          <div className="space-y-6">
            {/* Partner - Individual Card */}
            <div onClick={handlePartnerIndividual} className="bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl p-8 hover:bg-white/70 transition-all duration-200 cursor-pointer group shadow-lg">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-gray-600 text-lg font-medium">Partner – Individual</span>
                    <ArrowUpRight className="w-6 h-6 text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Become a Compass Ambassador
                  </h3>
                  
                  <p className="text-gray-700 text-base leading-relaxed">
                    Promote STEM for Society programs within your campus or community and 
                    help bridge the education gap while building your own leadership profile.
                  </p>
                </div>
              </div>
            </div>

            {/* Partner - Institution Card */}
            <div onClick={handlePartnerInstitution} className="bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl p-8 hover:bg-white/70 transition-all duration-200 cursor-pointer group shadow-lg">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-gray-600 text-lg font-medium">Partner – Institution</span>
                    <ArrowUpRight className="w-6 h-6 text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Partner Institution Portal
                  </h3>
                  
                  <p className="text-gray-700 text-base leading-relaxed">
                    Manage collaborations, propose training programs, and access institutional 
                    insights for your students' academic and career growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default SelectRole;