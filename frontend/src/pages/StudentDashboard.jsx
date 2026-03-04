import React from "react";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {

  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-12 text-center">
        Student Dashboard
      </h1>

      {/* Square Buttons in Same Line */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* Create Student */}
        <button
          onClick={() => navigate("/admin/create-student")}
          className="relative h-48 overflow-hidden rounded-2xl border border-green-600 group transition duration-500 shadow-md"
        >
          <span className="absolute inset-0 bg-green-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>

          <span className="relative z-10 flex items-center justify-center h-full text-xl font-semibold text-green-600 group-hover:text-white transition duration-500 text-center px-4">
            Create New Student Profile
          </span>
        </button>

        {/* Edit Student */}
        <button
          onClick={() => navigate("/admin/edit-student")}
          className="relative h-48 overflow-hidden rounded-2xl border border-blue-600 group transition duration-500 shadow-md"
        >
          <span className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>

          <span className="relative z-10 flex items-center justify-center h-full text-xl font-semibold text-blue-600 group-hover:text-white transition duration-500 text-center px-4">
            Edit Existing Student Profile
          </span>
        </button>

      </div>

    </div>
  );
};

export default StudentDashboard;