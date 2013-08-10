// requestHandlers.js
// to actually handle requests
var exec = require("child_process").exec;

function start(response){
    console.log("handler 'start' was called");

    exec("find /home/sachin/github -type f -iname '*.py'",
	 {timeout: 1000, maxBuffer: 20000*24 }, 
	 function(error, stdout, stderr){
	response.writeHead(200, {"Content-Type":"text/plain"});
	response.write(stdout);
	response.end();
    });
}

function upload(response){
    console.log("handler 'upload' was called");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Upload");
    response.end();
}

exports.start = start;
exports.upload = upload;

