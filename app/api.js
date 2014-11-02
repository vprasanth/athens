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

//@TODO Fix populating answer array depth
module.exports = function(app) {
    var Question = require('../app/models/question');
    var Course = require('../app/models/course');
    var Answer = require('../app/models/answer');

    app.route('/answer')
        .post(function(req, res){
            var answer = new Answer();
            console.log(req.body);
            answer.answerDesc = req.body.answerDesc;
            answer._question = req.body.question;
            answer._user = req.body.user;
            answer.save(function(err){
                if (err)
                    res.send(err);

                res.json({message: "answer created"});
            });
        });

    app.route('/question')
        .get(function(req,res) {
            Question.find().populate('_user _course _answers:answer')
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
                    res.send(err);
                res.json({message: "question created!"});
            });
        });
    app.route('/question/:_id')
        .get(function(req,res){
            // find question from db and return if it exist else fwd to not found page
            Question.findById(req.params._id).populate('_user _course _answers:answer')
                .exec(function(err, question) {
                if (err)
                    res.send(err);
                res.json(question);

            });
        })
        .put(function(req,res){
           Question.findById(req.params._id, function(err, question) {
               if (err)
                   res.send(err);

               question.questionDesc = req.body.questionDesc;
               question.questionType = req.body.questionType;
               question.editDate = Date.now();

               question.save(function(err) {
                   if (err)
                        res.send(err);
                   res.json({message: "Question updated"});
               });
           });
        })
        .patch(function(req, res) { //temp rest query
            Question.findById(req.params._id, function(err, question) {
                if (err)
                    console.log(err);
                //console.log(question);
                var answer = new Answer();
                Answer.findById(req.body._answer, function(err, answer) {
                    if (err)
                        console.log(err);
                    console.log(answer);
                });

                question._answers.push(answer._id);
                console.log(question);
                question.save(function(err) {
                    if (err)
                        res.send(err);
                    res.json({message: "Answer added"});
                });
            });
        });

};