import React from "react";
import Banner from "../Components/Banner";
import Beauty from "../Components/Beauty";
import Footer from "../Components/Footer";
import ShowPiece from "../Components/ShowPiece";
import VideoSection from "../Components/VideoSection";
import Offer from "../Components/Offer";
import OfferMobile from "../Components/OfferMobile";
import WhatsNew from "../Components/WhatsNew";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <ShowPiece />
      <Beauty />
      <VideoSection direction="flex-row" />
      <VideoSection direction="flex-row-reverse" />
      <div className="sm:block hidden h-screen">
        <Offer />
      </div>
      <div className="sm:hidden block pb-60">
        <OfferMobile src="group68" />
      </div>
      <div className="sm:hidden block pb-86">
        <OfferMobile src="group70" />
      </div>
      <WhatsNew />
      <Footer />
    </div>
  );
};

export default HomePage;
