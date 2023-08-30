// import { query } from "firebase/database";
// import {
//   collection,
//   getDocs,
//   getFirestore,
//   limit,
//   onSnapshot,
//   where,
// } from "firebase/firestore";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

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

  {
    id: 8,
    name: "Trigger Point",
    image:
      "https://lirp.cdn-website.com/2c25dec1/dms3rep/multi/opt/article-146-trigger-points-640w.jpg",
    price: 1899,
    originalPrice: 2000

  },


  {
    id: 9,
    name: "Lower Back Pinched Nerve",
    image:
    "https://sa1s3optim.patientpop.com/assets/images/provider/photos/1888857.jpg",
    price: 1899,
    originalPrice: 2000

  },
  {
    id: 10,
    name: "Deep Tissue",
    image:
      "https://bendtotalbodychiropractic.com/wp-content/uploads/2022/04/deep-tissue-massage-on-back.jpg",
    price: 1899,
    originalPrice: 2000

  },
  {
    id: 11,
    name: "Chronic Pain",
    image:
      "https://i.ytimg.com/vi/UotBIgJet_8/maxresdefault.jpg",
    price: 1899,
    originalPrice: 2000

  },
  {
    id: 12,
    name: "Tight Muscles",
    image:
      "https://i.ytimg.com/vi/UotBIgJet_8/maxresdefault.jpg",
    price: 1899,
    originalPrice: 2000

  },
  {
    id: 13,
    name: "Chiropractic Care",
    image:
      "https://texasspecialtyclinic.com/assets/images/blog/chronic-pain-causes-symptoms-and-treatment.jpg",
    price: 1899,
    originalPrice: 2000

  },
  {
    id: 14,
    name: "Carpal Tunnel Relief",
    image:
      "https://www.amtamassage.org/contentassets/85a24d12481f431ca2959e25b3a85082/1920x986-mtj-spring-2014-3.jpg",
    price: 1899,
    originalPrice: 2000

  },
  {
    id: 15,
    name: "Forearm Massage Therapy",
    image:
      "https://evergreenclinic.ca/wp-content/uploads/2020/12/The-Forearm-Massage-Therapy-Techniques-for-Golfers-and-Tennis-Elbow.jpg",
    price: 1899,
    originalPrice: 2000

  },
  {
    id: 16,
    name: "Myofascial Massage Therapy",
    image:
      "https://embed.widencdn.net/img/veritas/54mogczwl1/1200x675px/myofascial-release-therapy.webp",
    price: 1899,
    originalPrice: 2000

  },
];
const ProductListing = ({ category }) => {
  const [products, setProducts] = useState(null);
  // const db = getFirestore();
  // const { cartItems, addToCart, removeFromCart, clearCart } = useCart();

  // useEffect(() => {
  //   // Function to fetch data from Firestore
  //   const fetchProducts = async () => {
  //     try {
  //       const productsCollection = collection(db, "products");
  //       const categoryQuery = query(
  //         productsCollection,
  //         where("category", "==", category),
  //         limit(10)
  //       );
  //       const unsubscribe = onSnapshot(categoryQuery, (snapshot) => {
  //         const formattedProducts = snapshot.docs.map((doc) => {
  //           const productData = doc.data();
  //           return {
  //             image: productData.downloadUrls[0], // Use the first URL from downloadUrls as imageUrl
  //             name: productData.name,
  //             price: productData.price,
  //             id: doc.id, // Use the document ID as the key for each product
  //             originalPrice: productData.originalPrice,
  //           };
  //         });
  //         setProducts(formattedProducts);
  //       });

  //       return () => {
  //         unsubscribe();
  //       };
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   };

  //   fetchProducts();
  // }, [db]);

  return (
    <div className="bg-gray-100 p-8 ">
      <div className="text-3xl font-bold justify-center flex">Our Service</div>

      <h2 className="text-2xl font-semibold text-center mb-10">{category}</h2>
      {sampleProducts == null ? (
        <>Loading...</>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">



          {sampleProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 py-10 rounded-lg text-center shadow-md flex flex-col justify-between"
              style={{ height: "100%", minHeight: "260px" }} // Set min height for responsive square shape
            >
              <div className="relative block" to={"product/" + product.id}>
                {/* <div className="absolute top-1 right-1 font-bold rounded p-2 bg-yellow-400 percentage-off">
                  {(
                    ((product.originalPrice - product.price) /
                      product.originalPrice) *
                    100
                  ).toFixed(0)}
                  % Off
                </div> */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover mb-2"
                />
                <h3 className="text-lg font-semibold mb-2 line-clamp-1	">{product.name}</h3>
                <div className="flex flex-column justify-center gap-2">
                  {/* <p className="font-bold mb-2 text-red-500 line-through">
                    ₹{product.originalPrice}
                  </p> */}
                  <p className="text-gray-600 font-bold mb-2">
                    ₹{product.price}
                  </p>
                </div>
              </div>
              {/* <button
                onClick={() => {
                  // addToCart(product.id);
                  // IncrementAddToCart();
                }}
                className="flex-1 bg-green-400 text-black font-bold py-2 px-4 rounded-sm border border-black"
                style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
              >
                Book Your Service
              </button> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductListing;
