'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, TrendingUp, Zap } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import UserRegistrationModal from './UserRegistrationModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-slate-900/60 z-10"></div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Supercharge Your{' '}
              <span className="gradient-text">Hybrid Workforce</span>
            </motion.h1>

            <motion.p
              className="text-xl text-slate-300 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Seamlessly integrate Salesforce and Slack to boost productivity, 
              enhance collaboration, and gain actionable insights for your hybrid teams.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-lg font-semibold text-white flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300 pulse-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                className="px-8 py-4 border border-slate-600 rounded-lg font-semibold text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-indigo-400 mr-2" />
                  <span className="text-2xl font-bold text-white">50K+</span>
                </div>
                <p className="text-slate-400 text-sm">Active Users</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-6 h-6 text-emerald-400 mr-2" />
                  <span className="text-2xl font-bold text-white">40%</span>
                </div>
                <p className="text-slate-400 text-sm">Productivity Boost</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Zap className="w-6 h-6 text-amber-400 mr-2" />
                  <span className="text-2xl font-bold text-white">99.9%</span>
                </div>
                <p className="text-slate-400 text-sm">Uptime</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Floating cards with 3D effect */}
            <div className="relative h-96 lg:h-[500px]">
              <motion.div
                className="absolute top-0 right-0 w-64 h-40 glass-effect rounded-xl p-6 floating-animation"
                style={{ animationDelay: '0s' }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center mr-3">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold">Productivity</span>
                </div>
                <div className="text-2xl font-bold text-emerald-400">+42%</div>
                <div className="text-sm text-slate-400">This month</div>
              </motion.div>

              <motion.div
                className="absolute bottom-0 left-0 w-64 h-40 glass-effect rounded-xl p-6 floating-animation"
                style={{ animationDelay: '2s' }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold">Team Sync</span>
                </div>
                <div className="text-2xl font-bold text-indigo-400">98%</div>
                <div className="text-sm text-slate-400">Engagement</div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-40 glass-effect rounded-xl p-6 floating-animation"
                style={{ animationDelay: '4s' }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold">Automation</span>
                </div>
                <div className="text-2xl font-bold text-amber-400">24/7</div>
                <div className="text-sm text-slate-400">Active</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* User Registration Modal */}
      <UserRegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}