import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const StudentDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const student = location.state;

  if (!student) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-500">
          Student not found
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">

      {/* Back Button */}
      <button
  onClick={() => navigate(-1)}
  className="relative mb-6 px-6 py-2 overflow-hidden rounded-lg border border-gray-400 group transition duration-500"
>
  <span className="absolute inset-0 bg-gray-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>

  <span className="relative z-10 group-hover:text-white transition duration-500 text-gray-700 font-medium">
    ← Back
  </span>
</button>

      {/* Details Card */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden grid md:grid-cols-2">

        {/* Image */}
        <div>
          <img
            src={
              student.image
                ? `https://unmadona-7clw.vercel.app${student.image}`
                : "https://via.placeholder.com/400x300?text=No+Image"
            }
            alt={student.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="p-6 space-y-3">

          <h2 className="text-3xl font-bold">{student.name}</h2>

          <p className="text-gray-600">
            <strong>University:</strong> {student.university}
          </p>

          <p className="text-gray-600">
            <strong>College:</strong> {student.college}
          </p>

          <p className="text-gray-600">
            <strong>School:</strong> {student.school}
          </p>

          <p className="text-gray-600">
            <strong>Blood Group:</strong> {student.bloodGroup}
          </p>

          <p className="text-gray-600">
            <strong>Mobile:</strong> {student.mobile}
          </p>

          <p className="text-gray-600">
            <strong>Present Address:</strong> {student.presentAddress}
          </p>

          <p className="text-gray-600">
            <strong>Permanent Address:</strong> {student.permanentAddress}
          </p>

        </div>
      </div>

    </div>
  );
};

export default StudentDetails;