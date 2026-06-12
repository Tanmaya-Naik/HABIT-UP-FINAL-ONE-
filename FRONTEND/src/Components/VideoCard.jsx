import api from "../services/api";

function VideoCard({
  video,
  onDelete,
}) {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const deleteVideo =
    async () => {
      const confirmDelete =
        window.confirm(
          "Delete this video?"
        );

      if (!confirmDelete)
        return;

      try {
        await api.delete(
          `/videos/${video._id}`
        );

        alert(
          "Video Deleted Successfully"
        );

        if (onDelete) {
          onDelete();
        }
      } catch (error) {
        alert(
          error.response?.data
            ?.message ||
            "Delete Failed"
        );
      }
    };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-500 transition-all duration-300 hover:-translate-y-1">

      <span className="inline-block bg-yellow-500 text-black text-xs font-semibold px-3 py-1 rounded-full mb-4">
        {video.category}
      </span>

      <h3 className="text-xl font-bold mb-3">
        {video.title}
      </h3>

      <p className="text-zinc-400 mb-6">
        {video.description}
      </p>

      <div className="flex flex-col gap-3">

        <button
          onClick={() =>
            window.open(
              video.youtubeUrl,
              "_blank"
            )
          }
          className="w-full bg-yellow-500 text-black py-3 rounded-xl font-semibold hover:bg-yellow-400"
        >
          ▶ Watch Video
        </button>

        {user?.role ===
          "admin" && (
          <button
            onClick={
              deleteVideo
            }
            className="w-full bg-red-600 py-3 rounded-xl font-semibold hover:bg-red-500"
          >
            🗑 Delete Video
          </button>
        )}

      </div>

    </div>
  );
}

export default VideoCard;