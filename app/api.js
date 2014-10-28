'use strict';
//
//var express = require('express');
//var router  = express.Router();
//
//router.route('/questions')
//    .get(function(req,res){
//        res.json({message: "return all questions"});
//    })
//    .post(function(req,res){
//        var title = req.body.title,
//            question = req.body.question,
//            category = req.body.category,
//            author = req.body.author;
//
//        res.json({message: "question created!"});
//    });
//
//router.route('/questions/:id')
//    .get(function(req,res){
//       // find question from db and return if it exist else fwd to not found page
//    });
//
//router.route();

//@TODO Check that populating answer array works
module.exports = function(app) {
    var Question = require('../app/models/question');
    var Course = require('../app/models/course');
    var Answers = require('../app/models/answer');

    app.route('/question')
        .get(function(req,res) {
            Question.find().populate('_user _course _answers')
                .exec(function(err, questions) {
                if (err)
                    res.send(err);

                res.json(questions);
            });
        })
        .post(function(req,res){
            var question = new Question();
            question.questionDesc = req.body.questionDesc;
            question.questionType = req.body.questionType;
            question._user = req.body.user;
            question._course = req.body.course;
            question.save(function(err) {
                if (err)
                    console.log(err);
                    res.send(err);
                res.json({message: "question created!"});
            });
        });
    app.route('/question/:_id')
        .get(function(req,res){
            // find question from db and return if it exist else fwd to not found page
            Question.findById(req.params._id).populate('_user _course _answers')
                .exec(function(err, question) {
                if (err)
                    res.send(err);
                res.json(question);

            });
        });
};