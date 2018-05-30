var mongoose = require('mongoose');

//ProductItem Schema
var productItemSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	price:{
		type: String,
		required: true
	}
});

var ProductItem = module.exports = mongoose.model('ProductItem',productItemSchema);

//Get ProductItems
module.exports.getProductItems = function(callback, limit){
	ProductItem.find(callback).limit(limit);
}

//Get ProductItem 
module.exports.getProductItem = function(_id, callback){
	ProductItem.findById(_id, callback);
}

//Add ProductItem
module.exports.addProductItem = function(productItem, callback){
	ProductItem.create(productItem, callback);
}