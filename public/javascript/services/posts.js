angular.module('CourseReview')
.factory('posts', function(){
	var o = {
		depts: [{
			'name': 'Math and CS',
		},
		{
			'name': 'Biology'
		},
		{
			'name': 'Chemistry and Physics'
		}]
	};

	return o;
});