'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
		questionDesc : String,
		questionType : String,
		_answers : [{type: Schema.Types.ObjectId, ref: "Answer"}],
		_user : {type: Schema.Types.ObjectId, ref: "User"},
		postDate : {type: Date, default: Date.now },
		editDate : {type: Date, default: Date.now },
		_course : {type: Schema.Types.ObjectId, ref: "Course"}
		//comments : [Schema.Types.ObjectId]
});
		
module.exports = mongoose.model('Question', questionSchema);