//code for the model
var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var playerSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String,
  },
  password: {
    type: String
  },
  // score: {
  //   type: Number,
  // }
});


var Player = mongoose.model("Player", playerSchema);

module.exports = Player;
