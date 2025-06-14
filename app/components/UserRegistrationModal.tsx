'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Building, Phone, MapPin, Briefcase, Download, FileText } from 'lucide-react';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';

interface UserRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  jobTitle: string;
  location: string;
  teamSize: string;
  workMode: string;
  interests: string[];
}

export default function UserRegistrationModal({ isOpen, onClose }: UserRegistrationModalProps) {
  const [formData, setFormData] = useState<UserData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    jobTitle: '',
    location: '',
    teamSize: '',
    workMode: '',
    interests: [],
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const workModeOptions = ['Remote', 'Hybrid', 'Office-based', 'Flexible'];
  const teamSizeOptions = ['1-10', '11-50', '51-200', '201-1000', '1000+'];
  const interestOptions = [
    'Productivity Analytics',
    'Team Collaboration',
    'Workflow Automation',
    'Performance Tracking',
    'AI Insights',
    'Integration Management',
  ];

  const handleInputChange = (field: keyof UserData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const exportToExcel = (data: UserData) => {
    const worksheet = XLSX.utils.json_to_sheet([{
      'First Name': data.firstName,
      'Last Name': data.lastName,
      'Email': data.email,
      'Company': data.company,
      'Phone': data.phone,
      'Job Title': data.jobTitle,
      'Location': data.location,
      'Team Size': data.teamSize,
      'Work Mode': data.workMode,
      'Interests': data.interests.join(', '),
      'Registration Date': new Date().toLocaleDateString(),
    }]);

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'User Registration');
    XLSX.writeFile(workbook, `HybridFlow_Registration_${data.firstName}_${data.lastName}.xlsx`);
  };

  const exportToPDF = (data: UserData) => {
    const doc = new jsPDF();
    
    // Header
    doc.setFontSize(20);
    doc.setTextColor(99, 102, 241);
    doc.text('HybridFlow Registration', 20, 30);
    
    // User details
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    let yPosition = 50;
    
    const details = [
      ['Name:', `${data.firstName} ${data.lastName}`],
      ['Email:', data.email],
      ['Company:', data.company],
      ['Phone:', data.phone],
      ['Job Title:', data.jobTitle],
      ['Location:', data.location],
      ['Team Size:', data.teamSize],
      ['Work Mode:', data.workMode],
      ['Interests:', data.interests.join(', ')],
      ['Registration Date:', new Date().toLocaleDateString()],
    ];

    details.forEach(([label, value]) => {
      doc.setFont('helvetica', 'bold');
      doc.text(label, 20, yPosition);
      doc.setFont('helvetica', 'normal');
      doc.text(value, 60, yPosition);
      yPosition += 10;
    });

    doc.save(`HybridFlow_Registration_${data.firstName}_${data.lastName}.pdf`);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Auto-close after success
    setTimeout(() => {
      setIsSuccess(false);
      setCurrentStep(1);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        jobTitle: '',
        location: '',
        teamSize: '',
        workMode: '',
        interests: [],
      });
      onClose();
    }, 3000);
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.company;
      case 2:
        return formData.jobTitle && formData.location && formData.teamSize && formData.workMode;
      case 3:
        return formData.interests.length > 0;
      default:
        return false;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glass-effect rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold gradient-text">Get Started with HybridFlow</h2>
                <p className="text-slate-400 mt-1">Join thousands of teams boosting productivity</p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-lg bg-slate-700 hover:bg-slate-600 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-400">Step {currentStep} of 3</span>
                <span className="text-sm text-slate-400">{Math.round((currentStep / 3) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-indigo-500 to-emerald-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(currentStep / 3) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Success State */}
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <motion.svg
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="w-10 h-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </motion.svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">Welcome to HybridFlow!</h3>
                <p className="text-slate-300 mb-6">Your registration was successful. Download your details below:</p>
                
                <div className="flex gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => exportToExcel(formData)}
                    className="flex items-center space-x-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold text-white transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Download Excel</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => exportToPDF(formData)}
                    className="flex items-center space-x-2 px-6 py-3 bg-rose-500 hover:bg-rose-600 rounded-lg font-semibold text-white transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Form Steps */}
            {!isSuccess && (
              <>
                {/* Step 1: Basic Information */}
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h3 className="text-xl font-semibold mb-6 flex items-center">
                      <User className="w-5 h-5 mr-2 text-indigo-400" />
                      Basic Information
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                          placeholder="Enter your last name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Company</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                          placeholder="Enter your company name"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Professional Details */}
                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h3 className="text-xl font-semibold mb-6 flex items-center">
                      <Briefcase className="w-5 h-5 mr-2 text-emerald-400" />
                      Professional Details
                    </h3>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Job Title</label>
                        <input
                          type="text"
                          value={formData.jobTitle}
                          onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                          placeholder="Enter your job title"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Location</label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                          placeholder="Enter your location"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Team Size</label>
                        <select
                          value={formData.teamSize}
                          onChange={(e) => handleInputChange('teamSize', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                        >
                          <option value="">Select team size</option>
                          {teamSizeOptions.map(size => (
                            <option key={size} value={size}>{size} employees</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Work Mode</label>
                        <div className="grid grid-cols-2 gap-3">
                          {workModeOptions.map(mode => (
                            <button
                              key={mode}
                              type="button"
                              onClick={() => handleInputChange('workMode', mode)}
                              className={`p-3 rounded-lg border transition-all ${
                                formData.workMode === mode
                                  ? 'border-indigo-500 bg-indigo-500/20 text-indigo-300'
                                  : 'border-slate-600 bg-slate-700 text-slate-300 hover:border-slate-500'
                              }`}
                            >
                              {mode}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Interests */}
                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h3 className="text-xl font-semibold mb-6 flex items-center">
                      <Building className="w-5 h-5 mr-2 text-amber-400" />
                      Areas of Interest
                    </h3>
                    
                    <p className="text-slate-400 mb-6">Select the features you're most interested in (choose at least one):</p>
                    
                    <div className="grid md:grid-cols-2 gap-3">
                      {interestOptions.map(interest => (
                        <motion.button
                          key={interest}
                          type="button"
                          onClick={() => handleInterestToggle(interest)}
                          className={`p-4 rounded-lg border text-left transition-all ${
                            formData.interests.includes(interest)
                              ? 'border-emerald-500 bg-emerald-500/20 text-emerald-300'
                              : 'border-slate-600 bg-slate-700 text-slate-300 hover:border-slate-500'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center">
                            <div className={`w-4 h-4 rounded border-2 mr-3 flex items-center justify-center ${
                              formData.interests.includes(interest)
                                ? 'border-emerald-500 bg-emerald-500'
                                : 'border-slate-500'
                            }`}>
                              {formData.interests.includes(interest) && (
                                <motion.svg
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="w-2 h-2 text-white"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </motion.svg>
                              )}
                            </div>
                            <span className="font-medium">{interest}</span>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <button
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="px-6 py-3 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-semibold text-white transition-colors"
                  >
                    Previous
                  </button>
                  
                  {currentStep < 3 ? (
                    <motion.button
                      onClick={nextStep}
                      disabled={!isStepValid()}
                      className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-emerald-500 hover:from-indigo-600 hover:to-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-semibold text-white transition-all"
                      whileHover={{ scale: isStepValid() ? 1.05 : 1 }}
                      whileTap={{ scale: isStepValid() ? 0.95 : 1 }}
                    >
                      Next Step
                    </motion.button>
                  ) : (
                    <motion.button
                      onClick={handleSubmit}
                      disabled={!isStepValid() || isSubmitting}
                      className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-emerald-500 hover:from-indigo-600 hover:to-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-semibold text-white transition-all flex items-center space-x-2"
                      whileHover={{ scale: isStepValid() && !isSubmitting ? 1.05 : 1 }}
                      whileTap={{ scale: isStepValid() && !isSubmitting ? 0.95 : 1 }}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                          />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <span>Complete Registration</span>
                      )}
                    </motion.button>
                  )}
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}