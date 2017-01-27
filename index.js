"use strict";
var http = require("http");
http.createServer(function (request, response) {
    response.write('Hallo von Node.js!');
    response.end();
}).listen(3000);
//# sourceMappingURL=index.js.map