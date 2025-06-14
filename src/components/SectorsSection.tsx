
import React from 'react';

const SectorsSection = () => {
  const sectors = [
    { name: 'Climate Change', icon: '🌍' },
    { name: 'Technology', icon: '💻' },
    { name: 'Life science', icon: '🧬' },
    { name: 'Innovation', icon: '💡' },
    { name: 'Finance', icon: '💰' },
    { name: 'Pharmacy', icon: '💊' },
    { name: 'Agriculture', icon: '🌱' },
    { name: 'Entrepreneurship', icon: '🚀' },
    { name: 'Veterinary', icon: '🐾' },
    { name: 'Medicine', icon: '⚕️' },
    { name: 'Allied health science', icon: '🏥' },
    { name: 'Environmental Science', icon: '🌿' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Sectors we Focus
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <div
              key={sector.name}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group animate-fade-in border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-4">
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {sector.icon}
                </span>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                  {sector.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
