angular.module('CourseReview')
.controller('ReviewsCtrl',['$scope', '$stateParams', 'posts', 'sharedId', 'course', function($scope, $stateParams, posts, sharedId, course){

	// $scope.deptId = sharedId.getId();
	$scope.reviews = course;

	$scope.addReview = function(){
		if(!$scope.title || $scope.title === ''){ return; }
		posts.createReview(course._id, {
			title: $scope.title,
			body: $scope.body,
			user: 'Anonymous', //Hard coded Anonymous for now, change leter
			rating: $scope.rating,
			suggestion: $scope.suggestion,
			taken: $scope.taken,
			upvotes: 0
		}).success(function(review){
			$scope.reviews.reviews.push(review);
		});
		$scope.title = '';
		$scope.body = '';
		$scope.suggestion = '';
		$scope.taken = '';
		$scope.rating = ''
	}

	$scope.incrementUpvotes = function(review) {
		posts.upvoteReviews(course, review);
	};

}]);