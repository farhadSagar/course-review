var mongoose = require('mongoose');

var CourseSchema = mongoose.Schema({
	name: String,
	rating_avg: {type: Number, default: 0},
	depertment: { type: mongoose.Schema.Types.ObjectId, ref: 'Dept'},
	reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review'}]
});

mongoose.model('Course', CourseSchema);