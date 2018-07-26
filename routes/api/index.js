const router = require("express").Router();
const gamesRoutes = require("./games");
const gamesScheduleRoutes = require("./gamesSchedule");
const game1 = require("./3c235c16-e9fc-485c-be30-e0b3576e7909")

// NYT routes
router.use("/games", gamesRoutes);
router.use("/gamesSchedule", gamesScheduleRoutes);
router.get("/gameInfo/:id", function(req, res){
    return res.json(game1)
})
module.exports = router;
