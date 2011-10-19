(function() {
  var file, static;
  static = require('node-static');
  file = new static.Server('./public');
  console.log("Server running at http://localhost:8080/");
  require('http').createServer(function(request, response) {
    return request.addListener('end', function() {
      return file.serve(request, response);
    });
  }).listen(8080);
}).call(this);
