import React from "react";
import { Search, Heart, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-[100vw] border-b border-gray-200 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand Icon */}
          <div className="flex items-center">
            <Link to={"/"}>
              <div className="flex h-8 w-8 items-center justify-center">
                <img
                  src="/logo.svg"
                  alt="Altrs"
                  className="w-[100px] h-[50px] "
                />
              </div>
            </Link>
          </div>

          {/* Navigation Menu - Centered */}
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center alexandria space-x-8">
            <Link
              to="/mens"
              className="text-[16px] font-medium text-gray-900 hover:text-gray-700 transition-colors"
            >
              Men
            </Link>
            <Link
              to="/women "
              className="text-[16px] font-medium text-gray-900 hover:text-gray-700 transition-colors"
            >
              Women
            </Link>
            <Link
              href="#"
              className="text-[16px] font-medium text-gray-900 hover:text-gray-700 transition-colors"
            >
              Drop's
            </Link>
          </nav>

          {/* Right side - Search and Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <div className="relative flex items-center">
                <Search className="absolute left-3 h-4 w-4 text-[#6E6E6E]" />
                <input
                  type="text"
                  placeholder="Search"
                  className="h-9 w-48 rounded-full bg-[#C6C3C3] pl-10 pr-4 text-sm text-[#6E6E6E] placeholder-gray-500 outline-none focus:bg-gray-200 transition-colors"
                />
              </div>
            </div>

            {/* Icon Buttons */}
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Heart className="h-5 w-5 text-black" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingCart className="h-5 w-5 text-black" />
            </button>
            <Link
              to={"/my-account"}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <User className="h-5 w-5 text-black" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
