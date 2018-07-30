const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// build out this model to contain the data I need
const chosenGamePutoutSchema = new Schema({
  _id: { type: String, required: false },
  putoutPlayerJerseyNumber: { type: Number, required: false },
}, 
{ _id: false }
);

const ChosenGamePutoutData = mongoose.model("ChosenGamePutoutData", chosenGamePutoutSchema);

module.exports = ChosenGamePutoutData;