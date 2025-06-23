
import React, { useState } from 'react';
import Header from '@/components/Header';
import GridBackground from '@/components/GridBackground';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Share2, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const CareerCounsellingBookingFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    plan: '',
    selectedDate: null as Date | null,
    selectedTime: '4:30 PM',
  });

  const [currentMonth, setCurrentMonth] = useState(new Date(2023, 8));

  const steps = [
    { number: 1, title: 'Personal Information' },
    { number: 2, title: 'Contact Information' },
    { number: 3, title: 'Select Plan' },
    { number: 4, title: 'Schedule Session' },
  ];

  const availableTimes = [
    '10:30 AM', '11:30 AM', '12:30 PM', '3:30 PM', '4:30 PM', '5:30 PM'
  ];

  const plans = [
    { id: 'basic', name: 'Basic', price: 2000, description: 'Want a Specific Service?' },
    { id: 'standard', name: 'Standard', price: 30000, description: 'Essential Skills to Shape a Promising Future' },
    { id: 'premium', name: 'Premium', price: 50000, description: 'Comprehensive Training for a Brighter Tomorrow' }
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

  const renderSelectPlan = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Choose Your Plan</h2>
      
      <div className="grid grid-cols-1 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={cn(
              "border rounded-lg p-6 cursor-pointer transition-all",
              selectedPlan === plan.id 
                ? "border-blue-600 bg-blue-50" 
                : "border-gray-200 hover:border-gray-300"
            )}
            onClick={() => {
              setSelectedPlan(plan.id);
              updateFormData('plan', plan.id);
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{plan.description}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">₹ {plan.price.toLocaleString()}.00</div>
                <div className="text-gray-500 text-sm">
                  {plan.id === 'basic' ? '/ Service' : '/ Person'}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="text-3xl font-bold text-blue-600 mb-2">
            ₹ {plans.find(p => p.id === selectedPlan)?.price.toLocaleString()}.00
          </div>
          <div className="text-gray-600">Selected Plan: {plans.find(p => p.id === selectedPlan)?.name}</div>
        </div>
      )}
    </div>
  );

  const renderScheduleSession = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Schedule Your Session</h2>
      
      <Select value={formData.selectedDate?.toISOString() || ''} onValueChange={(value) => updateFormData('selectedDate', value)}>
        <SelectTrigger className="bg-gray-100 border-0 h-12">
          <SelectValue placeholder="Select Date" />
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
          <h2 className="text-3xl font-bold text-gray-900">Booking Successful</h2>
          <p className="text-gray-600 max-w-md">
            Your career counselling session has been booked. You will receive session details and meeting link via email.
          </p>
        </div>
      </div>
      
      <div className="flex justify-center space-x-4">
        <Button variant="outline" className="px-8 h-12">
          Download Receipt
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12">
          ACCESS SESSION
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <GridBackground>
        <Header />

        {/* Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/career-counselling">
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
          <h1 className="text-xl font-medium text-gray-600 mb-2">Book your Session</h1>
          <h2 className="text-4xl font-bold text-gray-900">
            <span className="text-blue-600">Career</span> Counselling
          </h2>
        </div>
      </GridBackground>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentStep <= 4 && renderStepIndicator()}

        <Card className="p-8 shadow-sm">
          {currentStep === 1 && renderPersonalInfo()}
          {currentStep === 2 && renderContactInfo()}
          {currentStep === 3 && renderSelectPlan()}
          {currentStep === 4 && renderScheduleSession()}
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
