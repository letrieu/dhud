var mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
	name: String,
	slogan: String,
	phone: String,
	address: String,
	email: String,
});

var Contacts = mongoose.model('Contact', ContactSchema);
module.exports = Contacts;