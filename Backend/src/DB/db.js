"use strict";
// backend/src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
// Middleware to parse JSON bodies
app.use(express.json());
// Define a simple route
app.get('/', function (req, res) {
    res.send('Hello, TypeScript backend!');
});
// Start the server
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
