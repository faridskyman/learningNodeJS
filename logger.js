//a module to do logging message in the cloud, 

var url='http://mylogger.io/log'

function log(msg){
    //send mesage
    console.log(msg)
    
}

//this exports the entire object
module.exports.log = log;

module.exports.endpoint = url;
