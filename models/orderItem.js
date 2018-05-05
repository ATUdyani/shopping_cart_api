var mongoose = require('mongoose');


//OrderItem Schema
var orderItemSchema = mongoose.Schema({
	myCart:{
		type: String,
		required: true
	},
	productItem:{
		type: String,
		required: true
	},
	quantity:{
		type: String,
		required: true
	}
});

var OrderItem = module.exports = mongoose.model('OrderItem',orderItemSchema);

//Get OrderItems
module.exports.getOrderItems = function(callback, limit){
	OrderItem.find(callback).limit(limit);
}

//Get OrderItem 
module.exports.getOrderItem = function(_id, callback){
	OrderItem.findById(_id, callback);
}

//Add OrderItem
module.exports.addOrderItem = function(orderItem, callback){
	OrderItem.create(orderItem, callback);
}