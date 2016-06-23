var http = require('http');

var shouldshow = process.env.TEST

var server = http.createServer(function (
  req, res){
    res.writeHead(200, {'Content-Type':
    'text/html'});
    res.end('<h1>shouldshow</h1>');
  });

var port = Number(process.env.PORT || 3000);

server.listen(port);
