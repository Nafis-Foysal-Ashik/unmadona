import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const CreateStudentProfile = () => {

  const [studentData, setStudentData] = useState({
    name: "",
    university: "",
    college: "",
    school: "",
    bloodGroup: "",
    mobile: "",
    presentAddress: "",
    permanentAddress: "",
    image: null
  });

  const handleChange = (e) => {
    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      for (let key in studentData) {
        formData.append(key, studentData[key]);
      }

      await axios.post(
        "https://unmadona-api.vercel.app/api/students/add-student",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      toast.success("Student Profile Created");

      setStudentData({
        name: "",
        university: "",
        college: "",
        school: "",
        bloodGroup: "",
        mobile: "",
        presentAddress: "",
        permanentAddress: "",
        image: null
      });

    } catch (error) {
      toast.error("Failed to create student");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-8">
        Create New Student Profile
      </h1>

      <div className="bg-white shadow-md rounded-lg p-6">

        <div className="grid md:grid-cols-2 gap-4">

          <input type="file"
            onChange={(e) =>
              setStudentData({ ...studentData, image: e.target.files[0] })
            }
            className="border p-2 rounded"
          />

          <input name="name" value={studentData.name} onChange={handleChange} placeholder="Name" className="border p-2 rounded" />
          <input name="university" value={studentData.university} onChange={handleChange} placeholder="University" className="border p-2 rounded" />
          <input name="college" value={studentData.college} onChange={handleChange} placeholder="College" className="border p-2 rounded" />
          <input name="school" value={studentData.school} onChange={handleChange} placeholder="School" className="border p-2 rounded" />

          <select name="bloodGroup" value={studentData.bloodGroup} onChange={handleChange} className="border p-2 rounded">
            <option value="">Select Blood Group</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>O+</option>
            <option>O-</option>
            <option>AB+</option>
            <option>AB-</option>
          </select>

          <input name="mobile" value={studentData.mobile} onChange={handleChange} placeholder="Mobile" className="border p-2 rounded" />
          <input name="presentAddress" value={studentData.presentAddress} onChange={handleChange} placeholder="Present Address" className="border p-2 rounded" />
          <input name="permanentAddress" value={studentData.permanentAddress} onChange={handleChange} placeholder="Permanent Address" className="border p-2 rounded" />

        </div>

        <button
  onClick={handleSubmit}
  className="relative overflow-hidden rounded-lg border border-green-600 px-6 py-3 mt-4 font-semibold text-green-600 group transition duration-500"
>
  <span className="absolute inset-0 bg-green-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>

  <span className="relative z-10 group-hover:text-white transition duration-500">
    Create Profile
  </span>
</button>

      </div>

    </div>
  );
};

export default CreateStudentProfile;