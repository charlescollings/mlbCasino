const router = require("express").Router();
const gamesRoutes = require("./games");
const gamesScheduleRoutes = require("./gamesSchedule");

// NYT routes
router.use("/games", gamesRoutes);
router.use("/gamesSchedule", gamesScheduleRoutes);

module.exports = router;
