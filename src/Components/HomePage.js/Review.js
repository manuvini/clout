import React from 'react';

const Review = ({ author, content }) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
<p className="text-gray-1000 text-xl mb-5">{content}</p>
      <p className="text-gray-1200 text-2xl font-semibold">- {author}</p>
    </div>
  );
};

export default Review;
