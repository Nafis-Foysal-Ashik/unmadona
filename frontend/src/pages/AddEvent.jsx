import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
// import { FaSave } from "react-icons/fa";

const AddEvent = () => {

  const [eventData, setEventData] = useState({
    eventName: "",
    eventDate: "",
    eventPlace: "",
    eventDetails: "",
    entryFee: "Free",
    eventCompleted: "false",
    image: null
  });

  const handleChange = (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {

      const formData = new FormData();

      for (let key in eventData) {
        formData.append(key, eventData[key]);
      }

      await axios.post(
        "https://unmadona-api.vercel.app/api/events/add",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      toast.success("Event Added Successfully");

      // Reset form
      setEventData({
        eventName: "",
        eventDate: "",
        eventPlace: "",
        eventDetails: "",
        entryFee: "Free",
        eventCompleted: "false",
        image: null
      });

    } catch (error) {
      toast.error("Failed to add event");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-8">
        Add New Event
      </h1>

      <div className="bg-white shadow-md rounded-lg p-6">

        <div className="grid md:grid-cols-2 gap-4">

          {/* Image Upload */}
          <input
            type="file"
            onChange={(e) =>
              setEventData({ ...eventData, image: e.target.files[0] })
            }
            className="border p-2 rounded"
          />

          {/* Event Name */}
          <input
            type="text"
            name="eventName"
            value={eventData.eventName}
            onChange={handleChange}
            placeholder="Event Name"
            className="border p-2 rounded"
          />

          {/* Date */}
          <input
            type="date"
            name="eventDate"
            value={eventData.eventDate}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          {/* Place */}
          <input
            type="text"
            name="eventPlace"
            value={eventData.eventPlace}
            onChange={handleChange}
            placeholder="Event Place"
            className="border p-2 rounded"
          />

          {/* Entry Fee */}
          <input
            type="text"
            name="entryFee"
            value={eventData.entryFee}
            onChange={handleChange}
            placeholder="Entry Fee"
            className="border p-2 rounded"
          />

          {/* Completed Status */}
          <select
            name="eventCompleted"
            value={eventData.eventCompleted}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="false">Upcoming Event</option>
            <option value="true">Completed Event</option>
          </select>

        </div>

        {/* Event Details */}
        <textarea
          name="eventDetails"
          value={eventData.eventDetails}
          onChange={handleChange}
          placeholder="Event Details"
          className="w-full border p-3 rounded mt-4"
        />

       <button
  onClick={handleSubmit}
  className="relative h-15 w-20 overflow-hidden rounded-xl border border-green-600 mt-6 group transition duration-500 shadow-md"
>
  <span className="absolute inset-0 bg-green-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>

  <span className="relative z-10 flex items-center justify-center h-full text-green-600 group-hover:text-white transition duration-500 font-semibold">
    {/* <FaSave className="mr-2 text-lg" /> */}
    Save Event
  </span>
</button>

      </div>

    </div>
  );
};

export default AddEvent;