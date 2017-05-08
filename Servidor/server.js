'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    //res.writeHead(200, { 'Content-Type': 'text/plain' });
    require('child_process').exec('dir');
    //res.end('Hello World\n');
}).listen(port);


