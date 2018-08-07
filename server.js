var http = require("http");

var PORT = 7000;

function handleRequestGood(request, response) {

    response.end("Your Great!");
}

var server = http.createServer(handleRequestGood);

server.listen(PORT, function() {

    console.log("Server listening on: http://localhost:%s", PORT);
});

var PORT2 = 7500;

function handleRequestBad(request, response) {

    response.end("You Suck!");
}

var server = http.createServer(handleRequestBad);

server.listen(PORT2, function() {

    console.log("Server listening on: http://localhost:%s", PORT2);
});