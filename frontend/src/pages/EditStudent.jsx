import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditStudent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const student = location.state;

  const [preview, setPreview] = useState(student?.image || "");

  const [formData, setFormData] = useState({
    name: student?.name || "",
    university: student?.university || "",
    college: student?.college || "",
    school: student?.school || "",
    bloodGroup: student?.bloodGroup || "",
    mobile: student?.mobile || "",
    presentAddress: student?.presentAddress || "",
    permanentAddress: student?.permanentAddress || "",
  });

  const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    setPreview(URL.createObjectURL(file));
  }
};

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Student Updated Successfully");

    navigate("/admin");
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">

      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
      >
        ← Back
      </button>

      <h2 className="text-3xl font-bold mb-6">
        Edit Student
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 grid md:grid-cols-2 gap-4"
      >

        <div className="col-span-2">
  <input
    type="file"
    onChange={handleImageChange}
    className="border p-2 rounded w-full"
  />

  {preview && (
    <img
      src={preview}
      alt="preview"
      className="mt-3 w-40 h-40 object-cover rounded"
    />
  )}
</div>

        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="text"
          name="university"
          placeholder="University"
          value={formData.university}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="text"
          name="college"
          placeholder="College"
          value={formData.college}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="text"
          name="school"
          placeholder="School"
          value={formData.school}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <select
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">Blood Group</option>
          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>O+</option>
          <option>O-</option>
          <option>AB+</option>
          <option>AB-</option>
        </select>

        <input
          type="text"
          name="mobile"
          placeholder="Mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="text"
          name="presentAddress"
          placeholder="Present Address"
          value={formData.presentAddress}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="text"
          name="permanentAddress"
          placeholder="Permanent Address"
          value={formData.permanentAddress}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded col-span-2"
        >
          Update Student
        </button>

      </form>
    </div>
  );
};

export default EditStudent;