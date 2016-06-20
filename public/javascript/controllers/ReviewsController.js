angular.module('CourseReview')
.controller('ReviewsCtrl',['$scope', '$stateParams', 'posts', 'sharedId', function($scope, $stateParams, posts, sharedId){

	$scope.deptId = sharedId.getId();
	$scope.reviews = posts.depts[$scope.deptId].course[$stateParams.id];
	
	$scope.addReview = function(){
		if(!$scope.title || $scope.title === ''){ return; }
		$scope.reviews.review.push({
			title: $scope.title,
			body: $scope.body,
			user: 'Anonymous',
			rating: 3,
			suggestion: $scope.suggestion,
			taken: $scope.taken,
			upvotes: 0
		});
		$scope.title = '';
		$scope.body = '';
		$scope.suggestion = '';
		$scope.taken = '';
	}

	$scope.incrementUpvotes = function(post) {
  	post.upvotes += 1;
	};

}]);