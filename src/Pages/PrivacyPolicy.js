import React from 'react';
import Header from '../Components/Common/Header';
import Notice from '../Components/Common/Notice';
import Footer from '../Components/Common/Footer';

const PrivacyPolicy = () => {
    return (
        <>
            <Notice />
            <Header />

            <div className="justify-center p-10">
                <h1 className="text-3xl flex font-bold justify-center p-10 text-3xl">Privacy Policy</h1>
                <div>
                    <p className="text-black text-xl mb-4">
                        Ehikka Corporation (“Ehikka”) is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website or use our services. By accessing our website and using our services, you agree to the terms and practices described in this Privacy Policy.
                    </p>

                    <section>
                        <h2 className="text-black text-2xl mb-4 font-bold">Information Collection</h2>
                        <p className="text-black text-xl mb-4">
                            1. We may collect personal information from you when you visit our website or use our services, including but not limited to your name, email address, contact information, and any other information you provide to us voluntarily.<br />
                            2. We may also automatically collect non-personal information, such as your IP address, browser type, and operating system, for statistical and analytical purposes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-black text-2xl mb-4 font-bold">Information Use</h2>
                        <p className="text-black text-xl mb-4">
                            3. We use the information collected to provide and improve our services, respond to your inquiries, send you updates and promotional materials, and for internal purposes such as research and analysis.<br />
                            4. We do not sell, rent, or share your personal information with third parties for marketing purposes without your explicit consent.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-black text-2xl mb-4 font-bold">Security</h2>
                        <p className="text-black text-xl mb-4">
                            5. We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no data transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-black text-2xl mb-4 font-bold">Changes to Privacy Policy</h2>
                        <p className="text-black text-xl mb-4">
                            6. We may update this Privacy Policy from time to time to reflect changes in our practices. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-black text-2xl mb-4 font-bold">Contact Us</h2>
                        <p className="text-black text-xl mb-4">
                            7. If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at contact@ekkia.com .
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
