import React from 'react';

const CirclesOne = () => {
  return (
    <div className="relative h-screen flex justify-center items-center">
      <div className="flex justify-center items-center h-screen text-white">
        <div className="w-20 h-20 hover:w-36 hover:h-36 bg-red-500 hover:bg-red-600 duration-300 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="w-20 h-20 hover:w-36 hover:h-36 bg-green-500 hover:bg-green-600 duration-300 rounded-full absolute top-1/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="w-20 h-20 hover:w-36 hover:h-36 bg-blue-500 hover:bg-blue-600 duration-300 rounded-full absolute top-3/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default CirclesOne;
