import React, { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
// Import your product images here
import product1 from "../../assets/home/special-1.png";
import product2 from "../../assets/home/special-2.png";
import product3 from "../../assets/home/special-3.png";
import product4 from "../../assets/home/special-4.png";

const SpecialDrops = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      title: "Oversized Printed T-Shirt",
      image: product1,
      price: "₹ 899",
      link: "/product/oversized-printed-tshirt",
    },
    {
      id: 2,
      title: "Oversized T-Shirt",
      image: product2,
      price: "₹ 799",
      link: "/product/oversized-tshirt",
    },
    {
      id: 3,
      title: "Urban Hoodie",
      image: product3,
      price: "₹ 1499",
      link: "/product/urban-hoodie",
    },
    {
      id: 4,
      title: "Warm Walnut Sweatshirt",
      image: product4,
      price: "₹ 1299",
      link: "/product/warm-walnut-sweatshirt",
    },
    {
      id: 5,
      title: "Graphic Oversized Tee",
      image: product3,
      price: "₹ 999",
      link: "/product/graphic-oversized-tee",
    },
    {
      id: 6,
      title: "Premium Hoodie",
      image: product2,
      price: "₹ 1799",
      link: "/product/premium-hoodie",
    },
  ];

  const itemsPerView = 4;
  const maxIndex = Math.max(0, products.length - itemsPerView);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="py-16 alexandria lg:py-24 w-[100vw] px-[100px] bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-[40px] font-[500] text-black">
            Altr's Special Drops
          </h2>
          <button className="text-[16px] font-[500] text-black hover:underline transition-all">
            See All
          </button>
        </div>

        {/* Products Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`absolute left-[-60px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:shadow-xl hover:scale-110"
            }`}
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className={`absolute right-[-60px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all ${
              currentIndex === maxIndex
                ? "opacity-50 cursor-not-allowed"
                : "hover:shadow-xl hover:scale-110"
            }`}
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>

          {/* Products Grid with Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="min-w-[calc(25%-18px)] group cursor-pointer"
                >
                  {/* Product Card */}
                  <div className="bg-[#C6C3C3] rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    {/* Full Card Container with Image Background */}
                    <div className="relative h-[420px]">
                      {/* Full Card Image Background */}
                      <img
                        src={product.image}
                        alt={product.title}
                        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      />

                      {/* Quick View Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button className="bg-white text-black px-6 py-2 rounded-full font-[500] text-[14px] transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          Quick View
                        </button>
                      </div>

                      {/* Product Button - Positioned at Bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <button className="relative z-10 w-full bg-black text-white py-3 px-4 rounded-full font-[500] text-[14px] flex items-center justify-between group-hover:bg-gray-800 transition-colors duration-300">
                          <span className="text-left truncate">
                            {product.title}
                          </span>
                          <ArrowRight className="w-4 h-4 flex-shrink-0 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-black"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-16 border-b-2 border-black"></div>
      </div>
    </section>
  );
};

export default SpecialDrops;
