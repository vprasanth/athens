'use strict';

var mongoose = require('mongoose');

var questionSchema = mongoose.Schema({
	local : {
		_id : String;
		questionDesc : String;
		questionType : String;
		user_id : Schema.Types.ObjectId;
		postDate : {type: Date, default: Date.now };
		editDate : {type: Date, default: Date.now };
		course_id : Schema.Types.ObjectId;	
	}
});
		
		