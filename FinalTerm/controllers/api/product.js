var Products = require('../../models/Products');

var product = {
	read: function (req, res, next){
		Products.findOne({ 'id': req.params.id }, function (err, data) {
			if (err) return handleError(err);
			res.json(data);
		})
	},
	readType: function(req, res, next) {
		Products.find({'producttype': req.query.type}, function(err, data) {
			if (err) return handleError(err);
			res.json(data);
		})
	},
	create: function(req, res, next){
		var pduct = new Products(req.body);
		pduct.save(function(err){
		if(err)
			console.log(err);
		})
	},
	update: function(req, res, next){
		Products.findOneAndUpdate({'id': req.params.id }, req.body);
	},
	delete: function(req, res, next){
		findOneAndRemove({'id': req.params.id});
	},
	getAll: function(req, res, next){
		Products.find(function(err,data){
			if(err) console.error;
			res.json(data);
		})
	}
}

module.exports = product;