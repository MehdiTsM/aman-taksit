import React from 'react';
import { NavLink } from 'react-router-dom';

function AdminDashboard() {
  return (
    <div className="animate-fadeInUp">
      
      {/* Header Section */}
      <div className="bg-customOrange p-4 md:p-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-customWhite">Admin Dashboard</h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row mx-4 md:mx-16 my-8">

        {/* Sidebar */}
        <div className="bg-gray-200 p-4 rounded-lg shadow-md w-full md:w-1/4 mb-6 md:mb-0">
          <nav className="flex flex-col space-y-4">
            <NavLink to="/admin/add-product" className="text-xl font-medium hover:text-customOrange">
              Add Product
            </Navlink>
            <NavLink to="/admin/manage-products" className="text-xl font-medium hover:text-customOrange">
              Manage Products
            </NavLink>
            <NavLink to="/admin/view-orders" className="text-xl font-medium hover:text-customOrange">
              View Orders
            </NavLink>
            <NavLink to="/admin/settings" className="text-xl font-medium hover:text-customOrange">
              Settings
            </NavLink>
          </nav>
        </div>

        {/* Main Panel */}
        <div className="flex-grow bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-customDarkGreen mb-4">Welcome, Admin</h2>
          <p className="text-lg text-gray-600 mb-6">
            Here you can manage your products, view orders, and customize settings.
          </p>

          {/* Add more admin components or sections here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-customDarkGreen">Total Products</h3>
              <p className="text-2xl font-bold">120</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-customDarkGreen">Pending Orders</h3>
              <p className="text-2xl font-bold">8</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-customDarkGreen">Total Sales</h3>
              <p className="text-2xl font-bold">$15,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;