/**
 * Created by prasanthv on 05/11/14.
 */
'use strict';
var Question = require('./questionModel');

module.exports = function(router) {

    router.get('/question', function(req, res){
        res.json({message: "yo"});
    })

};