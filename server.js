var http = require('http');
var fs = require('fs');
var path = require('path');

const PORT=8080;

http.createServer(function(req,res){
    if(req.url === "/"){
        fs.readFile("./homepage.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });
    }else if(req.url.match("./homepage.css")){
        var cssPath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "text/css"});
        fileStream.pipe(res);
    }else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end("No Page Found")
    }
}).listen(PORT);

/*
fs.readFile('./homepage.html', function (err, html) {
        if (err) throw err;

        http.createServer(function(request, response) {
            response.writeHeader(200, {"Content-Type": "text/html"});
            response.write(html);
            response.end()
        }).listen(PORT)
    });
 */
