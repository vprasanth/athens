'use strict';

var mongoose = require('mongoose');

var programSchema = mongoose.Schema({
	local : {
		_id : String;
		programName : String;
		courses : [Schema.Types.ObjectId];
	}
});
		
		