/**
 * Created by prasanthv on 04/11/14.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CourseSchema = new Schema({
    name: String,
    courseCode: String,
    program: String,
    _questions: [],
    _answers: []
});

model.exports = mongoose.model('Course', CourseSchema);