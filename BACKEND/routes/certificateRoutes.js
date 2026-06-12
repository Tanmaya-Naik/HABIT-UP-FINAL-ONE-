const express =
  require("express");

const router =
  express.Router();

const protect =
  require(
    "../middleware/authMiddleware"
  );

const admin =
  require(
    "../middleware/adminMiddleware"
  );

const {
  createRequest,
  getRequests,
  updateRequestStatus,
} = require(
  "../controllers/certificateController"
);

router.post(
  "/",
  protect,
  createRequest
);

router.get(
  "/",
  protect,
  admin,
  getRequests
);

router.put(
  "/:id",
  protect,
  admin,
  updateRequestStatus
);

module.exports = router;