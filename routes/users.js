var express = require('express');
var users = require('../models/user.js');
var router = express.Router();
var dbConnection = new DbConnection('127.0.0.1',27017);

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource from Rohan');
 dbConnection.findAll(function(err,data){
    res.json({title:"All Details",list:data });
});

});

router.get('/:id',function(req,res){
	var userid = req.params.id;
	dbConnection.deletebyId(userid,function(err,res){
		res.render('Data has been deleted');
		//res.json({title:"All Deleted",data:res})
	})
	
})
module.exports = router;
