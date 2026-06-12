function HabitCard({
  habit,
  onComplete,
  onDelete,
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-yellow-500 transition">

      <div className="flex justify-between items-center mb-4">

        <h3 className="text-xl font-bold">
          {habit.title}
        </h3>

        {habit.completed && (
          <span className="text-green-400">
            ✓
          </span>
        )}

      </div>

      <p className="text-zinc-400 mb-6">
        {habit.description}
      </p>

      <div className="flex gap-3">

        <button
          onClick={() =>
            onComplete(habit._id)
          }
          className="flex-1 bg-yellow-500 text-black py-2 rounded-xl font-semibold hover:bg-yellow-400"
        >
          Complete
        </button>

        <button
          onClick={() =>
            onDelete(habit._id)
          }
          className="flex-1 bg-red-600 py-2 rounded-xl font-semibold hover:bg-red-500"
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default HabitCard;