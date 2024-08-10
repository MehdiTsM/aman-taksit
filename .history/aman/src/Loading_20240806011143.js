import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-300 bg-opacity-50 z-50">
      <div className="relative flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-customOrange"></div>
        <div className="absolute animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-customGreen opacity-75"></div>
      </div>
      <p className="flex justify-center items-center text-gray-800 text-4xl font-semibold">
  <span className="relative inline-block">
    <span className="absolute inset-0 flex items-center justify-center">
      <span className="animate-dotPulse opacity-75">.</span>
      <span className="absolute animate-dotPulse opacity-50">.</span>
      <span className="absolute animate-dotPulse opacity-25">.</span>
    </span>
  </span>
</p>    </div>
  );
};

export default Loading;