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

const server = http.createServer((req, res)=>{res.end("Hello!");});

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

