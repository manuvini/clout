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
    name: "Back Pain Relief",
    // image:
    //   "https://lh3.googleusercontent.com/p/AF1QipPOHRLhhgUmOkueu4ZVC_mxPaf0TCTYfqkllY7Z=s1360-w1360-h1020",
    price: 999,
    originalPrice: 2000
  },
  {
    id: 2,
    name: "Knee Pain Relief",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipNg9A3iEIz2wBRwobvJTKjAHVmmvk6n6-tTlPbn=s1360-w1360-h1020",
      price: 1499,
      originalPrice: 2000
  },
  {
    id: 3,
    name: "Joint Pain Relief",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipOl5pgVrNKteS7U14ASZrJj1KauyxZ0vlbqJlvz=s1360-w1360-h1020",
      price: 1200,
      originalPrice: 2000
  },
  {
    id: 4,
    name: "Sports Injuries",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipO_rfWbXXW8yYeaNAgvMv-U1kARkmo5VKQt9x-0=s1360-w1360-h1020",
      price: 1499,
      originalPrice: 2000
  },
  {
    id: 5,
    name: "Mobility Exercise",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipO4x8evlmVkFkRUk5ZWFpyyVXOhETDa5nmQubC2=s1360-w1360-h1020",
      price: 1299,
      originalPrice: 2000
  },
  {
    id: 6,
    name: "Neck Pain Relief",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipMLoK8S1ljqCwA6h-9gvdT9e4KTlekzA-rxHX7b=s1360-w1360-h1020",
      price: 1099,
      originalPrice: 2000
  },
  {
    id: 7,
    name: "Rib Pain Relief",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipNIvSr3OEs4JY-QA7dmoGQtOVf1KQYSRgYhXhYU=s1360-w1360-h1020",
    price: 899,
    originalPrice: 2000
  },

  {
    id: 8,
    name: "Foot Pain Relief",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipPqdXvKXP8QmO3Dh84sYxy22CMu3BtrZ-0I-Fww=s1360-w1360-h1020",
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
                <div className="absolute top-1 right-1 font-bold rounded p-2 bg-green-400 percentage-off">
                  {(
                    ((product.originalPrice - product.price) /
                      product.originalPrice) *
                    100
                  ).toFixed(0)}
                  % Off
                </div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover mb-2"
                />
                <h3 className="text-lg font-semibold mb-2 line-clamp-1	">{product.name}</h3>
                <div className="flex flex-column justify-center gap-2">
                  <p className="font-bold mb-2 text-red-500 line-through">
                    ₹{product.originalPrice}
                  </p>
                  <p className="text-gray-600 font-bold mb-2">
                    ₹{product.price}
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  // addToCart(product.id);
                  // IncrementAddToCart();
                }}
                className="flex-1 bg-green-400 text-black font-bold py-2 px-4 rounded-sm border border-black"
                style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductListing;
