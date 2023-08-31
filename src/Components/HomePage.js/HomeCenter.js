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
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Experience Tranquility</h3>
                        <p className="text-lg text-gray-600 mb-6">
                            At Ehikka, we provide a serene and tranquil environment where you can escape the stresses of modern life and experience the healing benefits of massage therapy.
                        </p>
                        {/* ... Rest of the content ... */}
                    </div>

                    <div className="mb-6 md:mb-0">
                        <img
                            src="https://www.nealsyardremedies.com/cdn/shop/articles/body-focused-therapies-1664548798828_1a2d2854-ef19-4ad2-9ca7-7d73083d4bce.jpg?v=1667338527"
                            alt="Massage Therapy"
                            className="h-auto rounded-md"
                            style={{ width: "640px" }}
                        />
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-5">
                    <div className="mb-6 md:mb-0">
                        <img
                            src="https://www.nealsyardremedies.com/cdn/shop/articles/body-focused-therapies-1664548798828_1a2d2854-ef19-4ad2-9ca7-7d73083d4bce.jpg?v=1667338527"
                            alt="Massage Therapy"
                            className="h-auto rounded-md"
                            style={{ width: "640px" }}
                        />
                    </div>

                    <div className="md:ml-6 self-center">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Experience Tranquility</h3>
                        <p className="text-lg text-gray-600 mb-6">
                            At Ehikka, we provide a serene and tranquil environment where you can escape the stresses of modern life and experience the healing benefits of massage therapy.
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
