import * as Hapi from 'hapi';
import { ArgumentParser } from 'argparse'

const parser = new ArgumentParser({
    version: '0.0.1',
    addHelp: true,
    description: 'Add parameters...'
});

parser.addArgument(
    [ '-n', '--name' ],
    {
        help: 'Site name',
        defaultValue: 'IMIE docker cours'
    }
);

const args = parser.parseArgs();

console.log(args);

const server = new Hapi.Server();

server.connection({
    host: '0.0.0.0',
    port: 8000
});

server.route({
    method: 'GET',
    path:'/hello/{name}',
    handler: function (request, reply) {
        return reply(`Hello ${request.params['name']}. Welcome to ${args.name}`);
    }
});

server.route({
    method: 'GET',
    path:'/',
    handler: function (request, reply) {

        return reply(`Welcome to ${args.name}`);
    }
});

server.start((err) => {
    if (err) { throw err; }
    console.log('Server running at:', server.info.uri);
});
