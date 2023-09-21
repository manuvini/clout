import React from 'react';

const Gallery = [
  "https://www.neweraspa.in/assets/images/gallery/gallery-page-1-1.jpg",
  "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2015/11/massageTherapy-636218646-770x553-1-650x428.jpg",
  "https://www.vitalphysio.ca/wp-content/uploads/2022/09/Vital-Blog-Custom-Orthotics-2048x2048-1.jpg",
  "https://www.neweraspa.in/assets/images/gallery/gallery-page-1-5.jpg",
  "https://www.neweraspa.in/assets/images/gallery/gallery-page-1-6.jpg",
  "https://t4.ftcdn.net/jpg/04/01/97/01/360_F_401970121_5hC9H0caEevCvGVZUZUM4oDvD2fKDo08.jpg",
  "https://www.neweraspa.in/assets/images/gallery/gallery-page-1-8.jpg",
  "https://www.massagemag.com/wordpress/wp-content/uploads/News_9-5-2-1024x561.jpg",
  "https://domf5oio6qrcr.cloudfront.net/medialibrary/7163/acupuncture-needles.jpg",
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
