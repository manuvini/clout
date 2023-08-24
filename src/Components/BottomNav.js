import { useState } from "react";

const BottomNavigation = () => {
  // You can access the isMenuOpen state value here if needed

  return (
    <div className="bg-gray-800 p-4 text-white py-4 sticky bottom-0">
      <div className="flex justify-between">
        <div className="flex flex-col items-center menu-item">
          {/* Replace this with your SVG icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {/* SVG path here */}
          </svg>
          <span className="text-sm mt-1">Menu 1</span>
        </div>
        <div className="flex flex-col items-center menu-item">
          {/* Replace this with your SVG icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {/* SVG path here */}
          </svg>
          <span className="text-sm mt-1">Menu 2</span>
        </div>
        <div className="flex flex-col items-center menu-item">
          {/* Replace this with your SVG icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {/* SVG path here */}
          </svg>
          <span className="text-sm mt-1">Menu 3</span>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
