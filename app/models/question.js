'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
		//_id : String
		questionDesc : String
		//questionType : String,
		//answers : [Schema.Types.ObjectId],
		//user_id : Schema.Types.ObjectId,
		//postDate : {type: Date, default: Date.now },
		//editDate : {type: Date, default: Date.now },
		//course_id : Schema.Types.ObjectId
		//comments : [Schema.Types.ObjectId]
});
		
module.exports = mongoose.model('Question', questionSchema);