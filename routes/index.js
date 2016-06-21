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
var Review = mongoose.model('Review');

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
	});
});

// Route for loading a depertment object
router.param('dept', function(req, res, next, id){
	var query = Dept.findById(id);

	query.exec(function(err, dept){
		if(err) { return next(err); }
		if(!dept) { return next(new Error('Cannot find Courses')); }

		req.dept = dept;
		return next();
	});
});

// Route for getting courses from depertment
router.get('/courses/:dept', function(req, res, next){
	req.dept.populate('courses', function(err, dept){
		if(err) { return next(err); }
		
		res.json(dept);
	});
	
});

// Route for posting a courses
router.post('/courses/:dept/course', function(req, res, next){
	var course = new Course(req.body);
	course.dept = req.dept;

	course.save(function(err, course){
		if(err) { return next(err); }

		req.dept.courses.push(course);
		req.dept.save(function(err, dept){
			if(err) { return next(err); }

			res.json(course);
		});
	});
});

// Route for loading a Course object
router.param('course', function(req, res, next, id){
	var query = Course.findById(id);

	query.exec(function(err, course){
		if(err) { return next(err); }
		if(!course) { return next(new Error('Cannot find Reviews')); }

		req.course = course;
		return next();
	});
});

// Route for getting reviews
router.get('/courses/:dept/reviews/:course', function(req, res, next){
	req.course.populate('reviews', function(err, course){
		if(err) { return next(err); }

		res.json(course);
	})
});

// Route for posting a review
router.post('/courses/:dept/reviews/:course/review', function(req, res, next){
	var review = new Review(req.body);
	// review.course = req.course;

	review.save(function(err, review){
		if(err) {return next(err); }

		req.course.reviews.push(review);
		req.course.save(function(err, course){
			if(err) { return next(err); }

			res.json(review);
		});
	});
});

// Route for loading a Review object
router.param('review', function(req, res, next, id){
	var query = Review.findById(id);

	query.exec(function(err, review){
		if(err) { return next(err); }
		if(!review) { return next(new Error('Cannot find Review')); }

		req.review = review;
		return next();
	});
});

// Route for Upvoting a review
router.put('/courses/:dept/reviews/:course/ups/:review/upvote', function(req, res, next){
	req.review.upvote(function(err, review){
		if(err) { return next(err); }

		res.json(review);
	});
});

module.exports = router;
