angular.module('CourseReview').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('home', {
		url:'/home',
		templateUrl: '/templates/depertments.html',
		controller: 'DepertmentCtrl',
		resolve: {
			deptPromise: ['posts', function(posts){
				return posts.getDepts();
			}]
		}
	})

	.state('courses', {
		url: '/courses/{id}',
		templateUrl: '/templates/courses.html',
		controller: 'CoursesCtrl',
		resolve: {
			dept: ['$stateParams', 'posts', function($stateParams, posts){
				return posts.getCourses($stateParams.id);
			}]
		}
	})

	.state('faculties', {
		url: '/faculties/{id}',
		templateUrl: '/templates/faculties.html',
		controller: 'FacultiesCtrl'
	})

	.state('reviews', {
		url: '/reviews/{id}',
		templateUrl: '/templates/reviews.html',
		controller: 'ReviewsCtrl',
		resolve: {
			course: ['$stateParams', 'posts', function($stateParams, posts){
				return posts.getReviews($stateParams.id);
			}]
		}
	});

	$urlRouterProvider.otherwise('home');
}]);