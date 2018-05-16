var ProductItem  = require('../models/productItem.js');

var productItem = {
 
    getAll: function(req, res) {
      ProductItem.getProductItems(function(err,productItemsRes){
        if (err){
          throw err ;
        }
        res.send("Hello!");
        res.json(productItemsRes);
      })
    },
   
    getOne: function(req, res) {
      var id = req.params.id;
      ProductItem.getProductItem(id, function(err,productItemsRes){
        if (err){
          throw err ;
        }
        res.json(productItemsRes);
      })
    },
   
    create: function(req, res) {
      var newProductItem = req.body;
      ProductItem.addProductItem(newProductItem, function(err,productItemsRes){
        if (err){
          throw err ;
        }
        res.json(productItemsRes);
      })
    }
}

module.exports = productItem;