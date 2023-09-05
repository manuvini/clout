// PrivacyPolicy.js

import React from "react";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";

const PrivacyPolicy = () => {
  return (
    <div>
      <Header />

      <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 flex justify-center items-center h-32">Privacy Policy</h1>

      <div className="prose">
          <p className="text-gray-700 text-lg mb-4">
            At Ehikka, your privacy is our priority. This Privacy Policy
            outlines how we collect, use, disclose, and safeguard your personal
            information. We are dedicated to protecting your privacy and
            ensuring the security of your data.
          </p>

          <section>
            <h2>1. Information We Collect</h2>

            <p className="text-gray-700 text-lg mb-4">
              <strong>1.1. Personal Information:</strong> We may collect
              personal information when you visit our website, use our
              services, or interact with us. This may include your name,
              contact information, email address, and other information you
              provide voluntarily.
            </p>

            <p className="text-gray-700 text-lg mb-4">
              <strong>1.2. Payment Information:</strong> If you make payments
              through our website or for our services, we may collect payment
              information, including credit card details. Please note that we
              use a secure third-party payment gateway for all financial
              transactions to protect your sensitive information.
            </p>

            <p className="text-gray-700 text-lg mb-4">
              <strong>1.3. Usage Data:</strong> We automatically collect
              certain information when you visit our website, including your IP
              address, device information, browser type, and other usage data.
              This helps us improve our website and services.
            </p>

           <p className="text-gray-700 text-lg mb-4">
              <strong>1.4. Location Data:</strong> If you enable location
              services on your device, we may collect your location data to
              provide location-based services, such as door-to-door delivery
              tracking.
            </p>
          </section>

          <section>
            <h2>2. How We Use Your Information</h2>

              <p className="text-gray-700 text-lg mb-4">

              <strong>2.1. Service Delivery:</strong> We use your personal
              information to provide you with our therapy and massage services
              and to ensure the smooth delivery of our products if applicable.
            </p>

            <p className="text-gray-700 text-lg mb-4">

              <strong>2.2. Communication:</strong> We may use your contact
              information to communicate with you regarding your bookings,
              updates, promotions, and any inquiries you make.
            </p>

            <p className="text-gray-700 text-lg mb-4">

              <strong>2.3. Website Improvement:</strong> We analyze usage data
              to enhance our website's performance, content, and user
              experience.
            </p>
          </section>

          <section>
            <h2>3. Data Sharing</h2>

                      <p className="text-gray-700 text-lg mb-4">

              <strong>3.1. Third-Party Service Providers:</strong> We may share
              your information with trusted third-party service providers to
              facilitate our services, such as payment processors and delivery
              partners.
            </p>

                      <p className="text-gray-700 text-lg mb-4">

              <strong>3.2. Legal Requirements:</strong> We may disclose your
              information when required by law, regulatory authorities, or in
              response to a valid legal request.
            </p>
          </section>

          <section>
            <h2>4. Data Security</h2>

                      <p className="text-gray-700 text-lg mb-4">

              We implement strict security measures to protect your personal
              information, including encryption, access controls, and regular
              security audits.
            </p>
          </section>

          <section>
            <h2>5. Your Choices</h2>

                      <p className="text-gray-700 text-lg mb-4">

              <strong>5.1. Opt-Out:</strong> You can opt-out of receiving
              marketing communications from us by following the unsubscribe
              instructions in our emails.
            </p>

                      <p className="text-gray-700 text-lg mb-4">

              <strong>5.2. Access and Correction:</strong> You may request
              access to, update, or correct your personal information in our
              records by contacting us.
            </p>
          </section>

          <section>
            <h2>6. Cookies and Tracking Technologies</h2>

                      <p className="text-gray-700 text-lg mb-4">

              We use cookies and similar tracking technologies to improve your
              browsing experience on our website. You can manage your cookie
              preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2>7. Children's Privacy</h2>

                      <p className="text-gray-700 text-lg mb-4">

              Our services are not intended for children under the age of 13,
              and we do not knowingly collect information from individuals
              under 13 years of age.
            </p>
          </section>

          <section>
            <h2>8. Changes to this Privacy Policy</h2>

                      <p className="text-gray-700 text-lg mb-4">

              We may update this Privacy Policy from time to time to reflect
              changes in our practices or legal requirements. Any updates will
              be posted on our website.
            </p>
          </section>

          <section>
            <h2>9. Contact Us</h2>

                      <p className="text-gray-700 text-lg mb-4">

              If you have any questions, concerns, or requests regarding this
              Privacy Policy, please contact us at [Insert Contact Information].
            </p>
          </section>

                    <p className="text-gray-700 text-lg mb-4">

            Thank you for choosing Ehikka for your therapy, massage, and
            delivery needs. Your trust is essential to us, and we are committed
            to safeguarding your privacy.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

