import React from "react";

const FilterSidebar = ({
  name,
  setName,
  bloodGroup,
  setBloodGroup,
  address,
  setAddress,
  clearFilters
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5">

      <h2 className="text-xl font-semibold mb-4">Filter Students</h2>

      {/* Search by Name */}
      <div className="mb-4">
        <label className="block text-gray-600 mb-1">Name</label>
        <input
          type="text"
          placeholder="Search by name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Filter by Blood Group */}
      <div className="mb-4">
        <label className="block text-gray-600 mb-1">Blood Group</label>
        <select
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All</option>
          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>O+</option>
          <option>O-</option>
          <option>AB+</option>
          <option>AB-</option>
        </select>
      </div>

      {/* Filter by Address */}
      <div>
        <label className="block text-gray-600 mb-1">Address</label>
        <input
          type="text"
          placeholder="Search by address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
  onClick={clearFilters}
  className="relative mt-4 w-full h-12 overflow-hidden rounded-lg border border-gray-400 group transition duration-500"
>
  <span className="absolute inset-0 bg-red-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>

  <span className="relative z-10 flex items-center justify-center h-full text-gray-700 group-hover:text-white transition duration-500 font-medium">
    Clear Filters
  </span>
</button>

    </div>
  );
};

export default FilterSidebar;