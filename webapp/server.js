// the simplest http server listening at PORT 8888
var http = require("http");
var url = require("url");

// custom onRequest function to take request and respond with
// "hello world"
// implementing server as Node.js module
function start(route, handle) {
    function onRequest(request,response){
	var pathname = url.parse(request.url).pathname; // will parse pathname
	// after http://localhost:8888/<pathname>
	console.log("Request for " + pathname + " received");
	
	response.writeHead(200, {"Content-Type":"text/plain"});
	var content = route(handle, pathname);
	response.write(content);
	response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("server listening at http://localhost:8888/");
}
// export function start() as start
exports.start = start;




