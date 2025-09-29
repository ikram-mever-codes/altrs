import React from "react";
import newsletter from "../../assets/home/newsletter.png";
import { Button } from "@/components/ui/button";

const NewsLetter = () => {
  return (
    <section className="relative w-full h-max">
      <img
        src={newsletter}
        alt="Hero Image"
        className="h-[490px] w-full object-cover object-center"
      />

      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/20"></div> */}

      <div className="absolute inset-0 flex items-center gap-[1rem] flex-col alexandria text-white justify-center  bg-opacity-80">
        <h1 className="text-white text-[40px]   font-[500] text-center px-4  ">
          Get Drops First{" "}
        </h1>
        <p className="font-[400]  w-[780px] text-center px-4  text-[16px]">
          Be the first to know about exclusive drops, limited collabs,
          <br /> and early access deals.{" "}
        </p>

        <div className="flex justify-center  mt-[1rem] items-center gap-[20px]">
          <input
            type="email"
            className="w-[480px] h-[45px] rounded-full bg-white border-none outline-none text-[#737373] placeholder:text-[#737373] text-[16px] font-400 p-[16px]"
            placeholder="Email Address"
          />
          <button className="w-[185px] h-[45px] rounded-full bg-black font-[700] text-[16px] uppercase text-white">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
