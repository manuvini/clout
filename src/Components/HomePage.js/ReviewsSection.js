import React from 'react';

const TestimonialSection = () => {
  const reviews = [
    {
      author: 'Kiran',
      content: 'The therapist was not only highly proficient but also deeply knowledgeable about the different massage techniques rooted in Indian traditions. They took the time to understand my specific needs and preferences before tailoring the session accordingly.',
    },
    {
      author: 'Srini',
      content: 'I recently had the pleasure of experiencing in Sarvangahealex, and I must say, it was an absolute delight that left me thoroughly relaxed and rejuvenated.',
    },
    {
      author: 'Darshan',
      content: 'My experience at Sarvangahealex was exceptional ,they offer is a testament to their commitment to quality and authenticity. If you are looking for a genuine, soul-soothing massage that encompasses the wisdom of ancient Indian practices, I wholeheartedly recommend giving this place a visit. I left with a contented heart, a relaxed body, and a promise to return for another dose of serenity.',
    },

    // Add more reviews here
  ];

  return (
    <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
      <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
              What people <br /> are saying.
            </h1>
            <h3 className="text-xl mb-5 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className="text-center mb-10">
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
            </div>
          </div>
          <div className="-mx-3 md:flex items-start">
            {reviews.map((review, index) => (
              <div key={index} className="px-3 md:w-1/3">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    {/* <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      Sample avatar image 
                       <img src={`https://i.pravatar.cc/100?img=${index + 1}`} alt="" />
                    </div> */}
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-xl uppercase text-gray-600">{review.author}</h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-xl leading-tight">
                      <span className="text-xl leading-none italic font-bold text-gray-400 mr-1">"</span>
                      {review.content}
                      <span className="text-xl leading-none italic font-bold text-gray-400 ml-1">"</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
