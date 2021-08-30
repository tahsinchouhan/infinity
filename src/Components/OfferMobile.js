import React from "react";
import OfferCardMobile from "../SubComponents/OfferCardMobile";

const OfferMobile = ({ src }) => {
  return (
    <section className="pt-36">
      <div className="relative h-40 bg-offer flex">
        <div className="absolute w-64 top-10 left-12">
          <OfferCardMobile src={src} />
        </div>
      </div>
    </section>
  );
};

export default OfferMobile;
