import React from 'react';
import { motion } from 'framer-motion';
import { Brain, CheckCircle2, XCircle, AlertCircle, MessageSquare } from 'lucide-react';

export function AIRecommendations() {
  const recommendations = [
    {
      type: "Approval Recommended",
      employee: "Sarah Chen",
      reason: "Vacation Leave",
      duration: "5 days",
      confidence: 92,
      status: "approve",
      analysis: [
        "Employee has sufficient leave balance",
        "Team coverage is adequate during requested period",
        "No critical project deadlines during leave period",
        "Consistent performance record"
      ]
    },
    {
      type: "Further Review Needed",
      employee: "James Wilson",
      reason: "Sick Leave",
      duration: "3 days",
      confidence: 75,
      status: "review",
      analysis: [
        "Pattern of Monday/Friday sick leaves detected",
        "Recent performance concerns noted",
        "Team currently understaffed",
        "Previous leave requests well-documented"
      ]
    },
    {
      type: "Rejection Recommended",
      employee: "Maria Garcia",
      reason: "Personal Leave",
      duration: "2 days",
      confidence: 88,
      status: "reject",
      analysis: [
        "Critical project deadline during requested period",
        "Team already has two approved leaves",
        "Recent similar leave taken",
        "Alternative dates available next week"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approve':
        return 'text-green-500';
      case 'reject':
        return 'text-red-500';
      default:
        return 'text-yellow-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approve':
        return CheckCircle2;
      case 'reject':
        return XCircle;
      default:
        return AlertCircle;
    }
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-6"
      >
        <Brain className="h-8 w-8 text-indigo-600" />
        <div>
          <h1 className="text-3xl font-bold text-indigo-900">AI Recommendations</h1>
          <p className="text-gray-600">AI-powered leave request analysis and recommendations</p>
        </div>
      </motion.div>

      <div className="space-y-6">
        {recommendations.map((rec, index) => {
          const StatusIcon = getStatusIcon(rec.status);
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-lg rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <StatusIcon className={`h-6 w-6 ${getStatusColor(rec.status)}`} />
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{rec.type}</h2>
                    <p className="text-gray-600">
                      {rec.employee} - {rec.reason} ({rec.duration})
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-indigo-600" />
                  <span className="text-sm font-medium text-indigo-600">
                    {rec.confidence}% confidence
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">AI Analysis</h3>
                  <div className="space-y-2">
                    {rec.analysis.map((point, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                        className="flex items-start gap-2"
                      >
                        <Brain className="h-4 w-4 text-indigo-600 mt-1" />
                        <p className="text-sm text-gray-700">{point}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                    <CheckCircle2 className="h-4 w-4" />
                    Approve
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors">
                    <XCircle className="h-4 w-4" />
                    Reject
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                    <MessageSquare className="h-4 w-4" />
                    Request More Info
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}