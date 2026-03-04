import React from "react";
import { useNavigate } from "react-router-dom";
import { FaImage, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const HomepageDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Homepage Dashboard
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Image & Notice Card */}
        <div
          onClick={() => navigate("/admin/homepage/image-notice")}
          className="relative overflow-hidden rounded-2xl border border-gray-300 p-10 cursor-pointer group transition duration-500"
        >
          {/* Sliding Background */}
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>

          {/* Content */}
          <div className="relative z-10 transition duration-500 group-hover:text-white">
            <FaImage className="text-3xl mb-4 text-blue-600 group-hover:text-white transition duration-500" />

            <h2 className="text-3xl font-semibold mb-2 tracking-wide">
              IMAGE & NOTICE
            </h2>

            

            <span className="flex items-center font-medium group-hover:translate-x-2 transition duration-300">
              ENTER <FaArrowRight className="ml-2" />
            </span>
          </div>
        </div>

        {/* Event Section Card */}
        <div
          onClick={() => navigate("/admin/homepage/events")}
          className="relative overflow-hidden rounded-2xl border border-gray-300 p-10 cursor-pointer group transition duration-500"
        >
          {/* Sliding Background */}
          <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>

          {/* Content */}
          <div className="relative z-10 transition duration-500 group-hover:text-white">
            <FaCalendarAlt className="text-3xl mb-4 text-green-600 group-hover:text-white transition duration-500" />

            <h2 className="text-3xl font-semibold mb-2 tracking-wide">
              EVENT SECTION
            </h2>

            

            <span className="flex items-center font-medium group-hover:translate-x-2 transition duration-300">
              ENTER <FaArrowRight className="ml-2" />
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomepageDashboard;