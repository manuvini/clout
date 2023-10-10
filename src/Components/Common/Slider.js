import React, { useState, useEffect } from "react";
// import { getDatabase, ref, onValue, off } from "firebase/database";
import slide1 from "./img/slide1.jpg";
import slide2 from "./img/slide2.jpg";

const SliderData = [slide1, slide2]
const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slides, setSliderData] = useState(SliderData);

  // useEffect(() => {
  //   // Fetch the slider data from the Firebase Realtime Database
  //   const dbRef = ref(getDatabase(), "sliderData");

  //   onValue(
  //     dbRef,
  //     (snapshot) => {
  //       const data = snapshot.val();

  //       if (data && typeof data === "object") {
  //         // Convert the data values to an array of slides
  //         const slidesArray = Object.values(data);
  //         setSliderData(slidesArray);
  //       } else {
  //         // Handle the case when data is not an objsect or is empty
  //         setSliderData([]);
  //       }
  //     },
  //     (error) => {
  //       console.error("Error fetching slider data:", error);
  //     }
  //   );

  //   // Clean up the listener when the component unmounts
  //   return () => {
  //     // Turn off the database listener
  //     off(dbRef);
  //   };
  // }, []);

  useEffect(() => {
    // Change the active slide after every 3 seconds
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [slides.length]);

  function handlePrevClick() {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }

  function handleNextClick() {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  }

  return (
    <div className="max-w-full mx-auto">
      <div id="default-Slider" className="relative" data-Slider="static">
        <div className="overflow-hidden relative h-56 sm:h-64 xl:h-80 2xl:h-96">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`duration-700 ease-in ${activeSlide === index ? "block" : "hidden"
                }`}
              data-Slider-item
            >
              {/* Show the label for the slide */}
              {slide.label && (
                <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
                  {slide.label}
                </span>
              )}
              <img
                src={slide}
                className="block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover w-full h-full"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
          {slides.map((slide, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${activeSlide === index ? "bg-white" : "bg-gray-300"
                }`}
              aria-current={activeSlide === index}
              aria-label={`Slide ${index + 1}`}
              data-Slider-slide-to={index}
            ></button>
          ))}
        </div>
        <button
          type="button"
          className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-Slider-prev
          onClick={handlePrevClick}
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="hidden">Previous</span>
          </span>
        </button>

        {/* next button */}
        <button
          type="button"
          className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-Slider-next
          onClick={handleNextClick}
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="hidden">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
