// the simplest http server listening at PORT 8888
var http = require("http");
var url = require("url");
var querystring = require("querystring");

// custom onRequest function to take request and respond to submit button
// implementing server as Node.js module
function start(route, handle) {
    function onRequest(request,response){
	var postData = "";
	var pathname = url.parse(request.url).pathname; // will parse pathname
	// after http://localhost:8888/<pathname>
	console.log("Request for " + pathname + " received");
	
	request.setEncoding("utf8");
	
	request.addListener("data", function(postDataChunk) {
	    postData += postDataChunk;
	    console.log("Received POST data chunk: " + 
			querystring.parse(postData).text );
	});
	
	request.addListener("end", function() {
	    route(handle, pathname, response, postData);
	});
    }
    http.createServer(onRequest).listen(8888);
    console.log("server listening at http://localhost:8888/");
}
// export function start() as start
exports.start = start;




