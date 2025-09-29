import React from "react";
import heroImage from "../../assets/home/home-1.png";

const Hero = () => {
  return (
    <section className="relative w-full h-[630px]">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Hero Image"
        className="h-[630px] w-full object-cover object-center"
      />

      {/* Drop Shadow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/20"></div>

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center gap-3 flex-col alexandria text-white justify-center">
        <h1 className="text-white text-[40px]   font-[500] text-center px-4  ">
          Style That Speaks Without Saying
          <br /> a Word
        </h1>
        <p className="font-[400] text-[16px]">
          Intricate designs and elevated fits—built for those who wear their
          stories.
        </p>
      </div>
    </section>
  );
};

export default Hero;
