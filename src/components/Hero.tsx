
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const stats = [
    { 
      title: "Industry & Institution Collaboration",
      subtitle: "Collaboration", 
      description: "Building stronger academic-industry ties to shape future-ready learners.",
      stats: [
        { label: "Institution Partners", value: "40+" },
        { label: "Industry Partners", value: "70+" },
        { label: "Learning partners", value: "Trusted" }
      ]
    },
    { 
      title: "Trained Individuals",
      subtitle: "Growth", 
      description: "Much more students on our platform from the world",
      stats: [
        { label: "Trained Students", value: "22,000+" }
      ],
      hasAvatars: true
    },
    { 
      title: "Discover Our Courses",
      subtitle: "Course", 
      description: "Gain in-depth knowledge from expert mentors with our carefully curated courses.",
      stats: [
        { label: "World class Courses", value: "100+" },
        { label: "Success Rate", value: "90%" }
      ]
    }
  ];

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Fading Grid Background */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
          mask: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0) 100%)',
          WebkitMask: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0) 100%)'
        }}
      />

      {/* Animated connection elements */}
      <div className="absolute top-16 left-12 hidden lg:block">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
        <div className="w-px h-24 bg-gradient-to-b from-blue-500 to-transparent ml-1 mt-2 animate-pulse"></div>
        <div className="w-40 h-px bg-gradient-to-r from-blue-500 to-transparent mt-2 animate-pulse delay-300"></div>
      </div>
      
      <div className="absolute top-32 right-16 hidden lg:block">
        <div className="w-px h-32 bg-gradient-to-b from-transparent to-blue-500 animate-pulse delay-500"></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full -ml-1 animate-ping delay-700"></div>
        <div className="w-32 h-px bg-gradient-to-l from-blue-500 to-transparent -mt-1 animate-pulse delay-900"></div>
      </div>
      
      <div className="container mx-auto text-center px-4 relative max-w-7xl">
        <p className="text-gray-600 mb-4 text-lg">Empowering Future Innovators through STEM Learning</p>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight max-w-4xl mx-auto">
          Let's <span className="text-black">Innovate, Incubate and Impact</span> <span className="text-gray-400">the<br />world together!</span>
        </h1>
        
        <p className="text-gray-600 mb-6 text-lg max-w-xl mx-auto">
          Join hands with us to solve <span className="text-yellow-600 font-semibold">Real-world challenges</span>
        </p>
        
        <Link to="/explore-program-dashboard">
          <Button size="lg" className="mb-12 bg-blue-500 hover:bg-blue-600 px-8 py-4 text-lg rounded-lg">
            EXPLORE OUR PROGRAMS
          </Button>
        </Link>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const isMiddleCard = index === 1;
            return (
              <Card key={index} className={`p-4 rounded-2xl border-2 ${isMiddleCard ? 'bg-blue-100 border-blue-200' : 'bg-white border-gray-200'}`}>
                <CardContent className="p-0">
                  <div className="flex items-center mb-3">
                    <Badge variant="secondary" className={`rounded-full px-3 py-1 text-sm ${isMiddleCard ? 'bg-blue-200 text-blue-800' : 'bg-gray-100 text-gray-700'}`}>
                      {stat.subtitle}
                    </Badge>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2 text-left text-black">{stat.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 text-left leading-relaxed">{stat.description}</p>
                  
                  {stat.hasAvatars && (
                    <div className="flex items-center mb-3">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white"></div>
                        <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white"></div>
                        <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white"></div>
                      </div>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-2 gap-3 text-left">
                    {stat.stats.map((item, idx) => (
                      <div key={idx}>
                        <div className="text-xl font-bold text-gray-800 mb-1">{item.value}</div>
                        <div className="text-xs text-gray-500">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
