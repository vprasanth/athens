/**
 * Created by prasanthv on 04/11/14.
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Meta = new Schema({
    votes: Number,
    favs: Number
});

var CreatedDate = new Schema({
    date: {type: Date, default: Date.now}
});

var Answer = new Schema({
    body: String,
    created: [CreatedDate],
    modified: Date,
    user: {firstName: String, lastName: String},
    meta: [Meta]
});

module.exports.Answer = Answer;
module.exports.CreatedDate = CreatedDate;
module.exports.Meta = Meta;
module.exports.CreatedDateModel = mongoose.model('CreatedDate', CreatedDate);
