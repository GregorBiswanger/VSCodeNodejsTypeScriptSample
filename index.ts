import http = require('http');

http.createServer((request, response) => {
    response.write('Hallo von Node.js!');
    response.end();
}).listen(3000);