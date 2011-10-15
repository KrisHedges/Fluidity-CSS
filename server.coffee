static = require('node-static')
file = new(static.Server)('.');

console.log("Server running at http://localhost:8080/")

require('http').createServer( (request, response) ->
    request.addListener('end', ->
        file.serve(request, response)
    )
).listen(8080);
