import React, { useState } from 'react';
import Header from '@/components/Header';
import GridBackground from '@/components/GridBackground';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft,Share2, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const CoursesBookingFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    course: '',
    level: '',
    startDate: '',
    selectedDate: null as Date | null,
    selectedTime: '4:30 PM',
  });

  const [currentMonth, setCurrentMonth] = useState(new Date(2023, 8));

  const steps = [
    { number: 1, title: 'Personal Information' },
    { number: 2, title: 'Contact Information' },
    { number: 3, title: 'Select Course' },
    { number: 4, title: 'Schedule Start' },
  ];

  const availableTimes = [
    '10:30 AM', '11:30 AM', '12:30 PM', '3:30 PM', '4:30 PM', '5:30 PM'
  ];

  const courses = [
    'Research Methodology',
    'Data Analysis',
    'Academic Writing',
    'Statistics for Research',
    'Literature Review',
    'Thesis Writing'
  ];

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          <div className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
            currentStep === step.number 
              ? "bg-blue-600 text-white" 
              : currentStep > step.number 
                ? "bg-blue-600 text-white"
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
    </div>
  );

  const renderContactInfo = () => (
    <div className="space-y-6">
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
    </div>
  );

  const renderSelectCourse = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Select Your Course</h2>
      
      <Select value={formData.course} onValueChange={(value) => updateFormData('course', value)}>
        <SelectTrigger className="bg-gray-100 border-0 h-12">
          <SelectValue placeholder="Choose Course" />
        </SelectTrigger>
        <SelectContent>
          {courses.map((course) => (
            <SelectItem key={course} value={course}>{course}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={formData.level} onValueChange={(value) => updateFormData('level', value)}>
        <SelectTrigger className="bg-gray-100 border-0 h-12">
          <SelectValue placeholder="Select Level" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="beginner">Beginner</SelectItem>
          <SelectItem value="intermediate">Intermediate</SelectItem>
          <SelectItem value="advanced">Advanced</SelectItem>
        </SelectContent>
      </Select>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="text-3xl font-bold text-blue-600 mb-2">₹ 15,000.00</div>
        <div className="text-gray-600">Complete Course Package</div>
      </div>
    </div>
  );

  const renderScheduleStart = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Schedule Your Course Start</h2>
      
      <Select value={formData.startDate} onValueChange={(value) => updateFormData('startDate', value)}>
        <SelectTrigger className="bg-gray-100 border-0 h-12">
          <SelectValue placeholder="Select Start Date" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="2023-10-01">October 1, 2023</SelectItem>
          <SelectItem value="2023-10-15">October 15, 2023</SelectItem>
          <SelectItem value="2023-11-01">November 1, 2023</SelectItem>
        </SelectContent>
      </Select>

      <div>
        <h4 className="font-medium mb-4 text-lg">Preferred Time Slot</h4>
        <div className="grid grid-cols-2 gap-3">
          {availableTimes.map((time) => (
            <Button
              key={time}
              variant={time === formData.selectedTime ? 'default' : 'outline'}
              className={cn(
                "py-3 h-12",
                time === formData.selectedTime 
                  ? "bg-blue-600 text-white hover:bg-blue-700" 
                  : "bg-gray-100 border-0 text-gray-700 hover:bg-gray-200"
              )}
              onClick={() => updateFormData('selectedTime', time)}
            >
              {time}
            </Button>
          ))}
        </div>
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
          <h2 className="text-3xl font-bold text-gray-900">Enrollment Successful</h2>
          <p className="text-gray-600 max-w-md">
            Welcome to your selected course! You will receive course materials and login details via email.
          </p>
        </div>
      </div>
      
      <div className="flex justify-center space-x-4">
        <Button variant="outline" className="px-8 h-12">
          Download Schedule
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12">
          ACCESS COURSE
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
     <div className="relative overflow-hidden min-h-screen"style={{ height: '100%', minHeight: '100%' }}
>
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
        <Link to="/">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center space-x-2 bg-[#0389FF] text-white border-[#0389FF] rounded-full px-4 hover:bg-[#0389FF]/90"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>
        </Link>

        <Button
          variant="outline"
          size="sm"
          className="flex items-center space-x-2 bg-[#0389FF] text-white border-[#0389FF] rounded-full px-4 hover:bg-[#0389FF]/90"
        >
          <Share2 className="h-4 w-4" />
          <span>Share</span>
        </Button>
      </div>
    </div>
       <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Explore Courses</h1>
          <h2 className="text-3xl font-bold text-gray-900">Get trained and become Certified Professional</h2>
        </div>
  </div>
</div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-xl font-medium text-gray-600 mb-2">Enroll in Course</h1>
          <h2 className="text-4xl font-bold text-gray-900">
            <span className="text-blue-600">Course</span> Enrollment
          </h2>
        </div>

        {currentStep <= 4 && renderStepIndicator()}

        <Card className="p-8 shadow-sm">
          {currentStep === 1 && renderPersonalInfo()}
          {currentStep === 2 && renderContactInfo()}
          {currentStep === 3 && renderSelectCourse()}
          {currentStep === 4 && renderScheduleStart()}
          {currentStep === 5 && renderSuccess()}
        </Card>

        {currentStep <= 4 && (
          <div className="flex justify-end mt-8">
            {currentStep === 4 ? (
              <Button 
                onClick={nextStep}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold h-12"
              >
                PROCEED TO PAYMENT
              </Button>
            ) : (
              <Button 
                onClick={nextStep}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold h-12"
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
            <div className="w-10 h-10  rounded-full flex items-center justify-center mr-3">
              <span className="text-blue-900 font-bold text-lg"><img 
                    src="/lovable-uploads/FooterLogo.png" 
                    alt="STEM for Society Logo" 
                    className="w-full h-full object-contain"
                  /></span>
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

export default CoursesBookingFlow;
