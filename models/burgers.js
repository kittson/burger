/*
Here is where you setup a model for how to interface with the database.
*/

var orm = require('../config/orm.js');

var burger = {
	allBurgs: function(cb) {
		orm.selectAll('burgers', function(res){
			cb(res);
		});
	},

	insertBurg: function(newBurgName, cb) {
		orm.insertOne('burgers', newBurgName, function(res){
			cb(res);
		});
	},
	updateBurgs: function(burgId, cb) {
		orm.updateOne('burgers', burgId, function(res){
			cb(res);
		});
	}
};

module.exports = burger;

// cat.delete(condition, function(data){
// 	res.redirect('/cats');
// });
