
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Menubar, 
  MenubarContent, 
  MenubarItem, 
  MenubarMenu, 
  MenubarTrigger 
} from "@/components/ui/menubar";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/ceabc523-dba1-475b-b670-7ed6b88782a1.png" 
              alt="STEM for Society Logo" 
              className="h-12 w-12"
            />
            <span className="text-xl font-bold text-gray-800">STEM FOR SOCIETY</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Menubar className="border-none bg-transparent p-0 h-auto">
              {/* Programs Dropdown */}
              <MenubarMenu>
                <MenubarTrigger className="bg-transparent hover:bg-gray-50 data-[state=open]:bg-gray-50 px-3 py-2 rounded-xl cursor-pointer flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors">
                  <span>Programs</span>
                  <ChevronDown className="h-4 w-4" />
                </MenubarTrigger>
                <MenubarContent className="bg-white/95 backdrop-blur-sm border border-gray-200/80 shadow-xl rounded-xl p-2 min-w-[200px] z-50">
                  <MenubarItem asChild>
                    <Link 
                      to="/courses" 
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 cursor-pointer"
                    >
                      Browse Courses
                    </Link>
                  </MenubarItem>
                  <MenubarItem asChild>
                    <Link 
                      to="/career-counselling" 
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 cursor-pointer"
                    >
                      Career Counselling
                    </Link>
                  </MenubarItem>
                  <MenubarItem asChild>
                    <Link 
                      to="/psychology-counselling" 
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 cursor-pointer"
                    >
                      Psychology Counselling
                    </Link>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              {/* For Institutions Dropdown */}
              <MenubarMenu>
                <MenubarTrigger className="bg-transparent hover:bg-gray-50 data-[state=open]:bg-gray-50 px-3 py-2 rounded-xl cursor-pointer flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors">
                  <span>For Institutions</span>
                  <ChevronDown className="h-4 w-4" />
                </MenubarTrigger>
                <MenubarContent className="bg-white/95 backdrop-blur-sm border border-gray-200/80 shadow-xl rounded-xl p-2 min-w-[200px] z-50">
                  <MenubarItem asChild>
                    <Link 
                      to="/institution-pricing" 
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 cursor-pointer"
                    >
                      Plans and Pricing
                    </Link>
                  </MenubarItem>
                  <MenubarItem asChild>
                    <Link 
                      to="/campus-ambassador" 
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 cursor-pointer"
                    >
                      Campus Ambassador Program
                    </Link>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              {/* Partner with Us Dropdown */}
              <MenubarMenu>
                <MenubarTrigger className="bg-transparent hover:bg-gray-50 data-[state=open]:bg-gray-50 px-3 py-2 rounded-xl cursor-pointer flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors">
                  <span>Partner with Us</span>
                  <ChevronDown className="h-4 w-4" />
                </MenubarTrigger>
                <MenubarContent className="bg-white/95 backdrop-blur-sm border border-gray-200/80 shadow-xl rounded-xl p-2 min-w-[200px] z-50">
                  <MenubarItem asChild>
                    <Link 
                      to="/partner-role" 
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 cursor-pointer"
                    >
                      Join as Partner
                    </Link>
                  </MenubarItem>
                  <MenubarItem asChild>
                    <Link 
                      to="/institution-login" 
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 cursor-pointer"
                    >
                      Institution Login
                    </Link>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

            <Link to="/community" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors">
              Community
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors">
              Blog
            </Link>
            
            <div className="flex items-center space-x-3">
              <Link to="/login">
                <Button variant="outline" className="border-[#0389FF] text-[#0389FF] hover:bg-[#0389FF] hover:text-white rounded-xl">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#0389FF] hover:bg-[#0389FF]/90 text-white rounded-xl">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm rounded-b-xl">
            <div className="space-y-2">
              <Link 
                to="/courses" 
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Courses
              </Link>
              <Link 
                to="/career-counselling" 
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Career Counselling
              </Link>
              <Link 
                to="/psychology-counselling" 
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Psychology Counselling
              </Link>
              <Link 
                to="/institution-pricing" 
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Plans and Pricing
              </Link>
              <Link 
                to="/campus-ambassador" 
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Campus Ambassador
              </Link>
              <Link 
                to="/partner-role" 
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Partner with Us
              </Link>
              <Link 
                to="/community" 
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </Link>
              <Link 
                to="/blog" 
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full border-[#0389FF] text-[#0389FF] hover:bg-[#0389FF] hover:text-white rounded-xl">
                    Login
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-[#0389FF] hover:bg-[#0389FF]/90 text-white rounded-xl">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
