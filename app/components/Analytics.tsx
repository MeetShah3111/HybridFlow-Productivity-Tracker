'use client';

import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Brain, TrendingUp, Users, Clock, Target, Zap } from 'lucide-react';

const performanceData = [
  { month: 'Jan', productivity: 75, engagement: 68, satisfaction: 72 },
  { month: 'Feb', productivity: 82, engagement: 74, satisfaction: 78 },
  { month: 'Mar', productivity: 78, engagement: 71, satisfaction: 75 },
  { month: 'Apr', productivity: 85, engagement: 79, satisfaction: 82 },
  { month: 'May', productivity: 88, engagement: 83, satisfaction: 85 },
  { month: 'Jun', productivity: 92, engagement: 87, satisfaction: 89 },
];

const teamRadarData = [
  { subject: 'Communication', A: 85, B: 78, fullMark: 100 },
  { subject: 'Collaboration', A: 92, B: 85, fullMark: 100 },
  { subject: 'Innovation', A: 78, B: 82, fullMark: 100 },
  { subject: 'Efficiency', A: 88, B: 75, fullMark: 100 },
  { subject: 'Adaptability', A: 82, B: 88, fullMark: 100 },
  { subject: 'Leadership', A: 75, B: 79, fullMark: 100 },
];

export default function Analytics() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">AI-Powered</span> Analytics
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Leverage machine learning to understand team dynamics, predict productivity trends, 
            and make data-driven decisions for your hybrid workforce.
          </p>
        </motion.div>

        {/* AI Insights Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {[
            {
              icon: Brain,
              title: 'Predictive Analytics',
              value: '94%',
              description: 'Accuracy in productivity forecasting',
              color: 'indigo',
            },
            {
              icon: TrendingUp,
              title: 'Performance Optimization',
              value: '+35%',
              description: 'Average productivity improvement',
              color: 'emerald',
            },
            {
              icon: Target,
              title: 'Goal Achievement',
              value: '87%',
              description: 'Teams meeting their objectives',
              color: 'amber',
            },
          ].map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className={`w-16 h-16 bg-${insight.color}-500 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <insight.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{insight.value}</h3>
              <h4 className="text-lg font-semibold mb-2">{insight.title}</h4>
              <p className="text-slate-400 text-sm">{insight.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Performance Trends */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-indigo-400" />
              Performance Trends Over Time
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" stroke="#cbd5e1" />
                <YAxis stroke="#cbd5e1" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: '1px solid #334155',
                    borderRadius: '8px'
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="productivity" 
                  stackId="1" 
                  stroke="#6366f1" 
                  fill="#6366f1" 
                  fillOpacity={0.6}
                />
                <Area 
                  type="monotone" 
                  dataKey="engagement" 
                  stackId="1" 
                  stroke="#10b981" 
                  fill="#10b981" 
                  fillOpacity={0.6}
                />
                <Area 
                  type="monotone" 
                  dataKey="satisfaction" 
                  stackId="1" 
                  stroke="#f59e0b" 
                  fill="#f59e0b" 
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Team Comparison Radar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Users className="w-5 h-5 mr-2 text-emerald-400" />
              Team Performance Comparison
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={teamRadarData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#cbd5e1', fontSize: 12 }} />
                <PolarRadiusAxis 
                  angle={90} 
                  domain={[0, 100]} 
                  tick={{ fill: '#cbd5e1', fontSize: 10 }}
                />
                <Radar
                  name="Team A"
                  dataKey="A"
                  stroke="#6366f1"
                  fill="#6366f1"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                <Radar
                  name="Team B"
                  dataKey="B"
                  stroke="#10b981"
                  fill="#10b981"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: '1px solid #334155',
                    borderRadius: '8px'
                  }} 
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* AI Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-effect rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Brain className="w-6 h-6 mr-3 text-indigo-400" />
            AI-Generated Recommendations
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Optimize Meeting Schedule',
                description: 'Reduce meeting overlap by 23% by shifting daily standups to 9:30 AM',
                impact: 'High',
                timeframe: '1 week',
                icon: Clock,
              },
              {
                title: 'Enhance Team Collaboration',
                description: 'Increase cross-team projects to improve knowledge sharing and innovation',
                impact: 'Medium',
                timeframe: '2 weeks',
                icon: Users,
              },
              {
                title: 'Automate Routine Tasks',
                description: 'Implement workflow automation for status updates and report generation',
                impact: 'High',
                timeframe: '3 days',
                icon: Zap,
              },
              {
                title: 'Focus Time Blocks',
                description: 'Schedule 2-hour focus blocks for deep work to increase productivity by 18%',
                impact: 'Medium',
                timeframe: '1 week',
                icon: Target,
              },
            ].map((recommendation, index) => (
              <motion.div
                key={recommendation.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-indigo-500 transition-colors duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <recommendation.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-2">{recommendation.title}</h4>
                    <p className="text-slate-300 text-sm mb-3">{recommendation.description}</p>
                    <div className="flex items-center space-x-4 text-xs">
                      <span className={`px-2 py-1 rounded-full ${
                        recommendation.impact === 'High' 
                          ? 'bg-emerald-500/20 text-emerald-400' 
                          : 'bg-amber-500/20 text-amber-400'
                      }`}>
                        {recommendation.impact} Impact
                      </span>
                      <span className="text-slate-400">{recommendation.timeframe}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}