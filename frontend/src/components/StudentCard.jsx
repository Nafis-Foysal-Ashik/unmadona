import React from "react";
import { useNavigate } from "react-router-dom";

const StudentCard = ({ student }) => {
    const navigate = useNavigate();
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300">

      {/* Student Image */}
      <img
        src={`https://unmadona-api.vercel.app${student.image}`}
        alt={student.name}
        className="w-full h-48 object-cover"
      />

      {/* Student Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{student.name}</h3>
        <p className="text-gray-600">{student.university}</p>
        <p className="text-sm text-red-500 font-medium">
          Blood Group: {student.bloodGroup}
        </p>

        {/* View Button */}
        <button
  onClick={() => navigate("/student-details", { state: student })}
  className="relative mt-3 w-full h-12 overflow-hidden rounded-lg border border-blue-600 group transition duration-500"
>
  <span className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>

  <span className="relative z-10 flex items-center justify-center h-full text-blue-600 group-hover:text-white transition duration-500 font-medium">
    View Details
  </span>
</button>
      </div>
    </div>
  );
};

export default StudentCard;