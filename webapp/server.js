// the simplest http server listening at PORT 8888

var http = require("http");

// we pass createServer an anonymous function to take request and respond with
// "hello world"
http.createServer(function(request,response){
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("Hello world");
    response.end();
}).listen(8888);

console.log("server listening at http://localhost:8888/");