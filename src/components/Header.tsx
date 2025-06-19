
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
    <header 
      className="relative shadow-sm sticky top-0 z-50"
      style={{
        backgroundImage: `url("/lovable-uploads/cc0094aa-ced3-4e50-b5f1-d61b7b6d2988.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay for better text contrast */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/b29296a1-1faf-45dc-a273-07bdab44992a.png" 
              alt="STEM for Society Logo" 
              className="h-12 w-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Menubar className="border-none bg-transparent p-0 h-auto">
              {/* Courses/Trainings Dropdown */}
              <MenubarMenu>
                <MenubarTrigger className="bg-white/70 hover:bg-white/90 data-[state=open]:bg-white/90 px-6 py-3 rounded-full cursor-pointer flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium shadow-sm backdrop-blur-sm border border-gray-200">
                  <span>Courses/Trainings</span>
                  <ChevronDown className="h-4 w-4" />
                </MenubarTrigger>
                <MenubarContent className="bg-white backdrop-blur-md border-2 border-gray-300 shadow-xl rounded-3xl p-3 min-w-[240px] z-50 mt-2">
                  <MenubarItem asChild>
                    <Link 
                      to="/courses" 
                      className="block px-5 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-2xl transition-all duration-200 cursor-pointer font-medium border border-transparent hover:border-gray-200"
                    >
                      Seminars/Webinar
                    </Link>
                  </MenubarItem>
                  <MenubarItem asChild>
                    <Link 
                      to="/courses" 
                      className="block px-5 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-2xl transition-all duration-200 cursor-pointer font-medium border border-transparent hover:border-gray-200"
                    >
                      Certificate Program
                    </Link>
                  </MenubarItem>
                  <MenubarItem asChild>
                    <Link 
                      to="/courses" 
                      className="block px-5 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-2xl transition-all duration-200 cursor-pointer font-medium border border-transparent hover:border-gray-200"
                    >
                      Corporate Training
                    </Link>
                  </MenubarItem>
                  <MenubarItem asChild>
                    <Link 
                      to="/courses" 
                      className="block px-5 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-2xl transition-all duration-200 cursor-pointer font-medium border border-transparent hover:border-gray-200"
                    >
                      Instrumentation Hands-on
                    </Link>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              {/* Services Dropdown */}
              <MenubarMenu>
                <MenubarTrigger className="bg-white/70 hover:bg-white/90 data-[state=open]:bg-white/90 px-6 py-3 rounded-full cursor-pointer flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium shadow-sm backdrop-blur-sm border border-gray-200">
                  <span>Services</span>
                  <ChevronDown className="h-4 w-4" />
                </MenubarTrigger>
                <MenubarContent className="bg-white backdrop-blur-md border-2 border-gray-300 shadow-xl rounded-3xl p-3 min-w-[240px] z-50 mt-2">
                  <MenubarItem asChild>
                    <Link 
                      to="/psychology-counselling" 
                      className="block px-5 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-2xl transition-all duration-200 cursor-pointer font-medium border border-transparent hover:border-gray-200"
                    >
                      Psychology Counselling
                    </Link>
                  </MenubarItem>
                  <MenubarItem asChild>
                    <Link 
                      to="/career-counselling" 
                      className="block px-5 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-2xl transition-all duration-200 cursor-pointer font-medium border border-transparent hover:border-gray-200"
                    >
                      Career Counselling
                    </Link>
                  </MenubarItem>
                  <MenubarItem asChild>
                    <Link 
                      to="/institution-pricing" 
                      className="block px-5 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-2xl transition-all duration-200 cursor-pointer font-medium border border-transparent hover:border-gray-200"
                    >
                      Institution Plan & Pricing
                    </Link>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              {/* Resources Dropdown */}
              <MenubarMenu>
                <MenubarTrigger className="bg-white/70 hover:bg-white/90 data-[state=open]:bg-white/90 px-6 py-3 rounded-full cursor-pointer flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium shadow-sm backdrop-blur-sm border border-gray-200">
                  <span>Resources</span>
                  <ChevronDown className="h-4 w-4" />
                </MenubarTrigger>
                <MenubarContent className="bg-white backdrop-blur-md border-2 border-gray-300 shadow-xl rounded-3xl p-3 min-w-[240px] z-50 mt-2">
                  <MenubarItem asChild>
                    <Link 
                      to="/blog" 
                      className="block px-5 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-2xl transition-all duration-200 cursor-pointer font-medium border border-transparent hover:border-gray-200"
                    >
                      Scientific Communications
                    </Link>
                  </MenubarItem>
                  <MenubarItem asChild>
                    <Link 
                      to="/community" 
                      className="block px-5 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-2xl transition-all duration-200 cursor-pointer font-medium border border-transparent hover:border-gray-200"
                    >
                      Join the community
                    </Link>
                  </MenubarItem>
                  <MenubarItem asChild>
                    <Link 
                      to="/campus-ambassador" 
                      className="block px-5 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-2xl transition-all duration-200 cursor-pointer font-medium border border-transparent hover:border-gray-200"
                    >
                      Campus Ambassador (CA)
                    </Link>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
            
            <div className="flex items-center space-x-3">
              <Link to="/partner-role">
                <Button variant="outline" className="border-2 border-[#0389FF] text-[#0389FF] hover:bg-[#0389FF] hover:text-white bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 font-medium shadow-sm transition-all duration-300">
                  Partner with us
                </Button>
              </Link>
              <Link to="/login">
                <Button className="bg-[#0389FF] hover:bg-[#0389FF]/90 text-white rounded-full px-6 py-3 font-medium shadow-sm transition-all duration-300">
                  LOGIN
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-3 rounded-full hover:bg-white/50 transition-all duration-300 backdrop-blur-sm"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white/95 backdrop-blur-md rounded-3xl mt-2 shadow-xl border border-gray-200">
            <div className="space-y-2 px-4">
              <div className="space-y-1">
                <div className="px-4 py-2 text-sm font-medium text-gray-500">Courses/Trainings</div>
                <Link 
                  to="/courses" 
                  className="block px-6 py-2 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Seminars/Webinar
                </Link>
                <Link 
                  to="/courses" 
                  className="block px-6 py-2 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Certificate Program
                </Link>
                <Link 
                  to="/courses" 
                  className="block px-6 py-2 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Corporate Training
                </Link>
                <Link 
                  to="/courses" 
                  className="block px-6 py-2 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Instrumentation Hands-on
                </Link>
              </div>
              
              <div className="space-y-1">
                <div className="px-4 py-2 text-sm font-medium text-gray-500">Services</div>
                <Link 
                  to="/psychology-counselling" 
                  className="block px-6 py-2 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Psychology Counselling
                </Link>
                <Link 
                  to="/career-counselling" 
                  className="block px-6 py-2 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Career Counselling
                </Link>
                <Link 
                  to="/institution-pricing" 
                  className="block px-6 py-2 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Institution Plan & Pricing
                </Link>
              </div>
              
              <div className="space-y-1">
                <div className="px-4 py-2 text-sm font-medium text-gray-500">Resources</div>
                <Link 
                  to="/blog" 
                  className="block px-6 py-2 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Scientific Communications
                </Link>
                <Link 
                  to="/community" 
                  className="block px-6 py-2 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join the community
                </Link>
                <Link 
                  to="/campus-ambassador" 
                  className="block px-6 py-2 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Campus Ambassador (CA)
                </Link>
              </div>
              
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Link to="/partner-role" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full border-[#0389FF] text-[#0389FF] hover:bg-[#0389FF] hover:text-white rounded-full">
                    Partner with us
                  </Button>
                </Link>
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-[#0389FF] hover:bg-[#0389FF]/90 text-white rounded-full">
                    LOGIN
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
