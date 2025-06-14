'use client';

import { motion } from 'framer-motion';
import { Bot, Calendar, MessageSquare, BarChart3, Shield, Zap, Users, Target, Clock, Globe } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const features = [
  {
    icon: Bot,
    title: 'AI-Powered Insights',
    description: 'Get intelligent recommendations to optimize team productivity and collaboration patterns.',
    color: 'indigo',
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'Automatically coordinate meetings across time zones and work preferences.',
    color: 'emerald',
  },
  {
    icon: MessageSquare,
    title: 'Unified Communication',
    description: 'Seamlessly integrate Slack conversations with Salesforce customer data.',
    color: 'amber',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Monitor team performance and engagement with comprehensive dashboards.',
    color: 'rose',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA standards.',
    color: 'purple',
  },
  {
    icon: Zap,
    title: 'Workflow Automation',
    description: 'Automate repetitive tasks and create custom workflows between platforms.',
    color: 'cyan',
  },
];

export default function Features() {
  return (
    <div className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background 3D Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
        <Spline
          scene="https://prod.spline.design/pwqFWFDGBx-iab9i/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Powerful <span className="gradient-text">Features</span> for Modern Teams
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Everything you need to transform your hybrid workforce into a productivity powerhouse.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-xl p-8 hover:scale-105 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-${feature.color}-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
              <p className="text-slate-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Feature Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-effect rounded-2xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Transform Your <span className="gradient-text">Workflow</span>
              </h3>
              <p className="text-slate-300 text-lg mb-8">
                Our platform seamlessly connects your favorite tools and provides actionable insights 
                to help your team work smarter, not harder.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Users, text: 'Connect distributed teams effortlessly' },
                  { icon: Target, text: 'Align goals across all departments' },
                  { icon: Clock, text: 'Optimize time management and focus' },
                  { icon: Globe, text: 'Scale globally with confidence' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-300">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.div
                className="w-full h-80 glass-effect rounded-xl p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Ready to Get Started?</h4>
                    <p className="text-slate-400 mb-6">Join thousands of teams already using HybridFlow</p>
                    <motion.button
                      className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-lg font-semibold text-white"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Start Free Trial
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}