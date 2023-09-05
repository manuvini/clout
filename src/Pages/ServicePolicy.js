import React from "react";
import Footer from "../Components/Common/Footer";
import Header from "../Components/Common/Header";

const ServicePolicy = () => {
  return (
    <>
      <Header />

      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Service Policy</h1>

        <div className="prose">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            venenatis tincidunt felis, sit amet facilisis purus dignissim eu.
            Vivamus eu velit libero. Vivamus dapibus a urna sed tristique.
            Donec tincidunt metus et justo iaculis, a consectetur arcu
            facilisis. Sed eu libero sit amet tellus bibendum volutpat. Integer
            aliquam ligula sit amet tortor tincidunt euismod.
          </p>

          <p>
            Quisque at semper libero. Vestibulum feugiat tortor a orci
            fermentum, vel volutpat ligula aliquam. Cras eu eros at nulla
            facilisis lacinia. Vivamus at bibendum elit, nec eleifend urna.
            Proin posuere, lorem nec feugiat rhoncus, justo ipsum dapibus nisi,
            vel lacinia velit arcu vel libero.
          </p>

          <p>
            Nullam viverra quam eu pharetra aliquet. Sed scelerisque velit vel
            velit efficitur, sit amet dictum orci tincidunt. Duis nec
            vestibulum libero, nec fringilla ante. Nullam eu urna vestibulum,
            volutpat nisl ut, auctor nulla.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ServicePolicy;
