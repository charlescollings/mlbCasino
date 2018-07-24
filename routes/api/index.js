const router = require("express").Router();
const gamesRoutes = require("./games");
const gamesScheduleRoutes = require("./gamesSchedule");
// const sgsfgsgsg = require("./sgsfgsgsg")

// NYT routes
router.use("/games", gamesRoutes);
router.use("/gamesSchedule", gamesScheduleRoutes);
// router.use ("/sgsfgsgsg", sgsfgsgsg)
module.exports = router;
