import React from 'react';

const Loading = () => {
  return (
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


  );
};

export default Loading;