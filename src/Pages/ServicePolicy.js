import React from 'react';
import Header from '../Components/Common/Header';
import Notice from '../Components/Common/Notice';
import Footer from '../Components/Common/Footer';

const ServicePolicy = () => {
    return (
        <>
            <Notice />
            <Header />
            <div className="justify-center p-3">
                <h1 className="text-3xl flex font-bold justify-center p-5 text-3xl">Service Policy</h1>
                <div>
                    <p className="text-black text-xl mb-4">
                        This Service Policy governs your use of services provided by Ehikka Corporation (“Ehikka”). By accessing and using our services, you agree to comply with this policy and any other applicable terms and conditions.
                    </p>

                    <section>
                        <h2 className="text-black text-2xl mb-4 font-bold">Service Availability</h2>
                        <p className="text-black text-xl mb-4">
                            Ehikka strives to ensure the availability of its services but does not guarantee uninterrupted access to its platforms or websites. We may temporarily suspend or discontinue services for maintenance or other reasons without prior notice.<br />
                            You are responsible for ensuring that you have the necessary equipment, software, and internet connectivity to access and use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-black text-2xl mb-4 font-bold">Acceptable Use</h2>
                        <p className="text-black text-xl mb-4">
                            You agree to use our services in compliance with all applicable laws and regulations.<br />
                            You shall not engage in any unlawful, harmful, or abusive activities while using our services, including but not limited to spamming, hacking, or distributing malicious software.<br />
                            We reserve the right to terminate or suspend your access to our services if you violate this policy or engage in any unauthorized or harmful activities.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-black text-2xl mb-4 font-bold">Content Ownership</h2>
                        <p className="text-black text-xl mb-4">
                            Any content you submit or upload to our platforms remains your property. However, by using our services, you grant Ehikka a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and distribute your content for the purpose of providing and improving our services.<br />
                            Ehikka may remove or disable access to content that violates this policy or is deemed inappropriate or harmful.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-black text-2xl mb-4 font-bold">Changes to Service Policy</h2>
                        <p className="text-black text-xl mb-4">
                            Ehikka may update this Service Policy to reflect changes in our services or legal requirements. We will notify you of any significant changes.<br />
                            Continued use of our services after the policy changes constitute your acceptance of the updated policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-black text-2xl mb-4 font-bold">Contact Us</h2>
                        <p className="text-black text-xl mb-4">
                            If you have any questions or concerns about this Service Policy or our services, please contact us at [contact email].
                        </p>
                    </section>
                </div>

                <p />
            </div>

            <Footer />
        </>
    )
};

export default ServicePolicy;
