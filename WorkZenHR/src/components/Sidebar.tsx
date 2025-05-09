import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CalendarDays, 
  Brain, 
  LineChart,
  Bot
} from 'lucide-react';

export function Sidebar() {
  return (
    <div className="w-64 bg-white/80 backdrop-blur-lg h-screen sticky top-0 shadow-xl p-6">
      <div className="flex items-center gap-3 mb-8">
        <Bot className="h-8 w-8 text-indigo-600" />
        <h1 className="text-xl font-bold text-indigo-900">HR AI Assistant</h1>
      </div>
      
      <nav className="space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive ? 'bg-indigo-100 text-indigo-900' : 'text-gray-600 hover:bg-indigo-50'
            }`
          }
        >
          <LayoutDashboard className="h-5 w-5" />
          Dashboard
        </NavLink>
        
        <NavLink
          to="/leave-request"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive ? 'bg-indigo-100 text-indigo-900' : 'text-gray-600 hover:bg-indigo-50'
            }`
          }
        >
          <CalendarDays className="h-5 w-5" />
          Leave Request
        </NavLink>
        
        <NavLink
          to="/insights"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive ? 'bg-indigo-100 text-indigo-900' : 'text-gray-600 hover:bg-indigo-50'
            }`
          }
        >
          <LineChart className="h-5 w-5" />
          Employee Insights
        </NavLink>
        
        <NavLink
          to="/ai-recommendations"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive ? 'bg-indigo-100 text-indigo-900' : 'text-gray-600 hover:bg-indigo-50'
            }`
          }
        >
          <Brain className="h-5 w-5" />
          AI Recommendations
        </NavLink>
      </nav>
    </div>
  );
}