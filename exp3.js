const http = require('http');

const PORT = 3006;

const server = http.createServer((req, res) => {
    console.log(`Request received: ${req.method} ${req.url}`);

    res.statusCode = 200;//set the status code to 200 (OK) and headers
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('X-Powered-By', 'Node.js');

    res.end('Hello World');
});

server.listen(PORT, () => {
    console.log(`SERVER RUNNING AT http://localhost:${PORT}`);
});