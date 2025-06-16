
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Upload, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

const BlogArticle = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    educationLevel: '',
    department: '',
    designation: '',
    fieldExperience: '',
    linkedinProfile: '',
    coverPhoto: null as File | null
  });

  const steps = [
    { number: 1, title: 'Author Information', active: currentStep === 1 },
    { number: 2, title: 'Article Content', active: currentStep === 2 },
    { number: 3, title: 'Preview & Upload', active: currentStep === 3 },
    { number: 4, title: 'Final Review', active: currentStep === 4 }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, coverPhoto: file }));
    }
  };

  const handleContinue = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className="bg-gray-100 border-0 rounded-lg p-4 h-14"
              />
              <Input
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className="bg-gray-100 border-0 rounded-lg p-4 h-14"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select onValueChange={(value) => handleInputChange('educationLevel', value)}>
                <SelectTrigger className="bg-gray-100 border-0 rounded-lg p-4 h-14">
                  <SelectValue placeholder="Education Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                  <SelectItem value="masters">Master's Degree</SelectItem>
                  <SelectItem value="phd">PhD</SelectItem>
                  <SelectItem value="postdoc">Post-Doc</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={(value) => handleInputChange('department', value)}>
                <SelectTrigger className="bg-gray-100 border-0 rounded-lg p-4 h-14">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="biology">Biology</SelectItem>
                  <SelectItem value="chemistry">Chemistry</SelectItem>
                  <SelectItem value="physics">Physics</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="mathematics">Mathematics</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select onValueChange={(value) => handleInputChange('designation', value)}>
                <SelectTrigger className="bg-gray-100 border-0 rounded-lg p-4 h-14">
                  <SelectValue placeholder="Designation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="researcher">Researcher</SelectItem>
                  <SelectItem value="professor">Professor</SelectItem>
                  <SelectItem value="industry">Industry Professional</SelectItem>
                </SelectContent>
              </Select>

              <Input
                placeholder="Field Experience"
                value={formData.fieldExperience}
                onChange={(e) => handleInputChange('fieldExperience', e.target.value)}
                className="bg-gray-100 border-0 rounded-lg p-4 h-14"
              />
            </div>

            <Input
              placeholder="LinkedIn Profile"
              value={formData.linkedinProfile}
              onChange={(e) => handleInputChange('linkedinProfile', e.target.value)}
              className="bg-gray-100 border-0 rounded-lg p-4 h-14"
            />
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Article Content</h3>
              <p className="text-gray-600">Add your article content, title, and abstract</p>
            </div>
            <div className="space-y-4">
              <Input
                placeholder="Article Title"
                className="bg-gray-100 border-0 rounded-lg p-4 h-14"
              />
              <textarea
                placeholder="Abstract"
                className="w-full bg-gray-100 border-0 rounded-lg p-4 h-32 resize-none"
              />
              <textarea
                placeholder="Article Content"
                className="w-full bg-gray-100 border-0 rounded-lg p-4 h-64 resize-none"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-100 rounded-lg p-8 h-80 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-4">📄</div>
                  <p>Article Preview</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                      <Upload className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-gray-600 mb-2">Drag and Drop the Cover photo</p>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="cover-upload"
                  />
                  <label htmlFor="cover-upload" className="cursor-pointer">
                    <Button variant="outline" className="bg-blue-600 text-white hover:bg-blue-700 border-0">
                      Choose File
                    </Button>
                  </label>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-yellow-800 font-medium">Do not upload any copyrighted images,</p>
                    <p className="text-yellow-700">as they will be taken down due to legal repercussions.</p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button variant="outline" className="flex-1 bg-blue-600 text-white hover:bg-blue-700 border-0">
                    Update Cover
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Re-Upload
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center space-x-3">
              <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
              <p className="text-sm text-yellow-800">
                Your article will be reviewed and published within 48 hours.
              </p>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center space-y-6">
            <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">✓</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Article Submitted Successfully!</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Your article has been submitted for review. Our team will review it and publish within 48 hours.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              View My Articles
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Button 
              variant="outline" 
              onClick={handleBack}
              className="bg-blue-600 text-white hover:bg-blue-700 border-0 rounded-full px-6 py-2"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-gray-600 mb-2">Scientific communication</p>
            <h1 className="text-4xl md:text-5xl font-bold">
              Create your <span className="text-yellow-400">Article!</span>
            </h1>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium
                    ${step.active 
                      ? 'bg-blue-600 text-white' 
                      : currentStep > step.number
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }
                  `}>
                    {currentStep > step.number ? '✓' : step.number}
                  </div>
                  {step.active && (
                    <span className="ml-3 text-sm font-medium text-blue-600">
                      {step.title}
                    </span>
                  )}
                  {index < steps.length - 1 && (
                    <div className="w-16 h-px bg-gray-300 ml-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 mb-8">
              {renderStepContent()}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end">
              {currentStep === 3 ? (
                <Button 
                  onClick={handleContinue}
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg font-semibold"
                >
                  PUBLISH
                </Button>
              ) : currentStep < 4 ? (
                <Button 
                  onClick={handleContinue}
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg font-semibold"
                >
                  CONTINUE
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
              <span className="text-blue-800 font-bold text-xl">S</span>
            </div>
            <div>
              <h3 className="text-xl font-bold">STEM FOR SOCIETY</h3>
              <p className="text-blue-200">Let's Innovate, Incubate and Impact the world together!</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogArticle;
