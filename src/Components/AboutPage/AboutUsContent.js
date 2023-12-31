import React from 'react';
import about_page_image from '../Common/img/about_page_image.jpg';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-3xl font-bold  text-center"> About Sarvangahealex </h1>

      <div className="grid md:grid-cols-2 lg:p-10"> {/* Use grid for layout */}
        <div className="md:mr-5"> {/* Use margin for spacing between columns */}

          <p className="text-gray-700 text-xl mb-4">
            Sarvangahealex specializes in providing premium door-to-door therapy services. With a team of skilled and
            certified massage therapists, we offer a diverse range of therapy  techniques to address various conditions and needs.
          </p>
          <p className="text-gray-700 text-xl mb-4">
            Our mission is to promote wellness and relaxation through our
            specialized therapy services. Whether you're seeking relief from
            chronic pain, tension, or simply looking to unwind, our team is
            dedicated to delivering a tailored and rejuvenating experience in the
            comfort of your own space.
          </p>
          <p className="text-gray-700 text-xl mb-4">
            At Sarvangahealex, we believe that a holistic approach to well-being is
            essential. Our massage therapies are designed not only to alleviate
            physical discomfort but also to nurture your mental and emotional
            health. We understand that everyone's needs are unique, which is why
            our therapists work closely with you to customize each session.
          </p>
          <p className="text-gray-700 text-xl mb-4">
            We take pride in our team of highly trained professionals who are
            passionate about what they do. From deep tissue therapy for chronic
            pain to relaxation massages to melt away stress, our therapists are
            equipped to address a wide range of concerns with skill and
            compassion. Your comfort and safety are our top priorities.
          </p>
          <p className="text-gray-700 text-xl mb-4">
            Discover the difference that Sarvangahealex can make in your well-being. We
            invite you to experience the convenience and luxury of our door-to-door
            therapy services. Contact us today to book an appointment and embark on
            a journey to a healthier, more relaxed you.
          </p>
        </div>
        <div className="md:ml-5 mt-20 text-center"> {/* Use margin and text-center for centering */}
          <img
            src={about_page_image}
            alt="Sarvangahealex Massage Services"
            className="rounded-lg shadow-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
