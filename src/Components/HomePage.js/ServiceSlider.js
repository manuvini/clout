import React from 'react';
import imageHomepageslider_1 from '../Common/img/imageHomepageslider_1.jpg'; 
import imageHomepageslider_2 from '../Common/img/imageHomepageslider_2.jpg'
import imageHomepageslider_3 from '../Common/img/imageHomepageslider_3.jpg'
import imageHomepageslider_4 from '../Common/img/imageHomepageslider_4.jpg'
import imageHomepageslider_5 from '../Common/img/imageHomepageslider_5.jpg'
import imageHomepageslider_6 from '../Common/img/imageHomepageslider_6.jpg'
import imageHomepageslider_7 from '../Common/img/imageHomepageslider_7.jpg'
import imageHomepageslider_8 from '../Common/img/imageHomepageslider_8.jpg'




const sampleProducts = [
  {
    id: 1,
    name: "Sciatica",
    image: imageHomepageslider_1, 
    originalPrice: 2000
  },
  {
    id: 2,
    name: "Ciatic Nerve Pain",
    image:
      imageHomepageslider_2,
    price: 1250,
    originalPrice: 2000
  },
  {
    id: 3,
    name: "Neuropathic Pain",
    image:
      imageHomepageslider_3,
    price: 1069,
    originalPrice: 2000
  },
  {
    id: 4,
    name: "Pinched Spinal Nerve",
    image:
      imageHomepageslider_4,
    price: 1049,
    originalPrice: 2000

  },
  {
    id: 5,
    name: "Groin Nerve Pain",
    image:
      imageHomepageslider_5,
    price: 1035,
    originalPrice: 2000

  },
  {
    id: 6,
    name: "Sacroiliac Joint Pain",
    image:
     imageHomepageslider_6,
    price: 1535,
    originalPrice: 2000


  },
  {
    id: 7,
    name: "Pinched Nerve In Lower Back",
    image:
imageHomepageslider_7,
    price: 1999,
    originalPrice: 2000

  },

  {
    id: 8,
    name: "Trigger Point",
    image:
     imageHomepageslider_8,
    price: 1899,
    originalPrice: 2000

  },


  // {
  //   id: 9,
  //   name: "Lower Back Pinched Nerve",
  //   image:
  //   "https://t4.ftcdn.net/jpg/01/37/46/11/240_F_137461126_1TFmnf482xklPHlr15PEmcCfogYiz1Qq.jpg",
  //   price: 1899,
  //   originalPrice: 2000

  // },
  // {
  //   id: 10,
  //   name: "Deep Tissue",
  //   image:
  //     "https://bendtotalbodychiropractic.com/wp-content/uploads/2022/04/deep-tissue-massage-on-back.jpg",
  //   price: 1899,
  //   originalPrice: 2000

  // },
  // {
  //   id: 11,
  //   name: "Chronic Pain",
  //   image:
  //     "https://media.istockphoto.com/id/1306646807/photo/patient-lying-on-the-stretcher-in-the-physiotherapy-clinic-is-treated-with-diathermy.jpg?s=612x612&w=0&k=20&c=PgacmWes2kZRNUJlo7chEkIa1G1a3gb8wo3rTlQU4jE=",
  //   price: 1899,
  //   originalPrice: 2000

  // },
  // {
  //   id: 12,
  //   name: "Tight Muscles",
  //   image:
  //     "https://i.ytimg.com/vi/UotBIgJet_8/maxresdefault.jpg",
  //   price: 1899,
  //   originalPrice: 2000

  // },
  // {
  //   id: 13,
  //   name: "Chiropractic Care",
  //   image:
  //     "https://texasspecialtyclinic.com/assets/images/blog/chronic-pain-causes-symptoms-and-treatment.jpg",
  //   price: 1899,
  //   originalPrice: 2000

  // },
  // {
  //   id: 14,
  //   name: "Carpal Tunnel Relief",
  //   image:
  //     "https://www.amtamassage.org/contentassets/85a24d12481f431ca2959e25b3a85082/1920x986-mtj-spring-2014-3.jpg",
  //   price: 1899,
  //   originalPrice: 2000

  // },
  // {
  //   id: 15,
  //   name: "Forearm Massage Therapy",
  //   image:
  //     "https://evergreenclinic.ca/wp-content/uploads/2020/12/The-Forearm-Massage-Therapy-Techniques-for-Golfers-and-Tennis-Elbow.jpg",
  //   price: 1899,
  //   originalPrice: 2000

  // },
  // {
  //   id: 16,
  //   name: "Myofascial Massage Therapy",
  //   image:
  //     "https://embed.widencdn.net/img/veritas/54mogczwl1/1200x675px/myofascial-release-therapy.webp",
  //   price: 1899,
  //   originalPrice: 2000

  // },
];

const HorizontalProductView = () => {
  return (
    <div className="bg-gray-100 ">
      <div >
            <h1 className="text-4xl mb-10 py-10 flex justify-center md:text-4xl font-bold mb-5 text-gray-600">
              Our Services 
            </h1>       
             <div className="overflow-x-auto mx-auto">
          <div className="flex  gap-8 px-4">
            {sampleProducts.map((product, index) => (
              <div key={index} className="bg-white p-6  rounded-lg shadow-md" style={{minWidth:"300px"}}>
                <div className=" h-56 overflow-hidden rounded-md">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-center object-cover"
                  /> 
                </div>
                <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default HorizontalProductView;
