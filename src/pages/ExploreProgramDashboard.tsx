
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ExploreProgramDashboard = () => {
  const navigate = useNavigate();

  const services = [
    {
      category: "Students (UG/PG/PhD), Job Seekers",
      title: "Career Counselling",
      description: "Get expert guidance to plan your academic and professional journey with confidence.",
      route: "/career-counselling"
    },
    {
      category: "Students, Researchers, Young Professionals",
      title: "Psychology Counselling",
      description: "Access personalized mental wellness support to thrive in both studies and life.",
      route: "/psychology-counselling"
    },
    {
      category: "Institution Faculty, Educators, Trainers",
      title: "Institution Faculty Development",
      description: "Empowering educators through curated training, upskilling, and teaching innovation.",
      route: "/institution-pricing"
    },
    {
      category: "College Students, Campus Leaders",
      title: "Ambassador Program",
      description: "Become the face of STEM in your institution and develop real-world leadership skills.",
      route: "/campus-ambassador"
    }
  ];

  const handleServiceClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Sky background with DNA logo */}
      <div className="flex-1 relative overflow-hidden">
        {/* Sky Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: `url('/lovable-uploads/bf14b553-ae53-47ee-95f3-165241216eef.png')`
          }}
        >
        </div>

        {/* DNA Helix Logo with "STEM FOR SOCIETY" text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
          {/* DNA Helix circular design */}
          <div className="relative w-80 h-80 mx-auto mb-8">
            {/* DNA Helix Circle with multiple DNA strands forming a circular pattern */}
            <div className="absolute inset-0">
              {/* Create multiple DNA helix elements around the circle */}
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className="absolute w-16 h-32 border-4 border-white/40 rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${index * 45}deg) translateY(-80px)`,
                    transformOrigin: 'center center'
                  }}
                >
                  {/* DNA base pairs */}
                  <div className="absolute top-2 left-1/2 w-1 h-1 bg-white/60 rounded-full transform -translate-x-1/2"></div>
                  <div className="absolute top-6 left-1/2 w-1 h-1 bg-white/60 rounded-full transform -translate-x-1/2"></div>
                  <div className="absolute top-10 left-1/2 w-1 h-1 bg-white/60 rounded-full transform -translate-x-1/2"></div>
                </div>
              ))}
            </div>
            
            {/* Center Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
              <h1 className="text-5xl font-bold mb-2 tracking-wider opacity-90">STEM</h1>
              <p className="text-xl font-light tracking-widest opacity-80">FOR SOCIETY</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Services Section */}
      <div className="w-full max-w-2xl bg-white/95 backdrop-blur-xl border-l border-white/30 shadow-2xl flex flex-col justify-center px-12 py-16">
        <div className="space-y-8">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-5xl font-bold text-gray-800 mb-4 text-center">
              Our Services
            </h2>
          </div>

          {/* Services Cards */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => handleServiceClick(service.route)}
                className="bg-white/90 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:bg-white group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 font-medium mb-2">
                      {service.category}
                    </p>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreProgramDashboard;
