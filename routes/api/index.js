const router = require("express").Router();
const gamesRoutes = require("./games");
// const nytRoutes = require("./nyt");

// NYT routes
router.use("/games", gamesRoutes);

module.exports = router;
