import React from 'react';

const HomeCenter = () => {
    return (
        <section className="py-10 px-10 bg-gray-100">
            <div className="container mx-auto">
                <h1 className="text-4xl mb-10 flex justify-center md:text-4xl font-bold mb-5 text-gray-600">
                    Welcome To Eikka!
                </h1>
                <div className="grid md:grid-cols-2 gap-5 p-10 items-center">

                    <div className="md:ml-6">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Neuropathic Pain</h3>
                        <p className="text-lg text-gray-600 mb-6">
                            A bone massage, also known as bone-setting or osteopathic manipulation, is a therapeutic technique used to manipulate and adjust bones and joints in order to promote healing and alleviate pain. It's often performed by skilled physical therapists.

                            The concept behind bone massage is that misalignments or restrictions in the bones and joints can lead to discomfort, and pain, and even affect the functioning of surrounding muscles and nerves. By applying specific techniques, practitioners aim to restore proper alignment, mobility, and balance to the musculoskeletal system.</p>
                        {/* ... Rest of the content ... */}
                    </div>

                    <div className="mb-6 md:mb-0">
                        <img
                            src="https://media.istockphoto.com/id/638472846/photo/musculature-illustration-of-athlete-back-and-shoulders.jpg?s=612x612&w=0&k=20&c=m_bpzxdeXfNoBqavM3N7Kgfn6kcwMp53lEs-CPDOA1Y="
                            alt="Massage Therapy"
                            className="h-auto rounded-md"
                            style={{ width: "640px" }}
                        />
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-5">
                    <div className="mb-6 md:mb-0">
                        <img
                            src="https://media.istockphoto.com/id/1044935886/photo/x-ray-of-human-pelvis-anterior-view-red-highlight-in-sacroiliac-joint-and-hip-socket-pain.jpg?s=612x612&w=0&k=20&c=2H_eGxWrKWnhyg9aNt0b72T1yfcQKp8j5HgwHeZh8FY="
                            alt="Massage Therapy"
                            className="h-auto rounded-md"
                            style={{ width: "640px" }}
                        />
                    </div>

                    <div className="md:ml-6 self-center">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Sacroiliac Joint Pain</h3>
                        <p className="text-lg text-gray-600 mb-6">
                            Nestled within Ehikka's embrace is a haven of tranquility, meticulously crafted to offer respite from the relentless demands of contemporary existence; here, amidst our serene and tranquil environment, the art of massage therapy intertwines with the very essence of healing, inviting you to embark on a journey that harmonizes mind, body, and spirit, and to rediscover the profound rejuvenation that emerges when one escapes the cacophony of the world and surrenders to the restorative embrace of expertly administered massages.
                        </p>
                        {/* ... Rest of the content ... */}
                    </div>
                </div>


                {/* ... Rest of the content ... */}
            </div>
        </section>
    );
};

export default HomeCenter;
