import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-customOrange"></div>
    </div>
  );
};

export default Loading;