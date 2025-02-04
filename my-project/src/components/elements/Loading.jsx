import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce1"></div>
        <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce2"></div>
        <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce3"></div>
      </div>
    </div>
  );
};

export default Loader;
