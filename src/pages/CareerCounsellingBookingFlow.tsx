
import React, { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Share2, Check, Shield, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const CareerCounsellingBookingFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    age: '',
    careerStage: '',
    concerns: '',
    studentId: '',
    selectedDate: null as Date | null,
    selectedTime: '4:30 PM',
  });

  const steps = [
    { number: 1, title: 'Personal Information' },
    { number: 2, title: 'Contact Information' },
    { number: 3, title: 'Career Background' },
    { number: 4, title: 'Schedule Session' },
  ];

  const availableTimes = [
    '10:30 AM', '11:30 AM', '12:30 PM', '3:30 PM', '4:30 PM', '5:30 PM'
  ];

  const careerStages = [
    'Student - Choosing Major',
    'Fresh Graduate',
    'Early Career (0-3 years)',
    'Mid Career (3-7 years)',
    'Senior Career (7+ years)',
    'Career Change',
    'Returning to Work'
  ];

  const concerns = [
    'Career Path Selection',
    'Job Search Strategy',
    'Interview Preparation',
    'Skill Development',
    'Work-Life Balance',
    'Career Advancement',
    'Industry Transition',
    'Entrepreneurship'
  ];

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculatePrice = () => {
    return formData.studentId ? 375 : 1500; // 75% discount for students
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          <div className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
            currentStep === step.number 
              ? "bg-[#0389FF] text-white" 
              : currentStep > step.number 
                ? "bg-[#0389FF] text-white"
                : "bg-gray-200 text-gray-600"
          )}>
            {step.number}
          </div>
          {currentStep === step.number && (
            <span className="ml-3 text-gray-700 font-medium">{step.title}</span>
          )}
          {index < steps.length - 1 && (
            <div className="w-16 h-0.5 bg-gray-200 mx-4"></div>
          )}
        </div>
      ))}
    </div>
  );

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) => updateFormData('firstName', e.target.value)}
          className="bg-gray-100 border-0 h-12"
        />
        <Input
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) => updateFormData('lastName', e.target.value)}
          className="bg-gray-100 border-0 h-12"
        />
      </div>
      <Input
        placeholder="Age"
        value={formData.age}
        onChange={(e) => updateFormData('age', e.target.value)}
        className="bg-gray-100 border-0 h-12"
      />
    </div>
  );

  const renderContactInfo = () => (
    <div className="space-y-6">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center space-x-3">
        <Shield className="h-5 w-5 text-yellow-600" />
        <span className="text-yellow-800 font-medium">Your identity will be 100% confidential</span>
      </div>
      
      <Input
        placeholder="Email"
        type="email"
        value={formData.email}
        onChange={(e) => updateFormData('email', e.target.value)}
        className="bg-gray-100 border-0 h-12"
      />
      <Input
        placeholder="Mobile Number"
        value={formData.mobileNumber}
        onChange={(e) => updateFormData('mobileNumber', e.target.value)}
        className="bg-gray-100 border-0 h-12"
      />
      <Input
        placeholder="Student ID (Optional - for discount)"
        value={formData.studentId}
        onChange={(e) => updateFormData('studentId', e.target.value)}
        className="bg-gray-100 border-0 h-12"
      />
      
      {formData.studentId && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start space-x-3">
          <Leaf className="h-5 w-5 text-green-600 mt-0.5" />
          <div className="text-green-800 text-sm">
            <p className="font-medium">75% fee waived off with valid student ID!</p>
          </div>
        </div>
      )}
    </div>
  );

  const renderCareerBackground = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Tell us about your career journey</h2>
      
      <Select value={formData.careerStage} onValueChange={(value) => updateFormData('careerStage', value)}>
        <SelectTrigger className="bg-gray-100 border-0 h-12">
          <SelectValue placeholder="Select your career stage" />
        </SelectTrigger>
        <SelectContent>
          {careerStages.map((stage) => (
            <SelectItem key={stage} value={stage}>{stage}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={formData.concerns} onValueChange={(value) => updateFormData('concerns', value)}>
        <SelectTrigger className="bg-gray-100 border-0 h-12">
          <SelectValue placeholder="What would you like guidance on?" />
        </SelectTrigger>
        <SelectContent>
          {concerns.map((concern) => (
            <SelectItem key={concern} value={concern}>{concern}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="text-3xl font-bold text-blue-600 mb-2">₹ {calculatePrice().toLocaleString()}.00</div>
        <div className="text-gray-600">45-minute career guidance session</div>
        {formData.studentId && (
          <div className="text-green-600 text-sm mt-1">Student discount applied!</div>
        )}
      </div>
    </div>
  );

  const renderScheduleSession = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Schedule Your Session</h2>
      
      <Select>
        <SelectTrigger className="bg-gray-100 border-0 h-12">
          <SelectValue placeholder="Select Date" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="2023-09-18">September 18, 2023</SelectItem>
          <SelectItem value="2023-09-19">September 19, 2023</SelectItem>
          <SelectItem value="2023-09-20">September 20, 2023</SelectItem>
        </SelectContent>
      </Select>

      <div>
        <h4 className="font-medium mb-4 text-lg">Available Time Slots</h4>
        <div className="grid grid-cols-2 gap-3">
          {availableTimes.map((time) => (
            <Button
              key={time}
              variant={time === formData.selectedTime ? 'default' : 'outline'}
              className={cn(
                "py-3 h-12",
                time === formData.selectedTime 
                  ? "bg-[#0389FF] text-white hover:bg-[#0389FF]/90" 
                  : "bg-gray-100 border-0 text-gray-700 hover:bg-gray-200"
              )}
              onClick={() => updateFormData('selectedTime', time)}
            >
              {time}
            </Button>
          ))}
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center space-x-3">
        <Shield className="h-5 w-5 text-yellow-600" />
        <span className="text-yellow-800 text-sm">All sessions are completely confidential and conducted by certified career counselors.</span>
      </div>
    </div>
  );

  const renderSuccess = () => (
    <div className="text-center space-y-8">
      <div className="bg-green-50 border border-green-200 rounded-2xl p-12">
        <div className="flex flex-col items-center space-y-6">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
            <Check className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Session Booked Successfully</h2>
          <p className="text-gray-600 max-w-md">
            Your career counselling session has been scheduled. A secure meeting link will be sent to your email.
          </p>
        </div>
      </div>
      
      <div className="flex justify-center space-x-4">
        <Button variant="outline" className="px-8 h-12">
          Add to Calendar
        </Button>
        <Button className="bg-[#0389FF] hover:bg-[#0389FF]/90 text-white px-8 h-12">
          DOWNLOAD CONFIRMATION
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative overflow-hidden min-h-screen" style={{ height: '100%', minHeight: '100%' }}>
        {/* Grid background */}
        <div 
          className="absolute inset-0 opacity-50 pointer-events-none z-0"
          style={{
            minHeight: '100vh',
            backgroundImage: `
              linear-gradient(rgba(107,114,128,0.5) 2px, transparent 2px),
              linear-gradient(90deg, rgba(107,114,128,0.5) 2px, transparent 2px)
            `,
            backgroundSize: '100px 100px',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 35%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 35%, transparent 100%)',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskSize: '100% 100%',
            maskSize: '100% 100%',
          }}
        />

        {/* Content above grid */}
        <div className="relative z-10">
          <Header />

          {/* Navigation Bar */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link to="/career-counselling">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2 text-white border-[#00549FB8] rounded-full px-4 hover:bg-[#00549FB8]/90"
                  style={{ backgroundColor: '#00549FB8' }}
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back</span>
                </Button>
              </Link>

              <Button
                variant="outline"
                size="sm"
                className="flex items-center space-x-2 text-white border-[#00549FB8] rounded-full px-4 hover:bg-[#00549FB8]/90"
                style={{ backgroundColor: '#00549FB8' }}
              >
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </Button>
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-xl font-medium text-gray-600 mb-2">Book your Session</h1>
            <h2 className="text-4xl font-bold text-gray-900">
              <span className="text-blue-500">Career</span> Counselling
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentStep <= 4 && renderStepIndicator()}

        <Card className="p-8 shadow-sm">
          {currentStep === 1 && renderPersonalInfo()}
          {currentStep === 2 && renderContactInfo()}
          {currentStep === 3 && renderCareerBackground()}
          {currentStep === 4 && renderScheduleSession()}
          {currentStep === 5 && renderSuccess()}
        </Card>

        {currentStep <= 4 && (
          <div className="flex justify-end mt-8">
            {currentStep === 4 ? (
              <Button 
                onClick={nextStep}
                className="bg-[#0389FF] hover:bg-[#0389FF]/90 text-white px-8 py-3 text-lg font-semibold h-12"
              >
                PROCEED TO PAYMENT
              </Button>
            ) : (
              <Button 
                onClick={nextStep}
                className="bg-[#0389FF] hover:bg-[#0389FF]/90 text-white px-8 py-3 text-lg font-semibold h-12"
              >
                CONTINUE
              </Button>
            )}
          </div>
        )}
      </div>

      <footer className="bg-blue-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
              <span className="text-blue-900 font-bold text-lg">
                <img 
                  src="/lovable-uploads/FooterLogo.png" 
                  alt="STEM for Society Logo" 
                  className="w-full h-full object-contain"
                />
              </span>
            </div>
            <div>
              <h4 className="text-xl font-bold">STEM FOR SOCIETY</h4>
              <p className="text-blue-200 text-sm">Let's innovate, incubate and impact the world together!</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CareerCounsellingBookingFlow;
