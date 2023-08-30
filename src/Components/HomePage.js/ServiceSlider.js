import Slider from "../Common/Slider";


import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductListing from "../Common/SectionProducts";

const services = [
  {
    title: 'Massage Therapy',
    description: 'Relax and rejuvenate with our soothing massage therapies.',
    imageUrl: 'image1.jpg',
  },
  {
    title: 'Holistic Wellness',
    description: 'Experience balance and tranquility through our holistic wellness programs.',
    imageUrl: 'image2.jpg',
  },
  // Add more service objects as needed
];

const ServiceSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className="flex items-center justify-center h-screen">
            <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
              <div className="relative overflow-hidden aspect-ratio-16/9 rounded-md">
                <ProductListing/>
              </div>
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ServiceSlider;
