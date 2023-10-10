import React from 'react';
import Header from '../Components/Common/Header';
import Notice from '../Components/Common/Notice';
import Footer from '../Components/Common/Footer';

const PrivacyPolicy = () => {
    return (
        <>
            <Notice />
            <Header />

            <div className="justify-center p-3">
                <h1 className="text-3xl font-bold mt-4 text-center ">Privacy Policy</h1> <br />
                <div className='px-5'>
                    <p className="text-black text-xl mb-4">
                        Sarvangahealex Corporation (“Sarvangahealex”) is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website or use our services. By accessing our website and using our services, you agree to the terms and practices described in this Privacy Policy.                    </p>

                    <section>
                        <h2 className="text-black text-2xl mb-4 font-bold">Information Collection</h2>
                        <p className="text-black text-xl mb-4">
                            We may collect personal information from you when you visit our website or use our services, including but not limited to your name, email address, contact information, and any other information you provide to us voluntarily.<br />
                        </p>
                    </section>

                    <section>
                        <h2 className="text-black text-2xl mb-4 font-bold">Information Use</h2>
                        <p className="text-black text-xl mb-4">
                            We use the information collected for the following purposes: <br />

                            To provide and improve our services.<br />
                            To respond to your inquiries.<br />
                            To send you updates and promotional materials.<br />
                            For internal purposes such as research and analysis.<br />
                            We do not sell, rent, or share your personal information with third parties for marketing purposes without your explicit consent.<br />
                        </p>
                    </section>

                    <section>
                        <h2 className="text-black text-2xl mb-4 font-bold">Security</h2>
                        <p className="text-black text-xl mb-4">
                            We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, it's important to note that no data transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.                        </p>
                    </section>

                    <section>
                        <h2 className="text-black text-2xl mb-4 font-bold">Cookies</h2>
                        <p className="text-black text-xl mb-4">
                            Our website may use cookies to enhance your browsing experience. You can adjust your browser settings to refuse cookies, but this may limit your access to certain features of our website.                        </p>
                    </section>

                    <section>
                        <h2 className="text-black text-2xl mb-4 font-bold">Changes to Privacy Policy</h2>
                        <p className="text-black text-xl mb-4">
                            We may update this Privacy Policy from time to time to reflect changes in our practices. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.                        </p>
                    </section>

                    <section>
                        <h2 className="text-black text-2xl mb-4 font-bold">Contact Us</h2>
                        <p className="text-black text-xl mb-4">
                            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at contact@sarvangahealex.com.

                        </p>
                    </section>
                </div>

                <p />
            </div>

            <Footer />
        </>
    )
};

export default PrivacyPolicy;
