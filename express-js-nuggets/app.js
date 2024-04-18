const http = require('http')

const server = http.createServer((req, res) => {

    const url = req.url;
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>Home Page</>')
        res.end
    }else if (url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>About Page</>')
        res.end
    }else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>Page Not Found</>')
        res.end
    }
})

server.listen(5000)