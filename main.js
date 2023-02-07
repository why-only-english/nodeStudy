const http = require("http");

let members = ['moon', 'jung', 'kim', 'park'];

let server = http.createServer(function (request, response) {
    
    if(request.url === '/') {
        response.end('<h1>Welcome!</h1>');
    } else if(request.url === '/members') {
        response.end('<h1>' + members + '</h1>');
    } else {
        response.end('<h1>404</h1>');
    }
    
});

server.listen(3000);