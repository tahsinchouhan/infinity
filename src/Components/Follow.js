import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

const Follow = () => {
  return (
    <section className=" pt-20">
      <div className="flex justify-center py-4">
        <h1 className=" sm:text-6xl text-5xl malayalam-font">Follow Us On </h1>
      </div>
      <div className="md:flex  ">
        <div className=" px-10 mx-auto py-10">
          <div className="flex">
            <span className="sm:text-8xl text-6xl">
              <AiFillInstagram />
            </span>
            <h1 className="sm:text-6xl text-4xl flex items-end vollkorn-font">
              Instagram
            </h1>
          </div>
          <div className="py-8">
            <img src="/assets/group65.png" alt="" />
          </div>
        </div>
        <div className="px-10  mx-auto py-10">
          <div className="flex">
            <span className="sm:text-8xl text-6xl">
              <AiFillFacebook />
            </span>
            <h1 className="sm:text-6xl text-2xl flex items-end vollkorn-font">
              Facebook
            </h1>
          </div>
          <div className="py-8">
            <img src="/assets/group65.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Follow;
