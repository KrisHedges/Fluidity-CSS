(function() {
  var file, port, static;
  static = require('node-static');
  file = new static.Server('./public');
  port = process.env.PORT || 3000;
  console.log("Server Started on port: " + port);
  require('http').createServer(function(request, response) {
    return request.addListener('end', function() {
      return file.serve(request, response);
    });
  }).listen(port);
}).call(this);
