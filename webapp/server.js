// the simplest http server listening at PORT 8888

var http = require("http");
var server = http.createServer();
server.listen(8888);

console.log("server listening at http://localhost:8888/");