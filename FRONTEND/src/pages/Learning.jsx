import { useEffect, useState } from "react";
import api from "../services/api";
import VideoCard from "../Components/VideoCard";
import DashboardNavbar from "../Components/DashboardNavbar";

function Learning() {
  const [videos, setVideos] =
    useState([]);

  const fetchVideos =
    async () => {
      try {
        const res =
          await api.get("/videos");

        setVideos(res.data);
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">

      <DashboardNavbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold">
            Learning Hub
          </h1>

          <p className="text-zinc-400 mt-3">
            Learn from mentor-curated videos and
            continue your personal growth journey.
          </p>
        </div>

        {videos.length === 0 ? (
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center">

            <h3 className="text-2xl font-semibold">
              No Videos Available
            </h3>

            <p className="text-zinc-400 mt-3">
              Videos uploaded by mentors will
              appear here.
            </p>

          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {videos.map((video) => (
              <VideoCard
  key={video._id}
  video={video}
  onDelete={fetchVideos}
/>
            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default Learning;