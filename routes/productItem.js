var ProductItem  = require('../models/productItem.js');

var productItem = {
 
    getAll: function(req, res) {
      ProductItem.getProductItems(function(err,productItems){
        if (err){
          throw err ;
        }
        res.json(productItems);
      })
    },
   
    getOne: function(req, res) {
      var id = req.params.id;
      ProductItem.getProductItem(id, function(err,productItem){
        if (err){
          throw err ;
        }
        res.json(productItem);
      })
    },
   
    create: function(req, res) {
      var newProductItem = req.body;
      ProductItem.addProductItem(productItem, function(err,productItem){
        if (err){
          throw err ;
        }
        res.json(productItem);
      })
    }
}

module.exports = productItem;