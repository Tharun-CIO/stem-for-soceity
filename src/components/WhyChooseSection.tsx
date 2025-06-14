
import React from 'react';

const WhyChooseSection = () => {
  const features = [
    'World Class Instructors',
    '1 on 1 Mentorship', 
    'Industrial Training',
    'Placement Assistant'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Why Choose <span className="text-blue-600">Stem for Society</span> ?
            </h2>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center space-x-4 animate-fade-in hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-lg text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 hover:scale-105 transition-transform duration-500">
              <div className="text-center">
                <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center animate-pulse">
                  <span className="text-4xl text-white">🎓</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Community</h3>
                <p className="text-gray-600">Experience world-class education with personalized mentorship</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-400 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
