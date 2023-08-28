import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl flex justify-center font-bold mb-4">About Ehikka</h1>
        <div className="mb-4">
          <img
            src="https://qph.cf2.quoracdn.net/main-qimg-6cd87e360529c7ecb2407880740ce269" // Replace with the actual image path
            alt="Ehikka Massage Services"
            className="rounded-lg shadow-md w-full"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Ehikka is a Bangalore-based company that specializes in providing
          premium door-to-door massage services. With a team of skilled and
          certified massage therapists, we offer a diverse range of massage
          techniques to address various conditions and needs.
        </p>
        <p className="text-gray-700 mb-4">
          Our mission is to promote wellness and relaxation through our
          specialized massage services. Whether you're seeking relief from
          chronic pain, tension, or simply looking to unwind, our team is
          dedicated to delivering a tailored and rejuvenating experience in the
          comfort of your own space.
        </p>
        <p className="text-gray-700 mb-4">
          At Ehikka, we believe that a holistic approach to well-being is
          essential. Our massage therapies are designed not only to alleviate
          physical discomfort but also to nurture your mental and emotional
          health. We understand that everyone's needs are unique, which is why
          our therapists work closely with you to customize each session.
        </p>
        <p className="text-gray-700 mb-4">
          We take pride in our team of highly trained professionals who are
          passionate about what they do. From deep tissue massages for chronic
          pain to relaxation massages to melt away stress, our therapists are
          equipped to address a wide range of concerns with skill and
          compassion. Your comfort and safety are our top priorities.
        </p>
        <p className="text-gray-700">
          Discover the difference that Ehikka can make in your well-being. We
          invite you to experience the convenience and luxury of our door-to-door
          massage services. Contact us today to book an appointment and embark on
          a journey to a healthier, more relaxed you.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
