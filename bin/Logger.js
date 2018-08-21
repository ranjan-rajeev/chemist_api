var winston = require('winston');
const { createLogger, format,transports } = winston;
const { combine, timestamp, label, prettyPrint } = format;
// Enable exception handling when you create your logger.
const logger = winston.createLogger({
   format: combine(
    timestamp(),
    prettyPrint()
  ),
  transports: [
    new transports.File({ filename: './log/error.log',json: true ,timestamp:true,maxFiles: 10, maxsize: 1000000,tailable: true}) 
  ],
  exceptionHandlers: [
    new transports.File({ filename: './log/exceptions.log',json: true ,timestamp:true,maxFiles: 10, maxsize: 1000000,tailable: true })
  ],
  uncaughtException :[
       new transports.File({ filename: './log/combined.log',json: true ,timestamp:true,maxFiles: 10, maxsize: 1000000,tailable: true})
  ]
});

module.exports=logger;