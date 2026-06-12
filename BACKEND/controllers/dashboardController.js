const Habit = require("../models/Habit");
const Video = require("../models/Video");
const User = require("../models/User");

const getDashboardStats = async (
  req,
  res
) => {
  try {
    const habits = await Habit.find({
      userId: req.user.id,
    });

    const videos =
      await Video.countDocuments();

    const user = await User.findById(
      req.user.id
    );

    const today = new Date()
      .toISOString()
      .split("T")[0];

    const completedToday =
      habits.filter((habit) =>
        habit.completedDates.includes(
          today
        )
      ).length;

    res.json({
      totalHabits: habits.length,
      completedToday,
      currentStreak:
        user.currentStreak,
      longestStreak:
        user.longestStreak,
      totalVideos: videos,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardStats,
};