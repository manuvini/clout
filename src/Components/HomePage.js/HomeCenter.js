import React from 'react';
import imageHomepage_1 from "../Common/img/imageHomepage_1.jpg";
import imageHomepage_2 from "../Common/img/imageHomepage_2.jpg";

const HomeCenter = () => {
    return (
        <section className="py-10 px-4 md:px-10 bg-gray-100">
            <div className="container mx-auto">
                <h1 className="text-4xl mb-10 flex justify-center md:text-4xl font-bold mb-5 text-gray-600">
                    Welcome To Sarvangahealex!
                </h1>
                <div className="grid md:grid-cols-2 gap-5 md:p-10 items-center">
                    <div className="md:ml-6">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Neuropathic Pain</h3>
                        <p className="text-xl text-gray-600 mb-6">
                            A bone therapy, also known as bone-setting or osteopathic manipulation, is a therapeutic technique used to manipulate and adjust bones and joints in order to promote healing and alleviate pain. It's often performed by skilled physical therapists.
                            The concept behind bone therapy is that misalignments or restrictions in the bones and joints can lead to discomfort, and pain, and even affect the functioning of surrounding muscles and nerves. By applying specific techniques, practitioners aim to restore proper alignment, mobility, and balance to the musculoskeletal system.
                        </p>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <img
                            src={imageHomepage_1}
                            alt="Massage Therapy"
                            className="h-auto rounded-md w-full md:w-auto"
                        />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 p-4 md:p-10 gap-5">
                    <div className="mb-6 md:mb-0">
                        <img
                            src={imageHomepage_2}
                            alt="Massage Therapy"
                            className="h-auto rounded-md w-full md:w-auto"
                        />
                    </div>
                    <div className="md:ml-6 self-center">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Sacroiliac Joint Pain</h3>
                        <p className="text-xl text-gray-600 mb-6">
                            Nestled within Sarvangahealex's embrace is a haven of tranquility, meticulously crafted to offer respite from the relentless demands of contemporary existence; here, amidst our serene and tranquil environment, the art of massage therapy intertwines with the very essence of healing, inviting you to embark on a journey that harmonizes mind, body, and spirit, and to rediscover the profound rejuvenation that emerges when one escapes the cacophony of the world and surrenders to the restorative embrace of expertly administered massages.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeCenter;
