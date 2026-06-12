const express = require("express");

const router = express.Router();

const protect = require(
  "../middleware/authMiddleware"
);

const adminOnly = require(
  "../middleware/adminMiddleware"
);

const {
  createVideo,
  getVideos,
  getVideosByCategory,
  deleteVideo,
} = require(
  "../controllers/videoController"
);

// Admin only
router.post(
  "/",
  protect,
  adminOnly,
  createVideo
);

// Students + Admin
router.get(
  "/",
  protect,
  getVideos
);

// Students + Admin
router.get(
  "/category/:category",
  protect,
  getVideosByCategory
);

// Admin only
router.delete(
  "/:id",
  protect,
  adminOnly,
  deleteVideo
);

module.exports = router;