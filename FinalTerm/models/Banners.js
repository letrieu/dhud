var mongoose = require('mongoose');

var BannerSchema = new mongoose.Schema({
	link: String,
	image: String,
	description: String
});

var Banners = mongoose.model('Banner', BannerSchema);
module.exports = Banners;