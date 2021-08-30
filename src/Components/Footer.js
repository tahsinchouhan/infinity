import React from "react";
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { CgFacebook } from "react-icons/cg";
import { SiInstagram } from "react-icons/si";

const Footer = () => {
  return (
    <section className="bg-footer  w-screen sm:h-96   flex items-end ">
      <div className=" h-per85  sm:w-per70 mx-auto sm:flex">
        <div className="w-per70 ">
          <div className="h-per50  sm:space-y-0 space-y-4  sm:flex">
            <div className=" sm:w-per25 w-per80 ">
              <h1 className="pb-5 malayalam-font ">Know your Jewellery</h1>
              <span className="font-light text-sm text-gray-500 space-y-1">
                <p>Diamond Guide</p>
                <p>Jewellery Guide</p>
                <p>Gemstone Guide</p>
              </span>
            </div>
            <div className=" sm:w-per25 w-per80 ">
              <h1 className="pb-5 malayalam-font ">CaratLane Advantage</h1>
              <span className="font-light text-sm intro-font text-gray-500 space-y-1">
                <p>Free shipping</p>
                <p>Financing Options</p>
                <p>Old Gold Exchange</p>
              </span>
            </div>
            <div className=" sm:w-per25 w-per80 ">
              <h1 className="pb-5 malayalam-font ">Customer Service</h1>
              <span className="font-light text-sm intro-font text-gray-500 space-y-1">
                <p>Return Policy</p>
                <p>Order Status</p>
              </span>
            </div>
            <div className=" sm:w-per25 w-per80 ">
              <h1 className="pb-5 malayalam-font ">About Us</h1>
              <span className="font-light text-sm intro-font text-gray-500 space-y-1">
                <p>Our Story</p>
                <p>Press</p>
                <p>Blog</p>
              </span>
            </div>
          </div>
          <div className="h-per50">
            <div className="flex space-x-4 py-6">
              <span className="text-4xl text-purple-500">
                <CgFacebook />
              </span>
              <span className="text-4xl text-purple-500">
                <SiInstagram />
              </span>
            </div>
            <div className="py-4 intro-font">
              <p>Copyright &copy; Infinity Jewellery</p>
            </div>
          </div>
        </div>
        <div className="w-per30 space-y-1">
          <h1 className="text-lg pb-4 malayalam-font ">Contact Us</h1>
          <p className="font-light text-sm intro-font text-gray-500">
            Mobile No. 07712233502
          </p>
          <p className="font-light text-sm intro-font text-gray-500">
            Hours - 24*7 (All Days)
          </p>
          <p className="font-light text-smintro-font text-gray-500">
            Contact Us - info@gmail.com
          </p>
          <div className="py-5">
            <button className="bg-transparent border-2 vollkorn-font border-purple-300 px-8 py-2">
              FIND A STORE
            </button>
          </div>
          <div className="flex space-x-8">
            <span className="text-5xl">
              <RiVisaLine />
            </span>
            <span className="text-5xl">
              <FaCcMastercard />
            </span>
            <span className="text-5xl">
              <FaCcPaypal />
            </span>
            <span className="text-5xl">
              <SiAmericanexpress />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
