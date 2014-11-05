'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var courseSchema = new Schema({courseName : String,
		program_id : Schema.Types.ObjectId,
		questions : [Schema.Types.ObjectId]
});
		
module.exports = mongoose.model('Course', courseSchema);		