
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Cover = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-110"
        style={{
          backgroundImage: `url('/lovable-uploads/782190e9-7d39-45ad-a040-86735610cc18.png')`
        }}
      >
        {/* Optional overlay for better text readability if needed */}
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* DNA Helix Logo */}
        <div className="mb-8 flex items-center justify-center">
          <div className="w-80 h-80 relative brightness-125 contrast-110">
            <svg viewBox="0 0 320 320" className="w-full h-full drop-shadow-2xl">
              {/* DNA Helix strands forming a circle */}
              <g className="animate-pulse">
                {/* Outer DNA helix circle */}
                <circle
                  cx="160"
                  cy="160"
                  r="120"
                  stroke="rgba(255,255,255,0.95)"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray="30 15"
                  className="drop-shadow-2xl filter brightness-110"
                />
                
                {/* Inner DNA helix circle */}
                <circle
                  cx="160"
                  cy="160"
                  r="90"
                  stroke="rgba(30,58,138,0.9)"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray="20 10"
                  className="drop-shadow-xl animate-spin filter brightness-125"
                  style={{ animationDuration: '20s' }}
                />
                
                {/* DNA connecting lines */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => {
                  const x1 = 160 + 90 * Math.cos((angle * Math.PI) / 180);
                  const y1 = 160 + 90 * Math.sin((angle * Math.PI) / 180);
                  const x2 = 160 + 120 * Math.cos((angle * Math.PI) / 180);
                  const y2 = 160 + 120 * Math.sin((angle * Math.PI) / 180);
                  
                  return (
                    <line
                      key={index}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="rgba(255,255,255,0.8)"
                      strokeWidth="4"
                      className="drop-shadow-lg filter brightness-110"
                    />
                  );
                })}
              </g>
              
              {/* Central text */}
              <text
                x="160"
                y="145"
                textAnchor="middle"
                className="fill-white text-5xl font-bold tracking-wider drop-shadow-2xl filter brightness-110"
                style={{ fontFamily: 'sans-serif' }}
              >
                STEM
              </text>
              <text
                x="160"
                y="185"
                textAnchor="middle"
                className="fill-white text-xl font-medium tracking-wide drop-shadow-2xl filter brightness-110"
                style={{ fontFamily: 'sans-serif' }}
              >
                FOR SOCIETY
              </text>
            </svg>
          </div>
        </div>

        {/* Tagline */}
        <h1 className="text-white text-4xl md:text-6xl font-light tracking-wide drop-shadow-2xl max-w-6xl mx-auto leading-tight mb-12 brightness-110 contrast-105">
          Let's Innovate, Incubate and Impact the world together!
        </h1>

        {/* Call to Action Button */}
        <Button 
          onClick={handleGetStarted}
          className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-xl font-semibold rounded-full shadow-2xl hover:scale-105 transition-all duration-300 brightness-110"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Cover;
