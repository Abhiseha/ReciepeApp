var hapi = require('hapi');

var server = new hapi.Server();

server.connection({port : 3000});

server.route({
    method:'Get',
    path: '/',
    handler: function(request,reply){
        reply('it is working');
    }
});


server.start(function(){
    console.log('it  is working fine');
})