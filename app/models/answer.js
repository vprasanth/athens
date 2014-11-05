'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var answerSchema = new Schema({
		answerDesc : String,
		_question : {type: Schema.Types.ObjectId, ref: 'Question'},
		_user : {type: Schema.Types.ObjectId, ref: "User"},
		postDate : {type: Date, default: Date.now },
		editDate : {type: Date, default: Date.now }
		//comments : [Schema.Types.ObjectId
});
		
module.exports = mongoose.model('Answer', answerSchema);		