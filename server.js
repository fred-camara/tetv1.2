//Adding all dependencies
var express = require('express');
//var server = require('http').Server(app);
var mongoose = require('mongoose');
mongoose.Promise = Promise;
var sessions = require("client-sessions");
var logger = require('morgan');
var bodyParser = require("body-parser");
var passport = require("passport");
var bCrypt = require("bcrypt");
var LocalStrategy = require('passport-local').Strategy;
var Player = require("./models/user.js");
var LeaderBoard = require("./models/leaderboard.js");

var app = express();
//launch app + middleware
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));

var userRouter = require("./routes/userRoutes.js");
var leaderBoardRouter = require("./routes/leaderBoardRoutes.js")
app.use(userRouter);
app.use(leaderBoardRouter);


//passport config
  passport.use('login', new LocalStrategy({
    passReqToCallback: true
    },
    function(req, username, password, done) {
      //check in mongo if a user name with that username exists
      Player.findOne({'name': req.body.name},
      function(err, user){
        //IN case of any error, return using the done method
        if (err)
        return done(err);
          //Username does not exist, log error & redirect back
        if (!user){
          console.log("User Not found with username" + req.body.name3);
          return done(null, false);
        }
        if (!isValidPassword(user, password)) {
          console.log("Invalid Password");
          return done(null, false);
        }
      //User and password both match, return user from
      //done method which will be treated like success
      return done(null, user);
    }
    );
  }));

  var isValidPassword = function(user, password) {
         return bCrypt.compareSync(password, user.password);
  }

  var strategy = new LocalStrategy({
    usernameField : 'name',
    passwordField : 'password',
    emailField : 'email',
    passReqToCallback: true
    },
    function(req) {
      console.log(req.body);
      findOrCreateUser = function() {
        Player.findOne({'name': req.body.name}, function(err, user){
          //In case of any error return
          if(err){
            console.log("Error in SignUp: " + err);
          }
          //already exists
          if (user) {
            console.log('User already exists');
          } else {
            //if there is no user with that email
            //create the user
            var newUser = new Player();
            newUser.name = req.body.name;
            newUser.password = createHash(req.body.password);
            newUser.email = req.body.email;
        //    newUser.email = req.param('email');

            newUser.save(function(err){
              if (err) {
                throw err;
              }
              console.log(newUser);
            });
          }
        });
      };
        process.nextTick(findOrCreateUser);
  });

  passport.use('signup', strategy);

  //password hash for encryption
  var createHash = function(password){
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
  }

passport.serializeUser(function(user, done){
  done(null, user._id);
});

passport.deserializeUser(function(id, done){
  Player.findById(id, function(err, user){
    done(err, user);
  });
});

app.use('/', express.static('public'));

app.listen(7001, function(){
  console.log("App listening on PORT: " + 7001);
});

mongoConnection = "mongodb://localhost:27017/tetris";


if (process.env.MONGODB_URI) {
  console.log(process.env.MONGODB_URI)
  mongoose.connect(process.env.MONGODB_URI)
} else {
mongoose.connect(mongoConnection);
};
