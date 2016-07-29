/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var burgers = require('../models/burgers.js');

router.get('/', function(req,res) {
	res.send("howdy");
	//res.redirect('/burgers')
});

router.get('/burgers', function(req,res) {
	burgers.allBurgs(function(data){
		var hbsObject = {burgers : data}
		console.log(hbsObject)
		res.render('index', hbsObject);
	});
});

router.post('/burgers', function(req,res) {
	burgers.insertBurg(req.body.newburgername, function(data){
		res.redirect('/burgers')
	});
});

router.get('/burgers/update/:id', function(req,res) {
	var eatedId = req.params.id;

	console.log('eatedId', eatedId);

	burgers.updateBurgs( eatedId, function(data){
		res.redirect('/burgers');
	});
});

module.exports = router;
