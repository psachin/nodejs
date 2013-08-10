// router.js 
// to handle pathname requests
var requestHandlers = require("./requestHandlers");

function route(handle, pathname){
    console.log("About to route request for " + pathname);
    if (typeof handle[pathname] === 'function'){
	return handle[pathname]();
    }else{
	console.log("No request handler found for " + pathname);
	return "404 Not found";
    }
}

exports.route = route;

