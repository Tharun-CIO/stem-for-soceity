
import React from 'react';

const WhyChooseSection = () => {
  const features = [
    'World Class Instructors',
    '1 on 1 Mentorship', 
    'Industrial Training',
    'Placement Assistant'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-12 leading-tight">
              Why Choose <span className="text-blue-600">Stem for Society</span> ?
            </h2>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center space-x-6 animate-fade-in hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">✓</span>
                  </div>
                  <span className="text-xl font-medium text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-10 hover:scale-105 transition-transform duration-500 shadow-xl">
              <div className="text-center">
                <div className="w-40 h-40 bg-blue-600 rounded-full mx-auto mb-8 flex items-center justify-center animate-pulse shadow-2xl">
                  <span className="text-5xl text-white">🎓</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Join Our Community</h3>
                <p className="text-gray-600 text-lg">Experience world-class education with personalized mentorship</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-yellow-400 rounded-full animate-bounce shadow-lg"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-green-400 rounded-full animate-ping shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
