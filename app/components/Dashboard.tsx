'use client';

import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Calendar, MessageSquare, Users, Target, Clock, TrendingUp } from 'lucide-react';

const productivityData = [
  { name: 'Mon', value: 85, remote: 45, office: 40 },
  { name: 'Tue', value: 92, remote: 52, office: 40 },
  { name: 'Wed', value: 78, remote: 38, office: 40 },
  { name: 'Thu', value: 88, remote: 48, office: 40 },
  { name: 'Fri', value: 95, remote: 55, office: 40 },
];

const collaborationData = [
  { name: 'Slack Messages', value: 1250, color: '#6366f1' },
  { name: 'Video Calls', value: 45, color: '#10b981' },
  { name: 'Shared Files', value: 89, color: '#f59e0b' },
  { name: 'Tasks Completed', value: 156, color: '#ef4444' },
];

const pieData = [
  { name: 'Remote Work', value: 60, color: '#6366f1' },
  { name: 'Office Work', value: 25, color: '#10b981' },
  { name: 'Hybrid', value: 15, color: '#f59e0b' },
];

export default function Dashboard() {
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
            Real-time <span className="gradient-text">Analytics Dashboard</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Get comprehensive insights into your team's productivity, collaboration patterns, 
            and work preferences with our AI-powered analytics.
          </p>
        </motion.div>

        {/* Key Metrics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {[
            { icon: Users, title: 'Active Users', value: '1,247', change: '+12%', color: 'indigo' },
            { icon: MessageSquare, title: 'Messages Today', value: '8,432', change: '+8%', color: 'emerald' },
            { icon: Target, title: 'Goals Achieved', value: '89%', change: '+5%', color: 'amber' },
            { icon: Clock, title: 'Avg Response Time', value: '2.3m', change: '-15%', color: 'rose' },
          ].map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-xl p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-${metric.color}-500 rounded-lg flex items-center justify-center`}>
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                <span className={`text-sm font-semibold ${
                  metric.change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'
                }`}>
                  {metric.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{metric.value}</h3>
              <p className="text-slate-400 text-sm">{metric.title}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Productivity Trends */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-indigo-400" />
              Weekly Productivity Trends
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={productivityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="name" stroke="#cbd5e1" />
                <YAxis stroke="#cbd5e1" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: '1px solid #334155',
                    borderRadius: '8px'
                  }} 
                />
                <Bar dataKey="remote" fill="#6366f1" name="Remote" />
                <Bar dataKey="office" fill="#10b981" name="Office" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Work Distribution */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Users className="w-5 h-5 mr-2 text-emerald-400" />
              Work Mode Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Collaboration Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-effect rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <MessageSquare className="w-5 h-5 mr-2 text-amber-400" />
            Daily Collaboration Activity
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={productivityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#cbd5e1" />
              <YAxis stroke="#cbd5e1" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #334155',
                  borderRadius: '8px'
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#f59e0b" 
                strokeWidth={3}
                dot={{ fill: '#f59e0b', strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
}