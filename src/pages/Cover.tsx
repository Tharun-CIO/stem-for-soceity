import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
const Cover = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate('/login');
  };
  return <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url('/lovable-uploads/782190e9-7d39-45ad-a040-86735610cc18.png')`
    }}>
        {/* Optional overlay for better text readability if needed */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* DNA Helix Logo */}
        <div className="mb-8">
          <div className="w-80 h-80 relative">
            
          </div>
        </div>

        {/* Tagline */}
        

        {/* Call to Action Button */}
        
      </div>
    </div>;
};
export default Cover;