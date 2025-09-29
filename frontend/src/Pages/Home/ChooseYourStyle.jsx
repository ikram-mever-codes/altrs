import React from "react";
import { ArrowRight } from "lucide-react";
// Import your images here
import choose1 from "../../assets/home/choose-1.jpg";
import choose2 from "../../assets/home/choose-2.png";
import choose3 from "../../assets/home/choose-3.png";

const ChooseYourStyle = () => {
  const categories = [
    {
      id: 1,
      title: "For Men",
      image: choose1,
      link: "/shop/men",
    },
    {
      id: 2,
      title: "For Women",
      image: choose2,
      link: "/shop/women",
    },
    {
      id: 3,
      title: "Shop Altrs Special",
      image: choose3,
      link: "/shop/altrs-special",
    },
  ];

  return (
    <section className="py-16 alexandria lg:py-24 w-full     px-[100px] bg-[#C6C3C3]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[40px] font-[500] text-black mb-3">
            Choose Your Style. Own Your Identity
          </h2>
          <p className="text-[16px] font-[500] text-black max-w-3xl mx-auto">
            From timeless men's classics to bold women's cuts – and exclusive
            drops
          </p>
          <p className="text-[16px] font-[500] text-black max-w-3xl mx-auto">
            from ALTRS that defy every category.
          </p>

          {/* Decorative dotted line */}
          <div className="relative mt-8">
            <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2">
              <div className="border-t-2 border-dotted border-[#9CA3AF] opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-16">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="relative group cursor-pointer transform transition-all duration-500 hover:scale-105"
            >
              {/* Card with dotted border effect */}
              <div className="relative bg-[#EFEDEC] rounded-2xl overflow-hidden  p-1">
                <div className="rounded-xl overflow-hidden relative h-[460px]">
                  {/* Full Card Image Background */}
                  <img
                    src={category.image}
                    alt={category.title}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Category Button - Positioned at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <button className="relative z-10 w-full bg-black text-white py-3 px-6 rounded-full font-[500] text-[16px] flex items-center justify-between group-hover:bg-gray-800 transition-colors duration-300">
                      <span>{category.title}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseYourStyle;
