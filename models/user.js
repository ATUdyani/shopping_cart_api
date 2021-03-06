var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

//User Schema
var UserSchema = mongoose.Schema({
	name:{
        type: String,
        unique: true,
		required: true
	},
	password:{
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
	userType:{
		type: String,
		required: true
	}
});

UserSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                console.log('all hash done');
                next();
            });
        });
    } else {
        return next();
    }
});
 
UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        //give it to callback function of cb(in server.js)
        cb(null, isMatch);
    });
};

var User = module.exports = mongoose.model('User',UserSchema);

//Get User
module.exports.getUsers = function(callback, limit){
	User.find(callback).limit(limit);
}

//Get User 
module.exports.getUser = function(_id, callback){
	User.findById(_id, callback);
}

//Add User
module.exports.createUser = function(user, callback){
	user.save(callback);
}
