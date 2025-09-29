import React from "react";
import {
  ShoppingCart,
  Upload,
  Palette,
  Heart,
  ArrowRight,
  Check,
} from "lucide-react";
import how1 from "../../assets/home/how-1.png";
import how2 from "../../assets/home/how-2.png";
import how3 from "../../assets/home/how-3.png";
import how4 from "../../assets/home/how-4.png";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Select the Product",
      description:
        "Choose your canvas — from classic tees to cozy hoodies and sweatshirts.",
      icon: <ShoppingCart className="w-6 h-6" />,
      image: how1,
    },
    {
      number: 2,
      title: "Upload Your Design",
      description:
        "Add your artwork, photo, or logo in seconds — no design skills needed.",
      icon: <Upload className="w-6 h-6" />,
      image: how2,
    },
    {
      number: 3,
      title: "Customize & Preview",
      description:
        "Scale, rotate, and position your design. Try it on front & back in real-time.",
      icon: <Palette className="w-6 h-6" />,
      image: how3,
    },
    {
      number: 4,
      title: "Wear It with Pride",
      description:
        "Own the streets in gear that's 100% you — made to stand out.",
      icon: <Heart className="w-6 h-6" />,
      image: how4,
    },
  ];

  return (
    <section className="py-16 alexandria lg:py-24 px-[100px]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-left mb-8">
          <h2 className="text-[32px] font-[500] text-black ">How It Works</h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-[#C6C3C3] rounded-2xl shadow-lg overflow-hidden h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                {/* Image/Preview Section */}
                <div className="h-[300px]  flex justify-center items-center relative">
                  <img
                    src={step.image}
                    className="w-max       object-cover object-center h-[300px]"
                    alt={step.title}
                  />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-[18px] font-[500] alexandria text-black">
                      Step {step.number}: {step.title}
                    </h3>
                  </div>
                  <p className="text-[#6E6E6E] text-[16px] font-[400] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector Arrow (not on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/3 -right-4 z-10">
                  <div className="bg-white rounded-full p-2 shadow-md">
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
