'use strict';

var express = require('express');
var router  = express.Router();

router.route('/questions')
    .get(function(req,res){
        res.json({message: "return all questions"});
    })
    .post(function(req,res){
        var title = req.body.title,
            question = req.body.question,
            category = req.body.category,
            author = req.body.author;

        res.json({message: "question created!"});
    });

router.route('/questions/:id')
    .get(function(req,res){
       // find question from db and return if it exist else fwd to not found page
    });

router.route()