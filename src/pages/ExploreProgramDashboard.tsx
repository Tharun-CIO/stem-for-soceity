
import LoginStages from "@/components/ui/LoginStages";
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import GridBackground from '@/components/GridBackground';

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
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-cover animate-subtle-zoom"
        style={{
          backgroundImage: `url("/lovable-uploads/cc0094aa-ced3-4e50-b5f1-d61b7b6d2988.png")`,
          backgroundPosition: 'center 70%',
        }}
      />
      
      {/* Grid Background Overlay */}
      <GridBackground>
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        {/* Main Content Container */}
        <div className="relative z-10 min-h-screen">
          <LoginStages>
            {(stage) => (
              <>
                {/* Logo Element */}
                <div className={`absolute top-1/2 -translate-y-1/2 transition-all duration-[2500ms] ${
                  stage === 'initial' || stage === 'textFadeOut'
                    ? 'left-1/2 -translate-x-1/2' 
                    : 'left-[25%] -translate-x-1/2'
                }`}
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
                  transform: 'translate3d(var(--tw-translate-x), var(--tw-translate-y), 0)'
                }}>
                  <img 
                    src="/lovable-uploads/ceabc523-dba1-475b-b670-7ed6b88782a1.png" 
                    alt="STEM for Society Logo" 
                    className={`object-contain transition-all duration-[2500ms] ${
                      stage === 'initial' || stage === 'textFadeOut'
                        ? 'h-32 w-32 md:h-48 md:w-48 lg:h-64 lg:w-64' 
                        : 'h-40 w-40 md:h-56 md:w-56 lg:h-72 lg:w-72 opacity-50'
                    } ${stage === 'logoTransition' ? 'animate-pulse-glow-delayed' : ''}`}
                    style={{
                      transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
                    }}
                  />
                </div>

                {/* Text Element */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-out ${
                  stage === 'initial' 
                    ? 'opacity-100 translate-y-24 md:translate-y-32 lg:translate-y-40' 
                    : 'opacity-0 -translate-y-5'
                }`}>
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4 leading-tight">
                    Explore Our Programs & Services
                  </h1>
                </div>

                {/* Services Section */}
                <div className={`absolute right-0 top-0 h-full w-1/2 transition-all duration-[2500ms] ${
                  stage === 'logoTransition' 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-full opacity-0'
                }`}
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
                  transform: 'translate3d(var(--tw-translate-x), var(--tw-translate-y), 0)'
                }}>
                  {/* White transparent overlay with curved left corner */}
                  <div className="absolute inset-0 bg-white/95 rounded-l-3xl"></div>
                  
                  {/* Services Container */}
                  <div className="relative z-10 h-full max-h-screen overflow-y-auto flex flex-col justify-center px-6 md:px-12 py-8">
                    <div className="space-y-8">
                      {/* Header */}
                      <div className="mb-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
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

                {/* Mobile Layout */}
                <div className={`md:hidden absolute inset-0 transition-all duration-1000 ease-out ${
                  stage === 'logoTransition' ? 'opacity-100' : 'opacity-0'
                }`}>
                  {/* Mobile Logo */}
                  <div className="flex-1 flex items-center justify-center pt-16">
                    <img 
                      src="/lovable-uploads/ceabc523-dba1-475b-b670-7ed6b88782a1.png" 
                      alt="STEM for Society Logo" 
                      className="h-24 w-24 object-contain animate-pulse-glow-delayed opacity-50"
                    />
                  </div>
                  
                  {/* Mobile Services with white overlay and curved corners */}
                  <div className="flex-1 relative">
                    <div className="absolute inset-0 bg-white/95 rounded-t-3xl"></div>
                    <div className="relative z-10 max-h-[60vh] overflow-y-auto px-4 pt-8 pb-4">
                      <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                          Our Services
                        </h2>  
                      </div>
                      <div className="space-y-4">
                        {services.map((service, index) => (
                          <div 
                            key={index} 
                            onClick={() => handleServiceClick(service.route)} 
                            className="bg-white/90 rounded-xl p-4 shadow-lg cursor-pointer"
                          >
                            <h3 className="text-lg font-bold text-gray-800 mb-2">
                              {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {service.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </LoginStages>
        </div>
      </GridBackground>
    </div>
  );
};

export default ExploreProgramDashboard;
