
import React, { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Check, ChevronLeft, ChevronRight } from 'lucide-react';
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
    selectedServices: {
      careerChoice: false,
      cvResumePrep: false,
      researchProposal: false,
      lorSopEditing: true,
      shortlistingAbroad: true,
      pgPhdAbroad: false,
      postDocApplication: true,
      industryJobs: true,
    },
    selectedDate: null as Date | null,
    selectedTime: '4:30 PM',
  });

  const [currentMonth, setCurrentMonth] = useState(new Date(2023, 8)); // September 2023

  const steps = [
    { number: 1, title: 'Personal Information' },
    { number: 2, title: 'Contact Information' },
    { number: 3, title: 'Select service' },
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

  const updateServiceSelection = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: {
        ...prev.selectedServices,
        [service]: checked
      }
    }));
  };

  const calculateTotalPrice = () => {
    const selectedCount = Object.values(formData.selectedServices).filter(Boolean).length;
    return selectedCount * 2000;
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          placeholder="Address line 1"
          value={formData.addressLine1}
          onChange={(e) => updateFormData('addressLine1', e.target.value)}
          className="bg-gray-100 border-0 h-12"
        />
        <Input
          placeholder="Address line 2"
          value={formData.addressLine2}
          onChange={(e) => updateFormData('addressLine2', e.target.value)}
          className="bg-gray-100 border-0 h-12"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select value={formData.city} onValueChange={(value) => updateFormData('city', value)}>
          <SelectTrigger className="bg-gray-100 border-0 h-12">
            <SelectValue placeholder="City" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mumbai">Mumbai</SelectItem>
            <SelectItem value="delhi">Delhi</SelectItem>
            <SelectItem value="bangalore">Bangalore</SelectItem>
          </SelectContent>
        </Select>
        <Select value={formData.state} onValueChange={(value) => updateFormData('state', value)}>
          <SelectTrigger className="bg-gray-100 border-0 h-12">
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
        className="bg-gray-100 border-0 h-12"
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
          className="bg-gray-100 border-0 pr-10 h-12"
        />
        <Check className="absolute right-3 top-4 h-4 w-4 text-green-600" />
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center space-x-3">
        <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
          <span className="text-yellow-800 text-sm font-bold">!</span>
        </div>
        <span className="text-yellow-800 text-sm flex-1">Check your inbox and click the verification link.</span>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
          Authenticate
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select value={formData.country} onValueChange={(value) => updateFormData('country', value)}>
          <SelectTrigger className="bg-gray-100 border-0 h-12">
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
          className="bg-gray-100 border-0 h-12"
        />
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center space-x-3">
        <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
          <span className="text-yellow-800 text-sm font-bold">!</span>
        </div>
        <span className="text-yellow-800 text-sm flex-1">Enter the OTP sent to your mobile number.</span>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
          Send OTP
        </Button>
      </div>

      <Input
        placeholder="Send OTP"
        className="bg-gray-100 border-0 h-12"
      />
    </div>
  );

  const renderSelectService = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Want a Specific Service?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={formData.selectedServices.careerChoice}
              onChange={(e) => updateServiceSelection('careerChoice', e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded"
            />
            <label className="text-gray-700">Career choice</label>
          </div>
          
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={formData.selectedServices.researchProposal}
              onChange={(e) => updateServiceSelection('researchProposal', e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded"
            />
            <label className="text-gray-700">Research Proposal editing</label>
          </div>
          
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={formData.selectedServices.shortlistingAbroad}
              onChange={(e) => updateServiceSelection('shortlistingAbroad', e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded"
            />
            <label className="text-gray-700">Shortlisting Abroad PhD</label>
          </div>
          
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={formData.selectedServices.postDocApplication}
              onChange={(e) => updateServiceSelection('postDocApplication', e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded"
            />
            <label className="text-gray-700">Post Doc Application</label>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={formData.selectedServices.cvResumePrep}
              onChange={(e) => updateServiceSelection('cvResumePrep', e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded"
            />
            <label className="text-gray-700">CV/Resume prep</label>
          </div>
          
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={formData.selectedServices.lorSopEditing}
              onChange={(e) => updateServiceSelection('lorSopEditing', e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded"
            />
            <label className="text-gray-700">LOR/SOP editing & preparation</label>
          </div>
          
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={formData.selectedServices.pgPhdAbroad}
              onChange={(e) => updateServiceSelection('pgPhdAbroad', e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded"
            />
            <label className="text-gray-700">PG/PhD abroad application guidance</label>
          </div>
          
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={formData.selectedServices.industryJobs}
              onChange={(e) => updateServiceSelection('industryJobs', e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded"
            />
            <label className="text-gray-700">Industry jobs</label>
          </div>
        </div>
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center space-x-3">
        <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
          <span className="text-yellow-800 text-sm font-bold">!</span>
        </div>
        <span className="text-yellow-800 text-sm">
          Note: ₹2,000 will be added for each selected course. Total updates automatically.
        </span>
      </div>
      
      <div className="flex justify-between items-center pt-6 border-t">
        <div className="text-3xl font-bold text-blue-600">
          ₹ {calculateTotalPrice().toLocaleString()}.00
        </div>
        <div className="text-gray-600">
          Total Price : ({Object.values(formData.selectedServices).filter(Boolean).length}) * 2000₹
        </div>
      </div>
    </div>
  );

  const renderScheduleMeet = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Calendar */}
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
            className="w-8 h-8 p-0 rounded-full bg-gray-200"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h3 className="font-medium text-lg">
            September 2023
          </h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
            className="w-8 h-8 p-0 rounded-full bg-blue-600 text-white hover:bg-blue-700"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-7 gap-1 text-center text-sm">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="p-3 font-medium text-gray-600">{day}</div>
          ))}
          
          {/* Calendar days - September 2023 layout */}
          {[null, null, null, null, null, 1, 2].map((day, i) => (
            <div key={`week1-${i}`} className="p-3 text-sm">
              {day && (
                <button className="w-full h-8 text-gray-700 hover:bg-blue-100 rounded">
                  {day}
                </button>
              )}
            </div>
          ))}
          
          {[3, 4, 5, 6, 7, 8, 9].map((day) => (
            <div key={`week2-${day}`} className="p-3 text-sm">
              <button className="w-full h-8 text-gray-700 hover:bg-blue-100 rounded">
                {day}
              </button>
            </div>
          ))}
          
          {[10, 11, 12, 13, 14, 15, 16].map((day) => (
            <div key={`week3-${day}`} className="p-3 text-sm">
              <button className="w-full h-8 text-gray-700 hover:bg-blue-100 rounded">
                {day}
              </button>
            </div>
          ))}
          
          {[17, 18, 19, 20, 21, 22, 23].map((day) => (
            <div key={`week4-${day}`} className="p-3 text-sm">
              <button 
                className={cn(
                  "w-full h-8 rounded",
                  day === 18 ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-blue-100"
                )}
                onClick={() => setFormData(prev => ({ ...prev, selectedDate: new Date(2023, 8, day) }))}
              >
                {day}
              </button>
            </div>
          ))}
          
          {[24, 25, 26, 27, 28, 29, 30].map((day) => (
            <div key={`week5-${day}`} className="p-3 text-sm">
              <button className="w-full h-8 text-gray-700 hover:bg-blue-100 rounded">
                {day}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Time slots and date selector */}
      <div className="space-y-6">
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
          <h4 className="font-medium mb-4 text-lg">Available Time</h4>
          <div className="grid grid-cols-2 gap-3">
            {availableTimes.map((time) => (
              <Button
                key={time}
                variant={time === '4:30 PM' ? 'default' : 'outline'}
                className={cn(
                  "py-3 h-12",
                  time === '4:30 PM' 
                    ? "bg-blue-600 text-white hover:bg-blue-700" 
                    : "bg-gray-100 border-0 text-gray-700 hover:bg-gray-200"
                )}
                onClick={() => updateFormData('selectedTime', time)}
              >
                {time}
              </button>
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
        <Button variant="outline" className="px-8 h-12">
          Add to Calendar
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12">
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
          <Link to="/career-counselling">
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
          <h1 className="text-xl font-medium text-gray-600 mb-2">Book your Session</h1>
          <h2 className="text-4xl font-bold text-gray-900">
            <span className="text-yellow-400">Career</span> Counselling
          </h2>
        </div>

        {/* Step Indicator */}
        {currentStep <= 4 && renderStepIndicator()}

        {/* Form Content */}
        <Card className="p-8 shadow-sm">
          {currentStep === 1 && renderPersonalInfo()}
          {currentStep === 2 && renderContactInfo()}
          {currentStep === 3 && renderSelectService()}
          {currentStep === 4 && renderScheduleMeet()}
          {currentStep === 5 && renderSuccess()}
        </Card>

        {/* Navigation Buttons */}
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
