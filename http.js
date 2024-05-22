// Description: The http module in Node.js is essential for creating web servers and handling HTTP requests and responses.
// It's used to build backend services and APIs that serve data to front-end applications.

const http = require('http');
// Creating an HTTP server
const server = http.createServer((req, res) => {
    // Set the response header content type
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // Write a response to the client
    res.write('Hello, World!');
    // End the response
    res.end();
    // Log the request URL
    console.log(`Received request for: ${req.url}`);
});

// Server listens on port 3000
server.listen(3001, () => {
    console.log('Server is running on http://localhost:3000');
});