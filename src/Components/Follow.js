import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

const Follow = () => {
  return (
    <section className=" py-20">
      <div className="flex justify-center py-8">
        <h1 className=" sm:text-6xl text-5xl malayalam-font">Follow Us On </h1>
      </div>
      <div className="md:flex  ">
        <div className="md:w-fifty  flex flex-col md:items-end items-center md:pr-20">
          <div className="flex space-x-2">
            <span className="sm:text-7xl text-5xl">
              <AiFillInstagram />
            </span>
            <h1 className="sm:text-6xl text-4xl flex items-end justify-start  vollkorn-font ">
              Instagram
            </h1>
          </div>
          <div className="xl:w-per50 w-per80 flex my-8">
            <img src="/assets/group70.png" alt="Instagram" />
          </div>
        </div>
        <div className="md:w-fifty  flex flex-col md:items-start items-center md:pl-20">
          <div className="flex space-x-2">
            <span className="sm:text-7xl text-5xl">
              <AiFillFacebook />
            </span>
            <h1 className="sm:text-6xl text-4xl flex items-end vollkorn-font ">
              Facebook
            </h1>
          </div>
          <div className="xl:w-per50 w-per80 flex my-8">
            <img src="/assets/group70.png" alt="Instagram" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Follow;
