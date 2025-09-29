import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full alexandria  bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info Section */}
          <div>
            <h3 className="text-[20px]  alexandria font-[500]  text-black mb-4 tracking-wide">
              COMPANY INFO
            </h3>
            <ul className="space-y-3 text-[16px] font-[400]">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-700 hover:text-black transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-700 hover:text-black transition-colors"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-700 hover:text-black transition-colors"
                >
                  Altrs App
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-[20px]  alexandria font-[500]  text-black mb-4 tracking-wide">
              SUPPORT
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-700 hover:text-black transition-colors"
                >
                  Help
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-700 hover:text-black transition-colors"
                >
                  Customer Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-700 hover:text-black transition-colors"
                >
                  Returns & Exchange
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-700 hover:text-black transition-colors"
                >
                  Shipping
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-700 hover:text-black transition-colors"
                >
                  Order Tracker
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-700 hover:text-black transition-colors"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-[20px]  alexandria font-[500]  text-black mb-4 tracking-wide">
              FOLLOW US
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[16px] font-[500] text-black mb-4 md:mb-0">
            © 2025 ALTRS, Inc. All rights reserved
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-xs text-gray-600 hover:text-black transition-colors"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="text-xs text-gray-600 hover:text-black transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
