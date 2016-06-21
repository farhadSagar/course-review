var mongoose = require('mongoose');

var ReviewSchema = mongoose.Schema({
	title: String,
	body: String,
	user: String,
	suggestion: String,
	rating: {type: Number, default: 0},
	taken: String,
	upvotes: {type: Number, default: 0},
	course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course'}
});

// method to upvote review
ReviewSchema.methods.upvote = function(cb){
	this.upvotes += 1;
	this.save(cb);
};

mongoose.model('Review', ReviewSchema);