import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
const ExploreProgramDashboard = () => {
  const navigate = useNavigate();
  const services = [{
    category: "Students (UG/PG/PhD), Job Seekers",
    title: "Career Counselling",
    description: "Get expert guidance to plan your academic and professional journey with confidence.",
    route: "/career-counselling"
  }, {
    category: "Students, Researchers, Young Professionals",
    title: "Psychology Counselling",
    description: "Access personalized mental wellness support to thrive in both studies and life.",
    route: "/psychology-counselling"
  }, {
    category: "Institution Faculty, Educators, Trainers",
    title: "Institution Faculty Development",
    description: "Empowering educators through curated training, upskilling, and teaching innovation.",
    route: "/institution-pricing"
  }, {
    category: "College Students, Campus Leaders",
    title: "Ambassador Program",
    description: "Become the face of STEM in your institution and develop real-world leadership skills.",
    route: "/campus-ambassador"
  }];
  const handleServiceClick = (route: string) => {
    navigate(route);
  };
  return <div className="min-h-screen flex">
      {/* Left side - Sky background with DNA logo */}
      <div className="flex-1 relative overflow-hidden">
        {/* Sky Background */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url('/lovable-uploads/bf14b553-ae53-47ee-95f3-165241216eef.png')`
      }}>
        </div>

        {/* DNA Helix Logo with "STEM FOR SOCIETY" text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
          {/* DNA Helix circular design */}
          
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
            {services.map((service, index) => <div key={index} onClick={() => handleServiceClick(service.route)} className="bg-white/90 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:bg-white group">
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
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};
export default ExploreProgramDashboard;