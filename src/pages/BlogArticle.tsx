
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Share2, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogArticle = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Navigation Bar */}
      <div className="bg-white border-b pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/blog">
              <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-blue-500 text-white border-blue-500 rounded-full px-4 hover:bg-blue-600">
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </Button>
            </Link>
            <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-blue-500 text-white border-blue-500 rounded-full px-4 hover:bg-blue-600">
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Badge */}
        <div className="mb-6">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
            Technology
          </span>
        </div>

        {/* Article Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
          The Impact of Technology on the Workplace: How Technology is Changing
        </h1>

        {/* Author and Date */}
        <div className="flex items-center text-gray-500 text-sm mb-8">
          <div className="flex items-center mr-6">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-3">
              <User className="h-4 w-4" />
            </div>
            <span>Tracey Wilson</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>August 20, 2022</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Budapest Parliament at night"
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.
          </p>

          {/* Research Your Destination Section */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Research Your Destination</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          {/* Plan Your Itinerary Section */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Plan Your Itinerary</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh.
          </p>

          {/* Quote */}
          <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-8 bg-blue-50 rounded-r-lg">
            <p className="text-lg italic text-gray-800">
              "Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy."
            </p>
          </blockquote>

          {/* Second Image */}
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Person looking at mountain landscape"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Pack Lightly and Smartly Section */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pack Lightly and Smartly</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Packing can be a daunting task, but with some careful planning and smart choices, you can pack light and efficiently. Start by making a packing list and sticking to it. Be mindful of versatile and comfortable clothing that can be mixed and matched. Invest in quality luggage and packing organizers to maximize space and minimize wrinkles.
          </p>

          {/* Stay Safe and Healthy Section */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Safe and Healthy</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. This includes researching any required vaccinations or health documents, staying hydrated, washing your hands frequently, and using sunscreen and insect repellent. It's also essential to keep your valuables secure and be aware of your surroundings at all times.
          </p>

          {/* Immerse Yourself in the Local Culture Section */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Immerse Yourself in the Local Culture</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.
          </p>

          {/* Capture Memories Section */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Capture Memories</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Finally, don't forget to capture memories of your journey. Whether it's through photographs, journaling, or souvenirs, preserving the moments and experiences of your travels can bring joy and nostalgia for years to come. However, it's also essential to be present in the moment and not let technology detract you from the beauty of your surroundings.
          </p>

          {/* Conclusion Section */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Traveling is an art form that requires a blend of planning, preparation, and spontaneity. By following these tips and tricks, you can make the most of your journey and create memories that last a lifetime. So pack your bags, embrace the adventure, and enjoy the ride.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogArticle;
