var http = require('http');
const module1 = require('./myFunction.js');
 
function onRequest(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write(module1.string);
    module1.myFunction();
    response.end()
   
}

http.createServer(onRequest).listen(8000)