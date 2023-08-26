import React from 'react';

function Grid() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      {/* First row */}
      <div className="col-span-1 flex flex-col items-center">
        <div className="w-auto min-w-30 h-20 md:w-30 md:h-30 lg:w-40 lg:h-40 rounded overflow-hidden bg-gray-200">
        Rectangle 1
            </div>
        <p className="mt-2">Rectangle 1</p>
      </div>
      <div className="col-span-1 flex flex-col items-center">
        <div className="w-auto h-20 md:w-30 md:h-30 lg:w-40 lg:h-40 rounded overflow-hidden bg-gray-200">
          {/* Your content inside the rectangle */}
        </div>
        <p className="mt-2">Rectangle 2</p>
      </div>
      <div className="col-span-1 flex flex-col items-center">
        <div className="w-auto h-20 md:w-30 md:h-30 lg:w-40 lg:h-40 rounded overflow-hidden bg-gray-200">
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
        <div className="w-auto min-w-30 h-20 md:w-30 md:h-30 lg:w-40 lg:h-40 rounded overflow-hidden bg-gray-200">
          {/* Your content inside the rectangle */}
        </div>
        <p className="mt-2">Rectangle 4</p>
      </div>
      <div className="col-span-1 flex flex-col items-center">
        <div className="w-auto min-w-30 h-20 md:w-30 md:h-30 lg:w-40 lg:h-40 rounded overflow-hidden bg-gray-200">
          {/* Your content inside the rectangle */}
        </div>
        <p className="mt-2">Rectangle 5</p>
      </div>
      <div className="col-span-1 flex flex-col items-center">
        <div className="w-auto min-w-30 h-20 md:w-30 md:h-30 lg:w-40 lg:h-40 rounded overflow-hidden bg-gray-200">
          {/* Your content inside the rectangle */}
        </div>
        <p className="mt-2">Rectangle 6</p>
      </div>

    
      
    </div>
  );
}

export default Grid;
