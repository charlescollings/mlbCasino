const router = require("express").Router();
const getGameInfoController = require("../../controllers/getGameInfoController");

// Matches with "/api/getGameInfo/id"
router.route("/:id")
  .get(getGameInfoController.getGameInfo)

module.exports = router;