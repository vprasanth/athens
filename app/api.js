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


module.exports = function(app) {
    var Question = require('../app/models/question');

    app.route('/question')
        .get(function(req,res) {
            Question.find(function (err, questions) {
                if (err)
                    console.log(err);
                    res.send(err);

                console.log(questions);
                res.json(questions);
            });
        })
        .post(function(req,res){
            var question = new Question();
            question.questionDesc = req.body.questionDesc;
            question.save(function(err) {
                if (err)
                    console.log(err);
                    res.send(err);
                res.json({message: "question created!"});
            });
        });

    app.route('/questions/:id')
        .get(function(req,res){
            // find question from db and return if it exist else fwd to not found page
        });
};