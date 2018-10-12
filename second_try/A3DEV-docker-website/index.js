"use strict";
exports.__esModule = true;
var Hapi = require("hapi");
var argparse_1 = require("argparse");
var parser = new argparse_1.ArgumentParser({
    version: '0.0.1',
    addHelp: true,
    description: 'Add parameters...'
});
parser.addArgument(['-n', '--name'], {
    help: 'Site name',
    defaultValue: 'IMIE docker cours'
});
var args = parser.parseArgs();
console.log(args);
var server = new Hapi.Server();
server.connection({
    host: '0.0.0.0',
    port: 8000
});
server.route({
    method: 'GET',
    path: '/hello/{name}',
    handler: function (request, reply) {
        return reply("Hello " + request.params['name'] + ". Welcome to " + args.name);
    }
});
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        return reply("Welcome to " + args.name);
    }
});
server.start(function (err) {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
