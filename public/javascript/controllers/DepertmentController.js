angular.module('CourseReview')
.controller('DepertmentCtrl',['$scope', 'posts', function($scope, posts){
	
	$scope.depts = posts.depts;

	$scope.addDept = function(){
		if(!$scope.name || $scope.name === '') {return; }

		posts.createDepts({
			name: $scope.name,
			course: [
				{name: 'CS 303', rating_avg: 4},
				{name: 'ENG 102', rating_avg: 5}
			]
		});

		$scope.name = '';
	}
}]);