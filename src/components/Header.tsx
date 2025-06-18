
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-12 h-12 flex items-center justify-center mr-3">
              <img 
                src="/lovable-uploads/4d9d066b-41c7-4f9e-8821-af3a85d56f80.png" 
                alt="STEM for Society Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl font-bold text-gray-900 tracking-tight">STEM FOR SOCIETY</span>
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-semibold text-lg bg-transparent rounded-xl">
                    Courses/Trainings
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] bg-white rounded-xl shadow-lg border">
                      <NavigationMenuLink asChild>
                        <Link to="/courses" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Explore Courses</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Browse our comprehensive course catalog
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Seminars/Webinar</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Join our live and recorded sessions
                          </p>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Certificate Program</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Earn recognized certifications
                          </p>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Corporate Training</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Customized training for organizations
                          </p>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Instrumentation Hands-on</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Practical training with real equipment
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-semibold text-lg bg-transparent rounded-xl">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] bg-white rounded-xl shadow-lg border">
                      <NavigationMenuLink asChild>
                        <Link to="/psychology-counselling" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Psychology Counselling</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Professional mental health support
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/career-counselling" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Career Counselling</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Expert guidance for your career path
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/institution-pricing" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Institution Plan & Pricing</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Custom solutions for institutions
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-semibold text-lg bg-transparent rounded-xl">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] bg-white rounded-xl shadow-lg border">
                      <NavigationMenuLink asChild>
                        <Link to="/blog" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Scientific Communications</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Explore our blog and articles
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/community" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Join the community</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Connect with like-minded individuals
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/campus-ambassador" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Campus Ambassador (CA)</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Become a campus representative
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="hover:scale-105 transition-transform duration-300 font-semibold px-6 py-2 border-2 rounded-xl">
              Partner with Us
            </Button>
            <Link to="/login">
              <Button className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 font-semibold px-6 py-2 shadow-lg rounded-xl">
                LOGIN
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors duration-300">
            <div className="space-y-1">
              <div className={`w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-gray-600 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <div className="space-y-4">
              <Link to="/" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2">
                Home
              </Link>
              <Link to="/courses" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2">
                Courses
              </Link>
              <Link to="/psychology-counselling" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2">
                Psychology Counselling
              </Link>
              <Link to="/career-counselling" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2">
                Career Counselling
              </Link>
              <Link to="/blog" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2">
                Blog
              </Link>
              <Link to="/community" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2">
                Community
              </Link>
              <Link to="/about" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2">
                About
              </Link>
              <Link to="/contact" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2">
                Contact
              </Link>
              <div className="pt-4 space-y-3">
                <Button variant="outline" className="w-full font-semibold rounded-xl">
                  Partner with Us
                </Button>
                <Link to="/login" className="block">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 font-semibold rounded-xl">
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
