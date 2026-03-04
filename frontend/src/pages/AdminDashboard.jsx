import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    window.location.href = "/";
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-12 text-center">
        Admin Dashboard
      </h1>

      {/* 3 Square Buttons in One Line */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* Homepage Dashboard */}
        <button
          onClick={() => navigate("/admin/homepage")}
          className="relative h-48 overflow-hidden rounded-2xl border border-blue-600 group transition duration-500 shadow-md"
        >
          <span className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>

          <span className="relative z-10 flex items-center justify-center h-full text-xl font-semibold text-blue-600 group-hover:text-white transition duration-500">
            Homepage Dashboard
          </span>
        </button>

        {/* Student Corner Dashboard */}
        <button
          onClick={() => navigate("/admin/students")}
          className="relative h-48 overflow-hidden rounded-2xl border border-green-600 group transition duration-500 shadow-md"
        >
          <span className="absolute inset-0 bg-green-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>

          <span className="relative z-10 flex items-center justify-center h-full text-xl font-semibold text-green-600 group-hover:text-white transition duration-500">
            Student Corner Dashboard
          </span>
        </button>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="relative h-48 overflow-hidden rounded-2xl border border-red-500 group transition duration-500 shadow-md"
        >
          <span className="absolute inset-0 bg-red-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>

          <span className="relative z-10 flex items-center justify-center h-full text-xl font-semibold text-red-500 group-hover:text-white transition duration-500">
            Logout
          </span>
        </button>

      </div>

    </div>
  );
};

export default AdminDashboard;