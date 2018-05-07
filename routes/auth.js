var User = require('../model/user');
var jwt = require('jwt-simple');
var auth = {
 
    login: function(req, res) {
   
      var username = req.body.username || '';
      var password = req.body.password || '';
   
      if (username == '' || password == '') {
        res.status(401);
        res.json({
          "status": 401,
          "message": "Invalid credentials"
        });
        return;
      }
   
      // Fire a query to your DB and check if the credentials are valid
      var dbUserObj = auth.validate(username, password);
     
      if (!dbUserObj) { // If authentication fails, we send a 401 back
        res.status(401);
        res.json({
          "status": 401,
          "message": "Invalid credentials"
        });
        return;
      }
   
      if (dbUserObj) {
        res.json({success:true,token:genToken(dbUserObj)});
      }
   
    },
   
    validate: function(username, password) {
        User.findOne({
            name: req.body.name
          }, function(err, user) {
            if (err) throw err;
         
            if (!user) {
              res.send({success: false, msg: 'Authentication failed. User not found.'});
            } else {
              // check if password matches
              user.comparePassword(req.body.password, function (err, isMatch) {
                if (isMatch && !err) {
                  // if user is found and password is right create a token
                  var tokenDetail = genToken(user.username);
                  // return the information including token as JSON
                  res.json({success: true, token: 'JWT ' + tokenDetail});
                } else {
                  res.send({success: false, msg: 'Authentication failed. Wrong password.'});
                }
              });
            }
            });
    },
    validateUser: function(username) {
      User.findOne({
        name: req.body.name
      }, function(err, user) {
        if(err) throw err;

        if(!user) {
          return null;
        }
        return user;
      });
    }
  }
   
  // private method
  function genToken(username) {
    var expires = expiresIn(7); // 7 days
    var token = jwt.encode({
      exp: expires,
      username: username
    }, require('../config/secret')());
   
    return {
      token: token,
      expires: expires,
      user: user
    };
  }
   
  function expiresIn(numDays) {
    var dateObj = new Date();
    return dateObj.setDate(dateObj.getDate() + numDays);
  }
   
  module.exports = auth;