var mongoose = require('mongoose');

var DeptSchema = mongoose.Schema({
	name: String,
	courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course'}]
});

mongoose.model('Dept', DeptSchema);