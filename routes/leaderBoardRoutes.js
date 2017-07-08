var express = require("express");
var leaderBoard = require("../models/leaderboard.js");
var router = express.Router();

router.get("/api/leaderboard", function(req, res){

  leaderBoard.find({}, function(err, doc){
    if (err) {
      console.log(err);
    }
    else {
      res.json(doc);
    }
  });
});

//post route to create all the articles
router.post("/api/leaderboard", function(req, res){

  var leaderboard = new leaderBoard({
    name: req.body.name,
    score: req.body.score
  });

  console.log(leaderboard);
  leaderboard.save(function(err){
    if (err) {
      return res.send(err);
    }
    res.sendStatus(204);
  });
});

module.exports = router;
