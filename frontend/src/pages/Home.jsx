import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {

  const [images, setImages] = useState([]);
  const [notice, setNotice] = useState("");
  const [events, setEvents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ================= FETCH DATA =================
  useEffect(() => {

    const fetchData = async () => {
      try {

        // Fetch Images
        const imageRes = await axios.get(
          "http://localhost:5000/api/homepage-images/all"
        );
        setImages(imageRes.data);

        // Fetch Notice
        const noticeRes = await axios.get(
          "http://localhost:5000/api/notice/get"
        );
        if (noticeRes.data) {
          setNotice(noticeRes.data.noticeText);
        }

        // Fetch Events
        const eventRes = await axios.get(
          "http://localhost:5000/api/events/all"
        );
        setEvents(eventRes.data);

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

  }, []);

  // ================= AUTO SLIDER =================
  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        (prev + 1) % images.length
      );
    }, 5000);

    return () => clearInterval(interval);

  }, [images]);

  // ================= FILTER EVENTS =================
  const upcomingEvents = events.filter(
    (event) => event.eventCompleted === false
  );

  const pastEvents = events.filter(
    (event) => event.eventCompleted === true
  );

  return (
    <div>

      {/* ================= SLIDER ================= */}
      <div className="w-full h-[815px] overflow-hidden relative">

        {images.length > 0 && (
          <div
            className="flex h-full transition-transform duration-1000 ease-in-out"
            style={{
              width: `${images.length * 100}%`,
              transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
            }}
          >
            {images.map((img) => (
              <img
                key={img._id}
                src={`http://localhost:5000${img.imageUrl}`}
                alt="slider"
                className="w-full h-full object-cover"
              />
            ))}
          </div>
        )}

      </div>

      {/* ================= NOTICE ================= */}
      {notice && (
        <div className="bg-gray-900 text-white py-3 overflow-hidden">
          <div className="whitespace-nowrap animate-marquee text-xl font-semibold">
            {notice}
          </div>
        </div>
      )}

      {/* ================= UPCOMING EVENTS ================= */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Upcoming Events
        </h2>

        {upcomingEvents.length === 0 ? (
          <p>No Upcoming Events</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event._id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={`http://localhost:5000${event.image}`}
                  alt={event.eventName}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    {event.eventName}
                  </h3>

                  <p className="text-gray-500">
                    Date : {new Date(event.eventDate).toLocaleDateString()}
                  </p>

                  <p className="text-gray-600 mt-2">
                    Place : {event.eventPlace}
                  </p>

                  <p className="text-blue-600 font-medium mt-2">
                    Entry Fee: {event.entryFee}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* ================= PAST EVENTS ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-16">

        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Past Events
        </h2>

        {pastEvents.length === 0 ? (
          <p>No Past Events</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <div
                key={event._id}
                className="bg-gray-100 shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={`http://localhost:5000${event.image}`}
                  alt={event.eventName}
                  className="w-full h-48 object-cover opacity-80"
                />

                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    {event.eventName}
                  </h3>

                  <p className="text-gray-500">
                    {new Date(event.eventDate).toLocaleDateString()}
                  </p>

                  <p className="text-gray-600 mt-2">
                    Place : {event.eventPlace}
                  </p>

                  {/* <p className="text-red-600 font-medium mt-2">
                    Completed
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  );
};

export default Home;