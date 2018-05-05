var User  = require('../models/user.js');

var user = {
 
    getAll: function(req, res) {
      User.getUsers(function(err,user){
        if (err){
          throw err ;
        }
        res.json(allCart);
      })
    },
   
    getOne: function(req, res) {
      var id = req.params.id;
      User.getUser(id, function(err,user){
        if (err){
          throw err ;
        }
        res.json(user);
      })
    },
   
    create: function(req, res) {
      var user = req.body;
      User.addUser(user, function(err,user){
        if (err){
          throw err ;
        }
        res.json(user);
      })
    }
}

module.exports = user;