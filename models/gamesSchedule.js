const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// build out this model to contai the data I need
const gamesScheduleSchema = new Schema({
  _id: { type: String, required: false },
  homeTeam: { type: String, required: true },
  awayTeam: { type: String, required: true },
  startTime: { type: String, required: true }
}, 
{ _id: false }
);

const GamesSchedule = mongoose.model("GamesSchedule", gamesScheduleSchema);

module.exports = GamesSchedule;