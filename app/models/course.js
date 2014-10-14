'use strict';

var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
	local : {
		_id : String;
		courseName : String;
		program_id : Schema.Types.ObjectId;
		questions : [Schema.Types.ObjectId];
	}
});
		
		