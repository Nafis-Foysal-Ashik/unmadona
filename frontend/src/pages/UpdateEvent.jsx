import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateEvent = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const event = location.state;

  const [formData, setFormData] = useState({
    eventName: event.eventName,
    eventDate: event.eventDate.split("T")[0],
    eventPlace: event.eventPlace,
    eventDetails: event.eventDetails,
    entryFee: event.entryFee,
    eventCompleted: event.eventCompleted.toString(),
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
        `http://localhost:5000/api/events/update/${event._id}`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      toast.success("Event Updated Successfully");

      navigate("/admin/homepage/events/edit");

    } catch (error) {
      toast.error("Update Failed");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-8">
        Update Event
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

          <input name="eventName" value={formData.eventName} onChange={handleChange} className="border p-2 rounded" />
          <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} className="border p-2 rounded" />
          <input name="eventPlace" value={formData.eventPlace} onChange={handleChange} className="border p-2 rounded" />
          <input name="entryFee" value={formData.entryFee} onChange={handleChange} className="border p-2 rounded" />

          <select name="eventCompleted" value={formData.eventCompleted} onChange={handleChange} className="border p-2 rounded">
            <option value="false">Upcoming</option>
            <option value="true">Completed</option>
          </select>

        </div>

        <textarea
          name="eventDetails"
          value={formData.eventDetails}
          onChange={handleChange}
          className="w-full border p-3 rounded mt-4"
        />

        <button
  onClick={handleSubmit}
  className="relative mt-4 px-6 py-2 overflow-hidden rounded-lg border border-green-600 group transition duration-500"
>
  <span className="absolute inset-0 bg-green-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>

  <span className="relative z-10 text-green-600 font-semibold group-hover:text-white transition duration-500">
    Update Event
  </span>
</button>

      </div>

    </div>
  );
};

export default UpdateEvent;