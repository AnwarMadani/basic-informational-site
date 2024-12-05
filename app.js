const url = require('url');
const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
    const q = url.parse(req.url, true);
    console.log(q);
    let htmlFileName;
    if(q.pathname === '/'){
        htmlFileName = 'index.html'
    } else if(
        q.pathname === '/about'
    ){
        htmlFileName = 'about.html'
    } else if ( q.pathname === '/contact-me'){
        htmlFileName = 'contact.html'
    } else {
        htmlFileName = '404.html'
    }
    
    fs.readFile(htmlFileName, function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);

