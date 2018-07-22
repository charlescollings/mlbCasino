const router = require("express").Router();
const gamesScheduleController = require("../../controllers/gamesScheduleController");

// Matches with "/api/gamesScheduleCOntroller"
router.route("/")
  .get(gamesScheduleController.findAll)

module.exports = router;