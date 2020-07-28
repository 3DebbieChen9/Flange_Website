// A BASIC Node Server

const http = require('http');

const server = http.createServer(function(requst, respond){

    respond.setHeader('Content type', 'application/json');
    respond.setHeader('Access-Control-Allow-Origin', "*");
    respond.writeHead(200); // status HTTP 200 / OK

    let dataObj = {"id": 123, "name":"DC"}
    let data = JSON.stringify(dataObj);
    respond.end(data)
});

server.listen(39, function() {
    console.log('Listening on port 39');
});