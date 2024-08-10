import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-300 bg-opacity-50 z-50">
      <div className="relative flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-customOrange"></div>
        <div className="absolute animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-customGreen opacity-75"></div>
      </div>
      <p className="mt-4 text-gray-800 text-4xl font-semibold opacity-50">...</p>
    </div>
  );
};

export default Loading;