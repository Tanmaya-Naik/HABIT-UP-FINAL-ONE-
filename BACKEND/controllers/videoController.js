const Video = require("../models/video");


const createVideo = async (req, res) => {
  try {
    const {
      title,
      description,
      youtubeUrl,
      category,
    } = req.body;

    const video = await Video.create({
      title,
      description,
      youtubeUrl,
      category,
      createdBy: req.user.id,
    });

    res.status(201).json(video);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getVideos = async (req, res) => {
  try {
    const videos = await Video.find()
      .populate("createdBy", "name");

    res.json(videos);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


const getVideosByCategory = async (
  req,
  res
) => {
  try {
    const videos = await Video.find({
      category: req.params.category,
    });

    res.json(videos);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


const deleteVideo = async (req, res) => {
  try {
    const video = await Video.findById(
      req.params.id
    );

    if (!video) {
      return res.status(404).json({
        message: "Video not found",
      });
    }

    await video.deleteOne();

    res.json({
      message: "Video deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


module.exports = {
  createVideo,
  getVideos,
  getVideosByCategory,
  deleteVideo,
};