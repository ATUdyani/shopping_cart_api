var OrderItem  = require('../models/orderItem.js');

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
      var newOrderItem = req.body;
      OrderItem.addOrderItem(newOrderItem, function(err,orderItemRes){
        if (err){
          throw err ;
        }
        res.json(orderItemRes);
      })
    }
}

module.exports = orderItems;