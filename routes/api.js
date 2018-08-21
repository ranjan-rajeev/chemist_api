
var express = require('express');
var router = express.Router();
var con=require('../bin/dbconnection.js');
var User = require('../model/user.js');


router.post('/registerChemist', function(req, res, next) {
  var register = require('../controller/RegisterChemistController');
    register.registerChemist(req,res,next);
});


router.post('/login', function(req, res, next) {
  var register = require('../controller/RegisterChemistController');
    register.login(req,res,next);
});



router.post('/addLead', function(req, res, next) {
  var register = require('../controller/AddLeadController');
    register.addLead(req,res,next);
});

router.post('/getLead', function(req, res, next) {
  var register = require('../controller/AddLeadController');
    register.getLead(req,res,next);
});



module.exports = router;

