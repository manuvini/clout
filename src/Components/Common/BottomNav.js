import { useState } from "react";
// import "./bb.css"
const BottomNavigation = () => {
  // You can access the isMenuOpen state value here if needed

  return (
    <div className="bg-white p-2 text-black py-2 sticky bottom-0 sm:hidden rounded shadow-top">
      <div className="flex justify-between ">
        <div className="flex flex-col items-center menu-item">
          {/* Replace this with your SVG icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
            <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z" fill="#000000" />
          </svg>
          <span className="text-sm mt-1">Home</span>
        </div>
        <div className="flex flex-col items-center menu-item">
          {/* Replace this with your SVG icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" >
            <path fill-rule="evenodd" d="M8.25 1.5a.75.75 0 00-.75.75V3H5.25a1.5 1.5 0 00-1.5 1.5v15.75a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V4.5a1.5 1.5 0 00-1.5-1.5H16.5v-.75a.75.75 0 00-.75-.75h-7.5zM16.5 6a.75.75 0 01-.75.75h-7.5A.75.75 0 017.5 6V4.5H5.25v15.75h13.5V4.5H16.5V6zM9 5.25V3h6v2.25H9zm6 10.5H9v-1.5h6v1.5zm-6-4.5h6v-1.5H9v1.5z" clip-rule="evenodd" fill="#000000"></path>
          </svg>
          <span className="text-sm mt-1">My Orders</span>
        </div>
        <div className="flex flex-col items-center menu-item ">
          {/* Replace this with your SVG icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.026 14.727a7 7 0 10-8.051 0 11.5 11.5 0 00-5.936 5.022l1.732 1A9.504 9.504 0 0112 16a9.504 9.504 0 018.229 4.75l1.732-1a11.504 11.504 0 00-5.935-5.023zM7 9a5 5 0 115 5 5 5 0 01-5-5z" fill="#000000"></path>
          </svg>
          <span className="text-sm mt-1">Profile</span>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
