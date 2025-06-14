'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, Shield, Globe, Settings } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import ComingSoonPage from './ComingSoonPage';

const integrations = [
  {
    name: 'Salesforce',
    description: 'Complete CRM integration with real-time data sync',
    features: ['Lead Management', 'Opportunity Tracking', 'Custom Objects', 'Workflow Automation'],
    color: 'from-blue-500 to-blue-600',
    logo: '🏢',
  },
  {
    name: 'Slack',
    description: 'Seamless communication and collaboration platform',
    features: ['Channel Integration', 'Bot Commands', 'File Sharing', 'Video Calls'],
    color: 'from-purple-500 to-purple-600',
    logo: '💬',
  },
  {
    name: 'Microsoft Teams',
    description: 'Enterprise-grade communication and collaboration',
    features: ['Meeting Integration', 'File Collaboration', 'App Integration', 'Security'],
    color: 'from-indigo-500 to-indigo-600',
    logo: '👥',
  },
  {
    name: 'Google Workspace',
    description: 'Productivity suite with cloud-based collaboration',
    features: ['Calendar Sync', 'Document Sharing', 'Email Integration', 'Drive Storage'],
    color: 'from-emerald-500 to-emerald-600',
    logo: '📊',
  },
];

export default function Integration() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  if (showComingSoon) {
    return <ComingSoonPage onBack={() => setShowComingSoon(false)} />;
  }

  return (
    <div className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background 3D Scene */}
      <div className="absolute inset-0 opacity-20">
        <Spline
          scene="https://prod.spline.design/lsQpgQGGBx-iab9i/scene.splinecode"
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
            Seamless <span className="gradient-text">Integrations</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Connect all your favorite tools and platforms in one unified workspace. 
            No more switching between apps or losing context.
          </p>
        </motion.div>

        {/* Integration Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-xl p-8 hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${integration.color} rounded-xl flex items-center justify-center text-2xl mr-4`}>
                  {integration.logo}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{integration.name}</h3>
                  <p className="text-slate-400 text-sm">{integration.description}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {integration.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                onClick={() => setShowComingSoon(true)}
                className="w-full py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold text-white flex items-center justify-center space-x-2 transition-colors duration-300 group-hover:bg-indigo-600"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Connect Now</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Setup Process */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-effect rounded-2xl p-8 lg:p-12 mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Get Started in <span className="gradient-text">3 Simple Steps</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Connect Your Apps',
                description: 'Securely link your Salesforce and Slack accounts with one-click authentication.',
                icon: Zap,
              },
              {
                step: '02',
                title: 'Configure Settings',
                description: 'Customize workflows, notifications, and data sync preferences to match your needs.',
                icon: Settings,
              },
              {
                step: '03',
                title: 'Start Collaborating',
                description: 'Begin leveraging unified insights and streamlined communication across your team.',
                icon: Globe,
              },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-sm font-bold text-white">
                    {step.step}
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-3">{step.title}</h4>
                <p className="text-slate-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security & Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-effect rounded-xl p-8 text-center"
        >
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-12 h-12 text-emerald-400 mr-4" />
            <h3 className="text-2xl font-bold">Enterprise-Grade Security</h3>
          </div>
          
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Your data is protected with bank-level encryption, comprehensive compliance certifications, 
            and industry-leading security practices.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['SOC 2 Type II', 'GDPR Compliant', 'HIPAA Ready', 'ISO 27001'].map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-lg p-4 border border-slate-700"
              >
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-semibold text-slate-300">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}