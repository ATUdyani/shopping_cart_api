var OrderItem  = require('../models/orderItem.js');
var MyCart  = require('../models/myCart.js');
var User  = require('../models/user.js');

var orderItems = {
 
    getAll: function(req, res) {
      OrderItem.getOrderItems(function(err,orderItemRes){
        if (err){
          throw err ;
        }
        res.json(orderItemRes);
      })
    },
   
    getOne: function(req, res) {
      var id = req.params.id;
      OrderItem.getOrderItem(id, function(err,orderItemRes){
        if (err){
          throw err ;
        }
        res.json(orderItemRes);
      })
    },
   
    create: function(req, res) {
      var newOrderItem = new OrderItem({
        myCart:req.body.myCartId,
        productItem:req.body.productId,
        quantity:req.body.quantity
      });
      
      OrderItem.addOrderItem(newOrderItem, function(err,orderItemRes){
        if (err){
          throw err ;
        }
        if(!orderItemRes){
          res.json({success:false, message:'no order item found'});
        }
        else{
          res.json({success:true, message:'Item add to cart'});
        }
      })
    }
}

module.exports = orderItems;