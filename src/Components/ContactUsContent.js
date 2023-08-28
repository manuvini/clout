const ContactContent = () => {
    return (
        <>
            <div className="bg-gray-100 p-8">
            <div className="flex flex-col md:flex-row lg:p-10 justify-between">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl py-3 mt-5 font-bold mb-2">Contact Details</h2>
            <p className="contact-page__text text-xl py-2">
              Clout Bussines Limited, Dr Rajkumar Road, Rajajinagar, Bangalore
            </p>
            <p className="contact-page__text text-xl py-2">cloutbusiness@gmail.com</p>
            <p className="contact-page__text text-xl py-2">+91 9999999999</p>
          </div>
          <div className="w-full md:w-1/2 mt-5 md:mt-0">
            <h2 className="text-xl font-semibold mb-2">Send us a message</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block font-semibold">Name</label>
                                <input type="text" className="w-full border px-3 py-2" />
                            </div>
                            <div className="mb-4">
                                <label className="block font-semibold">Phone</label>
                                <input type="email" className="w-full border px-3 py-2" />
                            </div>


                            <div className="mb-4">
                                <label className="block font-semibold">Email</label>
                                <input type="email" className="w-full border px-3 py-2" />
                            </div>
                            <div className="mb-4">
                                <label className="block font-semibold">Message</label>
                                <textarea className="w-full border px-3 py-2"></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="h-64">
                <iframe
                    title="Map"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=77.5011%2C12.9279%2C77.6419%2C13.0072&layer=mapnik`}
                ></iframe>
            </div>
        </>
    );
};

export default ContactContent;
