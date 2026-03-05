import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const EditEvent = () => {

  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  const fetchEvents = async () => {
    try {
      const res = await axios.get("https://unmadona-7clw.vercel.app/api/events/all");
      setEvents(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

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
                    `https://unmadona-7clw.vercel.app/api/events/delete/${id}`
                  );
                  toast.success("Event Deleted");
                  fetchEvents();
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

      <h1 className="text-3xl font-bold mb-8">
        Edit Existing Events
      </h1>

      <div className="bg-white shadow-md rounded-lg p-6">

        <div className="overflow-x-auto">
          <table className="w-full border">

            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 border">Image</th>
                <th className="p-2 border">Event Name</th>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Action</th>
              </tr>
            </thead>

            <tbody>
              {events.map((event) => (
                <tr key={event._id} className="text-center">

                  <td className="border p-2">
                    <img
                      src={`https://unmadona-7clw.vercel.app${event.image}`}
                      alt={event.eventName}
                      className="w-12 h-12 object-cover mx-auto rounded"
                    />
                  </td>

                  <td className="border p-2">{event.eventName}</td>
                  <td className="border p-2">
                    {new Date(event.eventDate).toLocaleDateString()}
                  </td>

                  <td className="border p-2">
                    {event.eventCompleted ? "Completed" : "Upcoming"}
                  </td>

                  <td className="border p-2 space-x-2">

                    <button
  onClick={() =>
    navigate("/admin/homepage/events/update", {
      state: event
    })
  }
  className="relative overflow-hidden rounded px-4 py-1 border border-blue-600 text-blue-600 font-medium group transition duration-500"
>
  <span className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>

  <span className="relative z-10 group-hover:text-white transition duration-300">
    Edit
  </span>
</button>

                    <button
  onClick={() => handleDelete(event._id)}
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

      </div>

    </div>
  );
};

export default EditEvent;