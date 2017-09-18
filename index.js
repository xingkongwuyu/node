var server = require("./server2");
var router = require("./route");

server.start(router.route);