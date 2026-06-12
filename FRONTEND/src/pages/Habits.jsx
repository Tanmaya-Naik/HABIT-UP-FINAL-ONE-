import { useEffect, useState } from "react";
import api from "../services/api";
import HabitCard from "../Components/HabitCard";
import DashboardNavbar from "../Components/DashboardNavbar";

function Habits() {
  const [habits, setHabits] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const fetchHabits = async () => {
    const res = await api.get("/habits");
    setHabits(res.data);
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  const createHabit = async (e) => {
    e.preventDefault();

    await api.post("/habits", {
      title,
      description,
    });

    setTitle("");
    setDescription("");

    fetchHabits();
  };

  const completeHabit = async (id) => {
    await api.put(`/habits/complete/${id}`);
    fetchHabits();
  };

  const deleteHabit = async (id) => {
    await api.delete(`/habits/${id}`);
    fetchHabits();
  };

  return (
    <div className="min-h-screen bg-black text-white">

      <DashboardNavbar />

      <div className="max-w-6xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold mb-2">
          Habit Tracker
        </h1>

        <p className="text-zinc-400 mb-10">
          Build consistency one day at a time.
        </p>

        <form
          onSubmit={createHabit}
          className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 mb-10"
        >

          <h2 className="text-2xl font-semibold mb-5">
            Create New Habit
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <input
              placeholder="Habit Title"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              className="bg-zinc-800 p-4 rounded-xl outline-none"
            />

            <input
              placeholder="Description"
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              className="bg-zinc-800 p-4 rounded-xl outline-none"
            />

          </div>

          <button
            type="submit"
            className="mt-5 bg-yellow-500 text-black px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400"
          >
            Create Habit
          </button>

        </form>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {habits.map((habit) => (
            <HabitCard
              key={habit._id}
              habit={habit}
              onComplete={completeHabit}
              onDelete={deleteHabit}
            />
          ))}

        </div>

      </div>

    </div>
  );
}

export default Habits;