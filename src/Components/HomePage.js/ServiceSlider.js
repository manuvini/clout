import React from 'react';

const sampleProducts = [
  {
    id: 1,
    name: "Sciatica",
    image:
      "https://domf5oio6qrcr.cloudfront.net/medialibrary/12453/9000ebcd-8502-45fe-b305-de3a0b43ced2.jpg",
    price: 1125,
    originalPrice: 2000
  },
  {
    id: 2,
    name: "Ciatic Nerve Pain",
    image:
      "https://www.h-wave.com/wp-content/uploads/2019/03/sciatic-nerve-pain_850.jpg",
    price: 1250,
    originalPrice: 2000
  },
  {
    id: 3,
    name: "Neuropathic Pain",
    image:
      "https://www.removemypain.com/blog/wp-content/uploads/2019/01/Know-All-About-the-Treatment-Options-for-Neuropathic-Pain.jpg",
    price: 1069,
    originalPrice: 2000
  },
  {
    id: 4,
    name: "Pinched Spinal Nerve",
    image:
      "https://sa1s3optim.patientpop.com/assets/images/provider/photos/1888857.jpg",
    price: 1049,
    originalPrice: 2000

  },
  {
    id: 5,
    name: "Groin Nerve Pain",
    image:
      "https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2020/11/Groin-Pain-1024X768.jpg",
    price: 1035,
    originalPrice: 2000

  },
  {
    id: 6,
    name: "Sacroiliac Joint Pain",
    image:
      "https://somaticmovementcenter.com/wp-content/uploads/2019/07/Sijoint.jpg",
    price: 1535,
    originalPrice: 2000


  },
  {
    id: 7,
    name: "Pinched Nerve In Lower Back",
    image:
      "https://sa1s3optim.patientpop.com/assets/images/provider/photos/1888857.jpg",
    price: 1999,
    originalPrice: 2000

  },

  // {
  //   id: 8,
  //   name: "Trigger Point",
  //   image:
  //     "https://lirp.cdn-website.com/2c25dec1/dms3rep/multi/opt/article-146-trigger-points-640w.jpg",
  //   price: 1899,
  //   originalPrice: 2000

  // },


  // {
  //   id: 9,
  //   name: "Lower Back Pinched Nerve",
  //   image:
  //   "https://sa1s3optim.patientpop.com/assets/images/provider/photos/1888857.jpg",
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
  //     "https://i.ytimg.com/vi/UotBIgJet_8/maxresdefault.jpg",
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
