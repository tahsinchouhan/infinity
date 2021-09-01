import React from "react";

const AssureCard = ({ src, text }) => {
  return (
    <div className="border-4 border-gray-400 shadow-2xl lg:px-7 px-4 sm:mx-0 my-6 sm:my-0  mx-auto w-72 lg:h-80 h-72 flex flex-col justify-center">
      <img
        src={`/assets/${src}.png`}
        alt="assurity"
        className="w-per30 mx-auto py-10"
      />
      <h2 className="md:text-3xl text-2xl text-center vollkorn-font">{text}</h2>
    </div>
  );
};

export default AssureCard;
