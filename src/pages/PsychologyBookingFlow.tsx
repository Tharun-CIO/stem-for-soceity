
import React, { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Check, Shield, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const PsychologyBookingFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    age: '',
    concerns: '',
    studentId: '',
    selectedDate: null as Date | null,
    selectedTime: '4:30 PM',
  });

  const steps = [
    { number: 1, title: 'Personal Information' },
    { number: 2, title: 'Contact Information' },
    { number: 3, title: 'Concerns & Background' },
    { number: 4, title: 'Schedule Session' },
  ];

  const availableTimes = [
    '10:30 AM', '11:30 AM', '12:30 PM', '3:30 PM', '4:30 PM', '5:30 PM'
  ];

  const concerns = [
    'Academic Stress',
    'Anxiety',
    'Depression',
    'Relationship Issues',
    'Career Confusion',
    'Study Habits',
    'Time Management',
    'Self-Esteem Issues'
  ];

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculatePrice = () => {
    return formData.studentId ? 500 : 2000; // 75% discount for students
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          <div className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
            currentStep === step.number 
              ? "bg-teal-600 text-white" 
              : currentStep > step.number 
                ? "bg-teal-600 text-white"
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

  const renderConcerns = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">What brings you here today?</h2>
      
      <Select value={formData.concerns} onValueChange={(value) => updateFormData('concerns', value)}>
        <SelectTrigger className="bg-gray-100 border-0 h-12">
          <SelectValue placeholder="Select your primary concern" />
        </SelectTrigger>
        <SelectContent>
          {concerns.map((concern) => (
            <SelectItem key={concern} value={concern}>{concern}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
        <div className="text-3xl font-bold text-teal-600 mb-2">₹ {calculatePrice().toLocaleString()}.00</div>
        <div className="text-gray-600">30-minute confidential session</div>
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
                  ? "bg-teal-600 text-white hover:bg-teal-700" 
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
        <span className="text-yellow-800 text-sm">All sessions are completely confidential and conducted by licensed professionals.</span>
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
            Your counselling session has been scheduled. A secure meeting link will be sent to your email.
          </p>
        </div>
      </div>
      
      <div className="flex justify-center space-x-4">
        <Button variant="outline" className="px-8 h-12">
          Add to Calendar
        </Button>
        <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 h-12">
          DOWNLOAD CONFIRMATION
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="bg-white border-b pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/psychology-counselling">
            <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-teal-600 text-white border-teal-600 rounded-full px-4 hover:bg-teal-700">
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </Button>
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-xl font-medium text-gray-600 mb-2">Book your Session</h1>
          <h2 className="text-4xl font-bold text-gray-900">
            <span className="text-teal-500">Psychology</span> Counselling
          </h2>
        </div>

        {currentStep <= 4 && renderStepIndicator()}

        <Card className="p-8 shadow-sm">
          {currentStep === 1 && renderPersonalInfo()}
          {currentStep === 2 && renderContactInfo()}
          {currentStep === 3 && renderConcerns()}
          {currentStep === 4 && renderScheduleSession()}
          {currentStep === 5 && renderSuccess()}
        </Card>

        {currentStep <= 4 && (
          <div className="flex justify-end mt-8">
            {currentStep === 4 ? (
              <Button 
                onClick={nextStep}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg font-semibold h-12"
              >
                PROCEED TO PAYMENT
              </Button>
            ) : (
              <Button 
                onClick={nextStep}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg font-semibold h-12"
              >
                CONTINUE
              </Button>
            )}
          </div>
        )}
      </div>

      <footer className="bg-blue-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
              <span className="text-blue-900 font-bold text-xl">S</span>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold">STEM FOR SOCIETY</h4>
              <p className="text-blue-200">Let's innovate, incubate and impact the world together!</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PsychologyBookingFlow;
