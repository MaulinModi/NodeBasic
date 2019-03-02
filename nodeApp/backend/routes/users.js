var express = require('express');
var router = express.Router();


var users = [
  {"UserID" : "1", "FirstName" : "Maulin",  "LastName" : "Bodiwala"},
  {"UserID" : "2", "FirstName" : "Dhruvil", "LastName" : "Parikh"},
  {"UserID" : "3", "FirstName" : "Darshil", "LastName" : "Kapadia"}
] 

 router.get('/',function(req,res){
   if(!req.session.user){
       res.redirect('/');
   }else{
       console.log("Session data : " , req.session);
       res.render('users',{
           users : users
       });
   }
 });


router.get('/create',function(req,res){
  console.log('Get create');
  console.log('Get create2');
  if(!req.session.user){
      res.redirect('/');
  }else{
    console.log('Create Page is being rendered');
      res.render('create');
  }  
});

router.post('/create',function(req,res){
  console.log('Post create');
  if(!req.session.user){
      res.redirect('/');
  }else{
      var newUser = {UserID: req.body.UserID, FirstName: req.body.FirstName, LastName : req.body.LastName};
      users.push(newUser);
      res.redirect('/users');
      console.log("User Added Successfully!!!!");
  }  
});

router.post('/delete',function(req,res){
  console.log("Inside Delete Request");
  var index = users.map(function(user){
      return user.UserID;
   }).indexOf(req.body.UserID); 
   
   if(index === -1){
      console.log("Book Not Found");
   } else {
      books.splice(index, 1);
      console.log("Book : " + req.body.UserID + " was removed successfully");
      res.redirect('/users');
   }
})

router.get('/delete',function(req,res){
  console.log("Session Data : ", req.session.user);
  if(!req.session.user){
      res.redirect('/');
  }else
      res.render('delete');
});


 


/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); */

module.exports = router;
