
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Sectors we Focus
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sectors.map((sector, index) => (
            <div
              key={sector.name}
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  {sector.icon}
                </span>
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
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
