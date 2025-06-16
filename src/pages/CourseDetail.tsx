
import React from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Share2, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseDetail = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Navigation Bar */}
      <div className="bg-white border-b pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/courses">
              <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-blue-100 text-blue-600 border-blue-200">
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </Button>
            </Link>
            <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-blue-100 text-blue-600 border-blue-200">
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600 mb-4">Detailed view</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">AI for Medical Diagnosis</h1>
          
          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">Duration : 6 weeks</span>
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">Level : Intermediate</span>
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">Mode : Online</span>
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">Certificate : Yes, Upon Completion</span>
          </div>
        </div>

        {/* Course Card */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-6">
              {/* Course Image Placeholder */}
              <div className="w-32 h-24 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-xs text-gray-500 text-center">Certificate Program</span>
              </div>
              
              {/* Course Details */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-medium text-gray-900">Title</h3>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded text-sm font-medium">
                    Sector
                  </span>
                </div>
                
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Date Day</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-4 h-4 flex items-center justify-center">₹</span>
                    <span>Mode</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>Location</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 text-xl font-semibold text-gray-900 mt-4">
                  <span>₹ Price</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Description */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <p className="text-gray-700 leading-relaxed">
            This 6-week online course is designed for medical students and healthcare professionals who want to 
            strengthen their diagnostic skills. You'll explore real-world clinical scenarios, learn to analyze patient 
            symptoms, interpret test results, and confidently arrive at differential diagnoses. The course includes 
            case-based discussions, expert-led video lectures, interactive simulations, and end-of-module quizzes.
          </p>
        </div>

        {/* Topics Covered */}
        <div className="bg-white rounded-lg shadow-sm border mb-8">
          <div className="bg-blue-100 px-6 py-4 rounded-t-lg">
            <h3 className="text-lg font-medium text-gray-900">Topics Covered</h3>
          </div>
          <div className="p-6">
            <p className="text-gray-700">
              Patient history & symptom clustering Common diagnostic tests & imaging Differential diagnosis frameworks Red flags in 
              common presentations Communicating diagnoses to patients
            </p>
          </div>
        </div>

        {/* Instructor and Institution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="bg-blue-100 px-6 py-4 rounded-t-lg">
              <h3 className="text-lg font-medium text-gray-900">Instructor</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700">Sree Sachin</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="bg-blue-100 px-6 py-4 rounded-t-lg">
              <h3 className="text-lg font-medium text-gray-900">Institution/Industry</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700">Sri Sairam Institute of Technology</p>
            </div>
          </div>
        </div>

        {/* Register Button */}
        <div className="text-right">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
            Register Now
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-900 font-bold text-xl">S</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold">STEM FOR SOCIETY</h4>
                  <p className="text-sm text-blue-200">Let's innovate, incubate and impact the world together!</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-blue-200">
                <p>37 Broadway, floor 2, New York NY 10007</p>
                <p>844-402-4344</p>
                <p>support@stemforsociety.com</p>
              </div>
            </div>

            {/* Programs */}
            <div>
              <h5 className="font-semibold mb-4">PROGRAMS</h5>
              <div className="space-y-2 text-sm text-blue-200">
                <p>Explore Courses</p>
                <p>Psychology counselling</p>
                <p>Career counselling</p>
              </div>
            </div>

            {/* For Institutions */}
            <div>
              <h5 className="font-semibold mb-4">FOR INSTITUTIONS</h5>
              <div className="space-y-2 text-sm text-blue-200">
                <p>Plans and pricing</p>
                <p>Campus Ambassador Program</p>
              </div>
            </div>

            {/* Company */}
            <div>
              <h5 className="font-semibold mb-4">COMPANY</h5>
              <div className="space-y-2 text-sm text-blue-200">
                <p>Join Community</p>
                <p>Scientific Communication Blog</p>
                <p>Our YouTube Channel</p>
              </div>
            </div>
          </div>

          {/* Quick Links and Newsletter */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-blue-800">
            <div>
              <h5 className="font-semibold mb-4">QUICK LINKS</h5>
              <div className="flex space-x-4">
                <Button className="bg-blue-800 hover:bg-blue-700">Register</Button>
                <Button className="bg-blue-800 hover:bg-blue-700">Login</Button>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">SUBSCRIBE FOR THE LATEST UPDATES</h5>
              <div className="space-y-3">
                <input 
                  type="text" 
                  placeholder="First name"
                  className="w-full px-4 py-2 rounded bg-blue-800 text-white placeholder-blue-300 border border-blue-700"
                />
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded bg-blue-800 text-white placeholder-blue-300 border border-blue-700"
                />
                <Button className="bg-blue-600 hover:bg-blue-500">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Social Links and Copyright */}
          <div className="flex items-center justify-between mt-8 pt-8 border-t border-blue-800">
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-800 rounded-full"></div>
              <div className="w-8 h-8 bg-blue-800 rounded-full"></div>
              <div className="w-8 h-8 bg-blue-800 rounded-full"></div>
              <div className="w-8 h-8 bg-blue-800 rounded-full"></div>
            </div>
            <p className="text-sm text-blue-300">© 2025 STEM for Society. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CourseDetail;
