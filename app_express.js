var express = require('express');
var app = express();

//env var
var port = process.env.PORT || 3000

app.use('/assets', express.static(__dirname + '/public'));


//using ejs template engine
app.set('view engine', 'ejs');

//this is considered as a middleware.
app.use('/', function(req, res, next){
    console.log('request. url: ' + req.url);
    next(); // run the next middleware.
});

app.get('/', function(req, res){
    /*res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet />' + 
            '</head><body>Hello World from express, i dont need to set content type.</body></html>');*/
    res.render('index');
});

app.get('/person/:action/:id', function(req, res){
    res.send('<html><body>Hello Querystring, you pass a param: ' 
    + req.params.id +  
    '<br/> Page param:' + req.params.action + 
    '.</body></html>');
});


app.get('/api', function (req, res) {
   var obj = {name: 'using express', type:'its a tool'}; 
   res.json(obj);
});



app.listen(port);
