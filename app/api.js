'use strict';

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
            answer._question = req.body._question;
            answer._user = req.body._user;
            answer.save(function(err){
                if (err)
                    res.send(err);

                res.json({message: "answer created"});
            });
            Question.findById(req.body.question, function(err, question) {
                if (err)
                    console.log(err);
                question._answers.push(answer._id);
                console.log(question);
                question.save(function(err) {
                    if (err)
                        res.send(err);
                    console.log("Answer added to question");
                });
            });
         })
         .get(function(req,res) {
            Answer.find().populate('_user')
                .exec(function(err, answers) {
                if (err)
                    res.send(err);

                res.json(answers);
            });
        });
    app.route('/answer/:_id')
      .get(function(req,res){
            // find question from db and return if it exist else fwd to not found page
            Answer.findById(req.params._id).populate('_user')
                .exec(function(err, answer) {
                if (err)
                    res.send(err);
                res.json(answer);

            });
        })
      .put(function(req, res) {
         Answer.findById(req.params._id, function(err, answer) {
               if (err)
                   res.send(err);
         answer.answerDesc = req.body.answerDesc;          
         answer.editDate = Date.now();
         
         answer.save(function(err) {
            if (err)
               res.send(err);
            res.json({message: "Answer updated"});
         });         
       });            
      })
      .delete(function(req, res) {
        Question.findById(req.params._id, function(err, question) {
            if (err)
                  res.send(err);
            question._answers.pull(req.params._id);      
        });
      
        Answer.remove({_id : req.params._id}, function (err) {
               if (err)
                  res.send(err);
               res.json({message: "Answer deleted"});
            });
        });
        
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
            questionTitle = req.bosy.questionTitle;
            question.questionDesc = req.body.questionDesc;
            question.questionType = req.body.questionType;
            question._user = req.body._user;
            question._course = req.body._course;
            question.save(function(err) {
                if (err)
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
        .delete(function(req,res) {
            Question.findById(req.params._id, function(err, question) {
               if (err)
                   res.send(err);
               console.log("question._id");
               Answer.remove({_question : question._id});
            });  
            Question.remove({_id : req.params._id}, function (err) {
               if (err)
                  res.send(err);
               res.json({message: "Question deleted"});
            });
        });
};