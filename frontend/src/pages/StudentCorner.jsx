import React, { useState, useEffect } from "react";
import FilterSidebar from "../components/FilterSidebar";
import StudentCard from "../components/StudentCard";
import axios from "axios";

const StudentCorner = () => {

  // Filter States
  const [name, setName] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [address, setAddress] = useState("");
  const [students, setStudents] = useState([]);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 9;

  // Clear Filters
  const clearFilters = () => {
    setName("");
    setBloodGroup("");
    setAddress("");
  };

  // Static student data (later from MongoDB)
  useEffect(() => {
  const fetchStudents = async () => {
    try {
      const res = await axios.get("https://unmadona-7clw.vercel.app/api/students/all");
      setStudents(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchStudents();
}, []);
  // Filter Logic
  const filteredStudents = students.filter((student) => {
  return (
    student.name?.toLowerCase().includes(name.toLowerCase()) &&
    (bloodGroup === "" || student.bloodGroup === bloodGroup) &&
    (
      student.presentAddress?.toLowerCase().includes(address.toLowerCase()) ||
      student.permanentAddress?.toLowerCase().includes(address.toLowerCase())
    )
  );
});

  // Reset page on filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [name, bloodGroup, address]);

  // Pagination Logic
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);

  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Student Corner
      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        {/* Sidebar */}
        <div className="md:col-span-1">
          <FilterSidebar
            name={name}
            setName={setName}
            bloodGroup={bloodGroup}
            setBloodGroup={setBloodGroup}
            address={address}
            setAddress={setAddress}
            clearFilters={clearFilters}
          />
        </div>

        {/* Student Grid */}
        <div className="md:col-span-3">

          {filteredStudents.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-2xl font-semibold text-gray-500">
                No Student Found
              </h2>
              <p className="text-gray-400 mt-2">
                Try changing your filters
              </p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentStudents.map((student, index) => (
                  <StudentCard key={index} student={student} />
                ))}
              </div>

              {/* Pagination */}
              {filteredStudents.length > studentsPerPage && (
                <div className="flex justify-center mt-8 space-x-2">
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`px-4 py-2 rounded ${
                        currentPage === index + 1
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              )}
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default StudentCorner;