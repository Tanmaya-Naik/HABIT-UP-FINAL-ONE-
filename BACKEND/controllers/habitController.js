const Habit = require("../models/Habit")

const createHabit = async (req, res) => {
  try {
    const { title, description } = req.body;

    const habit = await Habit.create({
      title,
      description,
      userId: req.user.id,
    });

    res.status(201).json(habit);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



const getHabits = async (req, res) => {
  try {
    const habits = await Habit.find({
      userId: req.user.id,
    });

    res.json(habits);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



const deleteHabit = async (req, res) => {
  try {
    const habit = await Habit.findById(
      req.params.id
    );

    if (!habit) {
      return res.status(404).json({
        message: "Habit not found",
      });
    }

    if (
      habit.userId.toString() !==
      req.user.id
    ) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    await habit.deleteOne();

    res.json({
      message: "Habit deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


const completeHabit = async (req, res) => {
  try {
    const habit = await Habit.findById(
      req.params.id
    );

    if (!habit) {
      return res.status(404).json({
        message: "Habit not found",
      });
    }

    const today = new Date()
      .toISOString()
      .split("T")[0];

    if (
      !habit.completedDates.includes(
        today
      )
    ) {
      habit.completedDates.push(today);

      await habit.save();
    }

    res.json(habit);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


module.exports = {
  createHabit,
  getHabits,
  deleteHabit,
  completeHabit,
};