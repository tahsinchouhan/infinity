import React from "react";
import AssureCard from "../SubComponents/AssureCard";

const Assure = () => {
  return (
    <section className="sm:py-20 py-12">
      <div className="flex justify-center">
        <h1 className="sm:text-6xl text-5xl font-serif">We Assure</h1>
      </div>
      <div className="flex md:flex-row flex-col md:justify-center w-9/12 mx-auto items-center lg:space-x-10  md:space-x-10 md:space-y-0 space-y-10  sm:pt-10 pt-6">
        <AssureCard src="group23" text="100% Hallmark Jewellery" />
        <AssureCard src="group22" text="Try Jewellery at Home" />
        <AssureCard src="group24" text="Lifetime Exchange on Gold" />
        <AssureCard src="group25" text="Shipping and Return Policy" />
      </div>
    </section>
  );
};

export default Assure;
