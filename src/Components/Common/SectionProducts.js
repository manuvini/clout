import React, { useEffect, useState } from "react";

const sampleProducts = [

  {
    id: 1,
    name: "Sciatica",
    image:
      "https://media.istockphoto.com/id/1436677836/photo/male-shirtless-body-pain-on-spinal-cord-anatomy-with-red-mark-on-spine.jpg?s=612x612&w=0&k=20&c=0SzxWaJUH4-nYilG37GKLtsLApJrBwJZt5jsXY09sfQ=",
    price: 1125,
    originalPrice: 2000,
    description: "Massage therapy can be a valuable complementary treatment for individuals experiencing sciatica, which is pain that radiates along the sciatic nerve, typically from the lower back down one or both legs. However, it's essential to approach massage for sciatica with caution and under the guidance of a qualified massage therapist or healthcare provider, as the cause of sciatica can vary, and massage techniques should be tailored to the individual's specific condition."
  },
  {
    id: 2,
    name: "Ciatic Nerve Pain",
    image:
      "https://www.h-wave.com/wp-content/uploads/2019/03/sciatic-nerve-pain_850.jpg",
    price: 1250,
    originalPrice: 2000,
    description: "Ciatic pain occurs when ciatic nerve which runs from the lower back down through the buttocks and into the legs, becomes irritated or compressed, leading to pain, tingling, numbness, and muscle weakness. Massage therapy can help alleviate muscle tension, improve circulation, and promote relaxation, which can provide relief from Ciatic nerve pain. However, it's crucial to approach Ciatic nerve pain massage under the guidance of a qualified massage therapist or healthcare provider."

  },
  {
    id: 3,
    name: "Neuropathic Pain",
    image:
      "https://media.istockphoto.com/id/1354793940/photo/closeup-of-female-holding-her-painful-palm-and-numbness-caused-by-prolonged-work-on-the.jpg?s=612x612&w=0&k=20&c=kR7RR-uKWFSfP3rRi6-f7MP5KBswqdNO5rmoWqAO4XI=",
    price: 1069,
    originalPrice: 2000,
    description: "It is a type of chronic pain that results from damage or dysfunction of the nervous system. It can be challenging to treat and manage, and while massage therapy may not be a primary treatment for neuropathic pain, it can offer some relief and comfort for individuals suffering from this condition. However, it's essential to approach massage therapy for neuropathic pain with caution and consult with a healthcare professional before starting any new treatment."

  },
  {
    id: 4,
    name: "Pinched Spinal Nerve",
    image:
      "https://sa1s3optim.patientpop.com/assets/images/provider/photos/1888857.jpg",
    price: 1049,
    originalPrice: 2000,
    description: "Pinched spinal nerve, often caused by conditions like herniated discs, spinal stenosis, or degenerative disc disease, can lead to significant pain and discomfort. While massage therapy can be a helpful complementary approach to managing symptoms, it's essential to approach it with caution and under the guidance of a qualified massage therapist and healthcare provider."


  },
  {
    id: 5,
    name: "Groin Nerve Pain",
    image:
      "https://media.istockphoto.com/id/512753579/photo/targeting-back-pain.jpg?s=612x612&w=0&k=20&c=iggJ53X9AQvk5W7WKDWheI5ZKGPuXjXYUR_dv1QAy_Y=",
    price: 1035,
    originalPrice: 2000,
    description: "Groin nerve pain can be a challenging condition that may result from various causes, including nerve compression, injuries, or underlying medical conditions. Managing groin nerve pain often requires a comprehensive approach involving medical evaluation, diagnosis, and treatment."


  },
  {
    id: 6,
    name: "Sacroiliac Joint Pain",
    image:
      "https://media.istockphoto.com/id/1224225062/photo/man-is-receiving-back-massage.jpg?s=612x612&w=0&k=20&c=tadx6JV_EKez9zoowYt3UJzl9K2nZPtI1L53_uBIIVs=",
    price: 1535,
    originalPrice: 2000,
    description: "Massage therapy can be a valuable complementary approach for managing sacroiliac joint pain, a condition characterized by discomfort in the area where the sacrum (the triangular bone at the base of the spine) meets the ilium (the pelvic bone). While massage cannot directly address structural issues in the sacroiliac joint, it can help relieve muscle tension and reduce pain associated with the condition."



  },
  {
    id: 7,
    name: "Pinched Nerve In Lower Back",
    image:
      "https://media.istockphoto.com/id/841868238/photo/spine-pain-man-with-backache-and-ache-in-the-neck-black-and-white-photo-with-red-backbone.jpg?s=612x612&w=0&k=20&c=R2GTrIL72zpGdMDwDt32zRKQgk4JuR6sM4myVeWww90=",
    price: 1999,
    originalPrice: 2000,
    description: "Massage therapy can be a helpful complementary approach for managing the discomfort and pain associated with a pinched nerve in the lower back, often caused by compression or irritation of a spinal nerve root. While massage cannot directly address structural issues that lead to nerve compression, it can help alleviate muscle tension, improve circulation, and promote relaxation, which can reduce pain and improve overall well-being."


  },

  {
    id: 8,
    name: "Trigger Point",
    image:
      "https://lirp.cdn-website.com/2c25dec1/dms3rep/multi/opt/article-146-trigger-points-640w.jpg",
    price: 1899,
    originalPrice: 2000,
    description: "Trigger point massage is a specialized form of massage therapy that focuses on identifying and addressing trigger points, which are tight knots or areas of muscle tension that can cause pain and discomfort. The goal of trigger point massage is to release these knots, alleviate pain, improve muscle function, and enhance overall well-being."


  },


  {
    id: 9,
    name: "Lower Back Pinched Nerve",
    image:
      "https://t4.ftcdn.net/jpg/01/37/46/11/240_F_137461126_1TFmnf482xklPHlr15PEmcCfogYiz1Qq.jpg",
    price: 1899,
    originalPrice: 2000,
    description: "Ciatic pain occurs when ciatic nerve which runs from the lower back down through the buttocks andMassage therapy can be a beneficial complementary approach for managing the discomfort and pain associated with a pinched nerve in the lower back, often caused by compression or irritation of a spinal nerve root. While massage cannot directly address structural issues that lead to nerve compression, it can help alleviate muscle tension, improve circulation, promote relaxation, and reduce pain, which can improve overall well-being. "


  },
  {
    id: 10,
    name: "Deep Tissue",
    image:
      "https://bendtotalbodychiropractic.com/wp-content/uploads/2022/04/deep-tissue-massage-on-back.jpg",
    price: 1899,
    originalPrice: 2000,
    description: "Deep tissue massage is a type of therapeutic massage that focuses on addressing chronic muscle tension, pain, and stiffness by applying deep pressure and slow, deliberate strokes to target the deeper layers of muscle and fascia (connective tissue). It is particularly effective in releasing muscle knots, adhesions, and tension."


  },
  {
    id: 11,
    name: "Chronic Pain",
    image:
      "https://media.istockphoto.com/id/1306646807/photo/patient-lying-on-the-stretcher-in-the-physiotherapy-clinic-is-treated-with-diathermy.jpg?s=612x612&w=0&k=20&c=PgacmWes2kZRNUJlo7chEkIa1G1a3gb8wo3rTlQU4jE=",
    price: 1899,
    originalPrice: 2000,
    description: "Massage therapy can be a valuable complementary approach for managing chronic pain conditions, offering relief, relaxation, and improved overall well-being. Chronic pain is persistent discomfort or pain that lasts for an extended period, typically longer than three to six months."


  },
  {
    id: 12,
    name: "Tight Muscles",
    image:
      "https://i.ytimg.com/vi/UotBIgJet_8/maxresdefault.jpg",
    price: 1899,
    originalPrice: 2000,
    description: "Massage therapy is a highly effective approach for addressing tight muscles and muscle tension. Whether your muscle tightness is due to stress, overuse, poor posture, or other factors, a skilled massage therapist can provide relief and help you relax. Tight muscles typically involves a skilled massage therapist using various techniques to address muscle tension, knots, and discomfort. The goal is to provide relief, promote muscle relaxation, and enhance overall well-being."


  },
  {
    id: 13,
    name: "Chiropractic Care",
    image:
      "https://texasspecialtyclinic.com/assets/images/blog/chronic-pain-causes-symptoms-and-treatment.jpg",
    price: 1899,
    originalPrice: 2000,
    description: "Chiropractic care is a healthcare discipline that focuses on diagnosing and treating musculoskeletal disorders, particularly those related to the spine. Chiropractors use manual manipulation and other non-invasive techniques to improve the function of the musculoskeletal system, alleviate pain, and enhance overall health and wellness."


  },
  {
    id: 14,
    name: "Carpal Tunnel Relief",
    image:
      "https://www.amtamassage.org/contentassets/85a24d12481f431ca2959e25b3a85082/1920x986-mtj-spring-2014-3.jpg",
    price: 1899,
    originalPrice: 2000,
    description: "Massage therapy can be a valuable complementary approach to help relieve the symptoms of carpal tunnel syndrome (CTS). It can help reduce muscle tension, improve circulation, and promote relaxation in the affected areas of the wrist, hand, and forearm. It is a therapeutic approach that can help alleviate the symptoms of carpal tunnel syndrome (CTS). CTS is a condition characterized by pain, numbness, tingling, and weakness in the hand and wrist, caused by the compression of the median nerve as it passes through the carpal tunnel in the wrist."


  },
  {
    id: 15,
    name: "Forearm Massage Therapy",
    image:
      "https://www.xopt1.com/wp-content/uploads/2022/12/carpal-tunnel-massage-4.jpg",
    price: 1899,
    originalPrice: 2000,
    description: "Forearm massage therapy is a specific type of massage that focuses on the muscles and tissues of the forearm. This type of massage can be beneficial for various reasons, including relieving muscle tension, improving circulation, reducing pain, and enhancing overall relaxation in the forearm and can be particularly beneficial for individuals who experience tension, pain, or discomfort in this area."


  },
  {
    id: 16,
    name: "Myofascial Massage Therapy",
    image:
      "https://embed.widencdn.net/img/veritas/54mogczwl1/1200x675px/myofascial-release-therapy.webp",
    price: 1899,
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
