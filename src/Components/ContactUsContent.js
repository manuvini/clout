const ContactContent = () => {
    return (
        <>
            <div className="bg-gray-100 p-8">
            <div className="flex flex-col md:flex-row lg:p-10 justify-between">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl py-3 mt-5 font-bold mb-2">Contact Details</h2>
            <p className="contact-page__text text-2xl py-2">
              Clout Bussines Limited, Dr Rajkumar Road, Rajajinagar, Bangalore
            </p>
            <p className="contact-page__text text-2xl py-2">cloutbusiness@gmail.com</p>
            <p className="contact-page__text text-2xl py-2">+91 9999999999</p>
          </div>
          <div className="w-full md:w-1/2 mt-5 md:mt-0">
            <h2 className="text-3xl font-bold mb-2">Send us a message</h2>
            <br/>
                        <form>
                            <div className="mb-4">
                                <label className="block font-semibold text-xl">Name</label><br/>
                                <input type="text" className="w-full border px-3 py-2" required />
                            </div>
                            <div className="mb-4">
                                <label className="block font-semibold text-xl">Phone</label><br/>
                                <input type="tel" className="w-full border px-3 py-2" required />
                            </div>


                            <div className="mb-4">
                                <label className="block font-semibold text-xl">Email</label><br/>
                                <input type="email" className="w-full border px-3 py-2" required  />
                            </div>
                            <div className="mb-4">
                                <label className="block font-semibold text-xl">Message</label><br/>
                                <textarea className="w-full border px-3 py-2" ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-8 py-2 rounded hover:bg-blue-600"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="h-64">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d514.643387419351!2d77.55838266997189!3d12.98997620823814!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d8b21782bf5%3A0xbd38d7283e543dd!2sPunjab%20National%20Bank!5e0!3m2!1sen!2sin!4v1693468001208!5m2!1sen!2sin"
    width="100%"
    height="100%"
    frameBorder="0"
    style={{ border: "0" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
        </>
    );
};

export default ContactContent;
