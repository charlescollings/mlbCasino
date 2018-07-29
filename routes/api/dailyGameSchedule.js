const router = require("express").Router();
const dailyGameScheduleController = require("../../controllers/dailyGameScheduleController");

// Matches with "/api/dailyGameSchedule"
router.route("/")
  .get(dailyGameScheduleController.getDailyGames)

module.exports = router;