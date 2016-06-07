var mongoose = require('mongoose');

var IntructionSchema = new mongoose.Schema({
	name: String,
	content: String,
	image: String,
});

var Intructions = mongoose.model('Intruction', IntructionSchema);
module.exports = Intructions;