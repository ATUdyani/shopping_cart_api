var mongoose = require('mongoose');

//MyBill Schema
var myBillSchema = mongoose.Schema({
	orderItem:{
		type: String,
		required: true
	},
	discount:{
		type: String,
		required: true
	},
	total:{
		type: String,
		required: true
	}
});

var MyBill = module.exports = mongoose.model('MyBill',myBillSchema);

//Get Bill
module.exports.getBill = function(callback, limit){
	MyBill.find(callback).limit(limit);
}

//Add Bill
module.exports.addBill = function(myBill, callback){
	MyBill.create(myBill, callback);
}