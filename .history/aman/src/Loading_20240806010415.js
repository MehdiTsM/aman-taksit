import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-300 bg-opacity-50 z-50">
      {/* Spinner */}
      <div className="relative flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-customOrange"></div>
        {/* Optional: Add a secondary spinner for additional effect */}
        <div className="absolute animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-customGreen opacity-75"></div>
      </div>
      {/* Loading Text */}
      <p className="mt-4 text-black text-4xl font-semibold">...</p>
    </div>
  );
};

export default Loading;