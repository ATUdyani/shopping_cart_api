var mongoose = require('mongoose');

//MyCart Schema
var myCartSchema = mongoose.Schema({
	refId:{
		type: String,
		required: true
	},
	orderItem:{
		type: String,
		required: true
	},
	user:{
		type: String,
		required: true
	},
	myBill:{
		type: String,
	}
});

var MyCart = module.exports = mongoose.model('MyCart',myCartSchema);

//Get Carts
module.exports.getCarts = function(callback, limit){
	MyBill.find(callback).limit(limit);
}

//Get Cart 
module.exports.getCart = function(_id, callback){
	getCart.findById(_id, callback);
}

//Add Cart
module.exports.addCart = function(cart, callback){
	MyBill.create(cart, callback);
}