var mongoose = require('mongoose');

var ProductTypeSchema = new mongoose.Schema({
	id: String,
	name: String,
	image: String
});

var ProductTypes = mongoose.model('ProductType', ProductTypeSchema);
module.exports = ProductTypes;