
import { Button } from "@/components/ui/button";
import { Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#00549F' }} className="text-white py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Content Section - Horizontal Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0">
          
          {/* Left Section - Logo and Address */}
          <div className="lg:w-1/4 space-y-4">
            {/* Logo and Brand */}
            <div className="p-4 rounded-xl">
              <div className="flex items-center space-x-3 mb-2">
                <div className="h-16 w-16 rounded-xl bg-white/10 flex items-center justify-center p-2">
                  <img 
                    src="/lovable-uploads/b0da6a24-f85c-48ba-8f2f-2fce65f2f2d1.png" 
                    alt="STEM for Society Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-lg font-bold">STEM FOR SOCIETY</div>
                  <div className="text-sm text-blue-100">Let's Innovate, Incubate and Impact the world together!</div>
                </div>
              </div>
            </div>
            
            {/* Address Information */}
            <div className="text-sm text-blue-100 space-y-1">
              <div>217 Broadway, Floor 9, New York, NY 10007</div>
              <div>844-402-4344</div>
              <div>support@tomorrowhealth.com</div>
            </div>
          </div>

          {/* Middle Section - Navigation Links */}
          <div className="lg:w-2/4 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            {/* Programs */}
            <div>
              <h4 className="font-semibold mb-3 text-white">PROGRAMS</h4>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#" className="hover:text-white transition-colors rounded-xl">Explore Courses</a></li>
                <li><a href="#" className="hover:text-white transition-colors rounded-xl">Psychology counselling</a></li>
                <li><a href="#" className="hover:text-white transition-colors rounded-xl">Career counselling</a></li>
              </ul>
            </div>

            {/* For Institutions */}
            <div>
              <h4 className="font-semibold mb-3 text-white">FOR INSTITUTIONS</h4>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#" className="hover:text-white transition-colors rounded-xl">Plans and pricings</a></li>
                <li><a href="#" className="hover:text-white transition-colors rounded-xl">Campus Ambassador Program</a></li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h4 className="font-semibold mb-3 text-white">COMMUNITY</h4>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#" className="hover:text-white transition-colors rounded-xl">Join Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors rounded-xl">Scientific Communication Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors rounded-xl">Our Youtube Channel</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-3 text-white">QUICK LINKS</h4>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#" className="hover:text-white transition-colors rounded-xl">Register</a></li>
                <li><a href="#" className="hover:text-white transition-colors rounded-xl">Login</a></li>
              </ul>
            </div>
          </div>

          {/* Right Section - Newsletter */}
          <div className="lg:w-1/4">
            <h4 className="font-semibold mb-3 text-white text-sm">SUBSCRIBE FOR THE LATEST UPDATES</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-sm text-blue-100 mb-1">First name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm text-blue-100 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm transition-all duration-300"
                />
              </div>
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-xl font-medium text-sm w-full transition-all duration-300 hover:scale-105">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Social Media Icons - Above the line */}
        <div className="flex justify-center space-x-4 mt-8 mb-6">
          <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-all duration-300 hover:scale-110">
            <Twitter className="h-5 w-5 text-blue-600" />
          </a>
          <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-all duration-300 hover:scale-110">
            <Instagram className="h-5 w-5 text-blue-600" />
          </a>
          <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-all duration-300 hover:scale-110">
            <Linkedin className="h-5 w-5 text-blue-600" />
          </a>
          <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-all duration-300 hover:scale-110">
            <Youtube className="h-5 w-5 text-blue-600" />
          </a>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-400 pt-6 rounded-t-xl">
          {/* Copyright */}
          <div className="text-center text-sm text-blue-100">
            © 2025 STEM for society. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
