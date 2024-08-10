import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">Admin Dashboard</h1>
      {/* Add your product management functionalities here */}
      <button onClick={handleLogout} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md">
        Logout
      </button>
    </div>
  );
};

export default AdminDashboard;