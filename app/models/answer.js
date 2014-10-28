'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var answerSchema = new Schema({
	local : {
		_id : String,
		answerDesc : String,
		question_id : Schema.Types.ObjectId,
		user_id : Schema.Types.ObjectId,
		postDate : {type: Date, default: Date.now },
		editDate : {type: Date, default: Date.now }
		//comments : [Schema.Types.ObjectId
	}
});
		
module.exports = mongoose.model('Answer', answerSchema);		