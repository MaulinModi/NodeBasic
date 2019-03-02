var express = require('express');
var router = express.Router();
//var session = require('express-session');

var user = [{
  "username" : "admin",
  "password" : "admin"
}];

router.post('/',function(req,res){
  if(req.session.user){
      res.redirect('/users');
  }else{
      console.log("Inside Login Post Request");
      console.log("Req Body : ", req.body);
      user.filter(function(user){
          if(user.username === req.body.username && user.password === req.body.password){
              req.session.user = user;
              res.redirect('/users');
          }
      })
  }
  
});

router.get('/',function(req,res){
  //check if user session exits
  if(req.session.user){
      res.redirect('/users');
  }else
      res.render('index');
});

module.exports = router;