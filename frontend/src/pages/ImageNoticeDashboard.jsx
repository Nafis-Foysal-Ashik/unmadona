import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ImageNoticeDashboard = () => {

  const [images, setImages] = useState([]);
  const [noticeText, setNoticeText] = useState("");

  // Fetch Images
  const fetchImages = async () => {
    try {
      const res = await axios.get(
        "https://unmadona-7clw.vercel.app/api/homepage-images/all"
      );
      setImages(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch Notice
  const fetchNotice = async () => {
    try {
      const res = await axios.get(
        "https://unmadona-7clw.vercel.app/api/notice/get"
      );
      if (res.data) {
        setNoticeText(res.data.noticeText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
    fetchNotice();
  }, []);

  // Upload Images
  const handleUpload = async (e) => {
    try {
      const formData = new FormData();

      for (let i = 0; i < e.target.files.length; i++) {
        formData.append("images", e.target.files[i]);
      }

      await axios.post(
        "https://unmadona-7clw.vercel.app/api/homepage-images/upload",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      toast.success("Images Uploaded Successfully");
      fetchImages();

    } catch (error) {
      toast.error("Upload Failed");
    }
  };

  // Delete Image
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://unmadona-7clw.vercel.app/api/homepage-images/delete/${id}`
      );

      toast.success("Image Deleted");
      fetchImages();

    } catch (error) {
      toast.error("Delete Failed");
    }
  };

  // Save Notice
  const handleSaveNotice = async () => {
    try {
      await axios.post(
        "https://unmadona-7clw.vercel.app/api/notice/save",
        { noticeText }
      );

      toast.success("Notice Saved Successfully");

    } catch (error) {
        console.log(error);
      toast.error("Failed to Save Notice");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-8">
        Image & Notice Section
      </h1>

      {/* IMAGE SECTION */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-10">

        <h2 className="text-xl font-semibold mb-4">
          Slider Images
        </h2>

        <input
          type="file"
          multiple
          onChange={handleUpload}
          className="mb-6"
        />

        <div className="grid md:grid-cols-4 gap-4">
          {images.map((img) => (
            <div key={img._id} className="relative">

              <img
                src={`https://unmadona-7clw.vercel.app${img.imageUrl}`}
                alt="slider"
                className="w-full h-32 object-cover rounded"
              />

              <button
                onClick={() => handleDelete(img._id)}
                className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded"
              >
                Delete
              </button>

            </div>
          ))}
        </div>

      </div>

      {/* NOTICE SECTION */}
      <div className="bg-white shadow-md rounded-lg p-6">

        <h2 className="text-xl font-semibold mb-4">
          Notice Board
        </h2>

        <textarea
          value={noticeText}
          onChange={(e) => setNoticeText(e.target.value)}
          className="w-full border p-3 rounded mb-4"
          rows="4"
        />

        <button
  onClick={handleSaveNotice}
  className="relative overflow-hidden rounded-lg border border-blue-600 px-6 py-2 font-semibold text-blue-600 group transition duration-500"
>
  <span className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>

  <span className="relative z-10 group-hover:text-white transition duration-500">
    Save Notice
  </span>
</button>

      </div>

    </div>
  );
};

export default ImageNoticeDashboard;