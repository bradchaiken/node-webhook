var http = require('http');
 
var server = http.createServer(function(req, res) {
    
    if (req.method == 'POST') {

        console.log("[200] " + req.method + " to " + req.url);

        req.on('data', function(chunk) {
            body = JSON.parse(chunk);
            console.log(body);
        });

        req.on('end', function() {
            res.end();
        });
    }
});
 
var port = 10001;
server.listen(port, function() {
    console.log('server listening on port ' + port);
});