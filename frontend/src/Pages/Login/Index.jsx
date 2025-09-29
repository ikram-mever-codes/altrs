import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-medium text-gray-900">Welcome back!</h1>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="xyz@gmail.com"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full h-12 px-5 text-sm border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password*"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full h-12 px-5 text-sm border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
              required
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between px-2">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a
              href="#"
              className="text-sm text-gray-900 font-medium hover:underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Sign In Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full h-12 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Join Us Link */}
        <div className="text-center mt-6">
          <span className="text-sm text-gray-500">Not a Member? </span>
          <a
            href="#"
            className="text-sm text-gray-900 font-medium hover:underline"
          >
            Join Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
