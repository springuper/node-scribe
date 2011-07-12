var thrift = require('thrift'),
    scribe = require('../lib/gen-nodejs/scribe'),
    ttypes = require('../lib/gen-nodejs/scribe_types');


exports.createServer = function() {
var server = thrift.createServer(scribe, {
  Log: function(entry, callback) {
    console.log("Server  received ", entry);
    server.emit('log', entry);
    callback(0);
  }
});
return server;
};

