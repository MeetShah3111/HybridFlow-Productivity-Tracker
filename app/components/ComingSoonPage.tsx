'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Rocket, Zap, Clock, Bell, CheckCircle, Star } from 'lucide-react';
import { useState } from 'react';
import Spline from '@splinetool/react-spline';

interface ComingSoonPageProps {
  onBack: () => void;
}

export default function ComingSoonPage({ onBack }: ComingSoonPageProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNotifyMe = () => {
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const upcomingFeatures = [
    {
      icon: Zap,
      title: 'Advanced Salesforce Integration',
      description: 'Deep CRM integration with custom workflows and automation',
      eta: 'Q2 2025',
      status: 'In Development',
    },
    {
      icon: Bell,
      title: 'Smart Slack Notifications',
      description: 'AI-powered notification management and priority filtering',
      eta: 'Q2 2025',
      status: 'Design Phase',
    },
    {
      icon: Star,
      title: 'Microsoft Teams Integration',
      description: 'Seamless collaboration across all major platforms',
      eta: 'Q3 2025',
      status: 'Planning',
    },
    {
      icon: CheckCircle,
      title: 'Advanced Analytics Dashboard',
      description: 'Real-time insights with predictive analytics',
      eta: 'Q3 2025',
      status: 'Research',
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background 3D Scene */}
      <div className="absolute inset-0 opacity-30">
        <Spline
          scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/70"></div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors mb-12"
          whileHover={{ x: -5 }}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </motion.button>

        {/* Main Content */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="w-32 h-32 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <Rocket className="w-16 h-16 text-white" />
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Coming Soon</span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              We're working hard to bring you the most advanced integration features. 
              Get ready for a revolutionary productivity experience!
            </p>

            {/* Animated Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-md mx-auto mb-12"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-400">Development Progress</span>
                <span className="text-sm text-emerald-400 font-semibold">73%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3">
                <motion.div
                  className="bg-gradient-to-r from-indigo-500 to-emerald-500 h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '73%' }}
                  transition={{ duration: 2, delay: 0.6 }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Notification Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto mb-16"
          >
            <h3 className="text-2xl font-bold mb-4">Be the First to Know</h3>
            <p className="text-slate-300 mb-6">
              Get notified when our integration features go live and receive exclusive early access.
            </p>

            {!isSubscribed ? (
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                />
                <motion.button
                  onClick={handleNotifyMe}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-lg font-semibold text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Notify Me
                </motion.button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <CheckCircle className="w-8 h-8 text-white" />
                </motion.div>
                <h4 className="text-xl font-semibold text-emerald-400 mb-2">You're All Set!</h4>
                <p className="text-slate-300">We'll notify you as soon as the integration features are ready.</p>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Upcoming Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            What's <span className="gradient-text">Coming Next</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="glass-effect rounded-xl p-6 hover:scale-105 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        feature.status === 'In Development' 
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : feature.status === 'Design Phase'
                          ? 'bg-amber-500/20 text-amber-400'
                          : 'bg-slate-500/20 text-slate-400'
                      }`}>
                        {feature.status}
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm mb-3">{feature.description}</p>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-400 text-sm">ETA: {feature.eta}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="glass-effect rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Development Roadmap</h3>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 to-emerald-500 rounded-full"></div>
            
            <div className="space-y-12">
              {[
                { quarter: 'Q1 2025', title: 'Foundation & Core Features', status: 'completed' },
                { quarter: 'Q2 2025', title: 'Salesforce & Slack Integration', status: 'current' },
                { quarter: 'Q3 2025', title: 'Advanced Analytics & AI', status: 'upcoming' },
                { quarter: 'Q4 2025', title: 'Enterprise Features & Scale', status: 'planned' },
              ].map((milestone, index) => (
                <motion.div
                  key={milestone.quarter}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 + index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <h4 className="text-lg font-semibold text-white mb-2">{milestone.title}</h4>
                    <p className="text-slate-400 text-sm">{milestone.quarter}</p>
                  </div>
                  
                  <div className="w-2/12 flex justify-center">
                    <div className={`w-4 h-4 rounded-full border-4 ${
                      milestone.status === 'completed' 
                        ? 'bg-emerald-500 border-emerald-500'
                        : milestone.status === 'current'
                        ? 'bg-indigo-500 border-indigo-500 animate-pulse'
                        : 'bg-slate-700 border-slate-600'
                    }`}></div>
                  </div>
                  
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}