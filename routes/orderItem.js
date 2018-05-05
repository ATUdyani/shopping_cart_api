var OredrItem  = require('../models/orderItem.js');

var orderItems = {
 
    getAll: function(req, res) {
      OredrItem.getOredrItems(function(err,orderItem){
        if (err){
          throw err ;
        }
        res.json(alloredrItems);
      })
    },
   
    getOne: function(req, res) {
      var id = req.params.id;
      OrderItem.getOrderItem(id, function(err,orderItem){
        if (err){
          throw err ;
        }
        res.json(orderItem);
      })
    },
   
    create: function(req, res) {
      var orderItem = req.body;
      OrderItem.addOrderItem(orderItem, function(err,orderItem){
        if (err){
          throw err ;
        }
        res.json(orderItem);
      })
    }
}

module.exports = orderItems;