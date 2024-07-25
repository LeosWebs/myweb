function CirclesTwo() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center h-screen">
            <div className="w-20 h-20 flex hover:w-36 hover:h-36 bg-red-500 hover:bg-red-600 duration-300 hover:text-white rounded-full">
                <div className="mx-auto content-center"></div>
            </div>
            <div className="h-1/6 md:h-1 w-1 md:w-1/6 bg-black"></div>
            <div className="w-20 h-20 hover:w-36 hover:h-36 bg-green-500 hover:bg-green-600 duration-300 rounded-full"></div>
            <div className="h-1/6 md:h-1 w-1 md:w-1/6 bg-black"></div>
            <div className="w-20 h-20 hover:w-36 hover:h-36 bg-blue-500 hover:bg-blue-600 duration-300 rounded-full"></div>
        </div>
    )
}

export default CirclesTwo;

