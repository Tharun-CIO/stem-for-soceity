
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      text: "Cellular Biology and Genetic Engineering with Biotechnological Applications",
      description: "This course have become my foundation knowledge with practical integration skills and strategic chancing for professional growth. The multidisciplinary aspect and our understanding.",
      author: "Tracy Wilson",
      rating: 5
    },
    {
      text: "Effective Writing Strategy & Computational Challenges",
      description: "Very helpful course. It's helping me develop good strategies to develop the writing skills.",
      author: "Mary Johnson",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Testimonials
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                index === currentIndex ? 'animate-pulse ring-2 ring-blue-400' : ''
              }`}
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                
                <h3 className="font-bold text-lg text-gray-900 mb-3">
                  {testimonial.text}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {testimonial.description}
                </p>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <span className="font-medium text-gray-900">
                    {testimonial.author}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
