'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var programSchema = Schema({
	local : {
		_id : String,
		programName : String,
		courses : [Schema.Types.ObjectId]
	}
});
		
module.exports = mongoose.model('Program', programSchema);