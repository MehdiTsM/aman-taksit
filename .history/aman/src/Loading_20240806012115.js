import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-300 bg-opacity-50 z-50">
      {/* Spinner */}
      <div className="relative flex items-center justify-center">
        {/* Orange Circle */}
        <div className="relative flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-customOrange"></div>
          {/* Green Circle positioned closer */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-customGreen opacity-75"></div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Loading;