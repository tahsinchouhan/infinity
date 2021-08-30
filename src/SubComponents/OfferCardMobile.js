import React from "react";

const OfferCardMobile = ({ src }) => {
  return (
    <div className="space-y-6 text-center">
      <img src={`/assets/${src}.png`} alt="Offer" />
      <h1 className="text-3xl font-serif">Avail Upto 20% off</h1>
      <p className="text-xl">Best Seller Best Seller</p>
      <button className="bg-black py-3 px-16 text-white rounded-md">
        Discover
      </button>
    </div>
  );
};

export default OfferCardMobile;
