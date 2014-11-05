/**
 * Created by prasanthv on 05/11/14.
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuestionSchema = new Schema({
    title: String,
    desc: String,
    course: String,
    program: String,
    modified: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Question', QuestionSchema);