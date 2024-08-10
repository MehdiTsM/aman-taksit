import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-300 bg-opacity-50 z-50">
      {/* Spinner */}
      <div className="relative flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-customOrange"></div>
        <div className="absolute animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-customGreen opacity-75"></div>
      </div>
      
      {/* Dots Animation */}
      <div className="mt-4 flex space-x-2">
        <span className="relative inline-block w-6 h-6">
          <span className="absolute top-0 left-0 animate-dotSlide text-gray-800 text-4xl">.</span>
          <span className="absolute top-0 left-1/4 animate-dotSlide animation-delay-300 text-gray-800 text-4xl">.</span>
          <span className="absolute top-0 left-1/2 animate-dotSlide animation-delay-600 text-gray-800 text-4xl">.</span>
        </span>
      </div>
    </div>
  );
};

export default Loading;