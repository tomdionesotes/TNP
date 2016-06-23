var http = require('http');

var shouldShowUp = process.env.TEST

var server = http.createServer(function (
  req, res){
    res.writeHead(200, {'Content-Type':
    'text/html'});
    res.end('<script type="text/javascript">alert('shouldShowUp')</script>');
  });

var port = Number(process.env.PORT || 3000);

server.listen(port);
