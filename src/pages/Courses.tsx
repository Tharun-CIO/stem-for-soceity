import React from 'react';
import Header from '@/components/Header';
import GridBackground from '@/components/GridBackground';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Share2, Filter, Search, Calendar, MapPin, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import FilterDropdown from '@/components/FilterDropdown';

interface FilterOption {
  id: string;
  label: string;
  checked: boolean;
}

const Courses = () => {
  return (
    <div className="min-h-screen w-full">
      <GridBackground>
        <Header />
        
        {/* Navigation Bar */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link to="/">
                  <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-[#0389FF] text-white border-[#0389FF] rounded-full px-4 hover:bg-[#0389FF]/90">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back</span>
                  </Button>
                </Link>
              </div>
              <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-[#0389FF] text-white border-[#0389FF] rounded-full px-4 hover:bg-[#0389FF]/90">
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
                <span className="text-sm font-medium text-gray-700">Filter By</span>
              </div>
              
              <FilterDropdown
                title="Sector"
                options={sectorFilters}
                onOptionChange={(optionId, checked) => handleFilterChange('sector', optionId, checked)}
              />
              
              <FilterDropdown
                title="Course type"
                options={courseTypeFilters}
                onOptionChange={(optionId, checked) => handleFilterChange('courseType', optionId, checked)}
              />
              
              <FilterDropdown
                title="Start date"
                options={startDateFilters}
                onOptionChange={(optionId, checked) => handleFilterChange('startDate', optionId, checked)}
              />
              
              <FilterDropdown
                title="Mode"
                options={modeFilters}
                onOptionChange={(optionId, checked) => handleFilterChange('mode', optionId, checked)}
              />
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-red-500 hover:text-red-600 flex items-center space-x-1"
                onClick={resetFilters}
              >
                <span className="text-red-500">↻</span>
                <span>Reset Filter</span>
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
                          
                          <div className="flex items-center space-x-3">
                            <Button variant="outline" size="sm">More Info</Button>
                            <Button className="bg-[#0389FF] hover:bg-[#0389FF]/90">REGISTER NOW</Button>
                          </div>
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
              <Button className="bg-[#0389FF] hover:bg-[#0389FF]/90 text-white px-8 py-3">
                BOOK COUNSELLING
              </Button>
            </div>
          </div>
        </div>

        {/* Standard Footer */}
        <Footer />
      </GridBackground>
    </div>
  );
};

export default Courses;
