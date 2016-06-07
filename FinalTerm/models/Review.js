var mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({
	id: String
	name: String,
	time: String,
	rating: String,
	content: String,
	productid: String
});

var Reviews = mongoose.model('ProductType', ReviewSchema);
module.exports = Reviews;
