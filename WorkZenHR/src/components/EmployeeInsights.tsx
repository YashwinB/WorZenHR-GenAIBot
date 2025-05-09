import React from 'react';
import { motion } from 'framer-motion';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Brain, TrendingUp, Users } from 'lucide-react';

const leaveData = [
  { month: 'Jan', sick: 5, vacation: 8, personal: 3 },
  { month: 'Feb', sick: 7, vacation: 6, personal: 4 },
  { month: 'Mar', sick: 4, vacation: 10, personal: 2 },
  { month: 'Apr', sick: 6, vacation: 7, personal: 5 },
  { month: 'May', sick: 8, vacation: 5, personal: 3 },
  { month: 'Jun', sick: 5, vacation: 9, personal: 4 }
];

const pieData = [
  { name: 'Approved', value: 68 },
  { name: 'Pending', value: 22 },
  { name: 'Rejected', value: 10 }
];

const COLORS = ['#4ade80', '#facc15', '#ef4444'];

export function EmployeeInsights() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-6"
      >
        <TrendingUp className="h-8 w-8 text-indigo-600" />
        <div>
          <h1 className="text-3xl font-bold text-indigo-900">Employee Insights</h1>
          <p className="text-gray-600">AI-powered analysis of employee patterns and trends</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-lg rounded-xl p-6 shadow-lg"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Leave Distribution</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={leaveData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sick" stroke="#ef4444" />
                <Line type="monotone" dataKey="vacation" stroke="#3b82f6" />
                <Line type="monotone" dataKey="personal" stroke="#10b981" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white/80 backdrop-blur-lg rounded-xl p-6 shadow-lg"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Leave Status Overview</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-4">
            {pieData.map((entry, index) => (
              <div key={entry.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }} />
                <span className="text-sm text-gray-600">{entry.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white/80 backdrop-blur-lg rounded-xl p-6 shadow-lg"
      >
        <div className="flex items-center gap-3 mb-6">
          <Brain className="h-6 w-6 text-indigo-600" />
          <h2 className="text-xl font-bold text-gray-900">AI-Generated Insights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Leave Pattern Analysis",
              insights: [
                "Seasonal spike in sick leave during winter months",
                "Vacation requests peak during summer",
                "Personal leave usage is consistent throughout the year"
              ]
            },
            {
              title: "Recommendations",
              insights: [
                "Consider implementing flexible work arrangements",
                "Review vacation policy for better distribution",
                "Implement wellness programs to reduce sick leave"
              ]
            }
          ].map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-gray-900">{section.title}</h3>
              {section.insights.map((insight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-indigo-50"
                >
                  <Brain className="h-4 w-4 text-indigo-600 mt-1" />
                  <p className="text-sm text-gray-700">{insight}</p>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}