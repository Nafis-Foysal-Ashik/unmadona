import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const EditStudentPage = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const student = location.state;

  const [formData, setFormData] = useState({
    name: student.name,
    university: student.university,
    college: student.college,
    school: student.school,
    bloodGroup: student.bloodGroup,
    mobile: student.mobile,
    presentAddress: student.presentAddress,
    permanentAddress: student.permanentAddress,
    image: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {

      const data = new FormData();

      for (let key in formData) {
        data.append(key, formData[key]);
      }

      await axios.put(
        `https://unmadona-api.vercel.app/api/students/update/${student._id}`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      toast.success("Student Updated Successfully");

      navigate("/admin/edit-student");

    } catch (error) {
      toast.error("Update Failed");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-8">
        Edit Student Profile
      </h1>

      <div className="bg-white shadow-md rounded-lg p-6">

        <div className="grid md:grid-cols-2 gap-4">

          <input
            type="file"
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.files[0] })
            }
            className="border p-2 rounded"
          />

          <input name="name" value={formData.name} onChange={handleChange} className="border p-2 rounded" />
          <input name="university" value={formData.university} onChange={handleChange} className="border p-2 rounded" />
          <input name="college" value={formData.college} onChange={handleChange} className="border p-2 rounded" />
          <input name="school" value={formData.school} onChange={handleChange} className="border p-2 rounded" />

          <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} className="border p-2 rounded">
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>O+</option>
            <option>O-</option>
            <option>AB+</option>
            <option>AB-</option>
          </select>

          <input name="mobile" value={formData.mobile} onChange={handleChange} className="border p-2 rounded" />
          <input name="presentAddress" value={formData.presentAddress} onChange={handleChange} className="border p-2 rounded" />
          <input name="permanentAddress" value={formData.permanentAddress} onChange={handleChange} className="border p-2 rounded" />

        </div>

        <button
  onClick={handleSubmit}
  className="relative overflow-hidden rounded px-4 py-2 mt-4 border border-green-600 text-green-600 font-medium group transition duration-500"
>
  <span className="absolute inset-0 bg-green-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>

  <span className="relative z-10 group-hover:text-white transition duration-300">
    Update Student
  </span>
</button>

      </div>

    </div>
  );
};

export default EditStudentPage;