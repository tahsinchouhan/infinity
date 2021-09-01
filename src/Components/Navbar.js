import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";

const Navbar = () => {
  return (
    <section>
      <div>
        <div className="sm:block hidden">
          <div className="flex justify-end px-6 pt-4">
            <ul className="flex sm:space-x-6 space-x-3 sm:font-semibold sm:text-sm text-xs ">
              <li>Book an Appointment</li>
              <li>Video Call</li>
              <li>Try At Home</li>
            </ul>
          </div>
        </div>
        <div className="flex sm:justify-center sm:my-0 my-4">
          <img
            src="/assets2/logo-02.png"
            alt="Logo"
            className="sm:w-per20 w-per70"
          />
          <div className="sm:hidden block">
            <div className="flex space-x-4 font-bold mt-4 ml-4 text-3xl">
              <span>
                <FaShoppingCart />
              </span>
              <span>
                <BsPerson />
              </span>
            </div>
          </div>
        </div>
        <div className="px-5 sm:hidden block">
          <input
            type="text"
            className="border-2 w-full py-2 outline-none px-4"
          />
        </div>
      </div>
      <div className="sm:block hidden">
        <div className=" md:px-20 px-10 py-1 flex justify-between">
          <ul className="flex md:space-x-10 space-x-5 font-semibold md:text-xl text-lg">
            <li>Gold</li>
            <li>Diamond</li>
            <li>Silver</li>
            <li>Collection</li>
            <li>All Jewellery</li>
          </ul>
          <div className="flex space-x-8 font-bold text-3xl">
            <span>
              <AiOutlineSearch />
            </span>
            <span>
              <FaShoppingCart />
            </span>
            <span>
              <BsPerson />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
