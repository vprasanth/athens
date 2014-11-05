/**
 * Created by prasanthv on 04/11/14.
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    HelperSchemas = require('./helpers');

var QuestionSchema = new Schema({
    title: String,
    desc: String,
    course: String,
    program: String,
    answers: [HelperSchemas.Answer],
    user: {firstName: String, lastName: String},
    created: [HelperSchemas.CreatedDate],
    modified: Date,
    meta: [HelperSchemas.Meta]
});

module.exports = mongoose.model('Question', QuestionSchema);