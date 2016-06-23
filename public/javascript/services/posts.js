angular.module('CourseReview')
.factory('posts', ['$http', 'sharedId', 'auth', function($http, sharedId, auth){
	var o = {
		depts: []
	};

	o.getDepts = function(){
		return $http.get('/depts').success(function(data){
			angular.copy(data, o.depts);
		});
	};

	o.createDepts = function(dept){
		return $http.post('/depts', dept, {
    		headers: {Authorization: 'Bearer '+auth.getToken()}
  		}).success(function(data){
			o.depts.push(data);
		})
	};

	o.getCourses = function(id){
		return $http.get('/courses/' + id).then(function(res){
			return res.data;
		});
	};

	o.createCourses = function(id, course){
		return $http.post('/courses/' + id + '/course', course, {
    		headers: {Authorization: 'Bearer '+auth.getToken()}
  		});
	};

	o.getReviews = function(id){
		return $http.get('/courses/' + sharedId.getId() + '/reviews/' + id).then(function(res){
			return res.data;
		});
	};

	o.createReview = function(id, review){
		return $http.post('/courses/' + sharedId.getId() + '/reviews/' + id + '/review', review);
	};

	o.upvoteReviews = function(course, review){
		return $http.put('/courses/'+sharedId.getId()+ '/reviews/'+ course._id+ '/ups/' +review._id+ '/upvote').success(function(data){
			review.upvotes += 1;
		});
	};

	return o;
}]);