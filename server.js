// const express = require('express');
// const cors = require('cors');

// const app = express();
// app.use(cors()); 
// app.use(express.json()); 

// // A simple API route
// app.get('/api/message', (req, res) => {
//     res.json({ message: "Hello from the backend!" });
// });

// // Start the server
// const PORT = 5002;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

// imports node http module from node 
const http = require ('http');  
const PORT = 5002;


const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain");

    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200);
        res.end('Welcome to the Home Page');
    } else if (req.method === 'GET' && req.url === '/about') {
        res.writeHead(200);
        res.end("This is about page");
    } else if (req.method === 'GET' && req.url === "/contact") {
        res.writeHead(200);
        res.end("Contact us at contact@example.com");
    } else {
        res.writeHead(404);
        res.end("404 Page Not Found");
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


