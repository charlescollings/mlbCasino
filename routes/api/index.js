const router = require("express").Router();
const gamesRoutes = require("./games");
const dailyGameScheduleRoutes = require("./dailyGameSchedule");
const getGameInfoRoutes = require("./getGameInfo");

// router.use("/games", gamesRoutes);
router.use("/dailyGameSchedule", dailyGameScheduleRoutes);
router.use("/getGameInfo", getGameInfoRoutes);
// router.get("/gameInfo/:id", function(req, res){
//     return res.json(game1)
// })
module.exports = router;
