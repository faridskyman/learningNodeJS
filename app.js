var http = require('http');
var fs = require('fs'); //file system

http.createServer(function(req, res){
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    //res.writeHead(200, { 'Content-Type': 'text/plain' }); //if send html using this, we see the txt and not render html
    
    var html = fs.readFileSync(__dirname + '/index.htm','utf8');
    //res.end('Hello world\n');

    //use stream
    var html = fs.createReadStream(__dirname + '/index.htm').pipe(res);

    //var message = 'hello everyone...'
    //html = html.replace('{Message}', message);
    //res.end(html);

}).listen(1337, '127.0.0.1');



//const so it cant change
//const logger = require('./logger');
//logger.log("Hello world");
//logger.log(logger.endpoint);

