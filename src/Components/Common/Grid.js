import React from 'react';

const Gallery = [
  "https://www.neweraspa.in/assets/images/gallery/gallery-page-1-1.jpg",
  "https://www.neweraspa.in/assets/images/gallery/gallery-page-1-3.jpg",
  "https://www.neweraspa.in/assets/images/gallery/gallery-page-1-4.jpg",
  "https://www.neweraspa.in/assets/images/gallery/gallery-page-1-5.jpg",
  "https://www.neweraspa.in/assets/images/gallery/gallery-page-1-6.jpg",
  "https://www.neweraspa.in/assets/images/gallery/gallery-page-1-7.jpg",
  "https://www.neweraspa.in/assets/images/gallery/gallery-page-1-8.jpg",
  "https://www.neweraspa.in/assets/images/gallery/gallery-page-1-10.jpg",
  "https://www.neweraspa.in/assets/images/gallery/gallery-page-1-9.jpg",
];


function Grid() {
  return (
    <>
      <h1 className="text-3xl font-bold mt-4 text-center">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2 ml-4 mt-8">
        {Gallery.map((elem, index) => (
          <div key={index} className="h-0 relative pb-[100%]">
            <img
              src={elem}
              alt={`Gallery Image ${index}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Grid;
