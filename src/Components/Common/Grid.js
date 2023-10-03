import React from 'react';
import gallery_page_1 from '../Common/img/gallery_page_1.jpg'
import gallery_page_2 from '../Common/img/gallery_page_2.jpg';
import gallery_page_3 from '../Common/img/gallery_page_3.jpg'
import gallery_page_4 from '../Common/img/gallery_page_4.jpg'
import gallery_page_5 from '../Common/img/gallery_page_5.jpg'
import gallery_page_6 from '../Common/img/gallery_page_6.jpg'
import gallery_page_7 from '../Common/img/gallery_page_7.jpg'
import gallery_page_8 from '../Common/img/gallery_page_8.jpg'
import gallery_page_9 from '../Common/img/gallery_page_9.jpg'


const Gallery = [gallery_page_1, gallery_page_2, gallery_page_3, gallery_page_4, gallery_page_5, gallery_page_6, gallery_page_7, gallery_page_8, gallery_page_9];


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
