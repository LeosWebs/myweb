import { useState } from 'react';

function CirclesTwo() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCircleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen">
      <div
        className={`w-20 h-20 flex hover:w-36 hover:h-36 bg-red-500 hover:bg-red-600 duration-300 hover:text-white rounded-full ${
          activeIndex === 0 ? 'text-white' : ''
        }`}
        onClick={() => handleCircleClick(0)}
      >
        <div className="mx-auto content-center text-3xl text-red-900">1</div>
        {activeIndex === 0 && (
          <div className="mt-2 text-center">Lorem ipsum 1</div>
        )}
      </div>
      <div className="h-1/6 md:h-1 w-1 md:w-1/6 bg-black"></div>
      <div
        className={`w-20 h-20 flex hover:w-36 hover:h-36 bg-green-500 hover:bg-green-600 duration-300 hover:text-white rounded-full ${
          activeIndex === 1 ? 'text-white' : ''
        }`}
        onClick={() => handleCircleClick(1)}
      >
        <div className="mx-auto content-center text-3xl text-green-900">2</div>
        {activeIndex === 1 && (
          <div className="text-center -translate-y-8">Lorem ipsum 2</div>
        )}
      </div>
      <div className="h-1/6 md:h-1 w-1 md:w-1/6 bg-black"></div>
      <div
        className={`w-20 h-20 flex hover:w-36 hover:h-36 bg-blue-500 hover:bg-blue-600 duration-300 hover:text-white rounded-full ${
          activeIndex === 2 ? 'text-white' : ''
        }`}
        onClick={() => handleCircleClick(2)}
      >
        <div className="mx-auto content-center text-3xl text-blue-900">3</div>
        {activeIndex === 2 && (
          <div className="mt-2 text-center">Lorem ipsum 3</div>
        )}
      </div>
    </div>
  );
}

export default CirclesTwo;