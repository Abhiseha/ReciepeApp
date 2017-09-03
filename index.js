var Hapi = require('hapi');
var mysql = require('mysql');

var server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' })

server.route({
    path: '/',
    method: 'GET',
    handler: function (request, reply) {

        return reply('Welcome to reciepe application.Thank you for your visit.')
    }
})

server.start(function(){
    console.log('Reciepe application started')
})

