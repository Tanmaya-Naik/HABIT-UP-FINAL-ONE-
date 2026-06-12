import { useState } from "react";
import api from "../services/api";
import DashboardNavbar from "../Components/DashboardNavbar";

function AdminVideos() {
  const [formData, setFormData] =
    useState({
      title: "",
      description: "",
      youtubeUrl: "",
      category: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    try {
      await api.post(
        "/videos",
        formData
      );

      alert(
        "Video Uploaded Successfully"
      );

      setFormData({
        title: "",
        description: "",
        youtubeUrl: "",
        category: "",
      });
    } catch (error) {
      alert(
        error.response?.data
          ?.message ||
          "Upload Failed"
      );
    }
  };

  return (
 <div className="min-h-screen bg-black text-white">

  <DashboardNavbar />

  <div className="max-w-3xl mx-auto px-6 py-12">

    <h1 className="text-4xl font-bold mb-3">
      Upload Learning Video
    </h1>

    <p className="text-zinc-400 mb-10">
      Add mentor videos for students.
    </p>

    <form
      onSubmit={handleSubmit}
      className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 space-y-5"
    >

      <input
        name="title"
        placeholder="Video Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full bg-zinc-800 p-4 rounded-xl outline-none"
      />

      <textarea
        name="description"
        placeholder="Video Description"
        value={formData.description}
        onChange={handleChange}
        rows="4"
        className="w-full bg-zinc-800 p-4 rounded-xl outline-none"
      />

      <input
        name="youtubeUrl"
        placeholder="YouTube URL"
        value={formData.youtubeUrl}
        onChange={handleChange}
        className="w-full bg-zinc-800 p-4 rounded-xl outline-none"
      />

      <input
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        className="w-full bg-zinc-800 p-4 rounded-xl outline-none"
      />

      <button
        type="submit"
        className="w-full bg-yellow-500 text-black py-4 rounded-xl font-bold hover:bg-yellow-400"
      >
        Upload Video
      </button>

    </form>

  </div>

</div>
  );
}

export default AdminVideos;