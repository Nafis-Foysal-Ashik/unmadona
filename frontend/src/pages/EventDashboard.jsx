import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaEdit } from "react-icons/fa";

const EventDashboard = () => {

  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-8 text-center">
        Event Section
      </h1>

      <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">

        <div className="grid md:grid-cols-2 gap-8">

  {/* Add Event */}
  <button
    onClick={() => navigate("/admin/homepage/events/add")}
    className="relative h-40 overflow-hidden rounded-2xl border border-green-600 group transition duration-500 shadow-md"
  >
    <span className="absolute inset-0 bg-green-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>

    <span className="relative z-10 flex flex-col items-center justify-center h-full text-green-600 group-hover:text-white transition duration-500">
      <FaPlus className="text-3xl mb-3" />
      <span className="text-lg font-semibold">Add Event</span>
    </span>
  </button>

  {/* Edit Event */}
  <button
    onClick={() => navigate("/admin/homepage/events/edit")}
    className="relative h-40 overflow-hidden rounded-2xl border border-blue-600 group transition duration-500 shadow-md"
  >
    <span className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>

    <span className="relative z-10 flex flex-col items-center justify-center h-full text-blue-600 group-hover:text-white transition duration-500">
      <FaEdit className="text-3xl mb-3" />
      <span className="text-lg font-semibold">Edit Existing Event</span>
    </span>
  </button>

</div>
      </div>

    </div>
  );
};

export default EventDashboard;