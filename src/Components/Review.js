import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReviewSlider from "../SubComponents/ReviewSlider";

const Review = () => {
  return (
    <section className="h-hseventy pt-10 pb-20">
      <div className="flex justify-center pb-10 ">
        <h1 className="sm:text-6xl text-4xl malayalam-font">
          Customer Reviews
        </h1>
      </div>
      <div>
        <ReviewSlider />
      </div>
    </section>
  );
};

export default Review;
