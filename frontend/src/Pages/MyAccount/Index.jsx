import React, { useState, useRef } from "react";
import { Camera } from "lucide-react";

const PersonalInfo = () => {
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen alexandria flex items-center justify-center px-4 py-12">
      <div className=" rounded-lg w-full max-w-xl p-8">
        {/* Header */}
        <div className="text-center mb-[5rem]">
          <h1 className="text-[36px] font-[400] text-black">Personal Info</h1>
          <p className="text-[16px] text-[#6E6E6E] mt-2">
            Your personal information is stored securely and used only to
            enhance your experience
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Profile Image Upload */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-[200px] h-[200px] rounded-[66px] overflow-hidden bg-gray-50 border border-[#C6C3C3]">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                )}
              </div>
              <button
                type="button"
                onClick={handleCameraClick}
                className="absolute bottom-0 right-0 bg-gray-900 rounded-full p-1.5 border-2 border-white hover:bg-gray-800 transition-colors"
                aria-label="Upload profile picture"
              >
                <Camera className="w-3.5 h-3.5 text-white" />
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                aria-label="Profile image upload"
              />
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-6 w-max">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-[16px] font-[400] text-black mb-1"
                >
                  First Name<span className="text-red-500">*</span>
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-[300px] px-3 py-2  h-[45px] text-[16px]  border border-[#C6C3C3] rounded-full placeholder-gray-400 focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-[16px] font-[400] text-black mb-1"
                >
                  Last Name<span className="text-red-500">*</span>
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-[300px] px-3 py-2  h-[45px] text-[16px]  border border-[#C6C3C3] rounded-full placeholder-gray-400 focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-[16px] font-[400] text-black mb-1"
              >
                Email<span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full h-[45px]  px-3 py-2 text-sm border border-[#C6C3C3] rounded-full placeholder-gray-400 focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
                required
              />
            </div>

            {/* Phone Field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-[16px] font-[400] text-black mb-1"
              >
                Phone<span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Enter Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full h-[45px]  px-3 py-2 text-sm border border-[#C6C3C3] rounded-full placeholder-gray-400 focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
                required
              />
            </div>

            {/* Gender Field */}
            <div>
              <label
                htmlFor="gender"
                className="block text-[16px] font-[400] text-black mb-1"
              >
                Gender<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full h-[45px]  px-3 py-2 text-sm border border-[#C6C3C3] rounded-full placeholder-gray-400 focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
                  required
                >
                  <option value="" disabled className="text-gray-400">
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="bg-black text-white px-5 py-2 rounded-full text-[16px] font-[400] hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Edit Info
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
