import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import StepIndicator from "@/components/ui/StepIndicator";

const PartnerSignUp = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Institution Information
    institutionName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    pincode: "",
    
    // Step 2: Instructor Details
    gstNumber: "",
    instructorName: "",
    country: "India",
    instructorMobile: "",
    otp: "",
    email: "",
    
    // Step 3: Title & Sector
    teachingTopic: "",
    sector: "",
    acceptTerms: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Partner Institution signup:", formData);
  };

  const sendOTP = () => {
    console.log("Sending OTP to:", formData.instructorMobile);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="text-right text-sm text-gray-600 mb-4">
              Institution Information
            </div>
            
            <div>
              <Input
                placeholder="Enter the institution name"
                value={formData.institutionName}
                onChange={(e) => handleInputChange('institutionName', e.target.value)}
                className="bg-white/80 rounded-lg"
              />
            </div>
            
            <div>
              <Input
                placeholder="Address line 1"
                value={formData.addressLine1}
                onChange={(e) => handleInputChange('addressLine1', e.target.value)}
                className="bg-white/80"
              />
            </div>
            
            <div>
              <Input
                placeholder="Address line 2"
                value={formData.addressLine2}
                onChange={(e) => handleInputChange('addressLine2', e.target.value)}
                className="bg-white/80"
              />
            </div>
            
            <div>
              <Input
                placeholder="City"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                className="bg-white/80"
              />
            </div>
            
            <div>
              <Input
                placeholder="Pincode"
                value={formData.pincode}
                onChange={(e) => handleInputChange('pincode', e.target.value)}
                className="bg-white/80"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="text-right text-sm text-gray-600 mb-4">
              Instructor Details
            </div>
            
            <div>
              <Input
                placeholder="GST number"
                value={formData.gstNumber}
                onChange={(e) => handleInputChange('gstNumber', e.target.value)}
                className="bg-white/80"
              />
            </div>
            
            <div>
              <Input
                placeholder="Instructor name"
                value={formData.instructorName}
                onChange={(e) => handleInputChange('instructorName', e.target.value)}
                className="bg-white/80"
              />
            </div>
            
            <div className="flex gap-2">
              <div className="w-24">
                <Input
                  placeholder="Country"
                  value={formData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                  className="bg-white/80"
                />
              </div>
              <div className="flex-1">
                <Input
                  placeholder="Instructor Mobile Number"
                  value={formData.instructorMobile}
                  onChange={(e) => handleInputChange('instructorMobile', e.target.value)}
                  className="bg-white/80"
                />
              </div>
            </div>
            
            <div className="bg-yellow-100 p-3 rounded-md flex items-center justify-between">
              <span className="text-sm">⚠️ OTP sent to entered number</span>
              <Button 
                type="button" 
                size="sm" 
                onClick={sendOTP}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Send OTP
              </Button>
            </div>
            
            <div>
              <Input
                placeholder="Send OTP"
                value={formData.otp}
                onChange={(e) => handleInputChange('otp', e.target.value)}
                className="bg-white/80"
              />
            </div>
            
            <div>
              <Input
                placeholder="Email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="bg-white/80"
              />
            </div>
            
            <div className="text-center text-sm text-gray-600">
              — or sign up with —
            </div>
            
            <div className="flex justify-center gap-4">
              <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                G
              </button>
              <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                @
              </button>
              <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                f
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="text-right text-sm text-gray-600 mb-4">
              Title & sector
            </div>
            
            <div>
              <Input
                placeholder="Topic you will be teaching?"
                value={formData.teachingTopic}
                onChange={(e) => handleInputChange('teachingTopic', e.target.value)}
                className="bg-white/80"
              />
            </div>
            
            <div>
              <Input
                placeholder="Sector"
                value={formData.sector}
                onChange={(e) => handleInputChange('sector', e.target.value)}
                className="bg-white/80"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={formData.acceptTerms}
                onCheckedChange={(checked) => handleInputChange('acceptTerms', checked)}
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I accept{" "}
                <Link to="/terms" className="text-blue-600 hover:underline">
                  the terms and conditions
                </Link>
                .
              </label>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-cover animate-subtle-zoom"
        style={{
          backgroundImage: `url("/lovable-uploads/cc0094aa-ced3-4e50-b5f1-d61b7b6d2988.png")`,
          backgroundPosition: 'center 75%',
        }}
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Desktop Layout - Hidden on mobile */}
      <div className="hidden lg:flex relative z-10 min-h-screen">
        {/* Left Section - Logo (Desktop Only) */}
        <div className="lg:w-1/2 relative items-center justify-center flex">
          <div className="text-center text-white">
            <img 
              src="/lovable-uploads/ceabc523-dba1-475b-b670-7ed6b88782a1.png" 
              alt="STEM for Society Logo" 
              className="h-40 w-40 md:h-56 md:w-56 lg:h-72 lg:w-72 opacity-50 mx-auto mb-8 animate-pulse-glow-delayed"
            />
            <h1 className="text-4xl font-bold mb-4">STEM FOR SOCIETY</h1>
            <p className="text-xl">
              Join us to Partner with us to make an impact
            </p>
          </div>
        </div>

        {/* Right Section - Form with White Transparent Background and Curved Left Corner */}
        <div className="lg:w-1/2 relative min-h-screen">
          {/* White transparent overlay with curved left corner - full coverage */}
          <div className="absolute inset-0 bg-white/90 rounded-l-3xl"></div>
          
          {/* Form Container with scroll */}
          <div className="relative z-10 h-full min-h-screen overflow-y-auto flex items-center justify-center px-4 md:px-8 py-8">
            <div className="w-full max-w-md">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Partner with us</h1>
                <p className="text-gray-600 text-sm">
                  {currentStep === 1 && "Enter your details to proceed further"}
                  {currentStep === 2 && "Enter your credentials to proceed further"}
                  {currentStep === 3 && "Enter your credentials to proceed further"}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <StepIndicator currentStep={currentStep} totalSteps={3} />
                
                {renderStepContent()}

                <div className="space-y-4">
                  {currentStep < 3 ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
                    >
                      CONTINUE
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
                      disabled={!formData.acceptTerms}
                    >
                      SIGN UP
                    </Button>
                  )}
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 hover:text-blue-700 hover:underline font-semibold">
                      login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Only visible on mobile */}
      <div className="lg:hidden relative z-10 min-h-screen flex flex-col">
        {/* Mobile Logo */}
        <div className="flex-1 flex items-center justify-center pt-16">
          <div className="text-center text-white">
            <img 
              src="/lovable-uploads/ceabc523-dba1-475b-b670-7ed6b88782a1.png" 
              alt="STEM for Society Logo" 
              className="h-24 w-24 mx-auto mb-4 opacity-50"
            />
            <h1 className="text-2xl font-bold mb-2">STEM FOR SOCIETY</h1>
            <p className="text-sm">
              Let's Partner and Impact!
            </p>
          </div>
        </div>
        
        {/* Mobile Content with white overlay and curved corners - full coverage */}
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-white/90 rounded-t-3xl"></div>
          <div className="relative z-10 h-full overflow-y-auto flex items-start justify-center px-4 pt-8 pb-4">
            <div className="w-full max-w-sm">
              <div className="text-center mb-6">
                <h1 className="text-xl font-bold text-gray-800 mb-2">Partner with us</h1>
                <p className="text-gray-600 text-sm">
                  {currentStep === 1 && "Enter your details to proceed further"}
                  {currentStep === 2 && "Enter your credentials to proceed further"}
                  {currentStep === 3 && "Enter your credentials to proceed further"}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <StepIndicator currentStep={currentStep} totalSteps={3} />
                
                {renderStepContent()}

                <div className="space-y-4">
                  {currentStep < 3 ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
                    >
                      CONTINUE
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
                      disabled={!formData.acceptTerms}
                    >
                      SIGN UP
                    </Button>
                  )}
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 hover:text-blue-700 hover:underline font-semibold">
                      login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSignUp;
