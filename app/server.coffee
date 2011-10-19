static = require('node-static')
file = new(static.Server)('./public');
port = 34449

console.log "Server Started on port: " + port

require('http').createServer( (request, response) ->
    request.addListener('end', ->
        file.serve(request, response)
    )
).listen(port);
