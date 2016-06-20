angular.module('CourseReview')
.controller('DepertmentCtrl',['$scope', 'posts', function($scope, posts){
	
	$scope.depts = posts.depts;

	$scope.addDept = function(){
		if(!$scope.name || $scope.name === '') {return; }

		$scope.depts.push({
			name: $scope.name,
			course: [
				{name: 'CS 303', rating: 4},
				{name: 'ENG 102', rating: 5}
			]
		});

		$scope.name = '';
	}
}]);