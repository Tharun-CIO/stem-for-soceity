
import React, { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Upload, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const BookingFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: '',
    email: '',
    country: '',
    mobileNumber: '',
    documentType: '',
    selectedDate: null as Date | null,
    selectedTime: '',
  });

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date(2023, 8)); // September 2023

  const steps = [
    { number: 1, title: 'Personal Information' },
    { number: 2, title: 'Contact Information' },
    { number: 3, title: 'Upload ID' },
    { number: 4, title: 'Schedule meet' },
  ];

  const availableTimes = [
    '10:30 AM', '11:30 AM', '12:30 PM', '3:30 AM', '4:30 PM', '5:30 PM'
  ];

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
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
          className="bg-gray-100 border-0"
        />
        <Input
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) => updateFormData('lastName', e.target.value)}
          className="bg-gray-100 border-0"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          placeholder="Address line 1"
          value={formData.addressLine1}
          onChange={(e) => updateFormData('addressLine1', e.target.value)}
          className="bg-gray-100 border-0"
        />
        <Input
          placeholder="Address line 2"
          value={formData.addressLine2}
          onChange={(e) => updateFormData('addressLine2', e.target.value)}
          className="bg-gray-100 border-0"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select value={formData.city} onValueChange={(value) => updateFormData('city', value)}>
          <SelectTrigger className="bg-gray-100 border-0">
            <SelectValue placeholder="City" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mumbai">Mumbai</SelectItem>
            <SelectItem value="delhi">Delhi</SelectItem>
            <SelectItem value="bangalore">Bangalore</SelectItem>
          </SelectContent>
        </Select>
        <Select value={formData.state} onValueChange={(value) => updateFormData('state', value)}>
          <SelectTrigger className="bg-gray-100 border-0">
            <SelectValue placeholder="State" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="maharashtra">Maharashtra</SelectItem>
            <SelectItem value="delhi">Delhi</SelectItem>
            <SelectItem value="karnataka">Karnataka</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Input
        placeholder="Pincode"
        value={formData.pincode}
        onChange={(e) => updateFormData('pincode', e.target.value)}
        className="bg-gray-100 border-0"
      />
    </div>
  );

  const renderContactInfo = () => (
    <div className="space-y-6">
      <div className="relative">
        <Input
          placeholder="Email"
          type="email"
          value={formData.email}
          onChange={(e) => updateFormData('email', e.target.value)}
          className="bg-gray-100 border-0 pr-10"
        />
        <Check className="absolute right-3 top-3 h-4 w-4 text-green-600" />
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center space-x-3">
        <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
          <span className="text-yellow-800 text-sm font-bold">!</span>
        </div>
        <span className="text-yellow-800 text-sm">Check your inbox and click the verification link.</span>
        <Button className="ml-auto bg-blue-600 hover:bg-blue-700 text-white px-6">
          Authenticate
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select value={formData.country} onValueChange={(value) => updateFormData('country', value)}>
          <SelectTrigger className="bg-gray-100 border-0">
            <SelectValue placeholder="Country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="india">India</SelectItem>
            <SelectItem value="usa">USA</SelectItem>
            <SelectItem value="uk">UK</SelectItem>
          </SelectContent>
        </Select>
        <Input
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={(e) => updateFormData('mobileNumber', e.target.value)}
          className="bg-gray-100 border-0"
        />
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center space-x-3">
        <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
          <span className="text-yellow-800 text-sm font-bold">!</span>
        </div>
        <span className="text-yellow-800 text-sm">Enter the OTP sent to your mobile number.</span>
        <Button className="ml-auto bg-blue-600 hover:bg-blue-700 text-white px-6">
          Send OTP
        </Button>
      </div>

      <Input
        placeholder="Send OTP"
        className="bg-gray-100 border-0"
      />
    </div>
  );

  const renderUploadID = () => (
    <div className="space-y-6">
      <Select value={formData.documentType} onValueChange={(value) => updateFormData('documentType', value)}>
        <SelectTrigger className="bg-gray-100 border-0">
          <SelectValue placeholder="Document Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="aadhar">Aadhar Card</SelectItem>
          <SelectItem value="passport">Passport</SelectItem>
          <SelectItem value="license">Driving License</SelectItem>
        </SelectContent>
      </Select>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 space-y-2">
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-yellow-800 text-sm font-bold">!</span>
          </div>
          <div className="text-yellow-800 text-sm">
            <p>File type: Upload image files only (JPG, PNG).</p>
            <p>File size: Max file size: 5MB.</p>
          </div>
        </div>
        <p className="text-red-600 text-sm ml-9">Please upload a valid document to proceed.</p>
      </div>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <Upload className="h-8 w-8 text-gray-400" />
          </div>
          <p className="text-gray-500">Drag and Drop the file</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Button variant="outline" className="bg-blue-600 text-white border-blue-600 hover:bg-blue-700">
          Update Cover
        </Button>
        <Button variant="outline" className="border-gray-300">
          Re-Upload
        </Button>
      </div>
    </div>
  );

  const renderScheduleMeet = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Calendar */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h3 className="font-medium">
            {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-7 gap-1 text-center text-sm">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="p-2 font-medium text-gray-600">{day}</div>
          ))}
          
          {/* Calendar days */}
          {Array.from({ length: 30 }, (_, i) => {
            const dayNumber = i + 1;
            const isSelected = dayNumber === 18; // Highlighting 18th as selected in the image
            return (
              <button
                key={i}
                className={cn(
                  "p-2 text-sm rounded-full hover:bg-blue-100",
                  isSelected ? "bg-blue-600 text-white" : "text-gray-700"
                )}
                onClick={() => setSelectedDate(new Date(2023, 8, dayNumber))}
              >
                {dayNumber}
              </button>
            );
          })}
        </div>
      </div>

      {/* Time slots and date selector */}
      <div className="space-y-6">
        <Select>
          <SelectTrigger className="bg-gray-100 border-0">
            <SelectValue placeholder="Select Date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2023-09-18">September 18, 2023</SelectItem>
            <SelectItem value="2023-09-19">September 19, 2023</SelectItem>
            <SelectItem value="2023-09-20">September 20, 2023</SelectItem>
          </SelectContent>
        </Select>

        <div>
          <h4 className="font-medium mb-4">Available Time</h4>
          <div className="grid grid-cols-2 gap-3">
            {availableTimes.map((time) => (
              <Button
                key={time}
                variant={time === '4:30 PM' ? 'default' : 'outline'}
                className={cn(
                  "py-3",
                  time === '4:30 PM' 
                    ? "bg-blue-600 text-white" 
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

      <div className="lg:col-span-2">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center space-x-3">
          <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-yellow-800 text-sm font-bold">!</span>
          </div>
          <span className="text-yellow-800 text-sm">After payment, your session will be booked and a Meet link will be shared instantly.</span>
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
          <h2 className="text-3xl font-bold text-gray-900">Payment Successful</h2>
          <p className="text-gray-600 max-w-md">
            Your session has been scheduled at your selected time. A Meet link has been generated and sent to your email.
          </p>
        </div>
      </div>
      
      <div className="flex justify-center space-x-4">
        <Button variant="outline" className="px-8">
          Add to Calendar
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
          DOWNLOAD LINK FILE
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Navigation Bar */}
      <div className="bg-white border-b pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/psychology-counselling">
            <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-blue-600 text-white border-blue-600 rounded-full px-4 hover:bg-blue-700">
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-medium text-gray-600 mb-2">Book your Session</h1>
          <h2 className="text-4xl font-bold text-gray-900">Psychology Counselling</h2>
        </div>

        {/* Step Indicator */}
        {currentStep <= 4 && renderStepIndicator()}

        {/* Form Content */}
        <Card className="p-8 shadow-sm">
          {currentStep === 1 && renderPersonalInfo()}
          {currentStep === 2 && renderContactInfo()}
          {currentStep === 3 && renderUploadID()}
          {currentStep === 4 && renderScheduleMeet()}
          {currentStep === 5 && renderSuccess()}
        </Card>

        {/* Navigation Buttons */}
        {currentStep <= 4 && (
          <div className="flex justify-end mt-8">
            {currentStep === 4 ? (
              <Button 
                onClick={nextStep}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold"
              >
                PROCEED TO PAYMENT
              </Button>
            ) : (
              <Button 
                onClick={nextStep}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold"
              >
                CONTINUE
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
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

export default BookingFlow;
