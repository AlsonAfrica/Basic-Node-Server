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


// In-memory array to store the posted data temporarily
const http = require('http');
const PORT = 5002;
let storedData = [];

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain");

    // Wrap the entire server logic in a try-catch for unexpected server errors
    try {
        if (req.method === 'GET' && req.url === '/') {
            res.writeHead(200);
            res.end('Welcome to the Home Page');
        
        } else if (req.method === 'GET' && req.url === '/about') {
            res.writeHead(200);
            res.end("This is the about page");
        
        } else if (req.method === 'GET' && req.url === "/contact") {
            res.writeHead(200);
            res.end("Contact us at contact@example.com");

        // Handle POST request
        } else if (req.method === 'POST' && req.url === '/submit') {
            let body = '';

            // Collect incoming data
            req.on('data', chunk => {
                body += chunk.toString();
            });

            // When all data is received
            req.on('end', () => {
                console.log("Data received:", body);

                // Try to parse and store data safely
                try {
                    const parsedData = JSON.parse(body);
                    storedData.push(parsedData); // Add to the in-memory array

                    // Respond with a success message
                    res.writeHead(200, { "Content-Type": "application/json" });
                    res.end(`Data stored successfully: ${JSON.stringify(parsedData)}`);
                } catch (error) {
                    // Handle JSON parse error
                    res.writeHead(400, { "Content-Type": "text/plain" });
                    res.end("Invalid JSON data");
                }
            });

        // Handle GET request to fetch stored data
        } else if (req.method === 'GET' && req.url === '/data') {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(storedData)); // Return all stored data

        } else {
            // Handle 404 errors for unsupported routes
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("404 Page Not Found");
        }

    } catch (error) {
        // Handle any uncaught errors
        console.error("Server error: ", error);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
    }
});

// Listen on the specified port
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



