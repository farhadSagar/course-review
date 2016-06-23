angular.module('CourseReview')
.controller('CoursesCtrl',['$scope', '$stateParams', 'posts', 'sharedId', 'dept', 'auth', function($scope, $stateParams, posts, sharedId, dept, auth){
	
	$scope.courses = dept;

	$scope.isLoggedIn = auth.isLoggedIn;

	// Toggle Login
	$scope.showLoginMessage = true;
	$scope.toggleLogin = function(){
		$scope.showLoginMessage = $scope.showLoginMessage === false ? true: false;
	};

	$scope.deptId = sharedId.setId($stateParams.id);

	$scope.addCourse = function(){
		if(!$scope.name || $scope.name === ''){ return; }
		posts.createCourses(dept._id, {
			name: $scope.name,
			rating_avg: 3 //Hard coded rating for now, CHANGE LATER!!!!
		}).success(function(course){
			$scope.courses.courses.push(course);
		});
		$scope.name = '';
	}
}]);