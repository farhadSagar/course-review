angular.module('CourseReview')
.controller('CoursesCtrl',['$scope', '$stateParams', 'posts', 'sharedId', function($scope, $stateParams, posts, sharedId){
	
	$scope.courses = posts.depts[$stateParams.id];

	$scope.deptId = sharedId.setId($stateParams.id);

	$scope.addCourse = function(){
		if(!$scope.name || $scope.name === ''){ return; }
		$scope.courses.course.push({
			name: $scope.name,
			rating: 3,
			review: [
				{title: 'Best Course Ever', body: 'Great Course, faculty was very good', suggestion: 'Have more quizes', taken: 'Spring 2016', upvotes: 2, rating: 4}
			]
		});
		$scope.name = '';
	}
}]);