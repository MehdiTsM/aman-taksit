import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-300 bg-opacity-50 z-50">
      {/* Spinner */}
      <div className="relative flex items-center justify-center">
        {/* Orange Circle */}
        <div className="relative flex items-center justify-center">
          <div className="animate-spinForward rounded-full h-32 w-32 border-4 border-t-4 border-customOrange border-opacity-50"></div>
          {/* Green Circle spinning backwards */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spinBackward rounded-full h-24 w-24 border-4 border-t-4 border-customGreen border-opacity-50 opacity-75"></div>
          </div>
        </div>
      </div>

      {/* Dots Animation */}
      <div className="mt-4 flex space-x-2">
        <span className="relative inline-block">
          <span className="animate-dotAppear opacity-0 text-gray-800 text-4xl" style={{ animationDelay: '0ms' }}>.</span>
          <span className="absolute animate-dotAppear opacity-0 text-gray-800 text-4xl" style={{ animationDelay: '200ms' }}>.</span>
          <span className="absolute animate-dotAppear opacity-0 text-gray-800 text-4xl" style={{ animationDelay: '400ms' }}>.</span>
        </span>
      </div>
    </div>
  );
};

export default Loading;