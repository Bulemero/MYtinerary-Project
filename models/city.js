const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create city Schema and model
const citySchema = new Schema({
  city: {
    type: String,
    required: [true, "Name field is required"]
  },
  country: {
    type: String
  }

  //add in geo location to find cities
});

const City = mongoose.model("city", citySchema);

module.exports = City;
