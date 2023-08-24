import React from 'react';

function Grid() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1">
        <img src="https://via.placeholder.com/150" alt="Image 1" className="w-full" />
      </div>
      <div className="col-span-1">
        <img src="https://via.placeholder.com/150" alt="Image 2" className="w-full" />
      </div>
      <div className="col-span-1">
        <img src="https://via.placeholder.com/150" alt="Image 3" className="w-full" />
      </div>
      <div className="col-span-3">
        <img src="https://via.placeholder.com/450x200" alt="Image 4" className="w-full" />
      </div>
    </div>
  );
}

export default Grid;
