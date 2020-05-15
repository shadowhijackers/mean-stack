var express = require('express');
var Students = require('../models/students');

var router = express.Router();

router.get('/', function (req, res) {

  var query = {};
  if(req.query.q){
    query = {
      "$or": [{'fistName': new RegExp(req.query.q)}, {'lastName': new RegExp(req.query.q)}, {'email': new RegExp(req.query.q)} ]
    }
  }

  Students.find(query, function (err, students) {
      if(!err){
        res.status(200).send({data: students});
        return
      }
      res.status(200).send({error: err.message})
  });

});

router.get('/:_id', function (req, res) {


  Students.findOne({
    _id: req.params['_id']
  }, function (err, students) {
    if(!err){
      res.status(200).send({data: students});
      return
    }
    res.status(200).send({error: err.message})
  });

});

router.post('/', function (req, res){

  var payload = req.body;
  if(!payload){
    res.status(200).send({error: 'No valid data'})
  }

  Students.create(payload, function (err, result) {
    if(!err){
      res.status(202).send({data:result});
      return
    }
    res.status(200).send({error: err.message})
  })

});

router.put('/:id', function(req, res, next) {
  Students.findOneAndUpdate({_id: req.params.id}, req.body, function (err, student) {
    if (!err) {
      res.status(202).send({data: student});
      return
    }
    res.status(200).send({error: err.message})
  });
});

router.delete('/:id', function (req, res) {
  Students.findByIdAndRemove(req.params.id, req.body, function (err, student) {
    if (!err) {
      res.status(202).send({data: student});
      return
    }
    res.status(200).send({error: err.message})
  });
});

module.exports = router;

