import React from 'react';

function Grid() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      {/* First row */}
      <div className="col-span-1 flex flex-col items-center">
        <div className="w-20 h-20 md:w-30 md:h-30 lg:w-40 lg:h-40 rounded overflow-hidden bg-blue-500">
          {/* Your content inside the rectangle */}
        </div>
        <p className="mt-2">Rectangle 1</p>
      </div>
      <div className="col-span-1 flex flex-col items-center">
        <div className="w-20 h-20 md:w-30 md:h-30 lg:w-40 lg:h-40 rounded overflow-hidden bg-red-500">
          {/* Your content inside the rectangle */}
        </div>
        <p className="mt-2">Rectangle 2</p>
      </div>
      <div className="col-span-1 flex flex-col items-center">
        <div className="w-20 h-20 md:w-30 md:h-30 lg:w-40 lg:h-40 rounded overflow-hidden bg-green-500">
          {/* Your content inside the rectangle */}
        </div>
        <p className="mt-2">Rectangle 3</p>
      </div>

      {/* Second row */}
      <div className="col-span-3 flex justify-center mt-4">
        <div className="bg-gray-200 w-16 h-4 rounded-full"></div>
      </div>

      {/* Third row */}
      <div className="col-span-1 flex flex-col items-center">
        <div className="w-20 h-20 md:w-30 md:h-30 lg:w-40 lg:h-40 rounded overflow-hidden bg-yellow-500">
          {/* Your content inside the rectangle */}
        </div>
        <p className="mt-2">Rectangle 4</p>
      </div>
      <div className="col-span-1 flex flex-col items-center">
        <div className="w-20 h-20 md:w-30 md:h-30 lg:w-40 lg:h-40 rounded overflow-hidden bg-purple-500">
          {/* Your content inside the rectangle */}
        </div>
        <p className="mt-2">Rectangle 5</p>
      </div>
      <div className="col-span-1 flex flex-col items-center">
        <div className="w-20 h-20 md:w-30 md:h-30 lg:w-40 lg:h-40 rounded overflow-hidden bg-pink-500">
          {/* Your content inside the rectangle */}
        </div>
        <p className="mt-2">Rectangle 6</p>
      </div>

      {/* Fourth row */}
      <div className="col-span-3 flex justify-center mt-4">
        <div className="bg-gray-200 w-16 h-4 rounded-full"></div>
      </div>

      {/* Fifth row */}
      <div className="col-span-1 flex flex-col items-center">
        <div className="w-20 h-20 md:w-30 md:h-30 lg:w-40 lg:h-40 rounded overflow-hidden bg-orange-500">
          {/* Your content inside the rectangle */}
        </div>
        <p className="mt-2">Rectangle 7</p>
      </div>
      <div className="col-span-1 flex flex-col items-center">
        <div className="w-20 h-20 md:w-30 md:h-30 lg:w-40 lg:h-40 rounded overflow-hidden bg-indigo-500">
          {/* Your content inside the rectangle */}
        </div>
        <p className="mt-2">Rectangle 8</p>
      </div>
      <div className="col-span-1 flex flex-col items-center">
        <div className="w-20 h-20 md:w-30 md:h-30 lg:w-40 lg:h-40 rounded overflow-hidden bg-teal-500">
          {/* Your content inside the rectangle */}
        </div>
        <p className="mt-2">Rectangle 9</p>
      </div>
    </div>
  );
}

export default Grid;
