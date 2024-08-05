import { useState } from 'react';

function MyComponent() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleCircleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className='grid md:grid-cols-1 grid-rows-1 md:grid-rows-3 '>
            <div className='bg-gray-300 min-w-full min-h-screen absolute'>
                {activeIndex === 0 && (
                    <div className='flex gap-1 flex items-center'>
                        <h2>Planning & Design,</h2>
                        <p>Here is a design portfolio</p>
                    </div>
                )}
                {activeIndex === 1 && (
                    <div className=''>
                        <h2>Developing</h2>
                        <p>It is the most important part</p>
                    </div>
                )}
                {activeIndex === 2 && (
                    <div className=''>
                        <h2>Postproduction</h2>
                        <p>Something to get your website at life</p>
                    </div>
                )}
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center h-screen z-10">
                <div
                    className={`w-20 h-20 flex gap-10 hover:w-28 hover:h-28 md:hover:w-36 md:hover:h-36 bg-red-500 duration-300 rounded-full cursor-pointer active:bg-red-600 group`}
                    onClick={() => handleCircleClick(0)}
                >
                    <div className="mx-auto content-center text-3xl text-red-900 hover:text-5xl group-hover:text-5xl group-hover:text-white duration-300">1</div>
                </div>


                <div className="h-1/6 md:h-1 w-1 md:w-1/6 bg-black"></div>

                <div
                    className={`w-20 h-20 flex gap-10 hover:w-28 hover:h-28 md:hover:w-36 md:hover:h-36 bg-green-500 duration-300 rounded-full cursor-pointer active:bg-green-600 group`}
                    onClick={() => handleCircleClick(1)}
                >
                    <div className="mx-auto content-center text-3xl text-green-900 hover:text-5xl group-hover:text-5xl group-hover:text-white duration-300">2</div>
                </div>

                <div className="h-1/6 md:h-1 w-1 md:w-1/6 bg-black"></div>
                <div
                    className={`w-20 h-20 flex gap-10 hover:w-28 hover:h-28 md:hover:w-36 md:hover:h-36 bg-blue-500 duration-300 rounded-full cursor-pointer active:bg-blue-600 group`}
                    onClick={() => handleCircleClick(2)}
                >
                    <div className="mx-auto content-center text-3xl text-blue-900 hover:text-5xl group-hover:text-5xl group-hover:text-white duration-300">3</div>
                </div>
            </div>
        </div>

    );
}

export default MyComponent;