angular.module('CourseReview')
.factory('posts',['$http', function($http){
	var o = {
		depts: []
	};

	o.getDepts = function(){
		return $http.get('/depts').success(function(data){
			angular.copy(data, o.depts);
		});
	};

	o.createDepts = function(dept){
		return $http.post('/depts', dept).success(function(data){
			o.depts.push(data);
		})
	}

	return o;
}]);