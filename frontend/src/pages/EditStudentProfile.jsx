import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const EditStudentProfile = () => {

  const navigate = useNavigate();

  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 5;

  // Fetch students
  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/students/all");
      setStudents(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Search Filter
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  // Reset page on search change
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  // Pagination Logic
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

  // Delete
  const handleDelete = (id) => {
    toast(
      (t) => (
        <div className="flex flex-col">
          <span>Are you sure you want to delete?</span>
          <div className="mt-3 flex space-x-2">
            <button
              onClick={async () => {
                try {
                  await axios.delete(
                    `http://localhost:5000/api/students/delete/${id}`
                  );
                  toast.success("Student Deleted");
                  fetchStudents();
                } catch (error) {
                  toast.error("Delete Failed");
                }
                toast.dismiss(t.id);
              }}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Yes
            </button>

            <button
              onClick={() => toast.dismiss(t.id)}
              className="bg-gray-300 px-3 py-1 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      { duration: 5000 }
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-6">
        Edit Existing Student Profile
      </h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border p-3 rounded mb-6"
      />

      {/* Table */}
      <div className="bg-white shadow-md rounded-lg p-6">

        <div className="overflow-x-auto">
          <table className="w-full border">

            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 border">Image</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">University</th>
                <th className="p-2 border">Action</th>
              </tr>
            </thead>

            <tbody>
              {currentStudents.map((student) => (
                <tr key={student._id} className="text-center">

                  <td className="border p-2">
                    <img
                      src={`http://localhost:5000${student.image}`}
                      alt={student.name}
                      className="w-12 h-12 object-cover mx-auto rounded"
                    />
                  </td>

                  <td className="border p-2">{student.name}</td>
                  <td className="border p-2">{student.university}</td>

                  <td className="border p-2 space-x-2">

                    <button
                      onClick={() =>
                        navigate("/admin/edit-profile", { state: student })
                      }
                      className="relative overflow-hidden rounded px-4 py-1 border border-blue-600 text-blue-600 font-medium group transition duration-500"
                    >
                      <span className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>

                      <span className="relative z-10 group-hover:text-white transition duration-300">
                        Edit
                      </span>
                    </button>

                    <button
                      onClick={() => handleDelete(student._id)}
                      className="relative overflow-hidden rounded px-4 py-1 border border-red-500 text-red-500 font-medium group transition duration-500"
                    >
                      <span className="absolute inset-0 bg-red-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>

                      <span className="relative z-10 group-hover:text-white transition duration-300">
                        Delete
                      </span>
                    </button>

                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* Pagination */}
        {filteredStudents.length > studentsPerPage && (
          <div className="flex justify-center mt-6 space-x-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded ${currentPage === index + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                  }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}

      </div>

    </div>
  );
};

export default EditStudentProfile;