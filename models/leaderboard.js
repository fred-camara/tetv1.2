var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var leaderSchema = new Schema({
  name: {
    type: String
  },
  score: {
    type: Number
  }
});


var leaderBoard = mongoose.model("LeaderBoard", leaderSchema);

module.exports = leaderBoard;
