class BaseController{};

BaseController.send_success_response = function (message,data, res, next) {

    if(data && data.hasOwnProperty('ExceptionMessage')){
        Message = "Source Error : " +data.ExceptionMessage;
        Status = "failure";
        StatusNo = 1;
        MasterData = null;
    }else{  
        if (data) {
            Message = message;
            Status = "success";
            StatusNo = 0;
            MasterData = data;
        } else {
            Message = message;
            Status = "failure";
            StatusNo = 1;
            MasterData = data;
        }
    }
response = {Message: Message, Status: Status, StatusNo: StatusNo, MasterData: MasterData};
    //console.log(response)
    res.send(response);
};




BaseController.send_failure_response = function (message,data, res, next) {
    if(data && data.hasOwnProperty('ExceptionMessage')){
        Message = "Source Error : " +data.ExceptionMessage;
        Status = "failure";
        StatusNo = 1;
        MasterData = data;
    }else{  
         Message = message;
         Status = "failure";
         StatusNo = 1;
         MasterData = data;
    }
response = {Message: Message, Status: Status, StatusNo: StatusNo, MasterData: MasterData};
    //console.log(response)
    res.send(response);
};



BaseController.send_response = function (message,data, res, next) {
    if(data && data.hasOwnProperty('ExceptionMessage')){
        Message = "Source Error : " +data.ExceptionMessage;
        Status = "failure";
        StatusNo = 1;
        MasterData = null;
    }else{  
        if (data) {
            Message = message;
            Status = "success";
            StatusNo = 0;
            MasterData = data;
        } else {
            Message = message;
            Status = "failure";
            StatusNo = 1;
            MasterData = data;
        }
    }
response = {Message: Message, Status: Status, StatusNo: StatusNo, MasterData: MasterData};
    //console.log(response)
    res.send(response);
};

module.exports=BaseController;

