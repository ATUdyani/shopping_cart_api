var MyCart = require('../models/myCart');

module.exports={
    updateCartOrderItem: function(cartId,orderItemId,res){
        MyCart.update({_id:cartId},{$push:{orderItem:orderItemId}},function(err){
            if(err) {
                res.json({success: false, message:"error"});
            } else {
                res.json({success: true, message:"successfully added to cart"});
            }
        });
    }
}