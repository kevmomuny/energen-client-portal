import React from 'react';
import Header from '../components/dashboard/layout/Header';
import Sidebar from '../components/dashboard/layout/Sidebar';

const DashboardPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800">Main Dashboard Content</h2>
          <p className="mt-2 text-gray-600">Welcome to your Energen dashboard.</p>
          {/* Content for the dashboard will go here */}
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
