var http = require('http');

var server = http.createServer(function (
  req, res){
    res.writeHead(200, {'Content-Type':
    'text/html'});
    res.end('<h1>hi there</h1>');
  });

var port = Number(process.env.PORT);

server.listen(port);
