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
      var newCart = req.body;
      MyCart.addCart(newCart, function(err,myCartRes){
        if (err){
          throw err ;
        }
        res.json(myCartRes);
      })
    }
}

module.exports = myCart;