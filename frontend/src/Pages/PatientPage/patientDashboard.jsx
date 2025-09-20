import React, { useState } from 'react'
import PNavbar from './PNavbar';
import PDashboard from './PDashboard';
import SchdulePage from './SchdulePage';
import ExercisesPage from './ExercisesPage';
import ProgressPage from './ProgressPage';
import { Navigate } from 'react-router-dom';

export default function PatientDashboard() {

    const [selectedTab, setSelectedTab] = useState("dashboard");

    const renderPage = () => {
      switch (selectedTab) {
        case "dashboard":
          return <PDashboard />;
        case "schedule":
          return <SchdulePage />;
        case "progress":
          return <ProgressPage />;
        case "exercises":
          return <ExercisesPage />;
        default:
          return <PDashboard />;
      }
    };


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50">
      <PNavbar />
      <main className="max-w-7xl mx-auto px-6 py-8">
        <Navigate selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        {renderPage()}
      </main>
    </div>
  );
}
