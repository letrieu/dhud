var Users = require('../../models/Users');

var user = {
	read: function(req, res, next){
		res.json({type: "Read", id: res.params.id});
	},
	create: function(req, res, next){
		res.send(req.body);
	},
	update: function(req, res, next){
		res.json({type: "Update", id: res.params.id, body: req.body});	
	},
	delete: function(req, res, next){
		res.json({type: "Delete", id: res.params.id});
	},
	getAll: function(req, res, next){
		Users.find(function(err,data){
			if(err) console.error;
			res.json(data);
		})
	}
}

module.exports = user;