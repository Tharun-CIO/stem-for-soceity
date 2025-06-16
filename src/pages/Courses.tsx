
import React, { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Share2, Filter, Search, Calendar, MapPin, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [selectedSector, setSelectedSector] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const courses = [
    {
      id: 1,
      title: 'Title',
      sector: 'sector',
      date: 'Date',
      day: 'Day',
      mode: 'Mode',
      location: 'Location',
      price: 'Price',
      month: 'May 2025',
      type: 'Certificate Program'
    },
    {
      id: 2,
      title: 'Title',
      sector: 'sector',
      date: 'Date',
      day: 'Day',
      mode: 'Mode',
      location: 'Location',
      price: 'Price',
      month: 'May 2025',
      type: 'Certificate Program'
    },
    {
      id: 3,
      title: 'Title',
      sector: 'sector',
      date: 'Date',
      day: 'Day',
      mode: 'Mode',
      location: 'Location',
      price: 'Price',
      month: 'June 2025',
      type: 'Certificate Program'
    },
    {
      id: 4,
      title: 'Title',
      sector: 'sector',
      date: 'Date',
      day: 'Day',
      mode: 'Mode',
      location: 'Location',
      price: 'Price',
      month: 'June 2025',
      type: 'Certificate Program'
    }
  ];

  const groupedCourses = courses.reduce((acc, course) => {
    if (!acc[course.month]) {
      acc[course.month] = [];
    }
    acc[course.month].push(course);
    return acc;
  }, {} as Record<string, typeof courses>);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Navigation Bar */}
      <div className="bg-white border-b pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="outline" size="sm" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back</span>
                </Button>
              </Link>
            </div>
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Explore Courses</h1>
          <h2 className="text-3xl font-bold text-gray-900">Get trained and become Certified Professional</h2>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Filter by</span>
            </div>
            
            <select className="border border-gray-300 rounded px-3 py-1 text-sm">
              <option>Sector</option>
            </select>
            
            <select className="border border-gray-300 rounded px-3 py-1 text-sm">
              <option>Author type</option>
            </select>
            
            <select className="border border-gray-300 rounded px-3 py-1 text-sm">
              <option>Publication Date</option>
            </select>
            
            <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600">
              Reset Filter
            </Button>
            
            <div className="ml-auto flex items-center space-x-2">
              <Search className="h-4 w-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search for Courses"
                className="border border-gray-300 rounded px-3 py-1 text-sm w-64"
              />
            </div>
          </div>
        </div>

        {/* Courses List */}
        {Object.entries(groupedCourses).map(([month, monthCourses]) => (
          <div key={month} className="mb-8">
            <h3 className="text-xl font-medium text-gray-400 mb-6">{month}</h3>
            
            <div className="space-y-4">
              {monthCourses.map((course) => (
                <Card key={course.id} className="bg-white border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        {/* Course Image Placeholder */}
                        <div className="w-24 h-20 bg-gray-200 rounded flex items-center justify-center">
                          <span className="text-xs text-gray-500 text-center">{course.type}</span>
                        </div>
                        
                        {/* Course Details */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <h4 className="text-lg font-medium text-gray-900">{course.title}</h4>
                            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded text-sm font-medium">
                              {course.sector}
                            </span>
                          </div>
                          
                          <div className="flex items-center space-x-6 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{course.date}</span>
                              <span>{course.day}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <span>$</span>
                              <span>{course.mode}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{course.location}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-1 text-lg font-semibold text-gray-900">
                            <DollarSign className="h-5 w-5" />
                            <span>{course.price}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex items-center space-x-3">
                        <Button variant="outline" size="sm">More Info</Button>
                        <Button className="bg-blue-600 hover:bg-blue-700">REGISTER NOW</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Pagination */}
        <div className="flex items-center justify-between mt-8">
          <p className="text-sm text-gray-600">Showing 1-12 of 1234</p>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>‹</Button>
            <Button variant="outline" size="sm">›</Button>
          </div>
        </div>
      </div>

      {/* Counseling Section */}
      <div className="bg-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden">
                <img 
                  src="/lovable-uploads/6a4f0de8-6869-43d7-8444-cc8cd87c0958.png" 
                  alt="Counselor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Not sure where to start?</h3>
                <p className="text-xl text-gray-700">Book a free counselling session and we'll guide you.</p>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              BOOK COUNSELLING
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-16">
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
                <p>37 Broadway floor 2, New York NY 10007</p>
                <p>844-344-4431</p>
                <p>hello@stemforsociety.com</p>
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
                  type="email" 
                  placeholder="First name"
                  className="w-full px-4 py-2 rounded bg-blue-800 text-white placeholder-blue-300 border border-blue-700"
                />
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded bg-blue-800 text-white placeholder-blue-300 border border-blue-700"
                />
                <Button className="bg-blue-600 hover:bg-blue-500">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Social Links and Copyright */}
          <div className="flex items-center justify-between mt-8 pt-8 border-t border-blue-800">
            <div className="flex space-x-4">
              {/* Social media icons would go here */}
              <div className="w-8 h-8 bg-blue-800 rounded-full"></div>
              <div className="w-8 h-8 bg-blue-800 rounded-full"></div>
              <div className="w-8 h-8 bg-blue-800 rounded-full"></div>
              <div className="w-8 h-8 bg-blue-800 rounded-full"></div>
            </div>
            <p className="text-sm text-blue-300">© 2025-25 STEM for Society. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Courses;
