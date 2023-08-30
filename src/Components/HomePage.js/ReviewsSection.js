import React from 'react';
import Review from './Review'; // Adjust the path to match your file structure

const reviews = [
  {
    author: 'John Doe',
    content: 'I had an amazing experience at this spa. The massage was so relaxing and the staff was friendly.'
  },
  {
    author: 'Jane Smith',
    content: 'The service here is top-notch. I felt rejuvenated and refreshed after my visit.'
  },
  {
    author: 'Srini',
    content: 'The service here is outstanding. I think so i need to sedule another slot after few days.Overall experience was to good'
  },
  // Add more review objects as needed
];

const ReviewsSection = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Customer Reviews</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <Review key={index} author={review.author} content={review.content} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
