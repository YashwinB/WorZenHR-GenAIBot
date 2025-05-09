import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Background } from './components/Background';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { LeaveForm } from './components/LeaveForm';
import { EmployeeInsights } from './components/EmployeeInsights';
import { AIRecommendations } from './components/AIRecommendations';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 relative overflow-hidden flex">
        <Suspense fallback={<div>Loading...</div>}>
          <Background />
        </Suspense>
        
        <Sidebar />
        
        <div className="flex-1 relative z-10">
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/leave-request" element={<LeaveForm />} />
              <Route path="/insights" element={<EmployeeInsights />} />
              <Route path="/ai-recommendations" element={<AIRecommendations />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;