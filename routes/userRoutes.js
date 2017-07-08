var express = require("express");
var passport = require("passport");
var router = express.Router();

router.get('/signup', function(req, res){
 console.log(req.body);
});

router.post('/login', passport.authenticate('login',
{
  sucessRedirect: "/"
}
));

router.post('/signup', passport.authenticate('signup', {
  sucessRedirect: "/",
}));

router.get("/signout", function(req, res){
  console.log("Logged out");
  req.logout();
  res.redirect("/");
});

var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
};

module.exports = router;
