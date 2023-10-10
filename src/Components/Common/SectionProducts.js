import React, { useEffect, useState } from "react";
import service_1 from '../Common/img/service_1.jpg'
import service_2 from '../Common/img/service_2.jpg'
import service_3 from '../Common/img/service_3.jpg'
import service_4 from '../Common/img/service_4.jpg'
import service_5 from '../Common/img/service_5.jpg'
import service_6 from '../Common/img/service_6.jpg'
import service_7 from '../Common/img/service_7.jpg'
import service_8 from '../Common/img/service_8.jpg'
import service_9 from '../Common/img/service_9.jpg'
import service_10 from '../Common/img/service_10.jpg'
import service_11 from '../Common/img/service_11.jpg'
import service_12 from '../Common/img/service_12.jpg'
import service_13 from '../Common/img/service_13.jpg'
import service_14 from '../Common/img/service_14.jpg'
import service_15 from '../Common/img/service_15.jpg'
import service_16 from '../Common/img/service_16.jpg'



const sampleProducts = [

  {
    id: 1,
    name: "Sciatica",
    image: service_1,
    price: 1125,
    originalPrice: 2000,
    description: "Massage therapy can be a valuable complementary treatment for individuals experiencing sciatica, which is pain that radiates along the sciatic nerve, typically from the lower back down one or both legs. However, it's essential to approach massage for sciatica with caution and under the guidance of a qualified massage therapist or healthcare provider, as the cause of sciatica can vary, and massage techniques should be tailored to the individual's specific condition."
  },
  {
    id: 2,
    name: "Ciatic Nerve Pain",
    image: service_2,
    price: 1250,
    originalPrice: 2000,
    description: "Ciatic pain occurs when ciatic nerve which runs from the lower back down through the buttocks and into the legs, becomes irritated or compressed, leading to pain, tingling, numbness, and muscle weakness. Massage therapy can help alleviate muscle tension, improve circulation, and promote relaxation, which can provide relief from Ciatic nerve pain. However, it's crucial to approach Ciatic nerve pain massage under the guidance of a qualified massage therapist or healthcare provider."

  },
  {
    id: 3,
    name: "Neuropathic Pain",
    image: service_3,
    price: 1069,
    originalPrice: 2000,
    description: "It is a type of chronic pain that results from damage or dysfunction of the nervous system. It can be challenging to treat and manage, and while massage therapy may not be a primary treatment for neuropathic pain, it can offer some relief and comfort for individuals suffering from this condition. However, it's essential to approach massage therapy for neuropathic pain with caution and consult with a healthcare professional before starting any new treatment."

  },
  {
    id: 4,
    name: "Pinched Spinal Nerve",
    image:
      service_4, price: 1049,
    originalPrice: 2000,
    description: "Pinched spinal nerve, often caused by conditions like herniated discs, spinal stenosis, or degenerative disc disease, can lead to significant pain and discomfort. While massage therapy can be a helpful complementary approach to managing symptoms, it's essential to approach it with caution and under the guidance of a qualified massage therapist and healthcare provider."


  },
  {
    id: 5,
    name: "Groin Nerve Pain",
    image:
      service_5, price: 1035,
    originalPrice: 2000,
    description: "Groin nerve pain can be a challenging condition that may result from various causes, including nerve compression, injuries, or underlying medical conditions. Managing groin nerve pain often requires a comprehensive approach involving medical evaluation, diagnosis, and treatment."


  },
  {
    id: 6,
    name: "Sacroiliac Joint Pain",
    image:
      service_6, price: 1535,
    originalPrice: 2000,
    description: "Massage therapy can be a valuable complementary approach for managing sacroiliac joint pain, a condition characterized by discomfort in the area where the sacrum (the triangular bone at the base of the spine) meets the ilium (the pelvic bone). While massage cannot directly address structural issues in the sacroiliac joint, it can help relieve muscle tension and reduce pain associated with the condition."
  },
  {
    id: 7,
    name: "Pinched Nerve In Lower Back",
    image:
      service_7, price: 1999,
    originalPrice: 2000,
    description: "Massage therapy can be a helpful complementary approach for managing the discomfort and pain associated with a pinched nerve in the lower back, often caused by compression or irritation of a spinal nerve root. While massage cannot directly address structural issues that lead to nerve compression, it can help alleviate muscle tension, improve circulation, and promote relaxation, which can reduce pain and improve overall well-being."
  },

  {
    id: 8,
    name: "Trigger Point",
    image:
      service_8, price: 1899,
    originalPrice: 2000,
    description: "Trigger point massage is a specialized form of massage therapy that focuses on identifying and addressing trigger points, which are tight knots or areas of muscle tension that can cause pain and discomfort. The goal of trigger point massage is to release these knots, alleviate pain, improve muscle function, and enhance overall well-being."


  },
  {
    id: 9,
    name: "Lower Back Pinched Nerve",
    image:
      service_9, price: 1899,
    originalPrice: 2000,
    description: "Ciatic pain occurs when ciatic nerve which runs from the lower back down through the buttocks andMassage therapy can be a beneficial complementary approach for managing the discomfort and pain associated with a pinched nerve in the lower back, often caused by compression or irritation of a spinal nerve root. While massage cannot directly address structural issues that lead to nerve compression, it can help alleviate muscle tension, improve circulation, promote relaxation, and reduce pain, which can improve overall well-being. "

  },
  {
    id: 10,
    name: "Deep Tissue",
    image:
      service_10, price: 1899,
    originalPrice: 2000,
    description: "Deep tissue massage is a type of therapeutic massage that focuses on addressing chronic muscle tension, pain, and stiffness by applying deep pressure and slow, deliberate strokes to target the deeper layers of muscle and fascia (connective tissue). It is particularly effective in releasing muscle knots, adhesions, and tension."


  },
  {
    id: 11,
    name: "Chronic Pain",
    image:
      service_11, price: 1899,
    originalPrice: 2000,
    description: "Massage therapy can be a valuable complementary approach for managing chronic pain conditions, offering relief, relaxation, and improved overall well-being. Chronic pain is persistent discomfort or pain that lasts for an extended period, typically longer than three to six months."


  },
  {
    id: 12,
    name: "Tight Muscles",
    image:
      service_12, price: 1899,
    originalPrice: 2000,
    description: "Massage therapy is a highly effective approach for addressing tight muscles and muscle tension. Whether your muscle tightness is due to stress, overuse, poor posture, or other factors, a skilled massage therapist can provide relief and help you relax. Tight muscles typically involves a skilled massage therapist using various techniques to address muscle tension, knots, and discomfort. The goal is to provide relief, promote muscle relaxation, and enhance overall well-being."


  },
  {
    id: 13,
    name: "Chiropractic Care",
    image:
      service_13, price: 1899,
    originalPrice: 2000,
    description: "Chiropractic care is a healthcare discipline that focuses on diagnosing and treating musculoskeletal disorders, particularly those related to the spine. Chiropractors use manual manipulation and other non-invasive techniques to improve the function of the musculoskeletal system, alleviate pain, and enhance overall health and wellness."


  },
  {
    id: 14,
    name: "Carpal Tunnel Relief",
    image:
      service_14, price: 1899,
    originalPrice: 2000,
    description: "Massage therapy can be a valuable complementary approach to help relieve the symptoms of carpal tunnel syndrome (CTS). It can help reduce muscle tension, improve circulation, and promote relaxation in the affected areas of the wrist, hand, and forearm. It is a therapeutic approach that can help alleviate the symptoms of carpal tunnel syndrome (CTS). CTS is a condition characterized by pain, numbness, tingling, and weakness in the hand and wrist, caused by the compression of the median nerve as it passes through the carpal tunnel in the wrist."


  },
  {
    id: 15,
    name: "Forearm Massage Therapy",
    image:
      service_15, price: 1899,
    originalPrice: 2000,
    description: "Forearm massage therapy is a specific type of massage that focuses on the muscles and tissues of the forearm. This type of massage can be beneficial for various reasons, including relieving muscle tension, improving circulation, reducing pain, and enhancing overall relaxation in the forearm and can be particularly beneficial for individuals who experience tension, pain, or discomfort in this area."


  },
  {
    id: 16,
    name: "Myofascial Massage Therapy",
    image:
      service_16, price: 1899,
    originalPrice: 2000,
    description: " Myofascial massage therapy is a specialized form of massage that targets the fascia, a web-like connective tissue that surrounds muscles, bones, and organs throughout the body. The goal of myofascial massage is to release tension, alleviate pain, and improve mobility by addressing restrictions or adhesions in the fascia."
  },
  // Add more products with descriptions as needed
];

const ProductListing = ({ category }) => {
  const [products, setProducts] = useState(null);

  return (
    <div className="bg-gray-100 p-8">
      <div className="text-3xl font-bold text-center">Our Service</div>

      <h2 className="text-2xl font-semibold text-center mb-10 ">{category}</h2>
      {sampleProducts == null ? (
        <>Loading...</>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sampleProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 py-10 rounded-lg text-center shadow-md flex justify-between"
              style={{ height: "100%", minHeight: "260px" }}
            >
              <div className="w-2/3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-96 h-80 object-cover mb-2"
                />
              </div>
              <div className="w-1/2 pl-2">
                <h3 className="text-lg font-semibold mb-2 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductListing;
