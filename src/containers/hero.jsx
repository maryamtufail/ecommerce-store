import React from "react";
import { IoArrowForward } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="flex h-[27rem] bg-[#f3f3f3]">
      <div className="flex flex-col items-start justify-center p-[5rem] lg:w-2/4">
        <h1 className="font-semibold text-[#1a1a1a] my-[0.67em] text-5xl">
          <strong>See</strong> everything with <strong>Clarity</strong>
        </h1>
        <p className="text-[#333]">
          Buying eyewear should leave you happy and good-looking, with money in
          your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes
          covered.
        </p>
        <br />
        <a
          href="/shop"
          className="bg-[#101010] p-[1rem] border border-black text-white flex items-center"
        >
          Shop Now <IoArrowForward className="ml-2" />
        </a>
      </div>
      <div className="w-2/4 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/images/hero.png"
          alt="Hero"
        />
      </div>
    </div>
  );
};

export default Hero;
