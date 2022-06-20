var http = require('http');
var fs = require('fs'); //file system

http.createServer(function(req, res){
    
    

    res.writeHead(200, { 'Content-Type': 'application/json' });
    
    var obj = {
        firstname: 'farid',
        lastname: 'mohd ismail'
    };

    
    res.end(JSON.stringify(obj));

}).listen(1337, '127.0.0.1');



//const so it cant change
//const logger = require('./logger');
//logger.log("Hello world");
//logger.log(logger.endpoint);

