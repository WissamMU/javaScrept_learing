// HTTP
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'test.html');
    res.end('<h1>Hello World!</h1>');
});
const port = 8080;

server.listen(
    port,
    () => {
        console.log('Server is running 8080');
    }
)