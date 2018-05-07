var mongoose = require('mongoose');

//MyCart Schema
var myCartSchema = mongoose.Schema({
	refId:{
		type: String,
		required: true
	},
	orderItem:[{
		type: String
	}],
	user:{
		type: String,
		required: true
	},
	myBill:{
		type: String,
		required : true
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