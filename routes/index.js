var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Mongo Models
var Dept = mongoose.model('Dept');
var Course = mongoose.model('Course');

// Route for Getting all Depertments (Home page)
router.get('/depts', function(req, res, next){
	Dept.find(function(err, depts){
		if(err){ return next(err); }

		res.json(depts);
	})
});

// Route for posting new Depertment
router.post('/depts', function(req, res, next){
	var dept = new Dept(req.body);

	dept.save(function(err, dept){
		if(err) {return next(err);}

		res.json(dept);
	})
})

module.exports = router;
