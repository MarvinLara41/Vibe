const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
//this file is for the creation of the user on the database.
const UserSchema = new Schema({
	email: {
		type: String,
		default: ''
	},
	password: {
		type: String,
		default: ''
	},
	userId: {
		type: String,
		default: ''
	},
	isDeleted: {
		type: Boolean,
		default: false
	}
});

// hasing password returning a hashed password
UserSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//
UserSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password);
};

const user = mongoose.model('user', UserSchema);

module.exports = user;
