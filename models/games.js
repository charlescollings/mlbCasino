const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// build out this model to contai the data I need
const gamesSchema = new Schema({
  _id: { type: String, required: false },
  putoutPlayerJerseyNumber: { type: Number, required: false },
}, 
{ _id: false }
);

const Games = mongoose.model("Games", gamesSchema);

module.exports = Games;
