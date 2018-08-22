var mongoose = require('mongoose');

//MyCart Schema
var myCartSchema = mongoose.Schema({
	refId:{
		type: String,
		required: true
	},
	status:{
		type: Boolean,
		required: true
	},
	orderItem:[{
		type: mongoose.Schema.Types.ObjectId,
		ref : 'OrderItem'
	}],
	user:{
		type: mongoose.Schema.Types.ObjectId,
		ref : 'User'
	},
	myBill:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'MyBill'
	}
});

var MyCart = module.exports = mongoose.model('MyCart',myCartSchema);

//Get Carts
module.exports.getCarts = function(callback, limit){
	MyCart.find(callback).limit(limit);
}

//Get Cart 
module.exports.getCart = function(_id, callback){
	MyCart.findById(_id, callback);
}

//Add Cart
module.exports.addCart = function(cart, callback){
	MyCart.create(cart, callback);
}

//Get Cart Id 
module.exports.getMyCartId = function(userId, callback){
	MyCart.findOne({
		user:userId, status: true
	}, callback);
}

//delete orderItem from cart
module.exports.deleteOrderItemFromCart = function(cartRefId, orderId, callback){
	MyCart.update({refId:cartRefId, status: true}, { $pull: { orderItem: orderId } }, callback);
}