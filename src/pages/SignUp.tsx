import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({
      ...formData,
      acceptTerms: checked
    });  
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup attempt:", formData);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Full Screen Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/lovable-uploads/cc0094aa-ced3-4e50-b5f1-d61b7b6d2988.png")`,
          backgroundPosition: 'center 75%',
        }}
      />
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      {/* Desktop Layout - Hidden on mobile */}
      <div className="hidden lg:flex relative z-10 min-h-screen">
        {/* Left Section - Logo */}
        <div className="lg:w-1/2 relative items-center justify-center flex">
          <div className="text-center text-white mt-16">
            <img 
              src="/lovable-uploads/ceabc523-dba1-475b-b670-7ed6b88782a1.png" 
              alt="STEM for Society Logo" 
              className="h-32 w-32 mx-auto mb-4 opacity-50"
            />
            <h1 className="text-4xl font-bold mb-4">STEM FOR SOCIETY</h1>
            <p className="text-xl">Join us to Innovate, Incubate and Impact the world together!</p>
          </div>
        </div>

        {/* Right Section - Signup Form */}
        <div className="lg:w-1/2 relative">
          {/* White transparent overlay with curved left corner */}
          <div className="absolute inset-0 bg-white/90 rounded-l-3xl"></div>
          
          {/* Form Container with scroll */}
          <div className="relative z-10 h-full max-h-screen overflow-y-auto flex items-center justify-center px-4 md:px-8 py-8">
            <div className="w-full max-w-md">
              {/* Header */}
              <div className="text-center mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  Create an Account
                </h1>
                <p className="text-gray-600 text-lg">
                  Enter your details to proceed further
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="name" className="text-gray-700 font-medium text-sm">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="h-10 bg-white border-gray-300 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="email" className="text-gray-700 font-medium text-sm">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-10 bg-white border-gray-300 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="phone" className="text-gray-700 font-medium text-sm">
                    Phone number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-10 bg-white border-gray-300 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="password" className="text-gray-700 font-medium text-sm">
                    Enter Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    className="h-10 bg-white border-gray-300 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="confirmPassword" className="text-gray-700 font-medium text-sm">
                    Confirm Password
                  </Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="h-10 bg-white border-gray-300 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div className="flex items-center space-x-2 py-2">
                  <Checkbox 
                    id="terms"
                    checked={formData.acceptTerms}
                    onCheckedChange={handleCheckboxChange}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <Label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
                    I accept the terms and conditions
                  </Label>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full h-10 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base transition-all duration-200 transform hover:scale-[1.02] mt-6 rounded-lg"
                >
                  SIGN UP
                </Button>
              </form>
              
              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">or sign up with</span>
                </div>
              </div>
              
              {/* Social Sign Up Buttons - 3 Circular Buttons */}
              <div className="flex justify-center space-x-4 mb-4">
                <Button variant="outline" className="h-10 w-10 rounded-full bg-white border-gray-200 hover:bg-gray-50 p-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </Button>
                
                <Button variant="outline" className="h-10 w-10 rounded-full bg-white border-gray-200 hover:bg-gray-50 p-0">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </Button>
                
                <Button variant="outline" className="h-10 w-10 rounded-full bg-white border-gray-200 hover:bg-gray-50 p-0">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </Button>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link to="/login" className="text-blue-600 hover:text-blue-700 hover:underline font-semibold">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Only visible on mobile */}
      <div className="lg:hidden relative z-10 min-h-screen flex flex-col">
        {/* Mobile Logo */}
        <div className="flex-1 flex items-center justify-center pt-20">
          <div className="text-center text-white">
            <img 
              src="/lovable-uploads/ceabc523-dba1-475b-b670-7ed6b88782a1.png" 
              alt="STEM for Society Logo" 
              className="h-24 w-24 mx-auto mb-4 opacity-50"
            />
            <h1 className="text-2xl font-bold mb-2">STEM FOR SOCIETY</h1>
            <p className="text-sm">Join us to Innovate, Incubate and Impact!</p>
          </div>
        </div>
        
        {/* Mobile Form with white overlay and curved corners */}
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-white/90 rounded-t-3xl"></div>
          <div className="relative z-10 max-h-[60vh] overflow-y-auto flex items-start justify-center px-4 pt-8 pb-4">
            <div className="w-full max-w-sm">
              {/* Mobile simplified form */}
              <div className="text-center mb-4">
                <h1 className="text-2xl font-bold text-gray-800 mb-1">
                  Create Account
                </h1>
                <p className="text-gray-600 text-sm">
                  Enter your details to proceed
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="space-y-1">
                  <Label htmlFor="mobileName" className="text-gray-700 font-medium text-sm">
                    Name
                  </Label>
                  <Input
                    id="mobileName"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="h-9 bg-white border-gray-300 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="mobileEmail" className="text-gray-700 font-medium text-sm">
                    Email
                  </Label>
                  <Input
                    id="mobileEmail"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-9 bg-white border-gray-300 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="mobilePassword" className="text-gray-700 font-medium text-sm">
                    Password
                  </Label>
                  <Input
                    id="mobilePassword"
                    name="password"
                    type="password"
                    placeholder="Your password"
                    value={formData.password}
                    onChange={handleChange}
                    className="h-9 bg-white border-gray-300 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div className="flex items-center space-x-2 py-2">
                  <Checkbox 
                    id="mobileTerms"
                    checked={formData.acceptTerms}
                    onCheckedChange={handleCheckboxChange}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <Label htmlFor="mobileTerms" className="text-sm text-gray-600 cursor-pointer">
                    I accept the terms
                  </Label>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full h-9 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base transition-all duration-200 transform hover:scale-[1.02] mt-4 rounded-lg"
                >
                  Sign Up
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
