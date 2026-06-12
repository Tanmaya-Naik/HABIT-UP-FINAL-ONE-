import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import DashboardNavbar from "../Components/DashboardNavbar";

function Dashboard() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [stats, setStats] =
    useState(null);

  useEffect(() => {
    const fetchStats =
      async () => {
        try {
          const res =
            await api.get(
              "/dashboard"
            );

          setStats(res.data);
        } catch (error) {
          console.log(error);
        }
      };

    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <DashboardNavbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Welcome Section */}

        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            Welcome Back,
            <span className="text-yellow-500">
              {" "}
              {user?.name}
            </span>
          </h1>

          <p className="text-zinc-400 mt-3">
            Keep building habits and
            growing every day.
          </p>
        </div>

        {/* Stats Cards */}

        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
              <h3 className="text-zinc-400">
                Total Habits
              </h3>

              <h2 className="text-4xl font-bold mt-2 text-yellow-500">
                {stats.totalHabits}
              </h2>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
              <h3 className="text-zinc-400">
                Completed Today
              </h3>

              <h2 className="text-4xl font-bold mt-2 text-green-500">
                {stats.completedToday}
              </h2>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
              <h3 className="text-zinc-400">
                Learning Videos
              </h3>

              <h2 className="text-4xl font-bold mt-2 text-blue-500">
                {stats.totalVideos}
              </h2>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
              <h3 className="text-zinc-400">
                Account Type
              </h3>

              <h2 className="text-2xl font-bold mt-3 text-yellow-500 capitalize">
                {user?.role}
              </h2>
            </div>

          </div>
        )}

        {/* Quick Actions */}

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">
            Quick Actions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <Link to="/habits">
              <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-yellow-500 transition">
                <h3 className="text-xl font-semibold">
                  📋 Manage Habits
                </h3>

                <p className="text-zinc-400 mt-2">
                  Create, complete and
                  manage your habits.
                </p>
              </div>
            </Link>

            <Link to="/learning">
              <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-yellow-500 transition">
                <h3 className="text-xl font-semibold">
                  🎥 Learning Hub
                </h3>

                <p className="text-zinc-400 mt-2">
                  Watch mentor videos
                  and improve daily.
                </p>
              </div>
            </Link>

            <Link to="/profile">
              <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-yellow-500 transition">
                <h3 className="text-xl font-semibold">
                  👤 Profile
                </h3>

                <p className="text-zinc-400 mt-2">
                  View your account
                  information.
                </p>
              </div>
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;