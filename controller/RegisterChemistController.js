var con=require('../bin/dbconnection.js');
var base=require('./BaseApiController');

class ChemistData{};
ChemistData.registerChemist = function(req, res, next) {

	console.log(req.body.fullname);
	var register_parameter = [];
	register_parameter.push(req.body.fullname);
	register_parameter.push(req.body.businessname);
	register_parameter.push(req.body.email);
	register_parameter.push(req.body.mobileno);
	register_parameter.push(req.body.Address);
	register_parameter.push(req.body.city);
	register_parameter.push(req.body.state);
	register_parameter.push(req.body.pincode);
	register_parameter.push(req.body.chaincodeid);



	if(req.body.fullname && req.body.mobileno  ){
		
	con.execute_proc('call sp_registerchemist(?,?,?,?,?,?,?,?,?)',
		register_parameter,function(data) {
    console.log(data);

	if(data[0][0].response == 1){
		base.send_response("Chemist Registered successfully", data[0][0],res);
		console.log("end store procedure");
	}
	else if(data[0][0].response == 3){
		base.send_response("Mobile already exhist!!",null,res);
	}
	else{
		base.send_response("Failure",null,res);				
	}
	});
 }else{

 	base.send_response("Missing required parameters",null,res);	
 }
};




ChemistData.login = function(req, res, next) {

	console.log(req.body.fullname);
	var login_parameter = [];
	login_parameter.push(req.body.mobileno);
	login_parameter.push(req.body.password);
	
	if(  req.body.mobileno && req.body.password  ){
		
	con.execute_proc('call sp_login(?,?)',
		login_parameter,function(data) {
    console.log(data);

	if(data[0][0].response == 2){
		base.send_response("Incorrect password", null,res);
		console.log("end store procedure");
	}
	else if(data[0][0].response == 3){
		base.send_response("Chemist not exist!!",null,res);
	}
	else{
		base.send_response("Login successfully",data[0],res);				
	}
	});
 }else{

 	base.send_response("Missing required parameters",null,res);	
 }
};





module.exports=ChemistData;