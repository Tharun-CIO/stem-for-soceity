
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
            <div className="p-4 rounded-lg">
              <div className="flex items-center space-x-3 mb-2">
                <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <svg width="84" height="85" viewBox="0 0 84 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.4619 41.3662L25.6298 39.0822C26.3827 39.6531 27.4987 40.1592 28.7964 40.1592C29.2507 40.1592 29.5232 40.0555 29.5232 39.8219C29.5232 39.4714 29.0041 39.4455 28.3293 39.3287C26.9277 39.0951 24.8901 38.7317 24.8901 36.5774C24.8901 34.6177 26.5382 33.6963 28.8354 33.6963C30.795 33.6963 31.9631 34.3192 32.4692 34.6567L31.2883 36.876C30.7042 36.5124 29.6271 36.1102 28.6018 36.1102C28.1346 36.1102 27.9139 36.214 27.9139 36.4217C27.9139 36.7072 28.2645 36.7331 28.7964 36.837C30.1461 37.0965 32.586 37.369 32.586 39.6401C32.586 41.496 31.1584 42.6641 28.5239 42.6641C26.9146 42.6641 25.4093 42.1059 24.4619 41.3662Z" fill="#0389FF"/>
                    <path d="M35.4016 36.364H33.0137V33.8332H40.7875V36.364H38.3995V42.5156H35.4016V36.364Z" fill="#0389FF"/>
                    <path d="M44.5121 40.0238H48.3666V42.5156H41.6309V33.8332H48.2238V36.3251H44.5121V37.0388H48.12V39.297H44.5121V40.0238Z" fill="#0389FF"/>
                    <path d="M57.0746 33.8332H59.9426V42.5156H57.0746V38.8169L55.7119 40.9841H53.778L52.4024 38.8038V42.5156H49.5342V33.8332H52.4153L54.7255 37.7656L57.0746 33.8332Z" fill="#0389FF"/>
                  </svg>
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
                <li><a href="#" className="hover:text-white transition-colors">Explore Courses</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Psychology counselling</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career counselling</a></li>
              </ul>
            </div>

            {/* For Institutions */}
            <div>
              <h4 className="font-semibold mb-3 text-white">FOR INSTITUTIONS</h4>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#" className="hover:text-white transition-colors">Plans and pricings</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Campus Ambassador Program</a></li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h4 className="font-semibold mb-3 text-white">COMMUNITY</h4>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#" className="hover:text-white transition-colors">Join Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Scientific Communication Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Youtube Channel</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-3 text-white">QUICK LINKS</h4>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#" className="hover:text-white transition-colors">Register</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Login</a></li>
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
                  className="w-full px-3 py-2 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm text-blue-100 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
                />
              </div>
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg font-medium text-sm w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Social Media Icons - Above the line */}
        <div className="flex justify-center space-x-4 mt-8 mb-6">
          <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors">
            <Twitter className="h-5 w-5 text-blue-600" />
          </a>
          <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors">
            <Instagram className="h-5 w-5 text-blue-600" />
          </a>
          <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors">
            <Linkedin className="h-5 w-5 text-blue-600" />
          </a>
          <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors">
            <Youtube className="h-5 w-5 text-blue-600" />
          </a>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-400 pt-6">
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
