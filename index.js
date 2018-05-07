// write your code here
var http = require('http');


console.log("--- Our Simple HTTP Server ---");

http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World");
    response.end();
}).listen(8080);
