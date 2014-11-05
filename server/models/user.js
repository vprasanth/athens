/**
 * Created by prasanthv on 04/11/14.
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    HelperSchemas = require('./helpers');

var UserSchema = new Schema({
    firstName : String,
    lastName: String,
    program: String,
    created: [HelperSchemas.CreatedDate],
    last_online: [HelperSchemas.CreatedDate],
    answers: [HelperSchemas.Answer],
    _questions: Array,
    _courses: Array,
    email : String,
    password: String,
    auth: Boolean
});

module.exports = mongoose.model('User', UserSchema);