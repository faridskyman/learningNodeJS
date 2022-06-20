var http = require('http');
var fs = require('fs'); //file system

http.createServer(function(req, res){
    
    //use === good for js, which convert oneside to other tobe same type. === will not convert
    if(req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
   
        var obj = {
            firstname: 'farid',
            lastname: 'mohd ismail'
        };
       
        res.end(JSON.stringify(obj));
    }
    else if(req.url === '/'){
        var html = fs.createReadStream(__dirname + '/index.htm').pipe(res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Opps!, You made an Invalid request.\n');
    }


}).listen(1337, '127.0.0.1');



//const so it cant change
//const logger = require('./logger');
//logger.log("Hello world");
//logger.log(logger.endpoint);

