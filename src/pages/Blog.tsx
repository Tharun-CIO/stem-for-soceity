
import React from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Share2, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Blog = () => {
  const blogPosts = Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Medical",
    author: "Tracey Wilson",
    date: "August 20, 2022",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Navigation Bar */}
      <div className="bg-white border-b pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Explore Blogs</h1>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Scientific Communication</h2>
        </div>

        {/* Description and CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Join us in making your research matter to everyone—let's empower society with knowledge and encourage curiosity about the world around us! Every month for the best scientific communication and outstanding contributions will be rewarded with prize and certificates of appreciation, recognizing your efforts to make science accessible and engaging for all.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Stem for Society invites Scientist, Postdoc, PhD, masters, bachelor students and researchers to share their research journey by writing blogs about their publication or scientific information aimed at the general public and society! By sharing insights and engaging with readers, you can foster community connections and encourage meaningful discussions around your research.
            </p>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Getting your article published typically takes about a day to get verified
              </h3>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold">
                CREATE ARTICLE
              </Button>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center text-gray-500 text-sm">
                  <div className="flex items-center mr-4">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mr-2">
                      <User className="h-3 w-3" />
                    </div>
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center">
          <p className="text-gray-600">Showing 1-12 of 1253</p>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Logo */}
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
              <span className="text-blue-900 font-bold text-xl">S</span>
            </div>
            <div>
              <h4 className="text-2xl font-bold">STEM FOR SOCIETY</h4>
              <p className="text-blue-200">Let's innovate, incubate and impact the world together!</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Programs */}
            <div>
              <h5 className="font-bold text-lg mb-4">PROGRAMS</h5>
              <div className="space-y-3 text-blue-200">
                <p className="hover:text-white cursor-pointer">Explore Courses</p>
                <p className="hover:text-white cursor-pointer">Psychology counselling</p>
                <p className="hover:text-white cursor-pointer">Career counselling</p>
              </div>
            </div>

            {/* For Institutions */}
            <div>
              <h5 className="font-bold text-lg mb-4">FOR INSTITUTIONS</h5>
              <div className="space-y-3 text-blue-200">
                <p className="hover:text-white cursor-pointer">Plans and pricings</p>
                <p className="hover:text-white cursor-pointer">Campus Ambassador Program</p>
              </div>
            </div>

            {/* Community */}
            <div>
              <h5 className="font-bold text-lg mb-4">COMMUNITY</h5>
              <div className="space-y-3 text-blue-200">
                <p className="hover:text-white cursor-pointer">Join Community</p>
                <p className="hover:text-white cursor-pointer">Scientific Communication Blog</p>
                <p className="hover:text-white cursor-pointer">Our Youtube Channel</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="font-bold text-lg mb-4">QUICK LINKS</h5>
              <div className="space-y-3">
                <Button className="bg-blue-700 hover:bg-blue-600 text-white w-full">Register</Button>
                <Button className="bg-blue-700 hover:bg-blue-600 text-white w-full">Login</Button>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="font-bold text-lg mb-4">SUBSCRIBE FOR THE LATEST UPDATES</h5>
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
                <Button className="w-full bg-blue-600 hover:bg-blue-500">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Contact Info and Social */}
          <div className="mt-12 pt-8 border-t border-blue-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2 text-blue-200 text-sm">
                <p>717 Broadway, floor 2, New York NY 10007</p>
                <p>844-402-4344</p>
                <p>support@stemnovativehealth.com</p>
              </div>
              
              <div className="flex justify-end space-x-4">
                <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer">
                  <span className="text-white text-sm">T</span>
                </div>
                <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer">
                  <span className="text-white text-sm">I</span>
                </div>
                <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer">
                  <span className="text-white text-sm">L</span>
                </div>
                <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer">
                  <span className="text-white text-sm">Y</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-8 border-t border-blue-800">
            <p className="text-blue-200 text-sm">© 2025 STEM for Society. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
