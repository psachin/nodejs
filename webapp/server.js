// the simplest http server listening at PORT 8888

var http = require("http");

// custom onRequest function to take request and respond with
// "hello world"
function onRequest(request,response){
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("Hello world");
    response.end();
}

http.createServer(onRequest).listen(8888);

console.log("server listening at http://localhost:8888/");