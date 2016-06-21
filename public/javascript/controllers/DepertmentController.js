angular.module('CourseReview')
.controller('DepertmentCtrl',['$scope', 'posts', function($scope, posts){
	
	$scope.depts = posts.depts;

	$scope.addDept = function(){
		if(!$scope.name || $scope.name === '') {return; }

		posts.createDepts({
			name: $scope.name
		});

		$scope.name = '';
	}
}]);