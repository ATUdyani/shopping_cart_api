var MyCart  = require('../models/myCart.js');

var myCart = {

    getAll: function(req, res) {
      MyCart.getCarts(function(err,myCartRes){
        if (err){
          throw err ;
        }
        res.json(myCartRes);
      })
      },

    getOne: function(req, res) {
      var id = req.params.id;
      MyCart.getCart(id, function(err,myCartRes){
        if (err){
          throw err ;
        }
        res.json(myCartRes);
      })
    },
   
    create: function(req, res) {
      var newCart = new MyCart({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        userType: req.body.userType
      });
      MyCart.addCart(newCart, function(err,myCartRes){
        if (err){
          throw err ;
        }
        res.json(myCartRes);
      })
    }
}

module.exports = myCart;