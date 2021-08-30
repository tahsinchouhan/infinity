import React from "react";

const AssureCard = ({ src, text }) => {
  return (
    <div className="border-4 border-gray-400 shadow-2xl px-7 sm:mx-0 my-6 sm:my-0  mx-auto  sm:w-per20 w-per70 h-80 flex flex-col justify-center">
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
