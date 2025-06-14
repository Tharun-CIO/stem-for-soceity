
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "What is STEM for Society?",
      answer: "STEM for Society is an educational platform that empowers culture investments through STEM learning, offering world-class programs with mentorship and practical applications."
    },
    {
      question: "How do I enroll?",
      answer: "You can enroll by clicking on our 'Explore Our Programs' button and selecting the program that best fits your learning goals and schedule."
    },
    {
      question: "What courses do you offer?",
      answer: "We offer courses across multiple sectors including Climate Change, Technology, Life Sciences, Medicine, Agriculture, and many more specialized fields."
    },
    {
      question: "Do you provide certification?",
      answer: "Yes, we provide certificates upon successful completion of our programs, with industry-recognized credentials and placement assistance."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="mb-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:text-blue-600 transition-colors duration-300">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
