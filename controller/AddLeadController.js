var con=require('../bin/dbconnection.js');
var base=require('./BaseApiController');

class LeadData{};
LeadData.addLead = function(req, res, next) {

	console.log(req.body.fullname);
	var add_lead_parameter = [];

	add_lead_parameter.push(req.body.fullname);
	add_lead_parameter.push(req.body.mobileno);
	add_lead_parameter.push(req.body.email);
	add_lead_parameter.push(req.body.city);
	add_lead_parameter.push(req.body.major_illness);
	add_lead_parameter.push(req.body.chemistid);

	con.execute_proc('call sp_addLead(?,?,?,?,?,?)',add_lead_parameter,function(data) {
    console.log(data);

	if(data[0][0].response == 1){
		base.send_response("Lead Added successfully", data[0][0],res);
		console.log("end store procedure");
	}else if(data[0][0].response == 3){
		base.send_response("Mobile already exhist!!",null,res);
	}
	else{
		base.send_response("Failure",null,res);	
		console.log("end store procedure");			
	}
});
};

LeadData.getLead = function(req, res, next) {

	var get_lead_parameter = [];


	get_lead_parameter.push(req.body.chemistid);

	con.execute_proc('call sp_getChemistLead(?)',get_lead_parameter,function(data) {
    console.log(data);

	if(data[0][0].response == 3){
		base.send_response("Lead Not exist!!",null,res);
	}
	else{
		base.send_response("Lead list", data[0],res);			
	}
});
};



module.exports=LeadData;