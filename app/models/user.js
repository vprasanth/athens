/**
 * Created by prasanthv on 04/11/14.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName : String,
    lastName: String,
    program: String,
    joined: Date,
    last_online: Date,
    _answers: [],
    _questions: [],
    _courses: [],
    email : String,
    password: String,
    auth: Boolean
});

model.exports = mongoose.model('User', UserSchema);