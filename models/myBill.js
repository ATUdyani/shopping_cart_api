var mongoose = require('mongoose');

//MyBill Schema
var myBillSchema = mongoose.Schema({
	myCart:{
		type: mongoose.Schema.Types.ObjectId,
		ref : 'MyCart'
	},
	total:{
		type: String,
	}
});

var MyBill = module.exports = mongoose.model('MyBill',myBillSchema);

//Get Bill
module.exports.getBill = function(_id, callback){
	MyBill.findById(_id, callback);
}

//Add Bill
module.exports.addBill = function(myBill, callback){
	MyBill.create(myBill, callback);
}