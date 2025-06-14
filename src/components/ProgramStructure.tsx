
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProgramStructure = () => {
  const programs = [
    {
      title: 'Student',
      subtitle: 'Seminar / webinar / Mentoring',
      features: ['Bi-Weekly', 'Individual review', 'online or offline'],
      duration: 'some time',
      highlight: true
    },
    {
      title: 'Mentor',
      subtitle: 'Certificate Program',
      features: ['Uni-Time', 'Online ITO Learning'],
      duration: 'some time',
      highlight: false
    },
    {
      title: 'Resident',
      subtitle: 'Corporate training Program',
      features: ['Full-time', 'Hand-on live learning'],
      duration: 'some time',
      highlight: true
    },
    {
      title: 'Advanced',
      subtitle: 'Post-graduate Hands-on',
      features: ['Full-time', 'Online ITO learning'],
      duration: 'some time',
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Program Structure
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <Card
              key={program.title}
              className={`hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in ${
                program.highlight 
                  ? 'border-2 border-blue-500 bg-gradient-to-br from-blue-50 to-white shadow-xl' 
                  : 'bg-white shadow-lg border border-gray-200'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {program.title}
                </CardTitle>
                <p className="text-sm text-gray-600 mt-3 font-medium">{program.subtitle}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3 text-sm text-gray-700"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <span className="text-sm text-gray-500 font-medium">{program.duration}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramStructure;
