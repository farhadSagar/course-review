angular.module('CourseReview')
.service('sharedId', function(){
	var sId = 0;

	return{
		getId: function(){
			return sId;
		},
		setId: function(value){
			sId = value;
		}
	}
});
/*-- For getting the Course Id from URL --*/