angular.module('CourseReview')
.controller('DepertmentCtrl',['$scope', 'posts', 'auth', function($scope, posts, auth){
	
	$scope.depts = posts.depts;

	$scope.isLoggedIn = auth.isLoggedIn;

	// Toggle Login
	$scope.showLoginMessage = true;
	$scope.toggleLogin = function(){
		$scope.showLoginMessage = $scope.showLoginMessage === false ? true: false;
	};

	$scope.addDept = function(){
		if(!$scope.name || $scope.name === '') {return; }

		posts.createDepts({
			name: $scope.name
		});

		$scope.name = '';
	}
}]);