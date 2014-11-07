/**
 * Created by prasanthv on 05/11/14.
 */
'use strict';
var Question = require('./questionModel');

module.exports = function(router) {

    router.route('/question')
        .get(function(req, res){
            res.json({message: 'get all questions'});
        })
        .post(function(req, res){
            res.json({message: 'make a question'});
        });

    router.route('/question/:question_id')
        .get(function(req, res){
            res.json({message: 'get question ' + req.param('question_id')});
        })
        .put(function(req, res){
            res.json({message: 'update question ' + req.param('question_id')});
        });

    router.route('/question/course/:course_id')
        .get(function(req, res){
            res.json({message: 'get all questions for course ' + req.param('course_id')});
        });

    router.route('/question/program/:program_id')
        .get(function(req, res){
            res.json({message: 'get all questions for program ' + req.param('program_id')});
        });

    router.route('/question/user/:user_id')
        .get(function(req, res){
            res.json({message: 'get all questions created by user ' + req.param('user_id')});
        });
};