
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      text: "Cellular Biology and Genetic Engineering with Biotechnological Applications",
      description: "This course has become my foundation knowledge with practical integration skills and strategic chancing for professional growth. The multidisciplinary aspect and our understanding.",
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Testimonials
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`hover:shadow-2xl transition-all duration-500 hover:scale-105 shadow-xl border border-gray-100 ${
                index === currentIndex ? 'animate-pulse ring-2 ring-blue-400 bg-blue-50' : 'bg-white'
              }`}
            >
              <CardContent className="p-8">
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                
                <h3 className="font-bold text-xl text-gray-900 mb-4 leading-tight">
                  {testimonial.text}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-base">
                  {testimonial.description}
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-white font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <span className="font-semibold text-gray-900 text-lg">
                    {testimonial.author}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-10 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
