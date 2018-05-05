var MyCart  = require('../models/myCart.js');

var myCart = {

    getAll: function(req, res) {
      MyCart.getCarts(function(err,myCart){
        if (err){
          throw err ;
        }
        res.json(allCart);
      })
      },

    getOne: function(req, res) {
      var id = req.params.id;
      MyCart.getCart(id, function(err,myCart){
        if (err){
          throw err ;
        }
        res.json(myCart);
      })
    },
   
    create: function(req, res) {
      var myCart = req.body;
      MyCart.addCart(myCart, function(err,myCart){
        if (err){
          throw err ;
        }
        res.json(myCart);
      })
    }
}

module.exports = myCart;