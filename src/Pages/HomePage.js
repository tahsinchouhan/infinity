import React from "react";
import Banner from "../Components/Banner";
import Beauty from "../Components/Beauty";
import Footer from "../Components/Footer";
import ShowPiece from "../Components/ShowPiece";
import VideoSection from "../Components/VideoSection";
import Offer from "../Components/Offer";
import OfferMobile from "../Components/OfferMobile";
import WhatsNew from "../Components/WhatsNew";
import Review from "../Components/Review";
import Form from "../Components/Form";
import Assure from "../Components/Assure";
import Follow from "../Components/Follow";
import Navbar from "../Components/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <ShowPiece />
      <Beauty />
      <div className="pb-10">
        <VideoSection />
      </div>
      <div className="pb-10">
        <VideoSection reverse />
      </div>
      <div className="sm:block hidden lg:h-screen md:h-hseventy">
        <Offer />
      </div>
      <div className="sm:hidden block pb-60">
        <OfferMobile src="group68" />
      </div>
      <div className="sm:hidden block pb-60">
        <OfferMobile src="group70" />
      </div>
      <WhatsNew />
      <Review />
      <Form />
      <Assure />
      <Follow />
      <Footer />
    </div>
  );
};

export default HomePage;
