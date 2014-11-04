/**
 * Created by prasanthv on 04/11/14.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuestionSchema = new Schema({
    title : String,
    desc: String,
    _course: String,
    program: String,
    answers: [],
    _user: String,
    created: new Date(now),
    modified: Date
});

module.exports(mongoose.model('Question', QuestionSchema));