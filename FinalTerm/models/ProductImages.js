var mongoose = require('mongoose');
var Product = require('./Products');

var ProductImageSchema = new mongoose.Schema({
	image: String,
	product: Number
});

var ProductImages = mongoose.model('ProductImage', ProductImageSchema);
module.exports = ProductImages;