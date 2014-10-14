'use strict';

var mongoose = require('mongoose');

var answerSchema = mongoose.Schema({
	local : {
		_id : String;
		answerDesc : String;
		question_id : Schema.Types.ObjectId;
		user_id : Schema.Types.ObjectId;
		postDate : {type: Date, default: Date.now };
		editDate : {type: Date, default: Date.now };
	}
});
		
		