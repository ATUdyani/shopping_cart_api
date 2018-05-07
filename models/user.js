var mongoose = require('mongoose');

//User Schema
var userSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true
	},
	contactNumber:{
		type: String,
	},
	vendor:{
		type: String,
		required: true
	}
});

var User = module.exports = mongoose.model('User',userSchema);

//Get User
module.exports.getUsers = function(callback, limit){
	User.find(callback).limit(limit);
}

//Get User 
module.exports.getUser = function(_id, callback){
	User.findById(_id, callback);
}

//Add User
module.exports.createUser = function(productItem, callback){
	User.create(productItem, callback);
}
