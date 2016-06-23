angular.module('CourseReview')
.controller('ReviewsCtrl',['$scope', '$stateParams', 'posts', 'sharedId', 'course', function($scope, $stateParams, posts, sharedId, course){

	// $scope.deptId = sharedId.getId();
	$scope.reviews = course;
	$scope.likedReviews = [];

	$scope.formValidation = false;

	$scope.addReview = function(){
		if(!$scope.title || $scope.title === '' || !$scope.body || $scope.body==='' || !$scope.suggestion || $scope.suggestion==='' || !$scope.taken || $scope.taken === '' || !$scope.rating || $scope.rating===''){
			$scope.formValidation = true;
			return; 
		}
		posts.createReview(course._id, {
			title: $scope.title,
			body: $scope.body,
			user: 'Anonymous', //Hard coded Anonymous for now, change leter
			rating: $scope.rating,
			suggestion: $scope.suggestion,
			taken: $scope.taken,
			upvotes: 0
		}).success(function(review){
			$scope.formValidation = false;
			$scope.reviews.reviews.push(review);
		});
		$scope.title = '';
		$scope.body = '';
		$scope.suggestion = '';
		$scope.taken = '';
		$scope.rating = '';
	}

	$scope.incrementUpvotes = function(review) {
		$scope.likedReviews.push(review);
		posts.upvoteReviews(course, review);
	};

	// Disable like button for the perticular review
	$scope.isDisabled = function(review){
		return $scope.likedReviews.indexOf(review) !== -1;
	};

}]);