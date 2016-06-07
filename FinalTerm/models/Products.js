var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	name: String,
	startingbid: {type: Number, default: 0},
	expriretime: {type: Number, default: 0},
	currentprice: {type: Number, default: 0},
	description: String,
	producttype: Number ,
	productgroup: Number,
	winner: {type: Number, default: 0},
	image: String
});

var Products = mongoose.model('Product', ProductSchema);

module.exports = Products;