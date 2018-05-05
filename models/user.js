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

