const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const ejs = require('ejs');
const engine = require('ejs-mate');
const app = express();

app.engine('ejs', engine);
app.set('view engine', 'ejs');



mongoose.connect("mongodb://root:Dr4Jy6eQxhA93qM@ds255253.mlab.com:55253/udemy_work" , function(err){
  if(err){
    console.log(err);
  }else{
    console.log("CONNECTED TO DATABASE");
  }
});


var UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});

var User = mongoose.model('User', UserSchema);

UserSchema.methods.addLastName = function (lastName) {
  this.name = this.name + " "  + lastName;
  return this.name;
}


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));


app.use(function(req,res,next) {
  next();
});

app.get('/', function(req,res,next) {
  res.json("sample");
});

app.post('/create-user', function(req,res,next) {
  const user = new User();
  user.name = req.body.name;
  user.age = req.body.age;

  user.save(function (err) {
    if (err) {
      console.log(err);
    } else
      res.json(user);
  });
});

app.get('/find-user', function (req, res,next) {
  User.findOne({'name': "ishan"}, function (err, userFound) {
    console.log(userFound);
    //userFound.addLastName('V');
    res.send(userFound);
  });
});

app.get('/find-user-by-id/:id', function (req, res,next) {
  User.findById({_id: req.params.id}, function (err, userFound) {
    if (userFound) {
      //userFound.addLastName('V');
      res.json(userFound);
    } else {
      res.json("User not found");
    }
  });
});


app.get("/test" , function (req,res,next){
  res.render('home');
})


app.listen(9000, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("APP is running 9000");
  }
});

