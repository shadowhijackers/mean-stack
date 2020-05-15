var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
	_id: {type: mongoose.Types.ObjectId, auto: true},
	id: {type: String, unique: true},
	firstName: String,
	lastName: String,
	dob: Object,
	doj: Object,
	email: {type: String, unique: true},
	password: String,
	dept: String,
},{capped: false, timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}, versionKey: false});

module.exports = mongoose.model('Students', StudentSchema, "students");
