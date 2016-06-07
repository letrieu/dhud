var mongoose = require('mongoose');

var ProductGroupSchema = new mongoose.Schema({
	id: String,
	name: String,
});

var ProductGroups = mongoose.model('ProductGroup', ProductGroupSchema);
module.exports = ProductGroups;