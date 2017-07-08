var axios = require('axios');

var helpers = {

  saveScore: function(player) {
      var newScore = {
        name: player.name,
        score: player.score
      };
      return axios.post("/api/leaderboard", newScore);
    },
    getScores: function() {
      return axios.get("/api/leaderboard");
    }
}

module.exports = helpers;
