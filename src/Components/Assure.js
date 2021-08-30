import React from "react";
import AssureCard from "../SubComponents/AssureCard";

const Assure = () => {
  return (
    <section className="pt-20">
      <div className="flex justify-center">
        <h1 className="sm:text-6xl text-5xl font-serif">We Assure</h1>
      </div>
      <div className="flex sm:flex-row flex-col justify-evenly flex-wrap pt-10">
        <AssureCard src="group23" text="100% Hellmark Jewelry" />
        <AssureCard src="group22" text="Try Jewelry at Home" />
        <AssureCard src="group24" text="Lifetime Exchange on Gold" />
        <AssureCard src="group25" text="Shipping and Return Policy" />
      </div>
    </section>
  );
};

export default Assure;
