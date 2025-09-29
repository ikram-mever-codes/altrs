import React from "react";
import ourStory from "../../assets/home/our-story.png";

const OurStory = () => {
  return (
    <section className="relative my-[7rem] w-full h-max">
      <img
        src={ourStory}
        alt="Hero Image"
        className="h-[490px] w-full object-cover object-center"
      />

      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/20"></div> */}

      <div className="absolute inset-0 flex items-center gap-[1rem] flex-col alexandria text-white justify-center  bg-opacity-80">
        <h1 className="text-white text-[40px]   font-[500] text-center px-4  ">
          Our Story, Your Style
        </h1>
        <p className="font-[400]  w-[780px] text-center px-4  text-[16px]">
          From a sketchpad to the streets — ALTRS is where creativity meets
          <br />
          individuality. We're rewriting the rules of fashion. ALTRS puts the
          <br />
          power of design in your hands — because no one should wear <br />{" "}
          someone else's idea of style.
        </p>

        <p className="font-[400] w-[900px] text-center text-[16px]">
          ALTRS was born from a belief that style should be personal. We empower
          everyone to turn their <br /> ideas into streetwear that speaks louder
          than trends.
        </p>
      </div>
    </section>
  );
};

export default OurStory;
