/**
 * Created by prasanthv on 04/11/14.
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    HelperSchemas = require('./helpers');

var CourseSchema = new Schema({
    name: String,
    created : HelperSchemas.CreatedDate,
    modified: Date,
    courseCode: String,
    program: String,
    _questions: [ObjectId],
    questionCount: Number
});

model.exports = mongoose.model('Course', CourseSchema);