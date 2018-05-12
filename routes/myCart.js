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
        refId: req.body.refId,
        user: req.body.user,
        status: true
      });
      MyCart.addCart(newCart, function(err,myCartRes){
        if (err){
          throw err ;
        }
        res.json(myCartRes);
      })
    },

    getMyCartId: function(req, res) {
      var userId = req.body.userId;
      MyCart.getMyCartId(userId, function(err,myCartIdRes){
        if (err){
          throw err ;
        }
        if (!myCartIdRes){
          res.json({success:false, message:'No cart'});
        }
        else{
          res.json({success:true, id: myCartIdRes._id});
        }
               
      })
    }

}

module.exports = myCart;