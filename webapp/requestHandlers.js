// requestHandlers.js
// to actually handle requests

function start(){
    console.log("handler 'start' was called");
    return "Hello start";
}

function upload(){
    console.log("handler 'upload' was called");
    return "Hello upload";
}

exports.start = start;
exports.upload = upload;

