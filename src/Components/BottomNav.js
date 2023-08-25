import { useState } from "react";

const BottomNavigation = () => {
  // You can access the isMenuOpen state value here if needed

  return (
    <div className="bg-gray-800 p-4 text-white py-4 sticky bottom-0">
      <div className="flex justify-between">
        <div className="flex flex-col items-center menu-item">
          {/* Replace this with your SVG icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
            <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z" fill="#ffffff" />
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
