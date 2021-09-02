import React from "react";

const Form = () => {
  return (
    <section className="sm:pt-36 pt-20">
      <div className="mx-auto w-screen form relative">
        <img
          src="/assets/group82.png"
          alt="Design"
          className="w-full h-hfifty"
        />
        <div className="absolute sm:top-per20 top-per10 malayalam-font lg:right-per12 sm:right-per10 sm:text-left text-center">
          <h1 className="sm:text-6xl text-4xl font-serif py-3">Sign Up Now</h1>

          <h2 className="sm:text-2xl text-lg intro-font  font-light py-1">
            &nbsp; &nbsp; Join to get 10 off on your first purchase{" "}
          </h2>
          <h2 className="sm:text-2xl text-lg intro-font  font-light py-1">
            &nbsp; &nbsp; Join to get 10 off on your first purchase{" "}
          </h2>
          <span>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="bg-transparent border-2 sm:mt-6 my-4 intro-font  border-black rounded-md sm:py-3 py-1 px-5 text-black placeholder-black font-medium outline-none sm:text-xl text-base "
            />
            <button className="text-white bg-black rounded-md sm:py-4 py-2 sm:px-14 px-20  sm:ml-3">
              SIGN UP
            </button>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Form;
